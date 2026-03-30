#!/usr/bin/env python3
"""씨월드고속훼리 10월 예약 오픈 모니터링"""

import json
import logging
import os
import sys
from datetime import datetime
from logging.handlers import RotatingFileHandler

from scrapers import ReservationChecker, NoticeChecker, ScheduleChecker
from state import load_state, save_state
from notifier import notify

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOG_DIR = os.path.join(BASE_DIR, "logs")
CONFIG_FILE = os.path.join(BASE_DIR, "config.json")


def setup_logging():
    os.makedirs(LOG_DIR, exist_ok=True)
    log_file = os.path.join(LOG_DIR, "monitor.log")

    handler = RotatingFileHandler(log_file, maxBytes=5 * 1024 * 1024, backupCount=3, encoding="utf-8")
    handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s"))

    root = logging.getLogger()
    root.setLevel(logging.DEBUG)
    root.addHandler(handler)

    # 콘솔 출력 (터미널 실행 시)
    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    console.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(message)s"))
    root.addHandler(console)


def load_config() -> dict:
    if not os.path.exists(CONFIG_FILE):
        print(f"설정 파일이 없습니다. config.example.json을 복사하여 {CONFIG_FILE}을 생성하세요.")
        sys.exit(1)

    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        config = json.load(f)

    # 환경변수 오버라이드
    if os.environ.get("DISCORD_WEBHOOK_URL"):
        config["discord_webhook_url"] = os.environ["DISCORD_WEBHOOK_URL"]

    return config


def get_source() -> str:
    return "github" if os.environ.get("GITHUB_ACTIONS") else "local"


def check_reservation(config: dict, state: dict, source: str) -> dict:
    logger = logging.getLogger("reservation")
    url = config["urls"]["reservation"]
    checker = ReservationChecker(url)

    result = checker.check(state)
    if result is None:
        return state

    # 상태 업데이트
    state["reservation_end_date"] = result["end_date"]

    if result["is_october_or_later"]:
        notify(
            config,
            "🎉 10월 예약 오픈!",
            f"예약 가능 기간이 **~{result['end_date']}**로 변경되었습니다!\n"
            f"즉시 예약하세요: {url}",
            urgent=True,
            source=source,
        )
        state["last_alert_ts"] = datetime.now().isoformat()
        state["alert_source"] = source
    elif result["changed"]:
        notify(
            config,
            "예약 기간 변경 감지",
            f"예약 가능 기간: ~{result['end_date']}\n확인: {url}",
            urgent=False,
            source=source,
        )
        state["last_alert_ts"] = datetime.now().isoformat()
        state["alert_source"] = source

    state["consecutive_errors"]["reservation"] = 0
    return state


def check_notice(config: dict, state: dict, source: str) -> dict:
    logger = logging.getLogger("notice")
    url = config["urls"]["notice"]
    keywords = config.get("keywords", [])
    checker = NoticeChecker(url, keywords=keywords)

    result = checker.check(state)
    if result is None:
        return state

    state["last_wr_id"] = result["latest_wr_id"]

    if result["keyword_matches"]:
        posts_text = "\n".join(
            f"- [{p['title']}] (키워드: {', '.join(p['keywords'])})"
            for p in result["keyword_matches"]
        )
        notify(
            config,
            "📢 관련 공지사항 등록!",
            f"키워드 매칭 게시글:\n{posts_text}\n확인: {url}",
            urgent=True,
            source=source,
        )
        state["last_alert_ts"] = datetime.now().isoformat()
        state["alert_source"] = source
    elif result["has_new"]:
        posts_text = "\n".join(f"- {p['title']}" for p in result["new_posts"][:5])
        notify(
            config,
            "새 공지사항",
            f"새 게시글 {len(result['new_posts'])}건:\n{posts_text}\n확인: {url}",
            urgent=False,
            source=source,
        )

    state["consecutive_errors"]["notice"] = 0
    return state


def check_schedule(config: dict, state: dict, source: str) -> dict:
    logger = logging.getLogger("schedule")
    url = config["urls"]["schedule"]
    checker = ScheduleChecker(url)

    result = checker.check(state)
    if result is None:
        return state

    state["schedule_hash"] = result["content_hash"]

    if result["changed"]:
        notify(
            config,
            "운항스케줄 변경 감지",
            f"스케줄 페이지가 변경되었습니다.\n미리보기: {result['content_preview'][:100]}...\n확인: {url}",
            urgent=False,
            source=source,
        )
        state["last_alert_ts"] = datetime.now().isoformat()
        state["alert_source"] = source

    state["consecutive_errors"]["schedule"] = 0
    return state


def main():
    setup_logging()
    logger = logging.getLogger("main")
    logger.info("=== 모니터링 시작 ===")

    config = load_config()
    state = load_state()
    source = get_source()
    error_threshold = config.get("error_alert_threshold", 5)

    checkers = [
        ("reservation", check_reservation),
        ("notice", check_notice),
        ("schedule", check_schedule),
    ]

    for name, checker_fn in checkers:
        try:
            state = checker_fn(config, state, source)
        except Exception as e:
            logger.error(f"{name} 체커 실패: {e}", exc_info=True)
            errors = state["consecutive_errors"]
            errors[name] = errors.get(name, 0) + 1
            if errors[name] == error_threshold:
                notify(
                    config,
                    f"⚠️ {name} 체커 연속 실패",
                    f"{name} 체커가 {error_threshold}회 연속 실패했습니다.\n에러: {e}",
                    source=source,
                )

    save_state(state)
    logger.info("=== 모니터링 완료 ===")


if __name__ == "__main__":
    main()
