// 가족 실시간 공유 (Firebase Firestore)
// - 문서 1개: families/{가족코드} = { checklists: {key: {...카테고리, order}}, events: {id: {...}}, dayOverrides: {day: {...}} }
// - 로컬 변경은 직전 동기화 상태와 비교해 바뀐 키만 필드 단위로 update → 두 사람이 다른 항목을 동시에 고쳐도 덮어쓰지 않음
// - 설정값은 sync-config.js 의 window.JEJU_FIREBASE_CONFIG
const FB_VER = '10.12.2';
const CODE_KEY = 'jeju-family-code';
const SECTIONS = ['checklists', 'events', 'dayOverrides', 'logs'];

let db = null, fs = null, docRef = null, unsub = null;
let baseline = null;          // 마지막으로 원격과 일치했던 상태 { section: { key: json문자열 } }
let pendingRender = false;
const status = { state: 'off', code: null, msg: '' }; // off | connecting | live | error

function setStatus(state, msg = '') {
  status.state = state; status.msg = msg;
  document.querySelectorAll('[data-sync-badge]').forEach(el => {
    const map = {
      off: ['⚪ 이 기기만', 'bg-gray-100 text-gray-600'],
      connecting: ['🟡 연결 중…', 'bg-yellow-50 text-yellow-700'],
      live: ['🟢 가족 공유 중', 'bg-green-50 text-green-700'],
      error: ['🔴 공유 오류', 'bg-red-50 text-red-600'],
    };
    const [label, cls] = map[state];
    el.textContent = label;
    el.className = 'px-3 py-1.5 text-xs rounded-full font-medium ' + cls;
    el.title = msg || '';
  });
  renderShareModalBody();
}

// ---------- 로컬 상태 <-> 동기화 형태 ----------
function localState() {
  const checklists = {};
  Object.entries(CHECKLISTS).forEach(([k, l], i) => { checklists[k] = { ...l, order: i }; });
  const events = {};
  userEvents.forEach(e => { events[e.id] = e; });
  const logs = {};
  travelLogs.forEach(l => { logs[l.id] = l; });
  return { checklists, events, dayOverrides: { ...dayOverrides }, logs };
}
function snapshotOf(state) {
  const out = {};
  SECTIONS.forEach(s => { out[s] = {}; Object.entries(state[s] || {}).forEach(([k, v]) => { out[s][k] = JSON.stringify(v); }); });
  return out;
}
function applyRemote(data) {
  const cl = Object.entries(data.checklists || {})
    .sort((a, b) => (a[1].order ?? 0) - (b[1].order ?? 0))
    .map(([k, l]) => { const { order, ...rest } = l; return [k, rest]; });
  _setChecklists(Object.fromEntries(cl));
  userEvents = Object.values(data.events || {}).filter(e => e && e.date && e.title);
  dayOverrides = data.dayOverrides || {};
  travelLogs = Object.values(data.logs || {}).filter(l => l && l.id && l.name);
  // 로컬 캐시도 최신화 (오프라인일 때 마지막 상태로 열리도록). push 재귀 방지 위해 직접 저장
  try {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(CHECKLISTS));
    localStorage.setItem(EVENTS_KEY, JSON.stringify(userEvents));
    localStorage.setItem(DAY_OVR_KEY, JSON.stringify(dayOverrides));
    localStorage.setItem(LOGS_KEY, JSON.stringify(travelLogs));
  } catch (e) {}
  baseline = snapshotOf(localState());
  rerender();
}
function isEditing() {
  const a = document.activeElement;
  if (!a || !/^(INPUT|TEXTAREA)$/.test(a.tagName) || a.type === 'checkbox') return false;
  return !!a.closest('#checklistGrid, #eventModal, #logModal, #logContent');
}
function rerender() {
  const modalOpen = ['eventModal', 'logModal'].some(id => !document.getElementById(id).classList.contains('hidden'));
  if (isEditing() || modalOpen) { pendingRender = true; return; }
  pendingRender = false;
  renderChecklists(); renderSchedule();
  renderLogs();
  if (!document.getElementById('dashboardContent')?.closest('.tab-panel')?.classList.contains('hidden')) renderDashboard();
}
document.addEventListener('focusout', () => setTimeout(() => { if (pendingRender) rerender(); }, 0));

// ---------- 로컬 변경 → 원격 (바뀐 키만) ----------
// 디바운스 없이 즉시: Firestore가 로컬 캐시에 바로 반영해 스냅샷과 경합하지 않음
window.syncPush = function () {
  if (status.state === 'live') pushNow();
};
async function pushNow() {
  if (!docRef || !baseline) return;
  const cur = snapshotOf(localState());
  const args = [];
  SECTIONS.forEach(s => {
    const keys = new Set([...Object.keys(cur[s]), ...Object.keys(baseline[s] || {})]);
    keys.forEach(k => {
      if (cur[s][k] === (baseline[s] || {})[k]) return;
      args.push(new fs.FieldPath(s, k), cur[s][k] === undefined ? fs.deleteField() : JSON.parse(cur[s][k]));
    });
  });
  if (!args.length) return;
  baseline = cur;
  try {
    await fs.updateDoc(docRef, ...args, 'updatedAt', fs.serverTimestamp());
  } catch (e) { setStatus('error', e.message); }
}

// ---------- 처음 합류할 때: 이 기기에만 있던 항목을 공유 목록에 합치기 ----------
function mergeLocalInto(remote, local) {
  const merged = JSON.parse(JSON.stringify(remote));
  SECTIONS.forEach(s => { merged[s] = merged[s] || {}; });
  let maxOrder = Math.max(-1, ...Object.values(merged.checklists).map(l => l.order ?? 0));
  Object.entries(local.checklists).forEach(([k, l]) => {
    const r = merged.checklists[k];
    if (!r) { merged.checklists[k] = { ...l, order: ++maxOrder }; return; }
    l.items.forEach(it => {
      const same = r.items.find(x => x.text === it.text);
      if (!same) r.items.push(it);
      else if (it.checked) same.checked = true;
    });
  });
  Object.entries(local.events).forEach(([id, e]) => { if (!merged.events[id]) merged.events[id] = e; });
  Object.entries(local.dayOverrides).forEach(([d, o]) => { if (!merged.dayOverrides[d]) merged.dayOverrides[d] = o; });
  Object.entries(local.logs).forEach(([id, l]) => { if (!merged.logs[id]) merged.logs[id] = l; });
  return merged;
}

async function connect(code) {
  const cfg = window.JEJU_FIREBASE_CONFIG;
  if (!cfg) { setStatus('off', 'Firebase 설정 전'); return; }
  setStatus('connecting');
  try {
    if (!db) {
      const app = await import(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-app.js`);
      fs = await import(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-firestore.js`);
      db = fs.getFirestore(app.initializeApp(cfg));
    }
    if (unsub) unsub();
    docRef = fs.doc(db, 'families', code);
    const snap = await fs.getDoc(docRef);
    const local = localState();
    if (!snap.exists()) {
      await fs.setDoc(docRef, { ...local, createdAt: fs.serverTimestamp(), updatedAt: fs.serverTimestamp() });
    } else {
      const merged = mergeLocalInto(snap.data(), local);
      const changed = SECTIONS.some(s => JSON.stringify(merged[s]) !== JSON.stringify(snap.data()[s] || {}));
      if (changed) {
        const args = [];
        SECTIONS.forEach(s => args.push(s, merged[s]));
        await fs.updateDoc(docRef, ...args, 'updatedAt', fs.serverTimestamp());
      }
    }
    status.code = code;
    try { localStorage.setItem(CODE_KEY, code); } catch (e) {}
    unsub = fs.onSnapshot(docRef, s => {
      if (!s.exists()) return;
      applyRemote(s.data());
      if (status.state !== 'live') setStatus('live');
    }, e => setStatus('error', e.message));
  } catch (e) {
    console.error(e);
    setStatus('error', e.message);
  }
}
function disconnect() {
  if (unsub) unsub();
  unsub = null; docRef = null; baseline = null; status.code = null;
  try { localStorage.removeItem(CODE_KEY); } catch (e) {}
  setStatus('off');
}

// ---------- 공유 설정 모달 ----------
function randomCode() {
  const a = new Uint8Array(9); crypto.getRandomValues(a);
  return 'jeju-' + Array.from(a, b => 'abcdefghjkmnpqrstuvwxyz23456789'[b % 31]).join('');
}
function shareLink(code) { return `${location.origin}${location.pathname}?family=${encodeURIComponent(code)}`; }
function validCode(c) { return /^[A-Za-z0-9_-]{12,64}$/.test(c); }

function renderShareModalBody() {
  const body = document.getElementById('shareModalBody');
  if (!body) return;
  const esc = window._escHtml;
  if (!window.JEJU_FIREBASE_CONFIG) {
    body.innerHTML = `<p class="text-sm text-basalt-soft">아직 Firebase 설정값이 연결되지 않았어요. <code>schedule/sync-config.js</code>에 설정값을 넣으면 켜집니다.</p>`;
    return;
  }
  if (status.code) {
    body.innerHTML = `
      <p class="text-sm text-basalt">${status.state === 'live' ? '🟢 가족과 실시간으로 공유 중이에요.' : status.state === 'error' ? '🔴 연결 오류: ' + esc(status.msg) : '🟡 연결 중…'}</p>
      <div class="bg-paper-card rounded-lg p-3 text-xs space-y-2">
        <div>가족 코드 <b class="font-mono select-all">${esc(status.code)}</b></div>
        <div class="text-basalt-soft">아래 링크를 카톡으로 보내면, 받은 사람은 링크만 열면 같은 목록에 연결돼요.</div>
        <input readonly value="${esc(shareLink(status.code))}" class="w-full border border-gray-200 rounded px-2 py-1.5 font-mono text-[11px]" onclick="this.select()">
        <button type="button" onclick="window._shareCopy()" class="px-3 py-1.5 rounded-lg bg-ocean-500 text-white text-xs font-semibold">🔗 공유 링크 복사</button>
      </div>
      <p class="text-[11px] text-basalt-soft">코드를 아는 사람은 누구나 목록을 볼 수 있으니 가족끼리만 공유하세요.</p>
      <button type="button" onclick="window._shareOff()" class="text-xs text-red-600 hover:underline">이 기기 공유 끄기</button>`;
  } else {
    body.innerHTML = `
      <p class="text-sm text-basalt">가족 코드로 연결하면 체크리스트와 내 일정이 두 사람 폰에서 실시간으로 똑같이 보여요.</p>
      <button type="button" onclick="window._shareNew()" class="w-full px-3 py-2.5 rounded-lg bg-ocean-500 text-white text-sm font-semibold">✨ 새 가족 공유 시작 (처음 한 명만)</button>
      <div class="text-xs text-basalt-soft text-center">또는 받은 가족 코드 입력</div>
      <form onsubmit="event.preventDefault(); window._shareJoin(this.elements.c.value)" class="flex gap-1.5">
        <input name="c" placeholder="jeju-xxxxxxxx" class="flex-1 min-w-0 border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono">
        <button class="px-3 py-2 rounded-lg bg-gray-100 text-sm">연결</button>
      </form>
      <p class="text-[11px] text-basalt-soft">연결하면 이 기기에만 있던 항목·일정도 공유 목록에 합쳐져요.</p>`;
  }
}
window._shareNew = () => connect(randomCode());
window._shareJoin = c => { c = (c || '').trim(); if (!validCode(c)) { alert('가족 코드 형식이 올바르지 않아요'); return; } connect(c); };
window._shareOff = () => { if (confirm('이 기기에서 공유를 끌까요? (목록은 이 기기에 그대로 남아요)')) disconnect(); };
window._shareCopy = async () => {
  const link = shareLink(status.code);
  try { await navigator.clipboard.writeText(link); alert('공유 링크를 복사했어요. 카톡으로 보내 주세요!'); }
  catch (e) { prompt('아래 링크를 복사하세요', link); }
};
window.openShareModal = () => { renderShareModalBody(); document.getElementById('shareModal').classList.remove('hidden'); };

// ---------- 시작 ----------
(function init() {
  const params = new URLSearchParams(location.search);
  let code = params.get('family');
  if (code) {
    params.delete('family');
    history.replaceState(null, '', location.pathname + (params.toString() ? '?' + params : '') + location.hash);
  }
  if (!code) { try { code = localStorage.getItem(CODE_KEY); } catch (e) {} }
  if (code && validCode(code)) connect(code); else setStatus('off');
})();
