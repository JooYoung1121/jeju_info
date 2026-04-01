import hashlib
import logging
import re
from bs4 import BeautifulSoup
from .base import BaseScraper

logger = logging.getLogger(__name__)


class FareChecker(BaseScraper):
    """요금 페이지 변경 감지"""

    def check(self, prev_state: dict) -> dict | None:
        html = self.fetch()
        soup = BeautifulSoup(html, "html.parser")

        content = soup.select_one("#bo_v_con") or soup.select_one(".cont_area") or soup.body
        if content is None:
            logger.warning("요금 페이지에서 콘텐츠를 찾을 수 없음")
            return None

        for tag in content.find_all(["script", "style", "noscript"]):
            tag.decompose()

        text = content.get_text(separator="\n", strip=True)
        text = re.sub(r"\s+", " ", text).strip()

        content_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
        prev_hash = prev_state.get("fare_hash")

        result = {
            "content_hash": content_hash,
            "changed": prev_hash is not None and content_hash != prev_hash,
            "content_preview": text[:200],
        }

        if result["changed"]:
            logger.info("요금 페이지 변경 감지")
        else:
            logger.debug("요금 페이지 변동 없음")

        return result
