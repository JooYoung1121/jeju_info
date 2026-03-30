#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLIST_SRC="$SCRIPT_DIR/infra/com.user.jejuinfo.plist"
PLIST_DST="$HOME/Library/LaunchAgents/com.user.jejuinfo.plist"

echo "=== 제주 페리 모니터링 설정 ==="

# 1. Python venv 생성
echo "[1/4] Python 가상환경 생성..."
if [ ! -d "$SCRIPT_DIR/.venv" ]; then
    python3 -m venv "$SCRIPT_DIR/.venv"
    echo "  → .venv 생성 완료"
else
    echo "  → .venv 이미 존재"
fi

# 2. 패키지 설치
echo "[2/4] 패키지 설치..."
"$SCRIPT_DIR/.venv/bin/pip" install -q -r "$SCRIPT_DIR/requirements.txt"
echo "  → 설치 완료"

# 3. config.json 확인
echo "[3/4] config.json 확인..."
if [ ! -f "$SCRIPT_DIR/config.json" ]; then
    cp "$SCRIPT_DIR/config.example.json" "$SCRIPT_DIR/config.json"
    echo "  → config.example.json에서 복사됨"
    echo "  ⚠️  config.json을 열어 discord_webhook_url을 설정하세요!"
else
    echo "  → config.json 이미 존재"
fi

# 4. launchd 등록
echo "[4/4] launchd 스케줄러 등록..."
# 기존 등록 해제
if launchctl list | grep -q "com.user.jejuinfo" 2>/dev/null; then
    launchctl unload "$PLIST_DST" 2>/dev/null || true
    echo "  → 기존 등록 해제"
fi

cp "$PLIST_SRC" "$PLIST_DST"
launchctl load "$PLIST_DST"
echo "  → launchd 등록 완료 (5분 간격)"

echo ""
echo "=== 설정 완료 ==="
echo "수동 실행: $SCRIPT_DIR/.venv/bin/python $SCRIPT_DIR/main.py"
echo "로그 확인: tail -f $SCRIPT_DIR/logs/monitor.log"
echo "상태 확인: launchctl list | grep jejuinfo"
echo "중지: launchctl unload $PLIST_DST"
