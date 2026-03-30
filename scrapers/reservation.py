import re
import logging
from .base import BaseScraper

logger = logging.getLogger(__name__)

# "현재 ~ 9월 30일" 패턴 매칭
DATE_PATTERN = re.compile(r"현재\s*~\s*(\d{1,2}월\s*\d{1,2}일)")
# 월 숫자 추출
MONTH_PATTERN = re.compile(r"(\d{1,2})월")


class ReservationChecker(BaseScraper):
    def check(self, prev_state: dict) -> dict | None:
        html = self.fetch()
        match = DATE_PATTERN.search(html)

        if not match:
            logger.warning("예약 페이지에서 날짜 패턴을 찾을 수 없음")
            return None

        end_date = match.group(1).strip()
        prev_end_date = prev_state.get("reservation_end_date")

        month_match = MONTH_PATTERN.search(end_date)
        month = int(month_match.group(1)) if month_match else 0

        result = {
            "end_date": end_date,
            "month": month,
            "changed": prev_end_date is not None and end_date != prev_end_date,
            "is_october_or_later": month >= 10,
        }

        if result["changed"]:
            logger.info(f"예약 가능 기간 변경 감지: {prev_end_date} → {end_date}")
        else:
            logger.debug(f"예약 가능 기간 변동 없음: ~{end_date}")

        return result
