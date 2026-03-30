import hashlib
import logging
import re
from bs4 import BeautifulSoup
from .base import BaseScraper

logger = logging.getLogger(__name__)


class ScheduleChecker(BaseScraper):
    def check(self, prev_state: dict) -> dict | None:
        html = self.fetch()
        soup = BeautifulSoup(html, "html.parser")

        # 메인 콘텐츠 영역 추출
        content = soup.select_one("#bo_v_con") or soup.select_one(".cont_area") or soup.body
        if content is None:
            logger.warning("스케줄 페이지에서 콘텐츠를 찾을 수 없음")
            return None

        # 동적 요소(스크립트, 스타일, 주석) 제거
        for tag in content.find_all(["script", "style", "noscript"]):
            tag.decompose()

        text = content.get_text(separator="\n", strip=True)
        # 공백 정규화
        text = re.sub(r"\s+", " ", text).strip()

        content_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
        prev_hash = prev_state.get("schedule_hash")

        result = {
            "content_hash": content_hash,
            "changed": prev_hash is not None and content_hash != prev_hash,
            "content_preview": text[:200],
        }

        if result["changed"]:
            logger.info("운항스케줄 페이지 변경 감지")
        else:
            logger.debug("운항스케줄 변동 없음")

        return result
