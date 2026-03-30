import json
import os
import logging

logger = logging.getLogger(__name__)

DEFAULT_STATE = {
    "reservation_end_date": None,
    "last_wr_id": 0,
    "schedule_hash": None,
    "consecutive_errors": {},
    "last_alert_ts": None,
    "alert_source": None,
}

STATE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
STATE_FILE = os.path.join(STATE_DIR, "state.json")


def load_state() -> dict:
    if not os.path.exists(STATE_FILE):
        logger.info("상태 파일 없음, 초기 상태 사용")
        return DEFAULT_STATE.copy()
    try:
        with open(STATE_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        # 누락된 키 채우기
        for key, val in DEFAULT_STATE.items():
            data.setdefault(key, val)
        return data
    except (json.JSONDecodeError, IOError) as e:
        logger.error(f"상태 파일 로드 실패: {e}")
        return DEFAULT_STATE.copy()


def save_state(state: dict) -> None:
    os.makedirs(STATE_DIR, exist_ok=True)
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)
    logger.debug("상태 저장 완료")
