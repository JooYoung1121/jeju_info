import json
import logging
import subprocess
import platform
import requests

logger = logging.getLogger(__name__)


def send_discord(webhook_url: str, title: str, message: str, urgent: bool = False, source: str = "local"):
    if not webhook_url:
        logger.debug("Discord webhook URL 미설정, 건너뜀")
        return

    color = 0xFF0000 if urgent else 0x3498DB
    embed = {
        "title": f"{'🚨 긴급 | ' if urgent else ''}{title}",
        "description": message,
        "color": color,
        "footer": {"text": f"출처: {source} | 제주 페리 모니터"},
    }
    payload = {"embeds": [embed]}

    try:
        resp = requests.post(
            webhook_url,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10,
        )
        if resp.status_code == 204:
            logger.info("Discord 알림 전송 성공")
        else:
            logger.warning(f"Discord 응답 코드: {resp.status_code}")
    except Exception as e:
        logger.error(f"Discord 알림 실패: {e}")


def send_macos_notification(title: str, message: str, sound: bool = True):
    if platform.system() != "Darwin":
        return

    sound_param = 'sound name "default"' if sound else ""
    script = f'display notification "{message}" with title "{title}" {sound_param}'

    try:
        subprocess.run(["osascript", "-e", script], capture_output=True, timeout=5)
        logger.info("macOS 알림 전송 성공")
    except Exception as e:
        logger.error(f"macOS 알림 실패: {e}")


def notify(config: dict, title: str, message: str, urgent: bool = False, source: str = "local"):
    discord_url = config.get("discord_webhook_url", "")
    send_discord(discord_url, title, message, urgent=urgent, source=source)

    if config.get("macos_notification", True):
        send_macos_notification(title, message[:200], sound=urgent)
