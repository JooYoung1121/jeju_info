import hashlib
import logging
import re
from bs4 import BeautifulSoup
from .base import BaseScraper

logger = logging.getLogger(__name__)


class QueenMaryChecker(BaseScraper):
    """퀸메리 프리런칭 페이지 변경 감지"""

    def check(self, prev_state: dict) -> dict | None:
        html = self.fetch()
        soup = BeautifulSoup(html, "html.parser")

        # 메인 콘텐츠 추출
        content = soup.select_one("#wrap") or soup.select_one("main") or soup.body
        if content is None:
            logger.warning("퀸메리 페이지에서 콘텐츠를 찾을 수 없음")
            return None

        for tag in content.find_all(["script", "style", "noscript"]):
            tag.decompose()

        text = content.get_text(separator="\n", strip=True)
        text = re.sub(r"\s+", " ", text).strip()

        content_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
        prev_hash = prev_state.get("queenmary_hash")

        # 주요 키워드 감지
        keywords_found = []
        watch_keywords = ["예약", "오픈", "운항", "취항", "출항", "요금", "객실", "펫", "반려동물", "스케줄"]
        for kw in watch_keywords:
            if kw in text:
                keywords_found.append(kw)

        result = {
            "content_hash": content_hash,
            "changed": prev_hash is not None and content_hash != prev_hash,
            "is_new": prev_hash is None,
            "content_preview": text[:300],
            "keywords_found": keywords_found,
        }

        if result["changed"]:
            logger.info(f"퀸메리 페이지 변경 감지 (키워드: {keywords_found})")
        else:
            logger.debug("퀸메리 페이지 변동 없음")

        return result
