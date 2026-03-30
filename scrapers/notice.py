import re
import logging
from bs4 import BeautifulSoup
from .base import BaseScraper

logger = logging.getLogger(__name__)

WR_ID_PATTERN = re.compile(r"wr_id=(\d+)")


class NoticeChecker(BaseScraper):
    def __init__(self, url: str, keywords: list[str] | None = None, **kwargs):
        super().__init__(url, **kwargs)
        self.keywords = keywords or ["10월", "예약", "오픈", "스케줄", "운항"]

    def check(self, prev_state: dict) -> dict | None:
        html = self.fetch()
        soup = BeautifulSoup(html, "html.parser")

        posts = []
        for link in soup.select("a[href*='wr_id=']"):
            href = link.get("href", "")
            match = WR_ID_PATTERN.search(href)
            if not match:
                continue
            wr_id = int(match.group(1))
            title = link.get_text(strip=True)
            if title:
                posts.append({"wr_id": wr_id, "title": title})

        if not posts:
            logger.warning("공지사항에서 게시글을 찾을 수 없음")
            return None

        # 중복 제거 후 wr_id 내림차순 정렬
        seen = set()
        unique_posts = []
        for p in posts:
            if p["wr_id"] not in seen:
                seen.add(p["wr_id"])
                unique_posts.append(p)
        unique_posts.sort(key=lambda x: x["wr_id"], reverse=True)

        latest_wr_id = unique_posts[0]["wr_id"]
        last_wr_id = prev_state.get("last_wr_id", 0)

        new_posts = [p for p in unique_posts if p["wr_id"] > last_wr_id] if last_wr_id else []

        keyword_matches = []
        for post in new_posts:
            matched = [kw for kw in self.keywords if kw in post["title"]]
            if matched:
                keyword_matches.append({**post, "keywords": matched})

        result = {
            "latest_wr_id": latest_wr_id,
            "new_posts": new_posts,
            "keyword_matches": keyword_matches,
            "has_new": len(new_posts) > 0,
        }

        if new_posts:
            logger.info(f"새 공지사항 {len(new_posts)}건 감지 (최신 wr_id: {latest_wr_id})")
        else:
            logger.debug(f"새 공지사항 없음 (최신 wr_id: {latest_wr_id})")

        return result
