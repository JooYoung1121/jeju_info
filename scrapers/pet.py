import hashlib
import logging
import re
from bs4 import BeautifulSoup
from .base import BaseScraper

logger = logging.getLogger(__name__)


class PetPageChecker(BaseScraper):
    """반려동물 이용 안내 페이지 변경 감지"""

    def check(self, prev_state: dict) -> dict | None:
        html = self.fetch()
        soup = BeautifulSoup(html, "html.parser")

        content = soup.select_one("#bo_v_con") or soup.select_one(".cont_area") or soup.body
        if content is None:
            logger.warning("반려동물 페이지에서 콘텐츠를 찾을 수 없음")
            return None

        for tag in content.find_all(["script", "style", "noscript"]):
            tag.decompose()

        text = content.get_text(separator="\n", strip=True)
        text = re.sub(r"\s+", " ", text).strip()

        content_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
        prev_hash = prev_state.get("pet_page_hash")

        # 펫 관련 키워드 감지
        keywords_found = []
        watch_keywords = ["퀸메리", "변경", "신규", "무게", "요금", "케이지", "펫스위트", "펫코노미", "펫가든", "대형견"]
        for kw in watch_keywords:
            if kw in text:
                keywords_found.append(kw)

        result = {
            "content_hash": content_hash,
            "changed": prev_hash is not None and content_hash != prev_hash,
            "content_preview": text[:300],
            "keywords_found": keywords_found,
        }

        if result["changed"]:
            logger.info(f"반려동물 페이지 변경 감지 (키워드: {keywords_found})")
        else:
            logger.debug("반려동물 페이지 변동 없음")

        return result
