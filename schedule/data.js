// 제주 한달살이 30일 플래너 데이터
// 기간: 2026.10.25 ~ 11.23
// 가족: 부부 + 10개월 아기 + 강아지 2마리

const TRIP_INFO = {
  title: "제주 한달살이 30일 플래너",
  startDate: "2026-10-25",
  endDate: "2026-11-23",
  family: [
    { icon: "👨", label: "아빠" },
    { icon: "👩", label: "엄마" },
    { icon: "👶", label: "아기 (10개월)" },
    { icon: "🐶", label: "강아지 1" },
    { icon: "🐕", label: "강아지 2" },
  ],
  accommodation: "성산/구좌 (동부) 지역",
  accommodationAddress: "제주특별자치도 제주시 구좌읍 해맞이해안로 1588-4",
  transport: "테슬라 모델Y 선적 (씨월드고속훼리 퀸메리호)",
};

const CATEGORIES = {
  sightseeing: { label: "관광", color: "bg-blue-100 text-blue-800", icon: "🏔️" },
  food: { label: "맛집", color: "bg-orange-100 text-orange-800", icon: "🍽️" },
  cafe: { label: "카페", color: "bg-amber-100 text-amber-800", icon: "☕" },
  baby: { label: "아기", color: "bg-pink-100 text-pink-800", icon: "👶" },
  dog: { label: "강아지", color: "bg-green-100 text-green-800", icon: "🐶" },
  checklist: { label: "준비물", color: "bg-gray-100 text-gray-800", icon: "✅" },
};

const WEEKS = [
  { label: "1주차", subtitle: "이동 + 정착 + 동부 탐색", dates: "10/25 ~ 10/31" },
  { label: "2주차", subtitle: "서부(한림/애월) + 제주시 — 따뜻할 때 야외 위주", dates: "11/1 ~ 11/7" },
  { label: "3주차", subtitle: "동부 심화 + 남부(서귀포)", dates: "11/8 ~ 11/14" },
  { label: "4주차", subtitle: "중산간 + 재방문 + 여유", dates: "11/15 ~ 11/21" },
  { label: "마지막", subtitle: "정리 + 귀환", dates: "11/22 ~ 11/23" },
];

const SCHEDULE = [
  // === 1주차 (10/25~31) ===
  {
    day: 1,
    date: "2026-10-25",
    dayOfWeek: "일",
    theme: "이동일",
    categories: ["sightseeing", "food", "checklist"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "목포 삼학부두 → 퀸메리호 탑승 (⚠️10/25은 08:30 출발 — 한시 변경 운항)",
        places: [
          {
            name: "목포항 삼학부두 여객터미널",
            address: "전남 목포시 삼학로158번길 65 (김대중노벨평화상기념관 인근)",
            desc: "✅ 퀸메리호 예약 완료. ⚠️ 씨월드 공식 월간스케줄(2026.10.20 조회): 10/25 퀸메리 목포발 08:30 (2026.5.28~별도 공지일까지 한시 변경 운항, 기존 14:00 아님) → 예약 문자의 출항시각 꼭 재확인(1577-3567). 퀸메리는 연안여객터미널이 아닌 삼학부두에서 출발(주차 무료). 차량은 주간선박 출항 1시간 전(07:30) 선적 마감 → 07:00 전후 도착 권장, 여객 발권·승선은 10분 전 마감. ⚡테슬라는 선적 전 배터리 50% 미만 필수. 케이지(필수)·반려동물 서류·전원 신분증(아기는 등본) 지참.",
            duration: "새벽 이동 + 승선",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "항해 (08:30 → 13:20 제주 도착 예정)",
        places: [
          {
            name: "퀸메리호 선상",
            address: "목포 → 제주항 국제여객터미널",
            desc: "한시 변경 시간표 기준 약 4시간 50분 항해(08:30→13:20, 공식 안내). 펫가든(야외갑판) 산책, 펫 전용 객실 휴식. 파리바게트·라면존 등 선내 편의시설. 공용 구역 이동 시 반려견은 케이지/펫가방.",
            duration: "약 4시간 50분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "제주 도착(오후) → 숙소 이동 + 장보기",
        places: [
          {
            name: "제주항 국제여객터미널 → 숙소(구좌)",
            address: "제주시 임항로 193 (제주항 7부두)",
            desc: "13:20 도착 예정 → 하선 후 자차로 숙소까지 약 1시간. 오후 도착이라 가는 길 하나로마트(구좌농협)에서 첫 장보기 가능. ⚡제주에 도착하면 배터리 50% 미만 상태이니 숙소 가는 길 충전 계획(김녕 급속 등)도 함께.",
            duration: "이동 1시간 + 장보기",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "숙소 근처 간단히",
        menu: "도착 첫날 — 배달/포장 또는 마트 간편식",
        price: "1만~2만원대",
        address: "성산/구좌",
        baby: true,
        dog: true,
      },
    ],
    memo: "⚠️ 출항이 08:30으로 당겨져(공식 월간스케줄) 새벽 출발 필요 — 집→목포 이동시간 역산해 전날 목포 숙박도 고려. 예약번호가 12xxxxxx였다면 6xxxxxx로 바뀌었으니(9/28 이전 예약 10~12월분, 씨월드 공지) 문자로 확인. 첫날은 무리 없이. 하나로마트(구좌농협)는 08:00 개점, 마감은 지점·계절별 상이(20~22시) → 방문 전 확인. ⚡숙소 도착 후 완속충전 연결해두면 다음 날 아침 완충.",
    rainPlan: "이동일이므로 날씨 무관. 비 오면 하선 시 우비/우산.",
    travelInfo: { mainDest: "목포→제주 이동일", oneWay: "-", roundTrip: "-", fatigue: "이동일" },
  },
  {
    day: 2,
    date: "2026-10-26",
    dayOfWeek: "월",
    theme: "정착 + 주변 탐색",
    categories: ["sightseeing", "food", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "숙소 정리, 주변 편의시설 파악",
        places: [
          {
            name: "숙소 주변",
            address: "성산/구좌 일대",
            desc: "편의점, 약국, 마트, 병원 위치 파악. 아기용품 보충.",
            duration: "2시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "세화해변 산책 + 세화 카페거리",
        places: [
          {
            name: "세화해변",
            address: "제주시 구좌읍 세화리",
            desc: "유모차 산책 가능, 강아지 산책 가능한 해변. 돌담길 예쁜 포토존.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
          {
            name: "세화 카페거리",
            address: "제주시 구좌읍 세화리",
            desc: "세화해변 주변 감성 카페들. 반려견 동반 가능한 곳 다수.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "평대스낵 포장 → 숙소 저녁 (16시 마감 주의)",
        places: [
          {
            name: "평대스낵",
            address: "제주시 구좌읍 대수길 26",
            desc: "반려동물 동반 가능(네이버 플레이스 표기). ⚠️ 영업 11:00~16:00, 매주 수요일 휴무(2026 후기 다수) → 저녁 영업 없음. 15시 전후 포장해 숙소에서 저녁으로.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "평대스낵",
        menu: "떡볶이, 김밥, 튀김 (포장)",
        price: "떡볶이 5천원·한치튀김 1.5만원",
        address: "제주시 구좌읍 대수길 26",
        baby: true,
        dog: true,
      },
    ],
    memo: "장보기 리스트 정리. 세화오일시장 장날은 끝자리 5, 0일 (여행 중 10/30, 11/5, 11/10, 11/15, 11/20) 08:00~14:00 전후 — 오전 방문 추천.",
    rainPlan: "실내에서 숙소 정리에 집중. 세화 카페 탐방.",
    travelInfo: { mainDest: "세화해변/카페거리", oneWay: "7분", roundTrip: "15분", fatigue: "양호" },
  },
  {
    day: 3,
    date: "2026-10-27",
    dayOfWeek: "화",
    theme: "여유로운 동부 탐색",
    categories: ["sightseeing", "food", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "느긋한 아침 + 동네 산책",
        places: [
          {
            name: "숙소 주변 해안 산책",
            address: "구좌 일대",
            desc: "늦잠 후 천천히. 아기·강아지와 숙소 앞 해안도로 산책. 차 충전 상태 점검(완속 야간충전 시 아침 완충).",
            duration: "2~3시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "김녕해수욕장 산책",
        places: [
          {
            name: "김녕해수욕장",
            address: "제주시 구좌읍 김녕리",
            desc: "반려견 산책 가능한 해변. 수심 얕아 아기와도 안전. 해안길 따라 여유롭게 산책.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
          {
            name: "김녕 해안도로 카페",
            address: "제주시 구좌읍 김녕리",
            desc: "김녕해변 주변 카페에서 휴식. 반려견 동반 가능한 야외석.",
            duration: "40분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "담백 월정리 본점 (김녕→숙소 귀갓길)",
        places: [
          {
            name: "담백 월정리 본점",
            address: "제주시 구좌읍 해맞이해안로 518",
            desc: "월정리 해안도로 식당. 반려동물 동반·유아의자(네이버 편의정보 — 조건 방문 전 확인). 매일 09:00~19:30, 재료 소진 시 조기 마감 → 이른 저녁 추천. 0507-1494-0208. ※기존 제주오누이(해맞이해안로 972)는 주소지에 다른 업장이 들어서 교체.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "담백 월정리 본점",
        menu: "한식 (메뉴·가격은 방문 전 확인)",
        price: "방문 전 확인",
        address: "제주시 구좌읍 해맞이해안로 518",
        baby: true,
        dog: true,
      },
    ],
    memo: "도착 3일차, 무리하지 않고 동네 적응. 김녕해변은 조용해서 강아지 산책 최적.",
    rainPlan: "오전엔 숙소에서 푹 쉬기. 오후 세화/구좌 실내 카페. 여유 있으면 제주해녀박물관(구좌읍 해녀박물관길 26, 실내 전시, 064-782-9898 — 휴관일 방문 전 확인) 방문.",
    travelInfo: { mainDest: "김녕해수욕장", oneWay: "18분", roundTrip: "35분", fatigue: "양호" },
  },
  {
    day: 4,
    date: "2026-10-28",
    dayOfWeek: "수",
    theme: "성산일출봉",
    categories: ["sightseeing", "food", "baby"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "성산일출봉 등반",
        places: [
          {
            name: "성산일출봉",
            address: "서귀포시 성산읍 성산리 114",
            url: "https://www.jeju.go.kr/jejuwnh/place/sunrise.htm",
            desc: "UNESCO 세계자연유산. 아기띠로 등반. 반려견 입장 불가 (천연기념물 보호구역). 성인 5,000원·6세 이하 무료. 정기휴무 매월 첫째 월요일. 11~2월 관람·매표 시간은 하절기(05:00~19:00)와 달라 방문 전 확인.",
            duration: "2시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "섭지코지 산책",
        places: [
          {
            name: "섭지코지",
            address: "서귀포시 성산읍 섭지코지로 107",
            desc: "유모차 산책 가능한 해안 산책로. 유채꽃밭, 등대.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "마트에서 산 재료로 간단 요리. 아기 이유식 준비.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "성산 갈치조림 맛집",
        menu: "갈치조림, 고등어조림",
        price: "1만5천~2만5천원대",
        address: "서귀포시 성산읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "성산일출봉은 오전 일찍 갈수록 좋음. 반려견 입장 불가 → 한 명이 강아지와 주변 산책, 번갈아 등반.",
    rainPlan: "성산일출봉은 비 시 미끄러움 → 스누피가든(구좌 금백조로 930, 실내전시+가든, 동절기 09:00~18:00·입장마감 17:00, 성인 1.9만원 선·36개월 미만 무료)으로 대체. 오늘(수)은 '반려동물데이' — 전용 입장권 구매 필요, 실내는 케이지·슬링백·펫유모차 필수, 야외는 목줄.",
    travelInfo: { mainDest: "성산일출봉/섭지코지", oneWay: "40분", roundTrip: "80분", fatigue: "주의" },
    dogAlternatives: [
      { name: "광치기해변 산책", desc: "성산일출봉 바로 옆 해변. 강아지 산책 가능. 등반 대기 중 추천.", dog: true },
      { name: "섭지코지 산책로", desc: "유모차+강아지 모두 가능한 해안 산책로.", dog: true },
      { name: "숙소 근처 세화해변", desc: "강아지와 여유롭게 해변 산책 (숙소 7분)", dog: true },
    ],
  },
  {
    day: 5,
    date: "2026-10-29",
    dayOfWeek: "목",
    theme: "월정리 + 동부 카페",
    categories: ["cafe", "sightseeing", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "여유로운 오전 + 숙소 휴식",
        places: [
          {
            name: "숙소 + 동네 카페",
            address: "구좌 일대",
            desc: "오전엔 천천히 휴식. 아기 낮잠 시간 맞춰 동네 카페에서 커피 한 잔.",
            duration: "2~3시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "월정리 카페거리 산책 + 월정리해변",
        places: [
          {
            name: "월정리해변",
            address: "제주시 구좌읍 월정리",
            desc: "에메랄드빛 바다. 카페거리 산책. 반려견 동반 가능.",
            duration: "2시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "평대스낵 (16시 마감 → 늦은 점심/포장 저녁)",
        places: [
          {
            name: "평대스낵",
            address: "제주시 구좌읍 대수길 26",
            desc: "한치튀김 맛집! 윗층 테라스에서 바다뷰. 반려동물 동반 가능, 리드줄. ⚠️ 11:00~16:00 영업·수요일 휴무 → 월정리 가기 전 늦은 점심으로 먹거나 포장해 숙소 저녁.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "평대스낵",
        menu: "한치튀김, 떡볶이, 김밥",
        price: "떡볶이 5천원·한치튀김 1.5만원",
        address: "제주시 구좌읍 대수길 26",
        baby: true,
        dog: true,
      },
    ],
    memo: "월정리 카페 중 반려견 동반 가능 카페 사전 체크(2026.3 반려동물 동반 음식점 제도 시행 후 노펫존 선언 업소도 있음). 평대스낵은 숙소 인근 평대리, 16시 마감.",
    rainPlan: "월정리 카페에서 비 오는 바다 감상 + 실내 시간. 여유 있으면 제주해녀박물관(구좌, 실내 전시) 방문.",
    travelInfo: { mainDest: "월정리해변/카페거리", oneWay: "5분", roundTrip: "10분", fatigue: "양호" },
  },
  {
    day: 6,
    date: "2026-10-30",
    dayOfWeek: "금",
    theme: "우도",
    categories: ["sightseeing", "food"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "우도 당일치기 출발",
        places: [
          {
            name: "성산포항 우도 여객선터미널",
            address: "서귀포시 성산읍 성산등용로 112-7",
            desc: "우도행 여객선 탑승. 반려견: 2025~2026 탑승 후기상 이동장/케이지에 넣으면 탑승 가능·별도 승선료 없음(우도 순환버스도 케이지 필수) — 선사 공식 규정은 미확인 → 사전 문의 (064-782-5671).",
            duration: "배편 15분",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "우도 관광",
        places: [
          {
            name: "우도봉",
            address: "우도면 우도봉길",
            desc: "우도 최고봉. 파노라마 경관.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
          {
            name: "서빈백사 (산호해변)",
            address: "우도면",
            desc: "홍조단괴 해변. 투명 바다.",
            duration: "30분",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "우도 땅콩 아이스크림 + 귀환",
        places: [
          {
            name: "우도 땅콩아이스크림",
            address: "우도면 일대",
            desc: "우도 명물. 땅콩 + 아이스크림.",
            duration: "30분",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "우도 땅콩아이스크림",
        menu: "땅콩아이스크림, 땅콩막걸리",
        price: "3천~5천원",
        address: "우도면 일대",
        baby: true,
        dog: false,
      },
      {
        name: "우도 해산물",
        menu: "소라짬뽕, 해산물라면",
        price: "1만~1만5천원",
        address: "우도면",
        baby: true,
        dog: false,
      },
    ],
    memo: "⚠️ 우도 여객선 반려견 탑승은 후기상 케이지 지참 시 가능하나 공식 미확인 → 사전 문의 (064-782-5671). 강아지 2마리 케이지 이동이 부담되면 부부 번갈아 방문 or 펫시터. 오늘(10/30)은 세화오일장 날(오전). 배편 마지막 시간 꼭 확인!",
    rainPlan: "우도는 날씨 좋은 날로 연기 필수 (풍랑 시 여객선 결항). 대신 세화오일장(오늘 장날, 우산 지참) + 제주해녀박물관(구좌, 실내) 또는 스누피가든(구좌, 실내전시 — 반려견은 수요일만)으로 대체.",
    travelInfo: { mainDest: "성산포항(우도)", oneWay: "42분", roundTrip: "84분", fatigue: "주의" },
    dogAlternatives: [
      { name: "김녕해수욕장 + 김녕미로공원", desc: "숙소에서 18분. 해변 산책(강아지 OK) + 미로공원은 번갈아.", dog: true },
      { name: "월정리 카페거리", desc: "숙소에서 5분. 반려견 동반 카페 다수.", dog: true },
      { name: "펫시터 이용", desc: "숙소에서 펫시터 방문 돌봄 (숨고/펫봄 앱). 부부 함께 우도 가능.", dog: true },
    ],
  },
  {
    day: 7,
    date: "2026-10-31",
    dayOfWeek: "토",
    theme: "만장굴 + 비자림",
    categories: ["sightseeing", "dog", "baby"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "만장굴 탐방",
        places: [
          {
            name: "만장굴",
            address: "제주시 구좌읍 만장굴길 182",
            url: "https://www.jeju.go.kr/jejuwnh/place/manjanggul.htm",
            desc: "✅ 2026.05.30 재개방! (낙석 보강·관람데크·LED 조명 신설) 세계자연유산 용암동굴. 입구 계단 이후 유아차 이용 가능 수준으로 접근성 개선. 동굴 내 서늘(12~13℃), 겉옷 필수. 입장료 어른 4,000원. 관람 09:00~18:00(입장 마감 17:00). 정기휴무 매월 첫째 주 수요일(10/31 토요일은 정상 운영). 반려견은 동굴 내 불가.",
            duration: "1시간 30분",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "비자림 숲 산책",
        places: [
          {
            name: "비자림",
            address: "제주시 구좌읍 비자숲길 55",
            url: "https://www.jeju.go.kr/jejuwnh/place/bijarim.htm",
            desc: "천년 비자나무 숲. ⚠️ 반려견 입장 불가 (천연기념물 제374호 보호구역). 유모차보다는 아기띠 추천. 입장료 성인 3,000원(방문 전 확인). 입장 마감 17:00 전후 → 만장굴과 묶으면 출발 시간 조정.",
            duration: "1시간 30분",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "할로윈 분위기 카페",
        places: [
          {
            name: "구좌/조천 카페",
            address: "제주시 구좌읍 또는 조천읍",
            desc: "10/31 할로윈! 분위기 좋은 카페에서 여유.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "조천 맛집",
        menu: "흑돼지 구이, 해산물",
        price: "1만5천~3만원대",
        address: "제주시 조천읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "✅ 만장굴 2026.05.30 재개방(입장료 어른 4,000원, 관람 09:00~18:00 · 매표마감 17:00). 유아차 이용 가능하나 입구 계단 구간은 아기띠가 편함. ⚠️ 비자림 반려견 입장 불가(천연기념물) → 한 명이 강아지와 주차장/입구 근처 산책, 번갈아 관람.",
    rainPlan: "만장굴은 실내(동굴)라 비와 무관. 더 쉬고 싶으면 제주해녀박물관(구좌, 실내 전시). 비자림은 우산 쓰고 산책 가능하나, 강우량 많으면 세화 카페로 대체.",
    travelInfo: { mainDest: "만장굴/비자림", oneWay: "20분", roundTrip: "40분", fatigue: "양호" },
    dogAlternatives: [
      { name: "비자림 입구 주변 산책", desc: "비자림 주차장/입구 부근 산책로. 한 명이 강아지와 대기하며 산책.", dog: true },
      { name: "세화해변 산책", desc: "숙소 근처(7분). 만장굴/비자림 전후로 강아지 산책 시간 확보.", dog: true },
      { name: "김녕해수욕장", desc: "만장굴에서 차로 5분. 해변에서 강아지 산책.", dog: true },
    ],
  },
  // === 2주차 (11/1~7) ===
  {
    day: 8,
    date: "2026-11-01",
    dayOfWeek: "일",
    theme: "한림공원 + 협재해수욕장",
    categories: ["sightseeing", "dog", "food"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "한림공원",
        places: [
          {
            name: "한림공원",
            address: "제주시 한림읍 한림로 300",
            url: "https://www.hallimpark.co.kr/",
            desc: "용암동굴, 아열대 식물원, 분재원. 유모차 이용 가능. 성인 15,000원, 36개월 미만 무료(증빙). 매표 마감은 계절별(16:30~17:00) 확인. ⚠️ 반려견 7kg 미만 소형견만 입장 가능 (보호자 1인당 1마리, 리드줄+배변봉투 필수).",
            duration: "2시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "협재해수욕장 산책",
        places: [
          {
            name: "협재해수욕장",
            address: "제주시 한림읍 협재리",
            desc: "에메랄드 바다. 반려견 산책 가능. 비양도 뷰.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "한림 맛집",
        places: [
          {
            name: "한림 맛집",
            address: "제주시 한림읍",
            desc: "해물탕, 갈치조림 등.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "한림 해물탕",
        menu: "해물탕, 갈치조림",
        price: "2만~3만원대",
        address: "제주시 한림읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "동부→서부 이동 약 95분(숙소 기준). 아기 낮잠 시간에 차 이동 추천. ⚠️ 한림공원 반려견 7kg 미만만 입장 가능 → 4~10kg 강아지는 입장 불가 가능성 높음. 강아지는 협재해변에서 산책 or 차 대기.",
    rainPlan: "한림공원 동굴은 실내. 협재해변은 비 시 한림공원 실내 연장.",
    travelInfo: { mainDest: "한림공원/협재", oneWay: "95분", roundTrip: "190분", fatigue: "🔴 최고 — 서부 원정, 전날 휴식 권장" },
    dogAlternatives: [
      { name: "협재해수욕장 산책", desc: "한림공원 바로 옆. 반려견 산책 가능. 한 명이 강아지와 해변 산책.", dog: true },
      { name: "금능해수욕장", desc: "협재 바로 옆 해변. 사람 적고 넓어서 강아지 산책 최적.", dog: true },
    ],
  },
  {
    day: 9,
    date: "2026-11-02",
    dayOfWeek: "월",
    theme: "동부 휴식 + 동네 카페",
    categories: ["cafe", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "늦잠 + 충전(차·체력) 데이",
        places: [
          {
            name: "숙소에서 푹 쉬기",
            address: "구좌 일대",
            desc: "어제 서부 원정 후 회복일. 늦잠·아기 놀이. 어제 주행 많았으니 가까운 급속충전소에서 차 충전(또는 숙소 완속).",
            duration: "오전 자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "동부 근처 가볍게",
        places: [
          {
            name: "세화 or 월정리 카페",
            address: "구좌읍",
            desc: "가벼운 카페 타임. 해변 산책.",
            duration: "2시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "편하게 자취.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "서부 원정 다음 날은 가볍게. 에너지 충전.",
    rainPlan: "세화/월정리 카페에서 비 오는 바다 감상. 여유 있으면 스누피가든(구좌, 실내전시+포토존) 방문.",
    travelInfo: { mainDest: "숙소 주변", oneWay: "5분", roundTrip: "10분", fatigue: "양호" },
  },
  {
    day: 10,
    date: "2026-11-03",
    dayOfWeek: "화",
    theme: "오설록 + 새별오름",
    categories: ["sightseeing", "cafe", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "오설록 티뮤지엄",
        places: [
          {
            name: "오설록 티뮤지엄",
            address: "서귀포시 안덕면 신화역사로 15",
            url: "https://www.osulloc.com/kr/ko/museum",
            desc: "녹차밭 + 티 뮤지엄. 야외 공간 반려견 OK (실내 불가). 유모차 가능.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "새별오름 산책",
        places: [
          {
            name: "새별오름",
            address: "제주시 애월읍 봉성리 산59-8",
            desc: "완만한 오름. 반려견 산책 가능. 정상까지 약 20분. 억새밭 포토존. 아기띠 추천.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 복귀 → 고기굽는해녀 구좌흑돼지",
        places: [
          {
            name: "고기굽는해녀 구좌흑돼지",
            address: "제주시 구좌읍 한동로1길 25",
            desc: "숙소에서 차로 약 10분인 한동리 흑돼지구이. 반려동물 동반·유아의자(네이버 편의정보 — 조건 방문 전 확인). 12:00~22:00, 수요일 휴무(오늘 화요일 OK). 0507-1340-7918. 서부 원정 후 숙소 근처에서 늦은 저녁. ※기존 오데뜨(한림)는 주소지에 다른 업장이 영업 중이라 교체.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "고기굽는해녀 구좌흑돼지",
        menu: "흑돼지구이",
        price: "방문 전 확인",
        address: "제주시 구좌읍 한동로1길 25",
        baby: true,
        dog: true,
      },
    ],
    memo: "오설록은 주중이 한적함. 새별오름은 완만해서 아기띠로 충분(반려견 2m 이내 목줄·배변 수거 조건 동반 가능, 입장 무료). 저녁은 숙소 근처 고기굽는해녀(22시까지)라 서부에서 여유 있게 출발 가능. 서부에서 먹고 싶으면 금돈가(애월, 반려견 동반, 11:00~22:30 전후).",
    rainPlan: "오설록 실내 티뮤지엄 시간 늘리기. 새별오름 대신 애월 실내 카페.",
    travelInfo: { mainDest: "오설록 → 새별오름 → 구좌 복귀", oneWay: "90분", roundTrip: "180분", fatigue: "🔴 최고 — 서부 원정" },
  },
  {
    day: 11,
    date: "2026-11-04",
    dayOfWeek: "수",
    theme: "온전한 휴식일",
    categories: ["dog", "baby"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "푹 쉬는 오전",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "아무 일정 없이 늦잠. 아기·강아지와 뒹굴뒹굴.",
            duration: "오전 자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "집안일 + 동네 산책",
        places: [
          {
            name: "숙소 주변",
            address: "성산/구좌",
            desc: "느긋한 오후. 빨래, 정리, 아기 놀이. 강아지 동네 산책.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "편하게.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "2주차 중반, 아무것도 안 하는 날도 필요. 한달살이의 묘미는 '쉬어가기'.",
    rainPlan: "원래 휴식일이라 비 와도 OK.",
    travelInfo: { mainDest: "숙소 (휴식일)", oneWay: "-", roundTrip: "-", fatigue: "양호" },
  },
  {
    day: 12,
    date: "2026-11-05",
    dayOfWeek: "목",
    theme: "제주시 탐방",
    categories: ["sightseeing", "food"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "동문시장",
        places: [
          {
            name: "동문재래시장",
            address: "제주시 관덕로14길 20",
            desc: "제주 최대 전통시장. 감귤, 흑돼지, 떡, 건어물. 아기띠 추천.",
            duration: "1시간 30분",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "이호테우해변 + 탑동",
        places: [
          {
            name: "이호테우해변",
            address: "제주시 이호일동",
            desc: "빨간+하얀 말등대 포토존. 반려견 산책 가능.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
          {
            name: "탑동 해안도로",
            address: "제주시 탑동",
            desc: "바다 뷰 산책. 유모차 가능.",
            duration: "40분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "제주시 맛집",
        places: [
          {
            name: "제주시 맛집",
            address: "제주시",
            desc: "고기국수, 보말칼국수 등.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "제주 고기국수",
        menu: "고기국수, 보말칼국수, 빙떡",
        price: "8천~1만5천원",
        address: "제주시",
        baby: true,
        dog: false,
      },
    ],
    memo: "동부→제주시 약 50분. 동문시장은 오전이 한적함. 📅 11/5~7 제주올레걷기축제(19·20코스 조천~김녕~세화·하도 구간, 숙소 주변 해안도로) → 이 3일은 해안도로 보행자·혼잡 주의. 오늘(11/5)은 세화오일장 날.",
    rainPlan: "동문시장은 지붕 있어 비 무관. 이호테우해변 대신 국립제주박물관(무료, 실내, 어린이박물관) + 제주시 카페 탐방.",
    travelInfo: { mainDest: "동문시장/이호테우", oneWay: "50분", roundTrip: "130분", fatigue: "🔴 고 — 제주시 원정" },
  },
  {
    day: 13,
    date: "2026-11-06",
    dayOfWeek: "금",
    theme: "에코랜드",
    categories: ["sightseeing", "baby"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "에코랜드 테마파크",
        places: [
          {
            name: "에코랜드 테마파크",
            address: "제주시 조천읍 번영로 1278-169",
            url: "https://www.ecolandthemepark.com/",
            desc: "증기기관차 타고 곶자왈 탐험. 키즈타운, 유모차 이용 가능. 정상가 성인 약 2.1만원·09:00~18:00(매표 17:00까지, 2026 안내 기준 — 방문 전 확인). ⚠️ 반려견 동반 공식 미확인 → 사전 문의 필수 (064-802-8000).",
            duration: "3~4시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "에코랜드 내 카페 + 산책",
        places: [
          {
            name: "에코랜드 카페",
            address: "에코랜드 내",
            desc: "호수 뷰 카페. 여유로운 오후.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "조천 맛집",
        places: [
          {
            name: "조천 맛집",
            address: "제주시 조천읍",
            desc: "해산물, 흑돼지.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "조천 맛집",
        menu: "흑돼지 구이, 해물라면",
        price: "1만~2만5천원",
        address: "제주시 조천읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "에코랜드는 종일 코스. 아기 기관차 탑승 가능. ⚠️ 반려견 동반 불가 가능성 높음 → 사전 문의(064-802-8000).",
    rainPlan: "에코랜드는 야외 위주 → 비 시 제주항공우주박물관(실내, 키즈존) or 스누피가든(구좌, 실내전시)으로 대체. 가벼운 비면 에코랜드 실내 카페+기관차만 이용.",
    travelInfo: { mainDest: "에코랜드", oneWay: "28분", roundTrip: "55분", fatigue: "양호" },
    dogAlternatives: [
      { name: "안돌오름 비밀의숲 (교래자연휴양림 대체)", desc: "구좌 송당리 2173, 에코랜드에서 차로 약 20분. 반려견 동반 가능(목줄·배변봉투 필수), 성인 5,000원(2026.3 조정), 09:00~17:30 전후·휴무는 인스타 공지. ※교래자연휴양림은 반려동물 동반 불가로 안내됨.", dog: true },
      { name: "세화해변/월정리해변", desc: "숙소 근처(5~7분). 강아지와 해변 산책.", dog: true },
      { name: "펫시터 이용", desc: "숙소에서 펫시터 방문 돌봄. 가족 모두 에코랜드 즐기기.", dog: true },
    ],
  },
  {
    day: 14,
    date: "2026-11-07",
    dayOfWeek: "토",
    theme: "블리스풀 + 애월 + 감귤따기",
    categories: ["dog", "cafe", "sightseeing"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "블리스풀 (애견 운동장 카페)",
        places: [
          {
            name: "블리스풀",
            address: "제주시 애월읍 유수암리 1176",
            desc: "넓은 잔디 운동장(대·중·소 분리) + 카페, 수제 반려견 간식. 소형견은 안거나 전용의자, 대형견은 야외. 노키즈존 아님. 매주 금요일 휴무(비짓제주 2026) — 오늘 토요일 OK, 운영시간은 방문 전 확인(0507-1387-8604). 비짓제주 '나우다' 제시 시 반려견 무료입장 1장. 숙소에서 약 1시간 10분. ※기존 카페비글은 주소지에 다른 업장이 영업 중이라 교체.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "한담해안산책로 + 귤밭에댕댕이",
        places: [
          {
            name: "한담해안산책로",
            address: "제주시 애월읍 곽지리",
            desc: "해안 절경 산책로. 유모차 가능. 강아지 산책 OK.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
          {
            name: "귤밭에댕댕이",
            address: "제주시 애월읍",
            desc: "3,000평 귤밭 + 잔디밭 운동장. 반려견 동반 감귤따기 체험! 캔들 공방도 가능. 애월읍 고성서5길 15, 10:30~17:30, 일요일 휴무(오늘 토요일 OK). 요금은 후기 기준 귤 3kg 바구니 1.2만원+입장 2천원 선 → 예약 시 확인.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "금돈가 애월",
        places: [
          {
            name: "금돈가",
            address: "제주시 애월읍 가문동남길 63",
            desc: "흑돼지 근고기 전문. 직원이 직접 구워줌. 반려동물 동반 가능(2026 후기, 케이지 지참 권장). 영업 11:00~22:30 전후.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "금돈가",
        menu: "흑돼지 근고기, 목살, 반찬 정갈",
        price: "1만5천~3만원",
        address: "제주시 애월읍 가문동남길 63",
        baby: true,
        dog: true,
      },
    ],
    memo: "블리스풀 운동장에서 강아지들 실컷 뛰기! 11월 감귤따기는 노지감귤 시즌(귤밭에댕댕이 대신 탐나는농장 — 애월읍 오당빌레길 88, 입장 5,000원·감귤따기 1kg 1만원, 아기·반려견 동반 가능 — 도 대안). 오늘은 제주올레걷기축제 마지막 날(숙소 쪽 20코스) — 아침 출발 시 해안도로 혼잡 주의.",
    rainPlan: "블리스풀 실내 카페 공간 활용(소형견 안거나 전용의자). 감귤따기는 비 시 탐나는농장 감귤체험카페(실내) 또는 다른 날로.",
    travelInfo: { mainDest: "블리스풀(유수암)/애월", oneWay: "28~75분", roundTrip: "150분", fatigue: "🔴 고 — 서부 원정" },
  },
  // === 3주차 (11/8~14) ===
  {
    day: 15,
    date: "2026-11-08",
    dayOfWeek: "일",
    theme: "아쿠아플라넷 + 성산 주변",
    categories: ["sightseeing", "baby", "food"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "아쿠아플라넷 제주",
        places: [
          {
            name: "아쿠아플라넷 제주",
            address: "서귀포시 성산읍 섭지코지로 95",
            url: "https://www.aquaplanet.co.kr/jeju/",
            desc: "대형 수족관 + 오션아레나 공연. 실내라 날씨 무관. 유모차 이용 가능. 수유실 있음. 09:30~18:00 전후, 성인 정가 4만원대(판매처·시기별 상이, 온라인 할인 활용), 퇴장 후 재입장 불가. 공연 시간표 먼저 확인.",
            duration: "2~3시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "성산 주변 산책",
        places: [
          {
            name: "광치기해변",
            address: "서귀포시 성산읍 고성리",
            desc: "성산일출봉 뷰포인트. 넓은 해변 산책.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "성산 맛집",
        places: [
          {
            name: "성산 흑돼지 맛집",
            address: "서귀포시 성산읍",
            desc: "제주 흑돼지 구이.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "성산 흑돼지",
        menu: "흑돼지 근고기, 오겹살",
        price: "1만5천~2만5천원대",
        address: "서귀포시 성산읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "아쿠아플라넷 주말 혼잡 → 오전 일찍 방문 추천. 수유실/기저귀교환대 있음.",
    rainPlan: "아쿠아플라넷이 이미 실내! 완벽한 비 오는 날 일정.",
    travelInfo: { mainDest: "아쿠아플라넷/광치기", oneWay: "43분", roundTrip: "85분", fatigue: "주의" },
    dogAlternatives: [
      { name: "광치기해변 산책", desc: "아쿠아플라넷에서 차로 5분. 성산일출봉 뷰. 강아지 산책 가능.", dog: true },
      { name: "섭지코지 산책로", desc: "아쿠아플라넷 바로 옆. 해안 산책로. 강아지 OK.", dog: true },
      { name: "펫시터 이용", desc: "숙소에서 펫시터 방문 돌봄. 가족 모두 아쿠아플라넷 즐기기.", dog: true },
    ],
  },
  {
    day: 16,
    date: "2026-11-09",
    dayOfWeek: "월",
    theme: "세화 카페 + 동네 휴식",
    categories: ["cafe", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "여유로운 오전",
        places: [
          {
            name: "숙소에서 천천히",
            address: "구좌읍 세화리",
            desc: "3주차 시작, 늦잠과 함께 느긋하게. 아기 컨디션 보며 출발 시간 조정.",
            duration: "오전 자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "세화 카페 탐방",
        places: [
          {
            name: "세화 해안 카페거리",
            address: "제주시 구좌읍 세화리",
            desc: "세화해변 뷰 카페들. 반려견 동반 가능 카페 다수.",
            duration: "2시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "편하게 자취. 아기 이유식 + 간단 요리.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "세화 카페",
        menu: "커피, 당근케이크, 스콘",
        price: "5천~1만원",
        address: "제주시 구좌읍 세화리",
        baby: true,
        dog: true,
      },
    ],
    memo: "세화 카페 중 반려견 동반 + 유모차 진입 가능한 곳 체크.",
    rainPlan: "세화 카페에서 비 오는 바다 뷰 감상하며 여유. 제주스런 공방(무드등 만들기 체험, 실내, 반려견 케이지 동반 — 운영·예약 여부 방문 전 확인) 또는 제주해녀박물관(구좌, 실내) 추천.",
    travelInfo: { mainDest: "숙소/세화 카페", oneWay: "5분", roundTrip: "10분", fatigue: "양호" },
  },
  {
    day: 17,
    date: "2026-11-10",
    dayOfWeek: "화",
    theme: "서귀포 원정",
    categories: ["sightseeing", "food"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "쇠소깍",
        places: [
          {
            name: "쇠소깍",
            address: "서귀포시 하효동",
            desc: "바다와 민물이 만나는 용암 계곡. 투명카약은 동절기 09:00~15:00 운영·2인 약 2만원(2026 후기, 기상 따라 중단). ⚠️ 영아 탑승 제한(24개월 미만 불가로 알려짐 — 현장 확인) → 부부 교대 체험 or 계곡 산책으로 대체.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "정방폭포 + 칠십리 해안도로",
        places: [
          {
            name: "정방폭포",
            address: "서귀포시 칠십리로214번길 37",
            url: "https://www.jeju.go.kr/jejuwnh/place/jeongbang.htm",
            desc: "바다로 떨어지는 폭포. 계단 많으므로 아기띠 필수.",
            duration: "40분",
            baby: true,
            dog: true,
          },
          {
            name: "서귀포 칠십리 해안도로",
            address: "서귀포시 서홍동",
            desc: "새연교·외돌개 방향 해안 산책. 유모차·강아지 모두 가능한 포장길. 바다뷰 최고.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "모메든식당",
        places: [
          {
            name: "모메든식당",
            address: "서귀포시 일주서로 508",
            desc: "흑돼지 연탄 깡통구이. 야외 캠핑 바비큐 분위기, 반려견 동반 가능(대형견·전체이용 여부는 예약 시 확인). 저녁 17:30 오픈·일요일 휴무로 안내됨(2024 후기 기준 — 방문 전 확인).",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "모메든식당",
        menu: "흑돼지 연탄구이, 깡통구이",
        price: "1만5천~3만원",
        address: "서귀포시 일주서로 508",
        baby: true,
        dog: true,
      },
    ],
    memo: "서귀포까지 동부에서 차로 약 55분. 아기 낮잠 시간에 이동하면 효율적. ⚠️ 투명카누 24개월 미만 탑승 불가 → 부부 교대 체험 or 쇠소깍 계곡 산책으로 대체.",
    rainPlan: "쇠소깍 카누는 비 시 취소 가능 → 서귀포올레시장(지붕 있음) 시간 늘리기 + 정방폭포는 우비 입고 가능. 강우량 많으면 제주항공우주박물관(안덕, 실내)으로 대체. ※9.81파크는 애월(천덕로 880-24)이라 서귀포에서 멀고, 우천 시 실외 레이싱은 중단될 수 있음.",
    travelInfo: { mainDest: "서귀포(쇠소깍/정방폭포)", oneWay: "55~65분", roundTrip: "130분", fatigue: "🔴 고 — 남부 원정" },
  },
  {
    day: 18,
    date: "2026-11-11",
    dayOfWeek: "수",
    theme: "온전한 휴식일",
    categories: ["baby", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "푹 쉬는 오전",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "아기/강아지 모두 쉬는 날. 늦잠, 느긋한 아침.",
            duration: "오전 자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "숙소 휴식",
        places: [
          {
            name: "숙소 + 주변 산책",
            address: "성산/구좌",
            desc: "여유롭게 쉬기. 아기 놀이, 강아지 산책. 빨래/정리.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "편하게 쉬면서 저녁.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "아기와 강아지 컨디션 회복일. 무리하지 않기. 빨래, 정리 시간.",
    rainPlan: "원래 휴식일이므로 날씨 무관.",
    travelInfo: { mainDest: "숙소 (휴식일)", oneWay: "-", roundTrip: "-", fatigue: "양호" },
  },
  {
    day: 19,
    date: "2026-11-12",
    dayOfWeek: "목",
    theme: "휴애리자연생활공원",
    categories: ["sightseeing", "baby", "food"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "가벼운 오전",
        places: [
          {
            name: "숙소 주변",
            address: "성산/구좌",
            desc: "느긋한 아침. 아기 이유식 후 출발. 🐶 강아지는 숙소에서 대기.",
            duration: "자유",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "휴애리자연생활공원",
        places: [
          {
            name: "휴애리자연생활공원",
            address: "서귀포시 남원읍 신례동로 256",
            desc: "수유실, 유모차 대여 가능. 동물 먹이주기 체험, 감귤 따기(11월, 입장료 외 추가요금 — 2025년 8,000원). 성인 입장 13,000원 선. 아기에게 좋은 자연 체험.",
            duration: "2~3시간",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "남원 맛집",
        places: [
          {
            name: "남원 맛집",
            address: "서귀포시 남원읍",
            desc: "해산물 or 흑돼지.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "남원 해산물",
        menu: "갈치조림, 고등어조림",
        price: "1만~2만원대",
        address: "서귀포시 남원읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "휴애리는 아기와 함께하기 최적. 유모차 무료 대여, 수유실 완비. ⚠️ 반려견 7kg 미만 소형견만 입장 가능 → 10kg 강아지는 입장 불가. 강아지는 숙소 대기 or 펫시터 필요.",
    rainPlan: "휴애리는 야외 위주 → 제주항공우주박물관(안덕, 실내, 2~3시간)으로 변경. 또는 헬로키티아일랜드(안덕면, 실내전시, 09:00~18:00 — 2026년 운영 후기 확인, 방문 전 확인).",
    travelInfo: { mainDest: "휴애리(남원)", oneWay: "60분", roundTrip: "120분", fatigue: "🔴 고 — 남부 원정" },
    dogAlternatives: [
      { name: "숙소에서 펫시터", desc: "남부 원정일이라 강아지는 숙소에서 펫시터 돌봄이 가장 현실적.", dog: true },
      { name: "세화/월정리 해변 산책", desc: "한 명이 강아지와 숙소 근처 산책. 부부 교대로 휴애리.", dog: true },
    ],
  },
  {
    day: 20,
    date: "2026-11-13",
    dayOfWeek: "금",
    theme: "제주항공우주박물관",
    categories: ["sightseeing", "baby"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "느긋한 오전 후 출발",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "오전 천천히 준비 후 서부로 출발. 🐶 강아지는 숙소에서 대기(돌봄/펫시터 고려).",
            duration: "2시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "제주항공우주박물관",
        places: [
          {
            name: "제주항공우주박물관",
            address: "서귀포시 안덕면 항공우주로 83",
            desc: "실내 박물관. 키즈존 있음, 유모차 대여. 비행기, 우주 전시. 09:00~18:00(입장 마감 17:00), 휴관 매월 셋째 월요일(11/16) — 오늘(금) 정상. 성인 1만원 선(시기별 변동, 36개월 미만 무료).",
            duration: "2~3시간",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "중문 근처 맛집",
        places: [
          {
            name: "중문 맛집",
            address: "서귀포시 중문관광로",
            desc: "돌솥밥, 흑돼지 등.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "중문 돌솥밥",
        menu: "돌솥밥 정식, 해물뚝배기",
        price: "1만~2만원대",
        address: "서귀포시 중문",
        baby: true,
        dog: false,
      },
    ],
    memo: "항공우주박물관은 실내라 비 올 때 완벽한 대안. 키즈존 10개월에게도 OK.",
    rainPlan: "이미 실내 일정!",
    travelInfo: { mainDest: "항공우주박물관(안덕)", oneWay: "85분", roundTrip: "170분", fatigue: "🔴 최고 — 서부 원정" },
    dogAlternatives: [
      { name: "숙소에서 펫시터", desc: "서부 원정일이라 강아지는 숙소에서 펫시터 돌봄 추천.", dog: true },
      { name: "오설록 녹차밭 야외", desc: "항공우주박물관 근처. 야외 강아지 동반 가능. 실내 불가.", dog: true },
    ],
  },
  {
    day: 21,
    date: "2026-11-14",
    dayOfWeek: "토",
    theme: "중문관광단지",
    categories: ["sightseeing", "food"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "주상절리 + 천제연폭포",
        places: [
          {
            name: "대포주상절리",
            address: "서귀포시 중문관광로 216",
            desc: "기둥 모양 절벽. 유모차 산책 가능한 데크길. 🐶 강아지는 숙소 대기 (이 날은 비-강아지 날).",
            duration: "40분",
            baby: true,
            dog: false,
          },
          {
            name: "천제연폭포",
            address: "서귀포시 천제연로 132",
            desc: "3단 폭포. 1폭포까지 계단 → 아기띠 추천. 반려견 출입 불가.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "여미지식물원",
        places: [
          {
            name: "여미지식물원",
            address: "서귀포시 중문관광로 93",
            url: "https://www.yeomiji.or.kr/",
            desc: "실내외 식물원(2026 운영 중). 유모차 이용 가능. 열대식물 온실, 정원 산책. 09:00~18:00(입장 마감 17:30, 2026 안내 기준).",
            duration: "1시간 30분",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "중문 해산물",
        places: [
          {
            name: "중문 해산물 레스토랑",
            address: "서귀포시 중문관광로",
            desc: "신선한 해산물. 뷰 좋은 식당.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "중문 해산물",
        menu: "해산물 모둠, 전복구이, 회",
        price: "2만~4만원대",
        address: "서귀포시 중문관광로",
        baby: true,
        dog: false,
      },
    ],
    memo: "🐶 비-강아지 날 — 강아지는 숙소 대기 or 펫시터. 중문관광단지 내 이동 많으므로 주차장 위치 미리 파악. 아기 낮잠 시간에 차 이동.",
    rainPlan: "여미지식물원(실내) 관람 시간 늘리기 + 중문 실내 카페. 주상절리는 우비 입고 짧게 가능. 폭우 시 제주항공우주박물관(안덕, 실내)으로 대체(9.81파크는 애월이라 중문에서 멀고 실외 레이싱은 우천 중단 가능).",
    travelInfo: { mainDest: "중문관광단지", oneWay: "82분", roundTrip: "165분", fatigue: "🔴 최고 — 남부 원정, 전날 휴식 권장" },
    dogAlternatives: [
      { name: "대포주상절리 산책", desc: "천제연 대신 주상절리 데크길 산책. 반려견 가능 추정 (확인 필요 064-738-1521).", dog: true },
      { name: "중문색달해변 산책", desc: "중문관광단지 내 해변. 강아지 산책 가능.", dog: true },
      { name: "숙소에서 펫시터", desc: "남부 원정 종일 코스. 펫시터가 가장 현실적.", dog: true },
    ],
  },
  // === 4주차 (11/15~21) ===
  {
    day: 22,
    date: "2026-11-15",
    dayOfWeek: "일",
    theme: "1100도로 드라이브 + 서귀포 산책",
    categories: ["sightseeing", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "1100도로 드라이브",
        places: [
          {
            name: "1100고지 습지",
            address: "서귀포시 색달동 산1-2",
            desc: "차 안에서 단풍·억새 감상 드라이브. 휴게소에서 잠깐 내려 산책. 11월 중순 첫눈 가능성!",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
          {
            name: "어승생악 입구 전망대",
            address: "제주시 해안동 산220",
            desc: "주차장에서 5분 거리 전망 포인트. 유모차·강아지 가능. 한라산 조망.",
            duration: "30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "서귀포 걷기 좋은 길",
        places: [
          {
            name: "이중섭거리·서귀포매일올레시장",
            address: "서귀포시 이중섭로",
            desc: "아기 유모차로 산책하기 좋은 평지 거리. 시장 구경 + 간식. 강아지 동반 가능.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
          {
            name: "서귀포 칠십리 해안도로",
            address: "서귀포시 서홍동",
            desc: "새연교·외돌개 방향 해안 산책. 유모차 가능한 포장길. 바다 뷰.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "아솥 서귀포",
        places: [
          {
            name: "아솥 서귀포본점",
            address: "서귀포시 동홍로303번길 13",
            desc: "솥뚜껑 삼겹살. 캠핑 컨셉 프라이빗 공간(4동). 귤밭뷰. 반려견 동반 가능·유아의자 있음(2026 후기). 12:00~23:00 전후, 동 수가 적어 예약 추천.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "아솥 서귀포본점",
        menu: "솥뚜껑 삼겹살, 캠핑 바비큐",
        price: "1만5천~3만원",
        address: "서귀포시 동홍로303번길 13",
        baby: true,
        dog: true,
      },
    ],
    memo: "1100도로는 차 안에서 한라산 풍경 감상 가능 — 등산 없이도 충분히 즐길 수 있는 코스. 아기 낮잠 시간에 드라이브하면 효율적. 서귀포 시내는 평지라 유모차 이동 편리.",
    rainPlan: "오전 제주항공우주박물관(안덕, 실내, 유모차 가능) — 1100도로는 비·안개 시 시야 불량이라 패스, 오후 서귀포매일올레시장(지붕 있음) + 실내 카페.",
    travelInfo: { mainDest: "1100도로 → 서귀포", oneWay: "70분", roundTrip: "140분", fatigue: "🟡 중 — 드라이브 위주, 걷기 부담 적음" },
  },
  {
    day: 23,
    date: "2026-11-16",
    dayOfWeek: "월",
    theme: "온전한 휴식일",
    categories: ["dog", "baby"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "푹 쉬는 오전",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "등산 다음 날 회복일. 늦잠, 느긋한 아침.",
            duration: "오전 자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "동네 산책 + 정비",
        places: [
          {
            name: "숙소 주변",
            address: "성산/구좌",
            desc: "가벼운 산책, 쉬기. 차 충전·짐 정리 등 생활 정비.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "편하게 자취.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "전날 서귀포 원정 후 휴식일. 가볍게 쉬기.",
    rainPlan: "원래 휴식일.",
    travelInfo: { mainDest: "숙소 (휴식일)", oneWay: "-", roundTrip: "-", fatigue: "양호" },
  },
  {
    day: 24,
    date: "2026-11-17",
    dayOfWeek: "화",
    theme: "산굼부리 + 안돌오름 비밀의숲",
    categories: ["sightseeing", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "산굼부리",
        places: [
          {
            name: "산굼부리",
            address: "제주시 조천읍 비자림로 768",
            url: "https://www.sangumburi.net/",
            desc: "분화구 형태 오름. 억새밭 절경 (11월!). 유모차 진입 가능한 데크. 성인 7,000원, 11~2월 09:00~17:40(입장 마감 17:00), 064-783-9900. ⚠️ 반려견 동반 불가 (천연기념물 제263호).",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "안돌오름 비밀의숲 (강아지와 숲길)",
        places: [
          {
            name: "안돌오름 비밀의숲",
            address: "제주시 구좌읍 송당리 2173",
            desc: "삼나무·편백 숲길과 초원을 40분~1시간 도는 사유지 숲. 반려견 동반 가능(목줄·배변봉투 필수). 성인 5,000원(2026.3.16 조정, 7세 이하 3,000원), 09:00~17:30 전후, 휴무는 인스타 공지. 비포장 진입로·비 온 뒤 진흙 → 아기띠 추천. ※기존 교래자연휴양림은 반려동물 동반 불가로 안내돼(비짓제주 등) 교체.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "교래 맛집",
        places: [
          {
            name: "교래 맛집",
            address: "제주시 조천읍 교래리",
            desc: "제주 흑돈 돈까스 등.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "교래 맛집",
        menu: "흑돈 돈까스, 제주 보리빵",
        price: "1만~2만원",
        address: "제주시 조천읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "산굼부리 11월 억새는 절경! 포토 스팟. ⚠️ 산굼부리 반려견 동반 불가(천연기념물) → 한 명이 강아지와 주차장 대기, 번갈아 관람. 오후 비밀의숲은 반려견 동반 가능(목줄·배변봉투) — 산굼부리에서 송당 방향 차로 약 15~20분(추정). ⚠️ 교래자연휴양림은 반려동물 동반 불가로 안내됨(064-710-7475).",
    rainPlan: "산굼부리는 가벼운 비엔 우비 입고 가능하나, 강풍/폭우 시 제주해녀박물관(구좌, 실내) or 스누피가든(구좌, 실내 — 반려견은 수요일만)으로 대체. 비밀의숲은 비 온 뒤 진흙길 → 패스.",
    travelInfo: { mainDest: "산굼부리/송당 비밀의숲", oneWay: "30분", roundTrip: "60분", fatigue: "양호" },
    dogAlternatives: [
      { name: "안돌오름 비밀의숲", desc: "구좌 송당리 2173. 반려견 동반 가능(목줄·배변봉투), 성인 5,000원. ※교래자연휴양림은 반려동물 동반 불가로 안내됨.", dog: true },
      { name: "산굼부리 주차장 주변 산책", desc: "한 명이 강아지와 주차장 부근 산책. 주변 오름 뷰 좋음.", dog: true },
      { name: "에코랜드 주변", desc: "산굼부리에서 10분. 에코랜드 반려견 가능 여부 사전 확인.", dog: true },
    ],
  },
  {
    day: 25,
    date: "2026-11-18",
    dayOfWeek: "수",
    theme: "단골 동네 카페 + 휴식",
    categories: ["cafe", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "여유로운 오전",
        places: [
          {
            name: "숙소에서 천천히",
            address: "구좌 일대",
            desc: "느긋하게 시작. 아기 컨디션 보며 오후 카페 나들이 준비.",
            duration: "오전 자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "동네 카페 탐방",
        places: [
          {
            name: "구좌/세화 카페",
            address: "구좌읍",
            desc: "새로운 카페 발굴. 반려견 동반.",
            duration: "2시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 자취",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "자취.",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "4주차 중반. 이제 동네 단골 카페가 생길 시기!",
    rainPlan: "동네 카페에서 비 오는 바다 감상하며 여유. 외출하고 싶으면 제주스런 공방(무드등 만들기, 실내 — 운영·예약 여부 방문 전 확인) 체험 추천. 오늘(수)은 스누피가든 반려동물데이(전용 입장권)라 강아지와 실내 전시 관람도 가능.",
    travelInfo: { mainDest: "숙소/구좌 카페", oneWay: "5분", roundTrip: "10분", fatigue: "양호" },
  },
  {
    day: 26,
    date: "2026-11-19",
    dayOfWeek: "목",
    theme: "재방문 베스트",
    categories: ["sightseeing", "food", "cafe"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "가장 좋았던 곳 재방문",
        places: [
          {
            name: "베스트 스팟 재방문",
            address: "TBD",
            desc: "지금까지 가장 좋았던 장소를 다시 방문. 날씨/기분에 따라 선택.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "재방문 or 새로운 곳",
        places: [
          {
            name: "자유 일정",
            address: "TBD",
            desc: "좋았던 맛집, 카페, 해변 재방문 or 아직 못 간 곳.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "베스트 맛집 재방문",
        places: [
          {
            name: "베스트 맛집",
            address: "TBD",
            desc: "한달살이 중 가장 맛있었던 맛집 재방문.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "자유로운 날! 그동안의 경험을 바탕으로 최고의 하루를 만들기.",
    rainPlan: "실내 베스트 스팟 재방문: 아쿠아플라넷(재입장X, 못 간 경우), 스누피가든, 여미지식물원, 오설록 중 미방문 장소 우선. 또는 숙소에서 여유롭게 자취+영화.",
    travelInfo: { mainDest: "자유 일정 (TBD)", oneWay: "-", roundTrip: "-", fatigue: "선택에 따라 다름" },
  },
  {
    day: 27,
    date: "2026-11-20",
    dayOfWeek: "금",
    theme: "감귤농장 + 동문야시장",
    categories: ["sightseeing", "food"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "감귤농장 체험",
        places: [
          {
            name: "감귤농장",
            address: "제주시 구좌읍 or 서귀포시 일대",
            desc: "노지감귤 시즌! 감귤 따기 체험 + 시식. 아기도 참여 가능. 📅 11/19~23 2026 제주감귤박람회(제주농업생태원 일원) 기간이라 서귀포 쪽이면 함께 둘러보기 가능(입장료·프로그램은 공식 누리집 확인).",
            duration: "1시간 30분",
            baby: true,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "여유 시간",
        places: [
          {
            name: "숙소 또는 주변",
            address: "성산/구좌",
            desc: "쉬다가 저녁 출발.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "동문야시장",
        places: [
          {
            name: "제주 동문야시장",
            address: "제주시 관덕로14길 20",
            desc: "연중무휴 매일 운영. 동절기(11월) 18:00~24:00. 제주 특산 야시장 먹거리! 아기띠 추천.",
            duration: "2시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "동문야시장",
        menu: "흑돼지꼬치, 감귤주스, 오메기떡, 해산물튀김",
        price: "5천~1만5천원",
        address: "제주시 관덕로14길 20",
        baby: true,
        dog: false,
      },
    ],
    memo: "동문야시장은 매일 운영 (11~4월 18:00~24:00, 8번 게이트 쪽). 재료 소진 시 조기 마감. 사람 많으므로 유모차보다 아기띠. 오늘(11/20)은 세화오일장 날. 📅 같은 주 11/19~22 최남단방어축제(모슬포항) — 서부라 동선 멀어 참고만.",
    rainPlan: "감귤농장은 비 시 실내 수확 체험 가능한 곳 확인. 동문야시장은 지붕 없는 구간 있음 → 우비 필수 or 동문재래시장(지붕 있음)에서 먹거리로 대체.",
    travelInfo: { mainDest: "감귤농장(구좌)+동문야시장(제주시)", oneWay: "10~50분", roundTrip: "100분", fatigue: "주의 — 저녁 제주시 이동" },
  },
  {
    day: 28,
    date: "2026-11-21",
    dayOfWeek: "토",
    theme: "올레길 + 성산 맛집",
    categories: ["sightseeing", "food", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "올레길 1코스 (시흥~광치기)",
        places: [
          {
            name: "제주올레 1코스",
            address: "서귀포시 성산읍 시흥리~광치기해변",
            desc: "성산일출봉 뷰. 해안 올레길. 아기띠 + 강아지 산책. 약 2~3시간 코스.",
            duration: "2~3시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "성산 카페",
        places: [
          {
            name: "성산 카페",
            address: "서귀포시 성산읍",
            desc: "올레길 후 카페에서 휴식.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "쉐프1192 (마지막 외식)",
        places: [
          {
            name: "쉐프1192레스토랑",
            address: "서귀포시 성산읍 환해장성로 465",
            desc: "오션뷰 양식(펜션 겸업, 일몰뷰). 나시고랭, 찹스테이크, 파스타. 애견동반 가능(2026 후기). 10:00~21:00 전후, 매주 월요일 정기휴무(오늘 토요일 OK). 마지막 주말 특별 외식!",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "쉐프1192레스토랑",
        menu: "나시고랭, 찹스테이크, 파스타",
        price: "2만~4만원대",
        address: "서귀포시 성산읍 환해장성로 465",
        baby: true,
        dog: true,
      },
    ],
    memo: "마지막 주말! 성산 근처에서 편하게. 쉐프1192는 오션뷰 + 반려견 실내 동반 가능 → 온 가족 함께.",
    rainPlan: "올레길은 비 시 미끄러움 → 가벼운 구간만 우비 입고 or 패스. 대신 성산 실내 카페에서 마지막 바다 뷰 감상 + 기념품 쇼핑.",
    travelInfo: { mainDest: "올레길1코스(성산)", oneWay: "40분", roundTrip: "80분", fatigue: "주의" },
  },
  // === 마지막 (11/22~23) ===
  {
    day: 29,
    date: "2026-11-22",
    dayOfWeek: "일",
    theme: "짐 정리 + 마지막 산책",
    categories: ["checklist"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "짐 정리 + 숙소 청소",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "짐 정리, 빨래, 청소. 체크아웃 준비.",
            duration: "3시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "마지막 산책 - 세화해변",
        places: [
          {
            name: "세화해변",
            address: "제주시 구좌읍 세화리",
            desc: "첫날에도 갔던 세화해변에서 마지막 산책. 추억 회상.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "마지막 저녁",
        places: [
          {
            name: "숙소 or 근처 맛집",
            address: "성산/구좌",
            desc: "한달살이 마지막 밤. 간단하게 또는 특별하게.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "내일 07:20 제주발(공식 월간스케줄) — 차량 06:50 선적 마감이라 오늘 밤 짐을 차에 미리 싣기. ⚡테슬라 충전한도 50% 미만 확인. 강아지 케이지(승선 필수), 아기 카시트·등본, 전원 신분증 확인.",
    rainPlan: "실내 정리 집중.",
    travelInfo: { mainDest: "숙소 (정리일)", oneWay: "-", roundTrip: "-", fatigue: "양호" },
  },
  {
    day: 30,
    date: "2026-11-23",
    dayOfWeek: "월",
    theme: "귀환",
    categories: ["checklist"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "숙소 체크아웃 → 제주항",
        places: [
          {
            name: "제주항 국제여객터미널 (7부두)",
            address: "제주시 임항로 193",
            desc: "퀸메리호 탑승 — ⚠️ 공식 월간스케줄(2026.10.20 조회) 기준 11/23 제주발 07:20 (기존 07:00 아님, 예약 문자로 재확인). 퀸메리는 연안여객터미널(임항로 111)이 아닌 국제여객터미널 출발로 안내됨. 차량은 출항 30분 전(06:50), 여객은 10분 전 마감 → 숙소(약 1시간)에서 05:30 전후 출발. 펫 객실 + 모델Y 선적. ⚡전날 배터리 50% 미만으로 충전 조절 필수!",
            duration: "항해 약 4~5시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "목포항 도착 → 귀가",
        places: [
          {
            name: "목포항 삼학부두 여객터미널",
            address: "전남 목포시 삼학로158번길 65",
            desc: "하선 후 자차로 귀가. 도착 시각은 승선권에 표기된 시간 확인(퀸메리 정규 시간표 복귀 구간).",
            duration: "귀가 이동",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "집 도착",
        places: [
          {
            name: "집",
            address: "",
            desc: "한달살이 종료! 수고했어요 🎉",
            duration: "-",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [],
    memo: "선박 내 식사 가능. 간식/음료 미리 준비. 아기 분유, 강아지 사료 챙기기.",
    rainPlan: "이동일이므로 날씨 무관.",
    travelInfo: { mainDest: "제주→목포 이동일", oneWay: "62분(제주항)", roundTrip: "-", fatigue: "이동일" },
  },
];

// 사전 준비 체크리스트
const CHECKLISTS = {
  ship: {
    title: "선박 예약 (✅ 퀸메리호 예약 완료)",
    icon: "🚢",
    items: [
      { text: "✅ 퀸메리호 예약 완료 (목포↔제주, 2026.04.30 취항)", checked: true },
      { text: "✅ 테슬라 모델Y 선적 예약 (수입차 분류, 편도 약 17.6만원 / 일·공휴일 18.5만원)", checked: true },
      { text: "✅ 왕복 예약 (10/25 출발, 11/23 귀환)", checked: true },
      { text: "예약 확정 문자/이메일 보관, 승선 시간·차량 선적 마감 재확인", checked: false },
      { text: "고객센터: 1577-3567 (월~토 09:00~18:00)", checked: false },
      { text: "반려동물 승선 서류 준비 (동물등록증, 예방접종증명서)", checked: false },
      { text: "⚡ 선적 전날/당일 배터리 50% 미만으로 낮추기 (테슬라 앱 충전한도 50% 설정)", checked: false },
    ],
  },
  baby: {
    title: "아기 용품",
    icon: "👶",
    items: [
      { text: "분유 2주분 + 이유식 재료/시판 이유식", checked: false },
      { text: "기저귀 240장 or 현지 구매 계획", checked: false },
      { text: "아기 해열제 2종(아세트아미노펜·이부프로펜 시럽, 체중별 용량 메모) + 체온계 + 비상약 — 편의점 어린이 해열제는 품절 잦음", checked: false },
      { text: "똑닥(ddocdoc) 앱 설치 — 제주 소아과 실시간 접수용", checked: false },
      { text: "아기수첩(예방접종 기록) 챙기기 — 병원 방문 대비", checked: false },
      { text: "카시트 (자차에 장착 확인)", checked: false },
      { text: "유모차 + 아기띠", checked: false },
      { text: "방한복/바람막이 (11월 제주 바람!)", checked: false },
      { text: "이유식 식기 + 보온도시락", checked: false },
      { text: "아기 세제/세정제", checked: false },
      { text: "아기 로션/보습제 (건조한 바닷바람)", checked: false },
      { text: "물티슈 20팩", checked: false },
    ],
  },
  dog: {
    title: "강아지 용품",
    icon: "🐶",
    items: [
      { text: "하드 케이지 2개 (선박 필수)", checked: false },
      { text: "입마개 2개 (승선 시 착용 필수)", checked: false },
      { text: "리드줄/하네스 2세트", checked: false },
      { text: "사료 한달분 + 간식", checked: false },
      { text: "배변패드 150장", checked: false },
      { text: "예방접종 증명서 + 동물등록증", checked: false },
      { text: "방한복 (11월 바람 대비)", checked: false },
      { text: "이동용 물병 + 접이식 밥그릇", checked: false },
      { text: "구급약품 (소독약, 지혈제)", checked: false },
      { text: "진드기 예방약(이속사졸린 계열) 출발 전 투여 — 제주 진드기 9~11월 활발", checked: false },
      { text: "심장사상충 예방약 출발 전 투여", checked: false },
    ],
  },
  ev: {
    title: "전기차 (테슬라 모델Y)",
    icon: "⚡",
    items: [
      { text: "CCS 콤보1 어댑터 (공공 급속충전 필수, 테슬라샵 약 30만원)", checked: false },
      { text: "J1772 어댑터 (완속충전용 — 차량 기본 포함 여부 확인)", checked: false },
      { text: "EV Infra / 탐라는전기차 앱 설치 (충전소 실시간 위치·상태)", checked: false },
      { text: "환경부 충전카드 발급 (무공해차 통합누리집 ev.or.kr)", checked: false },
      { text: "테슬라 앱 결제수단 등록 (슈퍼차저용)", checked: false },
      { text: "숙소 완속충전(7kW) 가능 여부 호스트에 확인", checked: false },
      { text: "선적 전 배터리 50% 미만으로 (항해 중 충전 금지!)", checked: false },
    ],
  },
  life: {
    title: "생활용품",
    icon: "🏠",
    items: [
      { text: "포켓 와이파이 or 데이터 확인", checked: false },
      { text: "우산/우비 (11월 비 대비)", checked: false },
      { text: "방한 용품 (패딩, 히트텍, 머플러)", checked: false },
      { text: "운동화 + 슬리퍼", checked: false },
      { text: "상비약 (소화제, 진통제, 밴드)", checked: false },
      { text: "세면도구", checked: false },
      { text: "카메라/삼각대", checked: false },
    ],
  },
};

// 비상 연락처
const EMERGENCY_CONTACTS = [
  { name: "소아 야간(달빛)", place: "나우메디의원 (매일 09~23시)", phone: "064-727-1339", icon: "👶", mapQuery: "나우메디의원 제주" },
  { name: "소아 응급", place: "제주대병원 응급실 (24시, 대표번호)", phone: "064-717-1114", icon: "🏥", mapQuery: "제주대학교병원 응급의료센터" },
  { name: "동물병원 24시", place: "제주24시숨동물의료센터", phone: "064-805-8365", icon: "🐾", mapQuery: "제주24시숨동물의료센터" },
  { name: "권역응급센터", place: "제주한라병원 응급실 (24시)", phone: "064-740-5159", icon: "🏨", mapQuery: "제주한라병원 권역응급센터" },
  { name: "페리", place: "씨월드고속훼리", phone: "1577-3567", icon: "🚢" },
  { name: "경찰", place: "제주경찰청", phone: "182", icon: "🚔", mapQuery: "제주경찰청" },
  { name: "소방/구급", place: "119 구급대", phone: "119", icon: "🚑" },
  { name: "심야약국", place: "세화약국 (구좌, 공공심야 · 밤엔 전화 먼저)", phone: "064-784-8442", icon: "💊", mapQuery: "세화약국 구좌" },
];

// 🏥 병원·응급 가이드 (영유아 + 반려견) — 2026.10.20 최신화
// 출처: e-gen 달빛어린이병원 API(2026.10.20 조회) · e-gen/심평원 진료시간(카카오맵 장소정보 경유) · 제주도 발표 기사 · 병원 공식 홈페이지
// 소요시간: 숙소(구좌읍 해맞이해안로 1588-4) 기준 OSRM 경로시간 + 여유(약 10~30%)를 더한 추정치
const MEDICAL_GUIDE = {
  title: "🏥 병원·응급 가이드",
  note: "10~11개월 아기 + 강아지 2마리 기준. 핵심: 동부(구좌·성산)엔 <b>소아청소년과 전문의 의원·24시 동물병원이 없음</b> → 낮 경증은 세화·김녕·성산 동네의원, 밤·중증은 제주시내(차 40~60분). 소요시간은 숙소(하도리) 기준 추정치. 진료시간은 e-gen·심평원 등록 기준이라 실제와 다를 수 있어 <b>출발 전 전화 확인</b>이 원칙. 여행 기간(10/25~11/23)엔 공휴일이 없어 <b>일요일(10/25·11/1·11/8·11/15·11/22)</b>만 주의하면 됩니다.",
  updated: "2026.10.20",
  hotlines: [
    { icon: "🚑", name: "119 구급 · 의료상담 (아기 열·증상, 문 연 병원 안내)", label: "119", tel: "119" },
    { icon: "🌙", name: "달빛 나우메디 (매일 09~23시)", label: "064-727-1339", tel: "064-727-1339" },
    { icon: "🏥", name: "제주대병원 응급실 (대표·24시)", label: "064-717-1114", tel: "064-717-1114" },
    { icon: "🐾", name: "24시 동물병원 (숨)", label: "064-805-8365", tel: "064-805-8365" },
    { icon: "🔎", name: "지금 문 연 응급실·약국 (e-gen)", label: "e-gen ↗", url: "https://www.e-gen.or.kr/egen/search_emergency_room.do" },
    { icon: "☎️", name: "제주 120 콜센터 (생활·관광 안내)", label: "064-120", tel: "064-120" },
  ],
  // 상황별 행동요령 (renderMedical에서 표로 표시)
  steps: [
    { when: "평일·토 낮, 가벼운 증상", what: "세화의원·구좌의원(차 5분) → 소아과 전문의가 필요하면 제주시 화북·삼양 소아청소년과(35~45분)" },
    { when: "일요일 오전", what: "새김녕의원(일 08~12시), 표선연세의원(일 07:30~12시), 성산의원(1·3째 일요일 = 11/1·11/15), 제주시 정소아청소년과·문앤송(일 오전)" },
    { when: "평일 저녁~밤 23시 / 주말 종일", what: "달빛어린이병원 — 나우메디(매일 23시까지, 40~50분) 1순위, 연동·탑동365" },
    { when: "23시 이후 · 고열+처짐·경련·호흡곤란·탈수", what: "119 또는 응급실 직행: 제주대병원(45~55분) · 한마음병원(40~50분) · 한라병원 권역응급센터(50~60분)" },
    { when: "판단이 안 설 때", what: "119에 전화해 의료상담(증상 상담·병원 안내) 먼저 — 아기 체중·체온·증상 시작 시각을 메모해 두면 빠름" },
  ],
  baby: {
    title: "👶 영유아 (10~11개월) 진료",
    wrapBg: "bg-pink-50/60 border-pink-100",
    tips: [
      "제주 소아과는 <b>똑닥(ddocdoc) 앱</b> 접수가 흔함 — 단, 병원별 지원 여부는 이 사이트에서 확인하지 못했으니 앱에서 병원명 검색 후 이용",
      "동부 의원들은 e-gen 진료과목에 '소아청소년과'가 있어도 <b>소아과 전문의가 아닌 경우가 대부분</b>(심평원 의사 정보 기준). 10개월 아기는 미열·가벼운 감기 정도만, 고열·처짐은 시내 소아과·달빛으로",
      "달빛어린이병원은 2026.10.20 e-gen 기준 제주 4곳 그대로(나우메디·연동365·탑동365·우리들소아과) — 2026년 신규 지정·해제 없음",
      "동부에서 시내까지 40~60분 걸리니, 아기 컨디션이 이상하면 달빛 마감(23시) 전에 미리 출발하는 게 안전",
      "병원 갈 때: 아기수첩(접종기록)·건강보험 확인용 신분증·평소 먹는 약 이름·체중 메모",
    ],
    groups: [
      {
        key: "east", name: "동부 · 숙소권 동네의원 (낮 경증 · 소아과 전문의 아님)", color: "teal",
        places: [
          { name: "세화의원", type: "내과·소아청소년과·정형외과", address: "제주시 구좌읍 세화5길 2 (세화리)", phone: "064-783-3196", hours: "평일 08:30~18:00 / 토·공휴일 08:30~12:00 / 일 휴진 (e-gen 등록)", dist: "차 5분", lat: 33.52342, lng: 126.85668, note: "숙소 최근접 의원. e-gen 진료과목에 소아청소년과 포함(전문의 여부 미확인) → 미열·가벼운 감기 1차용.", confirm: "아기 진료 가능 여부 전화 확인", mapQuery: "세화의원 구좌" },
          { name: "구좌의원", type: "내과·소아청소년과·정형외과", address: "제주시 구좌읍 세화12길 1, 2층 (세화리)", phone: "064-782-9282", hours: "월·화·목·금 08:30~18:00 / 수·토 08:30~12:00 / 일·공휴일 휴진 (심평원 등록)", dist: "차 5분", lat: 33.52083, lng: 126.85928, note: "세화 오일장 근처. 일반의 1명(심평원) — 경증 1차용. 아래층 알로하약국, 옆 세화약국.", confirm: "아기 진료 가능 여부 전화 확인", mapQuery: "구좌의원 세화" },
          { name: "새김녕의원", type: "내과·소아청소년과·외과 등", address: "제주시 구좌읍 김녕로 116 (김녕리)", phone: "064-782-8020", hours: "평일 08:00~18:00 / 토 08:00~13:00 / <b>일 08:00~12:00</b> / 공휴일 09:00~13:00 (e-gen 등록)", dist: "차 15~20분", lat: 33.55455, lng: 126.75044, note: "동부에서 드문 <b>일요일 오전 진료</b> 의원. 옆에 김녕약국.", confirm: "일요일 진료 여부 전화 확인", mapQuery: "새김녕의원" },
          { name: "성산의원", type: "내과·소아청소년과 등", address: "서귀포시 성산읍 고성동서로56번길 16 (고성리)", phone: "064-782-4472", hours: "평일 08:00~18:00 (월은 12:00까지로 등록된 곳도 있음) / 토 08:00~12:30 / 일 09:00~12:00 — <b>1·3째 일요일만</b> (심평원)", dist: "차 15~20분", lat: 33.44978, lng: 126.91451, note: "심평원 기준 매월 2·4·5째 일요일 휴진 → 여행 중 일요일 진료일은 <b>11/1, 11/15</b>. 공휴일 진료. 근처에 태양약국.", confirm: "방문 전 전화 확인", mapQuery: "성산의원 고성리" },
          { name: "표선연세의원", type: "내과·소아청소년과 등", address: "서귀포시 표선면 표선관정로 97 (표선리)", phone: "064-787-7123", hours: "평일 07:30~18:00 / 토 07:30~13:00 / <b>일·공휴일 07:30~12:00</b> (e-gen 등록)", dist: "차 30~40분", lat: 33.32431, lng: 126.83087, note: "남동부(표선) 일정 중이거나 일요일 오전에 갈 곳이 없을 때.", confirm: "방문 전 전화 확인", mapQuery: "표선연세의원" },
        ],
      },
      {
        key: "moonlight", name: "달빛어린이병원 (야간·휴일 소아, 만 18세 이하) — e-gen 2026.10.20 기준 4곳", color: "violet",
        places: [
          { name: "나우메디의원", type: "달빛 · 365일", address: "제주시 연북로 511 에이플렉스 3층 (아라일동)", phone: "064-727-1339", hours: "매일(공휴일 포함) 09:00~23:00 · 휴게 12:30~14:00, 18:00~19:00 (e-gen·카카오맵)", dist: "차 40~50분", lat: 33.48444, lng: 126.53454, note: "동부에서 가장 가까운 달빛어린이병원 → 밤 시간대 1순위. 응급의학과 전문의 진료(심평원). 2025.1 달빛 지정.", mapQuery: "나우메디의원 제주" },
          { name: "연동365일의원", type: "달빛 · 연중무휴", address: "제주시 연북로 99, 2층 365빌딩 (연동)", phone: "064-727-3651", hours: "달빛: 평일 18:00~23:00 / 토·일·공휴일 09:00~24:00 (일반진료는 평일 09시부터) · 13~14시, 18~19시는 접수만 (e-gen)", dist: "차 50~60분", lat: 33.48211, lng: 126.49201, note: "주말·공휴일 자정까지 — 제주에서 가장 늦게까지 하는 소아 진료. 소아청소년과 전문의 2명(심평원).", mapQuery: "연동365일의원" },
          { name: "탑동365일의원", type: "달빛 · 연중무휴", address: "제주시 탑동로 24, 2층 (삼도이동)", phone: "064-756-3650", hours: "달빛: 평일 18:00~23:00 / 토·일·공휴일 09:00~23:00 (일반진료 매일 09:00~23:00) · 점심 12:30~14:00 (e-gen)", dist: "차 45~55분", lat: 33.51754, lng: 126.52246, note: "구제주(탑동). 동문시장·탑동 일정 중 아플 때 가까움.", mapQuery: "탑동365일의원" },
          { name: "우리들소아과의원", type: "달빛 (서귀포)", address: "서귀포시 중정로 70, 2층 (서귀동)", phone: "064-732-2323", hours: "평일 14:00~23:00 (휴게 17~18시) / 토 10:00~21:00 / 공휴일 14:00~18:00 / <b>일 휴진</b> (e-gen·카카오맵)", dist: "차 65~75분", lat: 33.24785, lng: 126.56382, note: "남부 일정 중 아플 때. 소아청소년과 전문의. 일요일 휴진 주의.", mapQuery: "우리들소아과 서귀포" },
        ],
      },
      {
        key: "cityclinic", name: "제주시 소아청소년과 (주간 · 전문의) — 동부에서 가까운 화북·삼양 우선", color: "pink",
        places: [
          { name: "아이세상소아청소년과의원", type: "소아청소년과", address: "제주시 화삼로1길 14 아이세상빌딩 2층 (화북일동)", phone: "064-725-6047", hours: "평일 08:30~18:30 (수 ~12:30) / 토 08:30~12:30 / 일 휴진 · 점심 12:30~14:00 (e-gen·카카오맵)", dist: "차 35~45분", lat: 33.51478, lng: 126.57527, note: "일주동로로 시내 들어가면 첫 소아과 밀집지(화북·삼화지구).", mapQuery: "아이세상소아청소년과 제주" },
          { name: "강윤종소아청소년과의원", type: "소아청소년과 전문의", address: "제주시 일주동로 255, 3층 (화북일동)", phone: "064-745-1881", hours: "월·화·목·금 08:30~19:00 / 수 08:30~12:30 / <b>토 08:30~14:00</b> / 일·공휴일 휴무 (심평원)", dist: "차 35~45분", lat: 33.52064, lng: 126.57221, note: "토요일 오후 2시까지. 일주동로변이라 동부에서 찾아가기 쉬움.", mapQuery: "강윤종소아청소년과" },
          { name: "심창은소아청소년과의원", type: "소아청소년과", address: "제주시 화삼북로 139, 3층 (삼양이동)", phone: "064-759-8800", hours: "평일 08:30~18:30 (카카오맵상 18:00, 수 ~12:30) / 토 08:30~12:30 (e-gen)", dist: "차 35~45분", lat: 33.51726, lng: 126.58799, note: "삼화지구. 숙소에서 가장 가까운 소아과 중 하나.", mapQuery: "심창은소아청소년과" },
          { name: "정소아청소년과의원", type: "소아청소년과", address: "제주시 승천로 74 (아라이동)", phone: "064-748-1546", hours: "평일 08:30~19:00 / 토 08:30~16:00 / <b>일·공휴일 08:30~12:00</b> · 점심 12:00~14:00 (e-gen)", dist: "차 40~50분", lat: 33.49219, lng: 126.54257, note: "<b>일요일 오전에 여는 소아과</b> — 일요일 낮 1순위.", confirm: "일요일 진료 전화 확인", mapQuery: "정소아청소년과 제주" },
          { name: "문앤송소아청소년과의원", type: "소아청소년과 전문의 2명", address: "제주시 서광로 220 서광빌딩 3층 (삼도일동)", phone: "064-752-5275", hours: "<b>평일 08:30~21:00</b> / <b>토·일·공휴일 09:00~13:10</b> (e-gen·심평원) · 점심 12:10~14:00, 저녁 17:40~18:30", dist: "차 45~55분", lat: 33.49957, lng: 126.52005, note: "평일 밤 9시까지 + 주말 오전 — 달빛 전 단계로 쓰기 좋음.", mapQuery: "문앤송소아청소년과" },
          { name: "튼튼소아청소년과의원", type: "소아청소년과 전문의", address: "제주시 과원북4길 35 늘푸른빌딩 3층 (노형동)", phone: "064-748-8275", hours: "평일 08:50~18:30 (수 ~12:30) / 토 08:50~13:00 / 일 휴진 (e-gen·카카오맵)", dist: "차 50~60분", lat: 33.48126, lng: 126.48637, note: "신제주(노형) 일정 중일 때. ※ 주소가 '노형로 376'에서 현 주소로 바뀐 것으로 확인돼 수정.", mapQuery: "튼튼소아청소년과 노형" },
        ],
      },
      {
        key: "er", name: "24시간 응급실 (중증·심야)", color: "red",
        places: [
          { name: "제주대학교병원", type: "응급의료센터 · 2026.11 권역응급의료센터 신규 지정", address: "제주시 아란13길 15 (아라일동)", phone: "064-717-1114", hours: "응급실 24시간 · 대표 064-717-1114 (응급센터 직통은 카카오맵 등록 064-717-1900)", dist: "차 45~55분", lat: 33.46746, lng: 126.54565, note: "도내 유일 대학병원·어린이 공공전문진료센터(2023 복지부 지정). 중증 소아 최종 치료 거점이라 아기 중증이면 1순위. 2026.7 복지부 평가에서 권역응급의료센터로 신규 지정(11월~).", confirm: "응급센터 직통번호는 출처마다 달라 대표번호 권장", mapQuery: "제주대학교병원 응급의료센터" },
          { name: "한마음병원", type: "지역응급의료센터", address: "제주시 연신로 52 (이도이동)", phone: "064-750-9119", hours: "응급실 24시간 · 대표 064-750-9000", dist: "차 40~50분", lat: 33.49663, lng: 126.54639, note: "숙소에서 가장 빨리 닿는 시내 대형 응급실. 소아청소년과 진료과목 있음(e-gen). 소아 전용구역은 미확인.", mapQuery: "한마음병원 응급실" },
          { name: "제주한라병원", type: "권역응급의료센터 · 소아응급 진료구역", address: "제주시 도령로 65 (연동)", phone: "064-740-5159", hours: "응급실 24시간 · 대표 064-740-5000", dist: "차 50~60분", lat: 33.4896, lng: 126.48463, note: "2026.7 권역응급의료센터 재지정(2011년부터). 응급실 안에 소아응급환자 진료구역 운영(제이누리 보도). 신제주 일정 중이면 1순위.", mapQuery: "제주한라병원 권역응급센터" },
          { name: "제주한국병원", type: "지역응급의료기관", address: "제주시 서광로 193 (삼도일동)", phone: "064-750-0000", hours: "응급실 24시간 · 대표 064-750-0000 (응급실 직통 미확인)", dist: "차 45~55분", lat: 33.50018, lng: 126.517, note: "구제주 중심. 소아청소년과 진료과목 있음(e-gen).", mapQuery: "한국병원 응급실 제주" },
          { name: "중앙병원 (S중앙병원)", type: "지역응급의료센터", address: "제주시 월랑로 91 (이호이동)", phone: "064-786-7777", hours: "응급실 24시간 · 대표 064-786-7000", dist: "차 50~60분", lat: 33.49232, lng: 126.47048, note: "제주시 서쪽(이호·공항 인근). 서부 일정 귀가길에 가까움.", mapQuery: "중앙병원 응급실 제주" },
          { name: "서귀포의료원", type: "지역응급의료센터", address: "서귀포시 장수로 47 지하1층 (동홍동)", phone: "064-730-3001", hours: "응급실 24시간 · 대표 064-730-3000", dist: "차 65~75분", lat: 33.25516, lng: 126.5645, note: "남부(서귀포·중문) 일정 중 응급 시. 소아 전용구역은 미확인.", mapQuery: "서귀포의료원 응급실" },
        ],
      },
    ],
  },
  pharmacy: {
    title: "💊 약국 (공공심야 · 일요일)",
    wrapBg: "bg-green-50/60 border-green-100",
    tips: [
      "<b>제주 공공심야약국 2026: 7곳</b> — 제주시 구좌 세화약국·조천 영재약국·한림 현재약국 / 서귀포 성산 태양약국·대정 시계탑약국·대정 프라임약국(2026.4 추가)·중문 국민약국. 심야 운영 = 읍·면 20~23시, 동 21~24시 (제주도 발표, 2026.7)",
      "동부 해당: <b>세화약국(5분)·태양약국(성산 15~20분)·영재약국(함덕 25~35분)</b>. 단, 카카오맵 등록 시간과 도 발표 시간이 다르게 나오는 곳이 있어 <b>밤엔 꼭 전화 후 출발</b>",
      "일요일·밤에 문 연 약국은 <a href='https://www.pharm114.or.kr/' target='_blank' class='underline'>휴일지킴이약국</a> 또는 <a href='https://www.e-gen.or.kr/egen/search_pharmacy.do' target='_blank' class='underline'>e-gen 약국찾기</a>에서 '현재 운영' 확인",
      "24시 편의점 <b>안전상비의약품</b>(13품목)에 어린이 해열제(어린이타이레놀현탁액·어린이부루펜시럽)가 포함되지만 품절이 잦다는 보도가 있음 → 아기 해열제 2종은 집에서 챙겨오기. 12개월 미만은 용량을 약사·119 상담으로 확인",
    ],
    groups: [
      {
        key: "pharm", name: "동부 약국", color: "green",
        places: [
          { name: "세화약국", type: "공공심야약국", address: "제주시 구좌읍 세화10길 1, 1층 (세화리)", phone: "064-784-8442", hours: "카카오맵: 화~목 08:00~23:00 / 월·금 08:00~19:00 / 토 08:00~13:00 / 일 휴무 · 도 기준 심야 20~23시(주 6일 이상)", dist: "차 5분", lat: 33.52084, lng: 126.85881, note: "숙소 최근접 공공심야약국. 해열제·상비약 확보 거점.", confirm: "심야 운영 요일 전화 확인", mapQuery: "세화약국 구좌" },
          { name: "구좌약국", type: "일요일 영업(등록)", address: "제주시 구좌읍 구좌로 40, 1층 (세화리)", phone: "064-782-8875", hours: "카카오맵: 매일 07:30~19:30 (일요일 포함)", dist: "차 5분", lat: 33.52329, lng: 126.85567, note: "세화 중심가. 일요일 낮에 문 연 약국 후보.", confirm: "일요일 영업 전화 확인", mapQuery: "구좌약국 세화" },
          { name: "메디팜감초당약국", type: "일요일 영업(등록)", address: "제주시 구좌읍 구좌로 42, 1층 (세화리)", phone: "064-783-2360", hours: "카카오맵: 매일 08:00~18:30 (일요일 포함)", dist: "차 5분", lat: 33.52328, lng: 126.85587, note: "구좌약국 바로 옆.", confirm: "일요일 영업 전화 확인", mapQuery: "메디팜감초당약국" },
          { name: "태양약국", type: "공공심야약국 (성산)", address: "서귀포시 성산읍 고성오조로 67 (고성리)", phone: "064-784-7817", hours: "카카오맵: 평일 08:00~21:00 / 토 ~19:00 / <b>일 15:00~20:00</b> · 도 기준 심야 20~23시", dist: "차 15~20분", lat: 33.44961, lng: 126.91472, note: "2025.5 서귀포 동부(성산·표선·남원) 첫 공공심야약국. 일요일 오후에도 등록돼 있음. 같은 건물 최선365의원.", confirm: "심야·일요일 운영 전화 확인", mapQuery: "태양약국 성산" },
          { name: "영재약국", type: "공공심야약국 (함덕)", address: "제주시 조천읍 신북로 510-1 (함덕리)", phone: "064-783-1959", hours: "카카오맵: 매일 08:30~23:00 (일요일 포함)", dist: "차 25~35분", lat: 33.54212, lng: 126.66442, note: "제주시 오가는 길(함덕). 일요일 밤에도 열려 있을 가능성이 가장 높은 동부권 약국.", confirm: "방문 전 전화 확인", mapQuery: "영재약국 함덕" },
          { name: "김녕약국", type: "일반 약국", address: "제주시 구좌읍 김녕로 114 (김녕리)", phone: "064-783-8623", hours: "카카오맵: 평일 08:00~18:30 / 토 08:00~12:00 / 일 휴무", dist: "차 15~20분", lat: 33.55455, lng: 126.75022, note: "새김녕의원 바로 옆 — 진료 후 처방약 수령.", mapQuery: "김녕약국" },
        ],
      },
    ],
  },
  pet: {
    title: "🐾 동물병원 (강아지 2마리)",
    wrapBg: "bg-amber-50/60 border-amber-100",
    tips: [
      "행동요령: 주간·경증 = 세화 발걸음동물병원(5분, 전화 확인 필수) 또는 성산 동아동물병원(15~20분) → 야간·중증(호흡곤란·지속 경련·다량 출혈) = 제주시내 숨/브이 24시(40~60분). 출발 전 반드시 전화로 상태 전달",
      "일요일엔 동부 동물병원이 모두 휴무로 등록돼 있음 → 일요일 진료는 숨·브이(24시) 또는 아라아이동물병원(수~일 영업)",
      "진드기는 9~11월에도 활발(여행 기간 내내 해당) — 출발 전 이속사졸린 계열 예방약 + 산책 후 귀 뒤·겨드랑이·발가락 사이 점검, 붙었으면 병원에서 제거",
      "해변에서 해수 다량 섭취 시 염분중독(구토·경련), 모래 섭취는 위장폐색 위험 — 담수 챙기고 놀이 후 입·발 헹구기",
      "차에 이동장·물·병원 연락처 상비, 심장사상충 예방약도 출발 전 투여",
    ],
    groups: [
      {
        key: "pet24", name: "24시 응급 (제주시내)", color: "red",
        places: [
          { name: "제주24시숨동물의료센터", type: "365일 24시간", address: "제주시 연북로 632, 1~3층 (아라이동)", phone: "064-805-8365", hours: "주간 10:00~21:00 / 야간·응급 21:00~익일 10:00 수의사 상주 (공식 홈페이지)", dist: "차 40~50분", lat: 33.49075, lng: 126.54562, note: "ICU·MRI·CT 보유. 동부에서 가장 가까운 24시 → 야간 응급 1순위. (2026.10 공식 홈페이지 확인)", mapQuery: "제주24시숨동물의료센터" },
          { name: "브이동물메디컬센터", type: "365일 24시간", address: "제주시 수목원서길 3, 1~2층 (노형동, 한라수목원 인근)", phone: "064-803-0038", hours: "365일 24시간 중환자·응급의료센터, 야간 의료진 상주 (공식 홈페이지)", dist: "차 50~60분", lat: 33.46946, lng: 126.48419, note: "숨과 함께 야간 응급 투톱. 신제주·서부 일정 중이면 더 가까움. (2026.10 공식 홈페이지 확인)", mapQuery: "브이동물메디컬센터 제주" },
        ],
      },
      {
        key: "peteast", name: "동부 · 주간 1차 대응 (일요일 모두 휴무 등록)", color: "amber",
        places: [
          { name: "발걸음동물병원", type: "숙소 최근접 (세화)", address: "제주시 구좌읍 세화5길 25 (세화리)", phone: "064-783-7576", hours: "진료시간 미확인", dist: "차 5분", lat: 33.52563, lng: 126.85667, note: "2026.10 조사에서 새로 찾은 세화 동물병원(카카오맵 등록, 폐업 표시 없음). 진료시간·진료 범위 정보가 없어 반드시 전화 후 방문.", confirm: "영업·진료시간 미확인 — 전화 필수", mapQuery: "발걸음동물병원 세화" },
          { name: "동아동물병원", type: "성산", address: "서귀포시 성산읍 서성일로 1239, 1층 (고성리)", phone: "064-782-1175", hours: "평일 09:00~17:30 (점심 12:00~13:30) / 토 09:00~12:00 / 일 휴무 (카카오맵)", dist: "차 15~20분", lat: 33.44709, lng: 126.9109, note: "주간 경증 1차 대응용. ※ 주소 번지(1241→1239)·좌표 수정.", confirm: "방문 전 전화 확인", mapQuery: "동아동물병원 성산" },
          { name: "해든동물병원", type: "조천 (함덕)", address: "제주시 조천읍 일주동로 1213, 1층 (함덕리)", phone: "0503-7154-1278", hours: "평일 09:30~18:00 / 토 10:00~17:00 / 일 휴무 · 점심 12:00~13:00 (카카오맵)", dist: "차 25~35분", lat: 33.53745, lng: 126.6705, note: "토요일 오후 5시까지. 제주시 가는 길 중간.", confirm: "방문 전 전화 확인", mapQuery: "해든동물병원 함덕" },
          { name: "표선동물병원", type: "표선", address: "서귀포시 표선면 번영로 3510, 101호 (표선리)", phone: "064-787-7582", hours: "월·화·목 08:30~16:30 / 수·금 08:30~11:30 / 토 09:30~11:30 / 일 휴무 (카카오맵)", dist: "차 30~40분", lat: 33.33562, lng: 126.82819, note: "진료시간이 짧음 — 표선 일정 중일 때만.", confirm: "방문 전 전화 확인", mapQuery: "표선동물병원" },
        ],
      },
      {
        key: "petother", name: "제주시·서귀포 일반", color: "blue",
        places: [
          { name: "아라아이동물병원", type: "제주시 (아라동)", address: "제주시 인다6길 45, 1층 (아라일동)", phone: "064-753-7575", hours: "수~일 10:00~19:00 / 월·화 휴무 (카카오맵)", dist: "차 45~55분", lat: 33.47518, lng: 126.548, note: "일요일에 여는 일반 동물병원. ※ 기존 '아라i동물병원'과 같은 곳으로 보고 이름·주소·전화 갱신(추정).", confirm: "방문 전 전화 확인", mapQuery: "아라아이동물병원" },
          { name: "조은동물병원", type: "서귀포", address: "서귀포시 동문로 40 (서귀동)", phone: "064-762-0243", hours: "진료시간 미확인 (기존 조사: 일 휴무, 점심 12:00~13:30)", dist: "차 65~75분", lat: 33.2503, lng: 126.56491, note: "남부 일정 중 이용.", confirm: "방문 전 전화 확인", mapQuery: "조은동물병원 서귀포" },
          { name: "AVC반려동물메디컬센터", type: "서귀포", address: "서귀포시 하효로 58 (하효동)", phone: "064-732-4788", hours: "진료시간 미확인 (카카오맵 '24시' 검색에 나오지만 24시 운영은 미확인)", dist: "차 55~70분", lat: 33.26663, lng: 126.61954, note: "남부(쇠소깍·효돈) 일정 중 응급 시 후보. 야간 진료 가능 여부를 전화로 먼저 확인.", confirm: "24시 여부 미확인 — 전화 필수", mapQuery: "AVC반려동물메디컬센터" },
        ],
      },
    ],
  },
  // 참고 링크 (renderMedical에서 버튼 목록으로 표시)
  links: [
    { icon: "🚑", label: "응급실 찾기 (e-gen, 실시간 병상)", url: "https://www.e-gen.or.kr/egen/search_emergency_room.do" },
    { icon: "🌙", label: "달빛어린이병원 (e-gen)", url: "https://www.e-gen.or.kr/moonlight/main.do" },
    { icon: "💊", label: "약국 찾기 (e-gen)", url: "https://www.e-gen.or.kr/egen/search_pharmacy.do" },
    { icon: "🏪", label: "휴일지킴이약국 (일·공휴일·심야)", url: "https://www.pharm114.or.kr/" },
    { icon: "📱", label: "똑닥 (소아과 접수 앱)", url: "https://www.ddocdoc.com/" },
    { icon: "🐾", label: "동물병원 검색 (국가동물보호정보시스템)", url: "https://www.animal.go.kr/front/awtis/shop/hospitalList.do?menuNo=6000000002" },
  ],
  sources: [
    { label: "e-gen 달빛어린이병원 — 제주 4곳·운영시간 (2026.10.20 조회)", url: "https://www.e-gen.or.kr/moonlight/main.do" },
    { label: "제주도 달빛어린이병원 1곳 추가 지정(나우메디), 총 4곳 (제주도민일보)", url: "https://www.jejudomin.co.kr/news/articleView.html?idxno=312421" },
    { label: "제주 권역응급의료센터 2곳 — 한라병원 재지정·제주대병원 신규 (미디어제주, 2026.7.15)", url: "https://www.mediajeju.com/news/articleView.html?idxno=365215" },
    { label: "제주대병원 권역응급의료센터 신규 지정, 11월부터 3년 (미디어제주, 2026.7.15)", url: "https://www.mediajeju.com/news/articleView.html?idxno=365225" },
    { label: "제주한라병원 권역응급센터 재지정·소아응급 진료구역 (제이누리, 2026.7.15)", url: "https://www.jnuri.net/news/article.html?no=69163" },
    { label: "제주대병원 어린이 공공전문진료센터·소아 진료협력 (파이낸셜뉴스, 2026.9)", url: "https://www.fnnews.com/news/202609101404231081" },
    { label: "2026년 공공심야약국 6곳 지정 계획 (제주도민일보, 2025.12.29)", url: "https://www.jejudomin.co.kr/news/articleView.html?idxno=316038" },
    { label: "공공심야약국 7곳·운영시간 점검 (헤드라인제주, 2026.7.30)", url: "https://www.headlinejeju.co.kr/news/articleView.html?idxno=596751" },
    { label: "성산 태양약국 공공심야약국 신규 지정 (미디어제주, 2025.5)", url: "https://www.mediajeju.com/news/articleView.html?idxno=358258" },
    { label: "편의점 상비약 13품목·어린이 해열제 수급 (데일리팜, 2026.4)", url: "https://dailypharm.com/user/news/338034" },
    { label: "의원·약국 진료시간: e-gen·심평원 등록정보 (카카오맵 장소정보, 2026.10.20 조회)", url: "https://map.kakao.com/" },
    { label: "제주24시숨동물의료센터 (공식)", url: "https://jejusamc.com/" },
    { label: "브이동물메디컬센터 (공식)", url: "http://vamc.co.kr/" },
    { label: "휴일지킴이약국", url: "https://www.pharm114.or.kr/" },
  ],
};

// 반려견 돌봄 (데이케어/펫시터) 정보
const PET_CARE_INFO = {
  title: "반려견 불가 장소 방문 시 돌봄 옵션",
  note: "성산/구좌(동부)에는 전문 애견유치원이 거의 없어, 펫시터 방문 돌봄이 가장 현실적입니다.",
  facilities: [
    {
      name: "댕댕놀이터 외도점",
      type: "애견유치원/호텔/미용",
      area: "제주시 외도동",
      contact: "인스타 DM",
      link: "https://www.instagram.com/dd_noriter/",
      note: "성산에서 약 1시간 거리. 종일 데이케어보다는 서부 일정과 조합 추천.",
    },
    {
      name: "블리스풀",
      type: "애견카페 + 운동장",
      area: "제주시 애월읍 유수암리 1176",
      contact: "0507-1387-8604 / 인스타 DM",
      link: "https://www.instagram.com/blissful.jeju/",
      note: "넓은 잔디 운동장(대·중·소 분리). 카페 이용하며 강아지 놀이. 매주 금요일 휴무(비짓제주 2026). 숙소에서 약 1시간 10분.",
    },
  ],
  petSitter: {
    title: "펫시터 방문 돌봄 (숙소에서)",
    desc: "숙소로 펫시터가 와서 강아지를 돌봐주는 서비스. 성산/구좌 숙소에서 이용 가능.",
    platforms: [
      { name: "숨고", url: "https://soomgo.com", desc: "제주 펫시터 검색, 평균 2.8만원/회" },
      { name: "펫봄", url: "https://petbom.com", desc: "앱 기반 펫시터 매칭" },
      { name: "와요(WAYO)", url: "https://wayopet.com", desc: "GPS 산책, 사진/영상 공유" },
    ],
    price: "2~4만원/회 (평균 2.8만원)",
    includes: "사료/물 급여, 산책, 배변 처리, 사진/영상 공유",
    tip: "출발 전 미리 펫시터 예약 & 사전 미팅 필수! 숙소 호스트에게 근처 추천 펫시터를 물어보는 것도 좋은 방법.",
  },
  whenToUse: [
    "아쿠아플라넷 제주 (반려견 입장 불가)",
    "한림공원 (7kg 미만 소형견만 가능)",
    "성산일출봉 (천연기념물, 반려견 불가)",
    "만장굴 (반려견 입장 불가)",
    "산굼부리 (반려동물 출입 불가 — 억새 시즌 주의)",
    "비자림 (반려동물 동반 불가)",
    "다랑쉬오름 정상 (둘레길만 동반 가능)",
    "카멜리아힐 (8kg 미만만) · 휴애리 (7kg 미만, 일부 구역)",
    "실내 식당/카페 중 반려견 불가 장소",
  ],
};

// 아기 + 강아지 동반 카페 & 맛집 리스트 (2026.04 검수 → 2026.10.20 재검수: 네이버 플레이스 편의정보·영업시간, 비짓제주)
const PET_BABY_SPOTS = {
  title: "아기 + 강아지 동반 카페 & 맛집",
  note: "10개월 아기(유모차/아기의자) + 강아지 2마리(4~10kg) 동반 가능한 곳 위주. 노키즈존 제외. 2026.10 재검수: 폐업·업종 변경 확인된 5곳 제외(제주오누이·성산마씸·카페 사분의 이·카페비글·오데뜨), 🆕 동부 신규 추가. '네이버 편의정보'는 업주 등록값이라 견종·크기·케이지 조건은 방문 전 전화 확인. ※2026.3.1부터 반려동물 동반 음식점이 법제화(업주 자율 허용제)되면서 '노펫존'을 새로 선언하는 업소도 생기는 중 — 방문 전 확인이 더 중요해졌어요.",
  regions: [
    {
      name: "동부 (성산/구좌)",
      icon: "🏖️",
      spots: [
        { type: "cafe", name: "어니스트밀크", address: "서귀포시 성산읍 중산간동로 3147-7", desc: "목장 카페. 송아지 우유주기 체험(11·14·16시, 방문 전 확인). 성산일출봉 조망.", dog: "소형견, 캐리어 필수 (네이버 편의정보 '반려동물 동반')", baby: "유아의자 있음, 유모차 가능, 체험 가능", note: "매일 10:00~18:00 | 070-7722-1886 (2026.10 확인)", mapQuery: "어니스트밀크 성산" },
        { type: "cafe", name: "비수기애호가", address: "제주시 구좌읍 해맞이해안로 997 2층", desc: "🆕 구좌당근 즉석 착즙주스(노시럽·노슈가). 한동리 해안도로 바다뷰.", dog: "반려동물 동반 (네이버 편의정보) — 조건 방문 전 확인", baby: "유아의자 있음", note: "매일 10:00~18:00 | 064-782-4217", mapQuery: "비수기애호가 구좌" },
        { type: "food", name: "담백 월정리 본점", address: "제주시 구좌읍 해맞이해안로 518", desc: "🆕 월정리 해안도로 한정식집. 재료 소진 시 조기 마감.", dog: "반려동물 동반 (네이버 편의정보) — 조건 방문 전 확인", baby: "유아의자 있음", note: "매일 09:00~19:30 | 0507-1494-0208", mapQuery: "담백 월정리" },
        { type: "food", name: "고기굽는해녀 구좌흑돼지", address: "제주시 구좌읍 한동로1길 25", desc: "🆕 한동리 흑돼지구이. 숙소에서 차로 약 10분.", dog: "반려동물 동반 (네이버 편의정보) — 조건 방문 전 확인", baby: "유아의자 있음", note: "12:00~22:00 (수 휴무) | 0507-1340-7918", mapQuery: "고기굽는해녀 구좌흑돼지" },
        { type: "food", name: "명리동식당 구좌직영점", address: "제주시 구좌읍 일주동로 3010-17", desc: "흑돼지 전문. 사장님이 직접 구워줌. 김치전골 인기.", dog: "⚠️ 후기 엇갈림(소형견 이동가방·유모차 지참 OK / '동반 불가' 후기도 있음) → 전화 필수", baby: "유아의자 있음", note: "매일 11:30~21:10 (재료 소진 시 브레이크·조기마감) | 0507-1424-2269", mapQuery: "명리동식당 구좌" },
        { type: "food", name: "평대스낵", address: "제주시 구좌읍 대수길 26", desc: "한치튀김이 유명! 옥상에서 평대해변 바다뷰.", dog: "모든 견종 동반, 리드줄 (네이버 편의정보 '반려동물 동반')", baby: "유모차 가능", note: "11:00~16:00 (수 휴무, 임시휴무 공지 확인) | 070-8825-3524", mapQuery: "평대스낵 제주" },
        { type: "food", name: "금돗 성산흑돼지", address: "서귀포시 성산읍 성산등용로 17", desc: "🆕 성산일출봉 인근 흑돼지구이(네이버 리뷰 2만+).", dog: "반려동물 동반 (네이버 편의정보) — 조건 방문 전 확인", baby: "유아의자 있음", note: "매일 11:00~22:30 (LO 21:30)", mapQuery: "금돗 성산흑돼지" },
        { type: "food", name: "쉐프1192레스토랑", address: "서귀포시 성산읍 환해장성로 465", desc: "오션뷰 양식. 나시고랭, 찹스테이크, 파스타.", dog: "실내 동반 후기 있음 — 2026.10 네이버 편의정보엔 미표기, 전화 확인", baby: "유모차 가능", note: "화~일 10:00~21:00 (월 휴무) | 0507-1472-1430", mapQuery: "쉐프1192 성산", url: "https://www.chef1192.co.kr/" },
        { type: "food", name: "세모", address: "제주시 구좌읍 행원로 121", desc: "제주 재료 삼각김밥(흑돼지, 소라, 톳). 포장 전문.", dog: "리드줄 착용 (네이버 편의정보 '반려동물 동반')", baby: "포장이라 부담 없음", note: "월·화·금·토·일 10:00~16:00 (수·목 휴무, 조기마감·임시휴무 인스타 공지) | 0507-1340-2197", mapQuery: "세모 제주 구좌" },
      ],
    },
    {
      name: "서부 (한림/애월)",
      icon: "🌅",
      spots: [
        { type: "cafe", name: "애월더선셋", address: "제주시 애월읍 일주서로 6111", desc: "오션뷰 브런치 카페 + 리조트. 야외 테라스.", dog: "대형견 OK, 목줄, 전체이용 (네이버 편의정보 '반려동물 동반')", baby: "유모차 가능", note: "동절기 10:00~19:00 / 그 외 10:00~20:00 (연중무휴) | 0507-1403-5943", mapQuery: "애월더선셋" },
        { type: "cafe", name: "제주개생활연구소", address: "제주시 한경면 저지리", desc: "멸종위기 제주개 보존 카페. 에그타르트 맛집. 오프리시 운동장.", dog: "실내 소형견, 야외 대형견 OK (기존 정보)", baby: "유모차 가능", note: "⚠️ 2026.10 네이버·비짓제주에서 영업 확인 불가 — 방문 전 확인", mapQuery: "제주개생활연구소" },
        { type: "food", name: "금돈가", address: "제주시 애월읍 가문동남길 63", desc: "흑돼지 근고기 전문. 자체 불판에 직접 구워줌. 반찬 정갈.", dog: "케이지 이용 시 동반", baby: "아기의자 문의", note: "매일 영업, LO 21:30 (2026.10 네이버) | 0507-1396-6466", mapQuery: "금돈가 애월" },
        { type: "food", name: "별돈별 협재해변점", address: "제주시 한림읍 협재1길 4", desc: "협재 바다뷰 흑돼지 맛집. 2층.", dog: "소형견, 캐리어 필수 (기존 정보)", baby: "아기의자 문의", note: "⚠️ 2026.10 네이버에서 해당 주소 업장 확인 불가 — 방문 전 확인", mapQuery: "별돈별 협재" },
      ],
    },
    {
      name: "남부 (서귀포/중문)",
      icon: "🌊",
      spots: [
        { type: "cafe", name: "감따남", address: "서귀포시 월산로 16", desc: "감귤 농장 카페. 감귤따기 체험 + 전문 스냅사진.", dog: "대형견 OK 후기 — 2026 네이버 편의정보엔 미표기, 전화 확인", baby: "유모차 가능, 체험 가능", note: "화~토 10:00~17:00 (일·월 휴무) | 0507-1347-2306", mapQuery: "감따남 서귀포" },
        { type: "cafe", name: "벨진밧", address: "서귀포시 대정읍 보성구억로 220-1", desc: "배우 박한별 운영. 제주 구옥 + 야외 정원. 대형 주차장.", dog: "대형견 OK, 목줄, 전체이용 (네이버 편의정보 '반려동물 동반')", baby: "유모차 가능", note: "09:00~17:30, ⚠️ 11월부터 매주 화·수 휴무 | 064-794-0121", mapQuery: "벨진밧 서귀포" },
        { type: "cafe", name: "목장카페 밭디", address: "서귀포시 표선면 번영로 2486", desc: "넓은 말 목장 카페. 말 먹이주기·승마·이색자전거 체험.", dog: "대형견 OK, 목줄, 실내외", baby: "유모차 가능, 체험 가능", note: "09:00~18:00 (수 휴무) | 0507-1371-6019", mapQuery: "목장카페밭디 표선" },
        { type: "food", name: "모메든식당", address: "서귀포시 일주서로 508", desc: "흑돼지 연탄 깡통구이. 캠핑 바비큐 분위기. 반찬 무제한.", dog: "대형견 OK, 목줄자유, 전체이용 (기존 정보)", baby: "야외 잔디 놀이 가능", note: "⚠️ 2026.10 네이버에서 해당 주소 업장 확인 불가 — 방문 전 확인 | 0507-1415-8205", mapQuery: "모메든식당 중문" },
        { type: "food", name: "커뮤니테이블 시즌2", address: "서귀포시 월평로 15 (우측 바깥채)", desc: "가정집 개조 식당. 2026 네이버엔 '커뮤니테이블시즌2 가정식'(백반·가정식)으로 등록 — 메뉴 변경 가능성.", dog: "동반 후기 있었음 — 2026 편의정보엔 미표기, 전화 확인", baby: "유모차 가능", note: "매일 09:30~16:00 (네이버) | 0507-1342-1390", mapQuery: "커뮤니테이블시즌2 서귀포" },
        { type: "food", name: "아솥 서귀포본점", address: "서귀포시 동홍로303번길 13", desc: "솥뚜껑 삼겹살. 캠핑 컨셉 프라이빗 텐트. 귤밭뷰.", dog: "대형견 OK (네이버 편의정보 '반려동물 동반')", baby: "유아의자 있음", note: "매일 12:00~22:00 (예약 우선) | 0507-1437-8057", mapQuery: "아솥 서귀포" },
        { type: "food", name: "산방산해물라면오빠네", address: "서귀포시 안덕면 사계남로216번길 24-68", desc: "산방산+용머리해안 뷰 해물라면. 생생정보 출연 맛집.", dog: "동반 가능 (네이버 편의정보)", baby: "유아의자 있음, 유모차 가능", note: "매일 09:00~17:00 | 테이블링 원격줄서기", mapQuery: "산방산해물라면오빠네" },
      ],
    },
    {
      name: "제주시",
      icon: "🏙️",
      spots: [
        { type: "food", name: "동진식당 공항점", address: "제주시 용화로 51-1", desc: "1965년 4대째 운영 60년 전통. 고기국수, 돔베고기. 공항 5분.", dog: "케이지 이용 시 동반", baby: "아기의자 문의", note: "08:30~18:30 (매달 1·3·5번째 금 휴무) | 064-742-2226", mapQuery: "동진식당 공항점 제주" },
      ],
    },
  ],
};

// 감귤 체험 농장 정보
const TANGERINE_FARMS = {
  title: "🍊 감귤따기 체험 농장",
  note: "11월 감귤 시즌! 노지감귤 체험은 빠른 곳 10월 초, 대부분 10월 중순 이후 열어 이듬해 1월까지(소진 시 종료). 요금은 농장별 5,000~20,000원으로 방식(입장료/1kg/바구니)이 제각각 — 아래 가격은 2026.10 네이버 플레이스 메뉴 기준이며 방문 전 재확인. 🐶 표시는 네이버 '반려동물 동반' 편의정보 기준. 🍊 2026 제주감귤박람회: 11.19~23 서귀포 제주농업생태원(더 가볼 곳 > 11월 시즌 참고).",
  sections: [
    {
      title: "🐶👶 아기 + 강아지 모두 동반 가능",
      color: "green",
      farms: [
        {
          name: "해품은체험농장",
          address: "서귀포시 성산읍 서성일로 1073",
          desc: "숙소에서 가장 가까운 감귤체험(차 약 20분). 40년 전통 감귤 농장, 직거래 판매장. 체험 10시~일몰 전, 당일 접수 가능.",
          baby: true,
          babyNote: "전연령 참여 가능 (안전사고 주의)",
          dog: true,
          dogNote: "반려동물 동반 (네이버 편의정보 2026.10) — 조건 전화 확인",
          phone: "070-8871-2098",
          url: "https://haepoom.com/",
          mapQuery: "해품은체험농장 성산",
        },
        {
          name: "귤의정원 바령",
          address: "제주시 조천읍 선흘남3길 87",
          desc: "유기농 무농약 감귤 농장. 직접 따서 가져갈 수 있음. 10:00~17:00 (수 휴무) — 입장 마감 시각은 공지가 엇갈려(13시/16시) 방문 전 확인.",
          baby: true,
          babyNote: "동반 가능",
          dog: true,
          dogNote: "반려동물 동반 (네이버 편의정보) — 주의: 농장 내 진돗개 '귤이' 예민 → 거리 유지",
          phone: "0507-1386-8784",
          url: "https://eataround.co.kr/trip-jeju/?idx=50",
          mapQuery: "귤의정원 바령 조천",
        },
        {
          name: "보메와산 감귤체험농장",
          address: "제주시 조천읍 미래로 53",
          desc: "모래놀이터 별도 구비 → 아기 놀기 최고! 삼나무 포토존. 💰1kg 9,000원 / 2.5kg 18,000원 / 입장만 5,000원 (네이버 메뉴, 예약 없이 가능). 설·추석 당일 휴무.",
          baby: true,
          babyNote: "모래놀이터 있음, 유아 친화적",
          dog: true,
          dogNote: "반려동물 동반 (네이버 편의정보 2026.10) — 조건 전화 확인",
          phone: "0507-1336-4744",
          mapQuery: "보메와산 감귤체험",
        },
        {
          name: "귤밭에댕댕이",
          address: "제주시 애월읍 고성서5길 15",
          desc: "귤밭 + 반려견 운동장. 이름부터 반려견 특화! 캔들 원데이클래스(25,000원~)도 가능. 💰블로그 후기: 3kg 바구니 12,000원 + 입장 2,000원(작성 시기 미상 — 확인).",
          baby: true,
          babyNote: "동반 가능 (아이 동반 후기 다수)",
          dog: true,
          dogNote: "반려견 동반·운동장 (후기 기준, 편의정보엔 미표기 — 전화 확인)",
          phone: "0507-1302-0854",
          url: "https://www.myrealtrip.com/guides/17234",
          mapQuery: "귤밭에댕댕이 애월",
        },
        {
          name: "탐나는농장",
          address: "제주시 애월읍 오당빌레길 88",
          desc: "4천평 규모 감귤밭 + 감귤체험카페 겸업. 💰입장 5,000원 / 감귤따기 1kg 10,000원 / 감귤청 클래스 18,000원 (네이버 메뉴). 14일차 애월 코스와 동선 일치!",
          baby: true,
          babyNote: "동반 가능, 카페 이용 편리",
          dog: true,
          dogNote: "반려동물 동반 (네이버 편의정보 2026.10) — 조건 전화 확인",
          phone: "0507-1320-2721",
          url: "https://www.instagram.com/tamnaneun_farm/",
          mapQuery: "탐나는농장 애월",
        },
        {
          name: "휴애리자연생활공원",
          address: "서귀포시 남원읍 신례리 2081",
          desc: "테마공원 내 감귤체험(계절·생육 따라 운영, 시간 방문 전 확인) + 가을 핑크뮬리. 💰입장 성인 13,000원·어린이 10,000원 (비짓제주). 동절기 09:00~18:00, 입장 마감 16:30.",
          baby: true,
          babyNote: "35개월 이하 무료",
          dog: true,
          dogNote: "⚠️ 7kg 미만 소형견만 일부 구역 (카페 내부 불가, 혼잡 구역은 안기/이동장)",
          phone: "064-732-2114",
          mapQuery: "휴애리자연생활공원",
        },
      ],
    },
    {
      title: "👶 아기만 동반 가능 (강아지 미확인)",
      color: "pink",
      farms: [
        {
          name: "예래팜",
          address: "서귀포시",
          desc: "무농약 인증 농장. 자연놀이터 + 그네 있어 아이들 놀기 좋음. ⚠️ 2026.10 네이버 검색 미노출 — 2026 운영 여부 방문 전 확인.",
          baby: true,
          babyNote: "자연놀이터·그네 있음",
          dog: null,
          dogNote: "미확인 — 사전 전화 필수",
          phone: "방문 전 확인",
          mapQuery: "예래팜 감귤체험 서귀포",
        },
        {
          name: "디스커버제주 감귤체험농장",
          address: "제주도",
          desc: "전연령 참여 가능. 체험 안내 친절. ⚠️ 2026 운영·요금 미확인 — 방문 전 확인.",
          baby: true,
          babyNote: "전연령 가능, 어린아이 안전 주의",
          dog: null,
          dogNote: "미확인 — 사전 전화 필수",
          phone: "방문 전 확인",
          url: "https://discover-jeju.com/citrus_experience",
          mapQuery: "디스커버제주 감귤체험",
        },
      ],
    },
  ],
};

// 페리 & 반려동물 정보
const FERRY_INFO = {
  title: "씨월드고속훼리 이용 가이드",
  phone: "1577-3567",
  website: "https://www.seaferry.co.kr",
  bookingUrl: "https://www.seaferry.co.kr/reservation",
  ships: [
    {
      name: "퀸메리 (PET FIRST CRUISE) ⭐우리 배",
      route: "목포(삼학부두) ↔ 제주(국제여객터미널) 운항 중 / 진도 ↔ 애월: 2026.10 현재 미개통 — 공식 사이트에 '진도항·애월항 제반시설 완공 시 투입 예정'으로만 안내",
      schedules: [
        { label: "목포→제주 (10/25 우리 출발편)", time: "08:30 출발 → 13:20 도착", duration: "약 4시간 50분 (2026.5.28부터 한시 변경 운항, 월간스케줄상 11/6까지 08:30)" },
        { label: "제주→목포 (11/23 우리 귀환편)", time: "07:20 출발", duration: "월간스케줄상 목포발 14:00(11/8~)·제주발 07:20(11/9~)으로 복귀 — 도착 시각은 승선권 확인" },
      ],
      offDays: "정기휴항: 목포발 매월 1·3주 토요일, 제주발 매월 1·3주 일요일(공식 안내). 2026.11 월간스케줄상 목포발 11/7·11/21, 제주발 11/7·11/8·11/22 운항 없음. 1·3·5주 월요일은 퀸제누비아Ⅱ 대체 운항(목포 국제여객터미널 출발). ※월간스케줄은 계획표 — 당일은 '오늘의 스케줄' 확인",
      highlight: "2026.04.30 취항 완료 - 국내 최초 PET FIRST CRUISE (143m·14,919t·차량 270대)",
      rooms: [
        { name: "VIP (2인)", price: "50만원 (주말·공휴일 54.97만, 이하 공식 운임표 주중가 기준)", desc: "최고 프라이빗, 펫 유모차 무상 비치" },
        { name: "스위트 SEA (2인)", price: "25만원", desc: "바다 방향 독립 스위트" },
        { name: "스위트 IN (2인)", price: "24만원", desc: "통로 방향 아늑한 스위트" },
        { name: "펫스위트 MBTI (2인)", price: "26만원", desc: "반려견 성향별 4타입 맞춤 객실" },
        { name: "펫스위트 (2인)", price: "25만원", desc: "반려견+보호자 프리미엄" },
        { name: "패밀리 온돌 (4인)", price: "26.8만원", desc: "가족 여행 온돌형" },
        { name: "패밀리 침대 (4인)", price: "26.8만원", desc: "가족 여행 침대형" },
        { name: "펫의자석 우등", price: "6.2만원", desc: "반려동물 동반 우등석 (10kg 이하 중·소형견, 인당 1마리, 2석 1세트 판매)" },
        { name: "의자석 우등", price: "6.2만원", desc: "일반 우등석" },
        { name: "의자석 일반", price: "3.54만원", desc: "기본 좌석" },
        { name: "이코노미", price: "3.23만원", desc: "실속형 공용 객실" },
      ],
      facilities: ["파리바게트", "세븐일레븐 (육상 동일가격)", "라면존", "공용샤워실", "코인노래방", "펫가든 (야외갑판)"],
      petPolicy: "무게/견종 제한 없음(펫의자석만 10kg 이하). 펫 전용 객실 구역 분리. ⚠️ 전용 케이지 미지참 시 승선 제한 가능 → 케이지 필수 지참, 펫 전용공간 밖에서는 케이지 이동. 대형견은 입마개+리드줄 착용 후 승선. 선내 펫 사료/간식 판매(예정으로 안내).",
      link: "http://qm.seaferry.co.kr/",
      isNew: true,
    },
    {
      name: "퀸제누비아Ⅱ",
      route: "목포 ↔ 제주",
      schedules: [
        { label: "목포→제주", time: "08:30 출발 (11/8~ 기준, 10/20~11/6은 01:00)", duration: "약 4시간 15분" },
        { label: "제주→목포", time: "16:45 출발 (10/20~11/6은 13:40)", duration: "약 4시간 30분" },
      ],
      highlight: "펫 프랜들리 특화 (무게 제한 없음, 추가 요금 없음, 펫여권 증정)",
      rooms: [
        { name: "펫스위트룸 (4인)", price: "-", desc: "전용 화장실, 커피쿠폰 포함" },
        { name: "펫스탠다드룸 (2인세트)", price: "-", desc: "10kg 미만" },
        { name: "펫코노미", price: "-", desc: "4kg 미만 소형견, 1마리당 견주1명" },
        { name: "펫가든", price: "-", desc: "야외 갑판 오션뷰" },
      ],
    },
    {
      name: "퀸제누비아",
      route: "목포 ↔ 제주",
      schedules: [
        { label: "목포→제주", time: "01:00 출발 (야간)", duration: "4시간 30분" },
        { label: "제주→목포", time: "13:40 출발", duration: "4시간 30분" },
      ],
      offDays: "2026.10~11/6 선박검사로 휴항, 11/7부터 운항 재개(월간스케줄). 정기휴항일은 월간스케줄 확인",
      rooms: [
        { name: "펫스위트룸", price: "-", desc: "프라이빗, 화장실 포함" },
        { name: "펫스탠다드룸", price: "-", desc: "16인 수용" },
        { name: "펫가든", price: "-", desc: "야외 갑판" },
      ],
    },
    {
      name: "산타모니카",
      route: "진도 ↔ 제주 (추자도 경유)",
      schedules: [
        { label: "진도→제주", time: "08:00 출발", duration: "4시간 20분" },
        { label: "제주→진도", time: "16:20 출발", duration: "4시간 20분" },
      ],
      rooms: [
        { name: "펫 프리미엄석", price: "-", desc: "테이블+창가 바다뷰, 2~6인" },
        { name: "펫 비지니스석", price: "-", desc: "넓은 휴식공간" },
      ],
    },
  ],
  petRules: {
    title: "반려동물 탑승 규정",
    queenMary: [
      "무게/견종 제한 없음 (30kg+ 대형견 OK) — 단, 펫의자석은 10kg 이하만",
      "전용 케이지(가방형·하드) 필수 지참 — 미지참 시 승선 제한 가능 (씨월드 반려동물 예약 안내)",
      "펫 전용공간 밖 이동 시 케이지 사용, 선내 식당 등 일부 공용 공간은 이용 제한 가능",
      "대형견은 입마개+리드줄(가슴줄) 착용 후 승선, 공격성 강한 맹견은 필수 안전조치",
      "펫 전용 객실 구역 분리 (일반 승객과 별도)",
      "선내 반려동물 전용 멀미약 구비",
      "객실 내 대형 배변패드, 전용 봉투, 탈취제 기본 비치",
      "VIP룸: 최고급 펫 유모차 무상 비치",
    ],
    existing: [
      "펫 전용 케이지 필수 지참 (가방형 또는 하드 케이지)",
      "펫 전용공간 외 이동 시 반드시 케이지 내 보관",
      "대형견(10kg+): 펫스위트룸 필수 + 입마개/리드줄 필수 (퀸제누비아/산타모니카)",
    ],
    documents: ["동물등록증", "예방접종증명서 (광견병 등)"],
    tip: "우리는 퀸메리호로 확정 예약! 펫 전용 객실 구역과 펫가든(야외갑판)이 있어 강아지 2마리 동반에 가장 편합니다. 케이지 2개(마리당 1개)·서류는 미리 챙기기. 기념 펫 여권 발급(공통 서비스).",
  },
  booking: {
    title: "확정 예약 정보 & 전기차 선적 가이드",
    currentStatus: "✅ 퀸메리호 왕복 예약 완료 (목포↔제주). ⚠️ 공식 월간스케줄(2026.10.20 조회) 기준 출발 10/25(일) 목포 삼학부두 08:30 → 제주 13:20 / 귀환 11/23(월) 제주 국제여객터미널 07:20. 테슬라 모델Y 선적 포함. 예약 문자의 시각과 다르면 1577-3567 확인.",
    pattern: "⚡ 전기차 선적 핵심: 배터리 충전율 50% 초과 차량은 선적 거부(해수부 권고, 2026.10 완화 공지 없음). 퀸메리 공식 운임표의 테슬라 Y(외제차 최고가 구간) 차량운임: 평일 197,640원 / 일·공휴일 208,520원(표에 할인가로 보이는 187,750/198,090원 병기). 이미 결제 완료.",
    steps: [
      "목포(삼학부두): 차량은 주간선박 출항 1시간 전 마감(08:30편 → 07:30), 여객 발권·승선 10분 전 마감 → 07:00 전후 도착. 주차장 무료",
      "제주(국제여객터미널, 임항로 193): 차량 출항 30분 전 마감(07:20편 → 06:50), 6부두로 이동해 선적 후 셔틀로 터미널",
      "예약번호가 12xxxxxx였다면 6xxxxxx로 변경됨(9/28 이전 예약한 10~12월 이용분, 문자 발송) — 변경 번호로 조회",
      "동행 전원 신분증(모바일 신분증 가능), 아기는 등본·가족관계증명서 지참",
      "⚡ 전날/당일 배터리를 50% 미만(45~49%)으로 — 테슬라 앱 충전한도 50% 설정. 현장에서 못 낮추니 반드시 미리!",
      "예약 확정 문자 + 차량등록증 + 신분증 준비",
      "반려동물 서류(동물등록증·예방접종증명서) + 케이지 준비",
      "항해 중 차량 갑판 출입·차내 탑승·충전 모두 금지 → 필요한 짐은 객실로",
    ],
    warn: "⚡ 항해 중 차량 충전 절대 금지! 전기차 간 70cm 안전거리 규정으로 성수기 선적 공간이 빨리 차니 선적 시간 여유있게.",
    links: [
      { label: "예약 확인", url: "https://seaferry.seaferry.co.kr/reservation/reservation01.asp", icon: "🎫" },
      { label: "퀸메리호", url: "http://qm.seaferry.co.kr/", icon: "🚢" },
      { label: "카카오톡 채널", url: "https://pf.kakao.com/_thbxdj", icon: "💬" },
      { label: "공식 홈페이지", url: "https://www.seaferry.co.kr", icon: "🌐" },
    ],
  },
  recommendation: {
    title: "확정 예약 — 퀸메리호",
    options: [
      {
        label: "퀸메리호 (PET FIRST CRUISE) — 예약 완료 ✅",
        ship: "퀸메리호 - 무게/견종 제한 없음, 펫 전용 객실 구역 + 펫가든",
        room: "패밀리(4인) 또는 펫스위트 — 강아지 2마리 + 아기 동반 최적",
        schedule: "10/25 목포발 08:30 → 제주 13:20 도착(한시 변경 운항) / 11/23 귀환 제주발 07:20 (공식 월간스케줄 2026.10.20 조회)",
        note: "테슬라 모델Y 선적 포함. 선적 전 배터리 50% 미만 필수.",
      },
      {
        label: "참고: 퀸제누비아Ⅱ (대안)",
        ship: "퀸제누비아Ⅱ (펫 특화, 무게 제한 없음, 추가 요금 없음)",
        room: "펫스위트룸 (4인, 전용 화장실, 커피쿠폰)",
        schedule: "11/8 이후 목포발 08:30 / 제주발 16:45 (10/20~11/6은 01:00 / 13:40)",
        note: "퀸메리 휴항일이거나 일정 변경 시 대안. 목포 국제여객터미널(해안로148번길 14) 출발이라 퀸메리(삼학부두)와 터미널이 다름.",
      },
    ],
  },
};

// 날씨 & 옷차림 가이드
const WEATHER_GUIDE = {
  period: "10월 말 ~ 11월",
  avgTemp: "10~18°C",
  details: [
    { label: "10월 말", temp: "13~20°C", desc: "선선한 가을. 낮엔 따뜻, 아침저녁 쌀쌀." },
    { label: "11월 초", temp: "10~17°C", desc: "바람 강해짐. 체감온도 낮음." },
    { label: "11월 중순", temp: "8~15°C", desc: "초겨울. 한라산 첫눈 가능성." },
    { label: "11월 하순", temp: "6~13°C", desc: "꽤 추움. 방한 필수." },
  ],
  clothing: [
    "겉옷: 패딩 or 두꺼운 점퍼 (바람막이 필수!)",
    "안감: 히트텍 + 니트/맨투맨",
    "하의: 기모 바지 추천",
    "제주 바람이 세서 체감온도가 많이 낮음",
    "아기: 방한복 + 바람막이 + 모자",
    "강아지: 방한복 (특히 산책 시)",
  ],
};

// 예산 가이드
const BUDGET_GUIDE = {
  title: "제주 생활비 가이드 (30일, 숙소·페리 제외)",
  target: "🎯 제주 안에서 쓰는 한달 생활비 목표 150~200만원",
  targetMax: 200,
  note: "숙소·페리(모델Y 선적 포함)는 이미 결제 완료라 제외했습니다. 아래는 제주 안에서 추가로 쓰는 순수 생활비만. 숫자는 직접 수정 가능(자동 저장). 합계가 목표선(~200만)을 넘으면 식비부터 조절하세요.",
  items: [
    { category: "식비", estimate: "70~110만원", desc: "자취 비중↑ + 외식 (하루 약 2.5~4만원)" },
    { category: "⚡ 전기차 충전", estimate: "13~23만원", desc: "모델Y 한달 ~1,500km. 환경부 공공충전기 2026.8.1 시행 5단계 요금: 30kW 미만 295.0 / 30~50kW 307.2 / 50~100kW 325.6 / 100~200kW 348.4 / 200kW 이상 393.1원/kWh (민간 사업자·슈퍼차저는 자체 요금, 주유보다 저렴)" },
    { category: "관광/입장료", estimate: "12~22만원", desc: "성산5천·만장굴4천·아쿠아플라넷4.5만 등. 반려견 제약 많아 선별 방문" },
    { category: "카페/간식", estimate: "12~22만원", desc: "카페 탐방 (하루 5천~1만원)" },
    { category: "반려견 돌봄", estimate: "5~15만원", desc: "입장 불가 장소 대비 펫시터 방문(회당 약 2.8만) 2~5회" },
    { category: "기타", estimate: "18~28만원", desc: "생필품, 비상비, 기념품" },
  ],
  savingTips: [
    "식비가 최대 변수 — 하나로마트/세화오일장 자취 위주로, 외식은 주 4~5회로 제한",
    "⚡충전은 숙소 완속 야간충전 위주 → 급속·슈퍼차저는 동선 겹칠 때만 (내연차 주유 대비 절약)",
    "입장료 큰 곳(아쿠아플라넷 등)은 네이버 예약 할인(약 20%) 활용",
    "반려견 입장 불가 장소는 번갈아 관람으로 펫시터 비용 최소화",
    "숙소·페리는 결제 완료 → 여기서 새어나가는 건 식비·충동구매. 주간 단위로 체크",
  ],
};

// ⚡ 전기차(테슬라 모델Y) 가이드
// 고정 목록은 여행 동선용 '핵심 거점'이다. 전체 충전기의 가동 상태·요금·커넥터는
// 수시로 바뀌므로, 제주 전체 탐색은 liveMaps의 공식/실시간 지도를 기준으로 한다.
const EV_GUIDE = {
  title: "⚡ 전기차(테슬라 모델Y) 가이드",
  car: "테슬라 모델Y · 전장 4,750mm / 공차 약 2,000kg (수입차 분류)",
  updatedAt: "2026-10-20",
  note: "고정 핀은 숙소·일정에서 쓰기 좋은 핵심 거점입니다. 제주 전체 충전소와 실시간 사용 가능 여부는 아래 실시간 지도를 열어 확인하세요. 가장 안전한 기본 전략은 숙소 완속 야간충전 + 관광 동선 급속입니다.",
  ferryRules: {
    title: "🚢 페리 선적 규정 (가장 중요!)",
    items: [
      { label: "배터리 충전율", value: "선적 전 50% 미만 필수 — 씨월드고속훼리는 50% 초과 시 선적 거부 (해수부 2024.7.9 안전대책 — 2026.10 현재 씨월드 공지·보도상 완화 소식 없음). 테슬라 앱 충전한도 50% 설정." },
      { label: "항해 중 충전", value: "완전 금지. 차량 갑판 출입·차내 탑승도 불가 → 필요한 짐은 미리 객실로." },
      { label: "선적료", value: "퀸메리 공식 운임표(qm.seaferry.co.kr): 테슬라 Y 평일 197,640원 / 일·공휴일 208,520원 (할인가로 보이는 187,750/198,090원 병기). 우리는 이미 결제 완료 — 차액 문의는 1577-3567." },
      { label: "도착 시간", value: "목포: 차량은 주간선박 출항 1시간 전·야간선박 1시간 30분 전 마감(10/25 08:30편 → 07:30 마감). 제주: 차량 출항 30분 전 마감(11/23 07:20편 → 06:50). 여객은 양쪽 모두 10분 전 마감. 전기차 간 안전거리 확보로 선적 공간이 빨리 찰 수 있어 여유 있게." },
      { label: "차량 조건", value: "사고 이력·외관 손상(충돌 흔적) 전기차는 선적 거부될 수 있음. 차량등록증 지참." },
    ],
  },
  chargers: {
    title: "🔌 제주 충전 인프라",
    liveMaps: [
      { name: "탐라는 전기차", badge: "제주 전용", note: "제주 전역 충전소·상태를 먼저 확인", url: "https://www.tamraev.com/electronicList" },
      { name: "Tesla Find Us", badge: "테슬라 공식", note: "슈퍼차저·데스티네이션 차저·이용 가능 여부", url: "https://www.tesla.com/ko_KR/findus" },
      { name: "무공해차 통합누리집", badge: "환경부", note: "공공 충전소·커넥터·요금 확인", url: "https://ev.or.kr/" },
      { name: "EV Infra", badge: "실시간", note: "운영 상태·최근 제보·통합결제 확인", url: "https://www.evinfra.co.kr/" },
    ],
    routePlan: [
      { region: "동부 · 숙소권", name: "김녕·구좌·성산", rule: "출발 30% 이상이면 김녕 또는 성산권에서 먼저 보충", color: "ocean" },
      { region: "제주시권", name: "제주 슈퍼차저", rule: "공항·시내 일정과 겹칠 때 10~80% 충전", color: "jeju" },
      { region: "서부 · 남부", name: "애월·한림·중문", rule: "서부 종일 코스 전 60% 이상, 중문은 서귀포 슈퍼차저를 백업", color: "gold" },
    ],
    superchargers: [
      { name: "제주 테슬라 슈퍼차저", address: "제주시 연삼로 136 (오라삼동)", note: "동부 숙소에서 약 30~40km (2026.10 기준 제주 신규 슈퍼차저 개소 보도 없음 — 2026.10 테슬라 발표 21개 휴게소 확충 목록에도 제주 없음. 출발 전 차량 내비로 재확인)" },
      { name: "서귀포 슈퍼차저", address: "서귀포시 중문관광로72번길 35 (롯데호텔제주)", note: "중문관광단지 롯데호텔 내, 주차비 별도(이용자 후기: 충전 완료 10분 후부터 10분당 2천원 — 현장 확인), 혼잡 잦음" },
    ],
    destination: [
      { name: "사니다카페 (구좌 하도리 907)", note: "데스티네이션 16kW 2기, 연중무휴 (고객 전용, 사전 전화 064-784-8216)" },
      { name: "성산읍 2곳", note: "한도로 269-37(고객전용 064-783-8366)·난산리 2682 (이용 전 사전 연락 권장)" },
    ],
    publicNote: "공공 충전기는 사업자·고장·점검·주차 운영시간에 따라 사용 가능 여부가 달라집니다. 지도 핀은 동선 계획용이며 출발 직전에는 반드시 '제주 전용' 또는 환경부 지도에서 상태와 커넥터를 확인하세요.",
    adapters: [
      "CCS 콤보1 어댑터 (공공 급속 DC콤보 필수 — 워터·환경부 급속 모두 CCS. 테슬라샵 약 30만원 · 모델3/Y 전용)",
      "J1772 어댑터 (공공 완속 7kW용 · 차량 기본 포함 여부 확인)",
    ],
    apps: [
      { name: "EV Infra", note: "충전소 위치·실시간 상태·통합결제", url: "https://www.evinfra.co.kr/" },
      { name: "탐라는 전기차", note: "제주 전용 충전소 지도", url: "https://www.tamraev.com/electronicList" },
      { name: "무공해차 통합누리집", note: "환경부 충전요금·충전소 검색", url: "https://ev.or.kr/" },
    ],
    price: "✅ 환경부 공공충전기 5단계 요금 2026.8.1 시행 확정(기후에너지환경부, ev이음 회원카드 기준): 30kW 미만 295.0 / 30~50kW 307.2 / 50~100kW 325.6 / 100~200kW 348.4 / 200kW 이상 393.1원/kWh. 워터·슈퍼차저 등 민간은 자체 요금이라 앱/충전기 화면의 kWh당 금액을 확인하세요. 가을 한시 할인: 2026.9.5~10.31 주말·공휴일 11~14시 공공 급속 최대 32% 할인 → 여행 중 10/25(일)·10/31(토)만 해당.",
    mapPoints: [
      { name: "제주 테슬라 슈퍼차저", type: "supercharger", lat: 33.5120, lng: 126.5767, mapQuery: "제주 테슬라 슈퍼차저 연삼로" },
      { name: "서귀포 슈퍼차저 (롯데호텔)", type: "supercharger", lat: 33.2484, lng: 126.4107, mapQuery: "롯데호텔제주 테슬라 슈퍼차저" },
      { name: "데스티네이션 사니다카페(하도리)", type: "destination", lat: 33.5188, lng: 126.8831, mapQuery: "사니다카페 하도리" },
      { name: "데스티네이션 성산(한도로)", type: "destination", lat: 33.4689, lng: 126.9357, mapQuery: "테슬라 데스티네이션 성산 한도로" },
      { name: "데스티네이션 성산(난산리)", type: "destination", lat: 33.4047, lng: 126.8612, mapQuery: "테슬라 데스티네이션 난산리" },
      { name: "김녕 EV충전스테이션", type: "fast", lat: 33.5398, lng: 126.7272, mapQuery: "김녕 융복합 EV충전스테이션" },
      { name: "🆕 워터 김녕리공영주차장 (200kW)", type: "fast", lat: 33.5565, lng: 126.7580, mapQuery: "김녕리공영주차장" },
      { name: "🆕 워터 동백동산 선흘 (200kW)", type: "fast", lat: 33.5120, lng: 126.7120, mapQuery: "동백동산습지센터" },
      { name: "🆕 워터 우도면사무소 (200kW)", type: "fast", lat: 33.5035, lng: 126.9515, mapQuery: "우도면사무소" },
    ],
  },
  tips: [
    "숙소 완속(7kW) 충전 여부를 호스트에 미리 확인 — 야간 충전으로 매일 아침 완충 출발이 최선 (공공 완속 30kW 미만 295.0원/kWh로 8.1부터 인하)",
    "급하게 채울 땐 워터 김녕리공영주차장 200kW 급속 2기·7kW 완속 2기(숙소서 ~15분, ZDNet 2025.12) — 워터는 민간이라 자체 요금(공공 200kW 이상은 393.1원/kWh) → 앱에서 단가 확인. CCS 콤보1 어댑터 필수(워터는 2026.5 고속도로 350kW도 테슬라에 개방, 제주 200kW 기기 호환은 현장 확인)",
    "11월 제주는 내륙보다 온화해 주행거리 감소폭이 작음. 모델Y 실주행 약 260~290km 예상",
    "관광·식사 중 급속충전(30~45분에 20~30% 확보)으로 동선과 충전을 겹치기",
    "슈퍼차저는 제주시·중문뿐 → 제주시 관광 동선과 겹칠 때만 들르기",
    "전날 밤 다음 날 경로의 충전소를 EV Infra/탐라는전기차로 미리 확인하고, 1순위·2순위 충전소를 각각 저장",
  ],
  cautions: [
    "중산간·1100도로·516도로: 충전소 거의 없음 → 잔량 30%+ 확보 후 진입",
    "오름 주차장엔 충전기 없음 → 인근 마을·마트 충전소 사전 확인",
    "성수기 관광지 충전소(성산 등) 오전 10시~오후 2시 혼잡",
    "고장·점검 중 충전기 있음 → EV Infra 최근 리뷰 확인 후 방문",
    "충전기 정보와 요금은 수시 변경 — 도착 전 앱에서 운영 상태, 주차 가능 시간, CCS 콤보1 여부를 다시 확인",
  ],
  sources: [
    { label: "충전요금 5단계 개편 행정예고 (이투데이, 2026.07)", url: "https://www.etoday.co.kr/news/view/2580027" },
    { label: "충전요금 5단계 확정·8.1 시행 (세계일보, 2026.07.01)", url: "https://www.segye.com/newsView/20260701514895" },
    { label: "공공충전 가을 한시 할인 9.5~10.31 (디지털데일리, 2026.09.03)", url: "https://m.ddaily.co.kr/page/view/2026090316291364668" },
    { label: "워터, 테슬라에 고속도로 350kW 개방 (머니투데이, 2026.05.07)", url: "https://www.mt.co.kr/industry/2026/05/07/2026050717543284353" },
    { label: "퀸메리 시간표·운임표 (씨월드 공식)", url: "http://qm.seaferry.co.kr/santa_m_fare.php" },
    { label: "워터 초급속 충전소 제주 10곳 개소 (ZDNet, 2025.12)", url: "https://zdnet.co.kr/view/?no=20251202161517" },
    { label: "테슬라 데스티네이션 차징 (공식)", url: "https://www.tesla.com/ko_KR/findus/list/chargers/South+Korea" },
    { label: "씨월드 전기차 선적 제한 (한국일보)", url: "https://www.hankookilbo.com/News/Read/A2024081914210001380" },
    { label: "해수부 전기차 해상운송 안전대책 (문화일보)", url: "https://www.munhwa.com/news/view.html?no=2024080701071227106001" },
    { label: "씨월드고속훼리 요금정보", url: "https://www.seaferry.co.kr/bbs/content.php?co_id=p101" },
    { label: "무공해차 통합누리집 충전요금", url: "https://ev.or.kr/nportal/evcarInfo/initEvcarChargePrice.do" },
  ],
};

// 장소명 → [위도, 경도] 룩업 (지도 마커용). 2026.06 지오코딩(visitjeju·Nominatim 등, 일부 추정).
// 항목에 lat/lng가 직접 있으면 그게 우선(NEARBY_PLACES). 여기는 카페·맛집 / 더 가볼 곳 용.
const SPOT_COORDS = {
  // 카페·맛집 (PET_BABY_SPOTS)
  // 2026.10.20 재지오코딩: 네이버 플레이스 좌표(카페·맛집) / 비짓제주 좌표(관광지). 종달리 해안도로만 대략 위치(저신뢰)
  "어니스트밀크": [33.4504, 126.8719],
  "담백 월정리 본점": [33.5564, 126.8013],
  "명리동식당 구좌직영점": [33.5275, 126.8433],
  "평대스낵": [33.5366, 126.8379],
  "고기굽는해녀 구좌흑돼지": [33.5360, 126.8268],
  "금돗 성산흑돼지": [33.4652, 126.9325],
  "쉐프1192레스토랑": [33.3986, 126.9052],
  "세모": [33.5532, 126.8081],
  "애월더선셋": [33.4562, 126.3089],
  "제주개생활연구소": [33.3279, 126.2696],
  "금돈가": [33.4843, 126.3912],
  "별돈별 협재해변점": [33.3989, 126.2454],
  "감따남": [33.2621, 126.4946],
  "벨진밧": [33.2704, 126.2787],
  "목장카페 밭디": [33.4079, 126.7729],
  "모메든식당": [33.2534, 126.4547],
  "커뮤니테이블 시즌2": [33.2448, 126.4593],
  "아솥 서귀포본점": [33.2743, 126.5661],
  "산방산해물라면오빠네": [33.2352, 126.3128],
  "동진식당 공항점": [33.5097, 126.5094],
  // 더 가볼 곳 (EXPLORE_SPOTS)
  "속솜": [33.5286, 126.8798],
  "다코네": [33.5292, 126.8368],
  "비수기애호가": [33.5432, 126.8308],
  "카페씨닉": [33.5593, 126.7927],
  "레이오버": [33.5586, 126.8123],
  "플레이스엉물": [33.4896, 126.9007],
  "릴로 (L'îlot)": [33.5109, 126.8929],
  "보롬창고": [33.4979, 126.9107],
  "오른": [33.4718, 126.9158],
  "모닥식탁": [33.5310, 126.8173],
  "달이뜨는식탁": [33.5532, 126.7908],
  "금백조로가든": [33.4393, 126.8628],
  "카페 3535.1": [33.5463, 126.6695],
  "블리스풀": [33.4051, 126.4073],
  "지미봉 둘레길": [33.4895, 126.8779],
  "용눈이오름": [33.4599, 126.8316],
  "다랑쉬오름": [33.4748, 126.8263],
  "아부오름": [33.4488, 126.7774],
  "광치기해변": [33.4525, 126.9246],
  "종달리 해안도로": [33.4960, 126.9130],
  "함도그비치(함덕)": [33.5427, 126.6691],
  "메이즈랜드": [33.4888, 126.8009],
  "신창풍차해안도로": [33.3430, 126.1722],
  "산양큰엉곶": [33.2920, 126.2522],
  "해양동물박물관": [33.4297, 126.8556],
  "일출랜드": [33.3835, 126.8414],
  "넥슨뮤지엄": [33.4863, 126.4286],
  "테디베어뮤지엄 제주": [33.2500, 126.4122],
  "제주민속자연사박물관": [33.5061, 126.5316],
  "제주레일바이크": [33.4646, 126.8370],
  "비체올린": [33.3590, 126.2118],
  "9.81파크": [33.3929, 126.3586],
  "제주 화조원": [33.4111, 126.3714],
  // 11월 시즌
  "따라비오름": [33.3892, 126.7533],
  "백약이오름": [33.4373, 126.7902],
  "산굼부리": [33.4316, 126.6900],
  "새별오름": [33.3672, 126.3571],
  "카페 글렌코": [33.4343, 126.7375],
  "휴애리자연생활공원": [33.3330, 126.6181],
  "2026 제주감귤박람회": [33.2881, 126.6070],
  "제26회 최남단방어축제": [33.2189, 126.2486],
};

// 더 가볼 곳 (후보 풀) — 2026.06 검증 → 2026.10.20 재검증(비짓제주 상세정보·'2026 혼저옵서개' 태그, 네이버 플레이스 편의정보/영업시간)
const EXPLORE_SPOTS = {
  title: "🧭 더 가볼 곳 (후보 풀)",
  note: "30일 일정과 별개로, 같은 기준(🐶강아지·👶아기 동반 가능)으로 검증한 추가 후보들. 동부 우선. 2026.10.20 재검증: 폐업·이전 의심 6곳 제외, 🆕 신규 추가, 🍂 11월 시즌 탭 신설. '네이버 편의정보'는 업주 등록 정보라 견종·크기·케이지 조건은 방문 전 전화 확인. ⭐리뷰/🗺️지도로 바로 확인하세요.",
  categories: [
    {
      key: "cafe", name: "반려견 카페·맛집", icon: "🐶☕", color: "amber",
      spots: [
        { name: "속솜", region: "동부·하도", address: "구좌읍 해맞이해안로 1655", dog: "반려동물 동반(네이버 편의정보)", baby: "노키즈존 아님", hours: "10:00~20:00 (목 휴무)", desc: "🆕 숙소에서 약 1km! 사장님 수제 수플레·빵·무화과잼. 조용한 동네 카페.", mapQuery: "속솜 하도리" },
        { name: "다코네", region: "동부·평대", address: "구좌읍 평대4길 20-1", dog: "동반 가능 후기(야외 위주) — 2026 네이버 편의정보엔 미표기, 확인 권장", baby: "노키즈존 아님", hours: "10:00~19:00 (네이버 기준, 임시휴무 잦음 — 소식 확인)", desc: "구좌 평대리 베이커리 카페. 소금버터롤·햄대파빵. 매장 앞 주차 3대.", mapQuery: "다코네 평대" },
        { name: "비수기애호가", region: "동부·한동", address: "구좌읍 해맞이해안로 997 2층", dog: "반려동물 동반(네이버 편의정보)", baby: "유아의자 있음", hours: "매일 10:00~18:00", desc: "🆕 구좌당근 즉석 착즙주스(노시럽). 해안도로 바다뷰.", mapQuery: "비수기애호가 구좌" },
        { name: "카페씨닉", region: "동부·월정리", address: "구좌읍 해맞이해안로 402", dog: "반려동물 동반(네이버 편의정보·펫메뉴)", baby: "노키즈존 아님", hours: "10:00~19:00 (수 휴무, LO 18:30)", desc: "월정리 오션뷰 카페, 구좌당근 휘낭시에·브런치.", mapQuery: "카페씨닉 월정리" },
        { name: "레이오버", region: "동부·행원", address: "구좌읍 행원리 575", dog: "반려동물 동반(비짓제주 2026)", baby: "노키즈존 아님", hours: "LO 18:00 (휴무 방문 전 확인)", desc: "검은 톤 인테리어 디저트 카페. 디플로마 라떼·커스터드.", mapQuery: "레이오버 구좌 카페" },
        { name: "플레이스엉물", region: "동부·종달리", address: "구좌읍 종달논길 92", dog: "반려동물 동반(네이버 편의정보)", baby: "노키즈존 아님", hours: "09:00~16:00, 브런치 ~15:00 (목 휴무)", desc: "종달리 용천수(엉물) 옆 브런치 카페. 당근수프 인기. 종달 해안도로 산책과 연계.", mapQuery: "플레이스엉물 종달리" },
        { name: "릴로 (L'îlot)", region: "동부·하도", address: "구좌읍 하도13길 63", dog: "반려동물 동반(네이버 편의정보)", baby: "노키즈존 아님", hours: "09:30~15:00 (LO 14:30, 목 휴무)", desc: "하도리(종달리 인근) 브런치 카페. 수제 그릭요거트·콩포트. 철새도래지 옆 주차.", mapQuery: "릴로 하도리" },
        { name: "보롬창고", region: "동부·종달리", address: "구좌읍 종달항길 3", dog: "반려동물 동반(네이버 편의정보)", baby: "노키즈존 아님", hours: "08:00~20:00 (휴무는 인스타 공지)", desc: "🆕 종달항 앞 카페. 시그니처 소금 토스트(주문 후 약 15분).", mapQuery: "보롬창고 종달리" },
        { name: "오른", region: "동부·성산", address: "성산읍 해맞이해안로 2714", dog: "반려동물 동반(네이버 편의정보)", baby: "유아의자 있음", hours: "10:00~19:00 (10월부터 동절기 시간)", desc: "🆕 성산 오조리 대형 카페(리뷰 9천+). 크로아상 붕어빵.", mapQuery: "오른 성산 카페" },
        { name: "모닥식탁", region: "동부·한동", address: "구좌읍 한동로 136", dog: "실내 동반 가능(케이지/가방 필수)", baby: "노키즈존 아님", hours: "화~토 10:00~15:00 (일·월 휴무)", desc: "수요미식회 출신 구좌 카레 맛집. 064-782-9827.", mapQuery: "모닥식탁 구좌" },
        { name: "달이뜨는식탁", region: "동부·월정리", address: "구좌읍 월정1길 14", dog: "반려동물 동반(네이버 편의정보)", baby: "유아의자 있음", hours: "수~월 11:00~20:00 (화 휴무, 브레이크 없음)", desc: "🆕 월정리 양식당. 해변 산책 후 식사.", mapQuery: "달이뜨는식탁 월정리" },
        { name: "금백조로가든", region: "동부·성산", address: "성산읍 금백조로 96", dog: "반려동물 동반(네이버 편의정보·관광공사 추천)", baby: "유아의자 있음", hours: "09:00~21:00 (수 휴무)", desc: "성산 수산리 향토 식당.", mapQuery: "금백조로가든 성산" },
        { name: "카페 3535.1", region: "동부·함덕", address: "조천읍 함덕2길 82", dog: "동반 가능(목줄) — 기존 정보", baby: "노키즈존 아님", hours: "⚠️ 2026.10 영업 확인 불가 — 방문 전 확인", desc: "함덕 서우봉 인근 정원형 카페(네이버 검색 미노출).", mapQuery: "카페 3535.1 함덕" },
        { name: "블리스풀", region: "서부·애월", address: "애월읍 유수암리 1176", dog: "소형견 안거나 전용의자, 대형견 야외 대기, 운동장 대·중·소 분리", baby: "노키즈존 아님", hours: "금 휴무(비짓제주 2026) — 운영시간 방문 전 확인", desc: "유명 애견 운동장 카페. 수제 반려견 간식. 비짓제주 '나우다' 제시 시 반려견 무료입장 1장.", mapQuery: "블리스풀 애월" },
      ],
    },
    {
      key: "walk", name: "반려견 관광·산책·오름·해변", icon: "🏞️", color: "green",
      spots: [
        { name: "지미봉 둘레길", region: "동부·종달리", address: "구좌읍 종달리 산3-1", dog: "동반 가능(목줄), 진드기 주의 ※공식 표기 없음", baby: "아기띠 권장(비포장)", hours: "상시", desc: "오름 둘레 한 바퀴(약 1시간). 성산일출봉·우도 조망.", mapQuery: "지미봉" },
        { name: "용눈이오름", region: "동부·구좌", address: "구좌읍 종달리 산38", dog: "목줄 산책 후기 다수 ※비짓제주 동반 표기 없음 — 현장 안내 확인", baby: "아기띠(완만, 편도 30분)", hours: "상시(2023.7 자연휴식년제 해제, 일몰 전 하산)", desc: "분화구 3개의 완만한 오름. 성산·우도 절경. 11월 억새.", mapQuery: "용눈이오름" },
        { name: "다랑쉬오름", region: "동부·구좌", address: "구좌읍 세화리 산6", dog: "⚠️ 오름(정상)은 반려동물 불가, 둘레길만 목줄·배변봉투 지참 시 가능(비짓제주)", baby: "아기띠 필수(경사 급, 40분)", hours: "상시", desc: "동부 제2 높이(382m). 정상 파노라마 — 강아지는 둘레길 코스로.", mapQuery: "다랑쉬오름" },
        { name: "아부오름", region: "동부·송당", address: "구좌읍 송당리 산164-1", dog: "소·중·대형견 가능(목줄 2m 이내·배변봉투, 비짓제주 2026)", baby: "아기띠(낮고 완만)", hours: "상시", desc: "🆕 낮고 완만한 원형 분화구 오름(비짓제주 '가을' 추천 태그). 아기 동반 오름 입문용.", mapQuery: "아부오름" },
        { name: "광치기해변", region: "동부·성산", address: "서귀포시 성산읍 고성리 224-18", dog: "소·중·대형견 가능(목줄 2m·인식표·배변봉투, 비짓제주 2026)", baby: "해변 산책(유모차는 입구 포장구간만)", hours: "상시", desc: "🆕 성산일출봉 정면 검은 모래·용암 해변. 일출 명소(일출봉 반려견 불가 대안).", mapQuery: "광치기해변" },
        { name: "종달리 해안도로", region: "동부·종달리", address: "구좌읍 종달리 해안", dog: "동반 가능(목줄)", baby: "유모차 가능(포장도로)", hours: "상시", desc: "우도·성산이 보이는 절경 해안도로. 산책 최적.", mapQuery: "종달리 해안도로" },
        { name: "함도그비치(함덕)", region: "동부·함덕", address: "조천읍 조함해안로 525", dog: "펫비치 물놀이는 2026.6.24~9.6 운영(종료) / 비수기 목줄 산책 OK", baby: "해변 산책 가능", hours: "상시", desc: "에메랄드 함덕 바다. 11월엔 한적한 산책.", mapQuery: "함덕해수욕장" },
        { name: "메이즈랜드", region: "동부·구좌", address: "구좌읍 비자림로 2134-47", dog: "동반 가능 — 케이지 또는 반려동물 유모차 필수(리드줄만으론 불가), 실내 불가(비짓제주 2026)", baby: "유모차·휠체어 무료 대여, 평지", hours: "11~1월 09:00~17:30(매표~16:30), 10월 ~18:00 / 연중무휴", desc: "세계 최장 석축 미로공원. 비수기 한적. 064-784-3838.", mapQuery: "메이즈랜드", url: "https://www.mazeland.co.kr/" },
        { name: "신창풍차해안도로", region: "서부·한경", address: "한경면 신창리 1481-23", dog: "소·중·대형견 가능(비짓제주 2026)", baby: "유모차 가능(포장)", hours: "상시(만조 시 일부 폐쇄)", desc: "흰 풍차 늘어선 서해안 드라이브·석양 명소.", mapQuery: "신창풍차해안도로" },
        { name: "산양큰엉곶", region: "서부·한경", address: "한경면 청수리 956-6", dog: "⚠️ 10kg 미만만 동반 가능(목줄·배변봉투, 비짓제주)", baby: "아기띠 권장(숲길)", hours: "11~2월 09:30~17:00(입장~16:00) / 연중무휴", desc: "곶자왈 숲길. 토끼 먹이주기.", mapQuery: "산양큰엉곶" },
      ],
    },
    {
      key: "indoor", name: "아기·실내·우천 대비", icon: "🌧️", color: "blue",
      spots: [
        { name: "해양동물박물관", region: "동부·성산", address: "성산읍 서성일로 689-21", dog: "동반 불가", baby: "36개월 무료, 유모차 대여·기저귀교환대", hours: "09:00~18:00 (수 휴관 — 비짓제주 확인, 시간은 방문 전 확인)", desc: "성산 해양동물 박물관. 비 오는 날 최적.", mapQuery: "제주해양동물박물관 성산" },
        { name: "일출랜드", region: "동부·성산", address: "성산읍 중산간동로 4150-30 (삼달리)", dog: "반려동물 동반 관광지(비짓제주 2026 혼저옵서개 등록)/동굴은 안고 입장 권장", baby: "유모차 부분 가능(정원)", hours: "09:00~18:00 / 입장 마감 16:30 / 연중무휴", desc: "천연용암동굴 미천굴+아열대 정원 테마파크. 2026 운영 확인(비짓제주 '나우다' 입장권 25% 할인). 064-784-2080.", mapQuery: "일출랜드 성산", url: "https://www.ilchulland.com/" },
        { name: "넥슨뮤지엄", region: "제주시", address: "제주시 1100로 3198-8 (노형동)", dog: "동반 불가", baby: "36개월 미만 무료였음(구 요금) — 확인, 체험형 전시", hours: "월 휴무 / 예약 없이 현장 발권 가능(비짓제주) / 요금·시간 방문 전 확인", desc: "2026.5.12 넥슨컴퓨터박물관 → 넥슨뮤지엄 재개관. 넥슨 IP 40여 종 체험형(넥슨플레이 앱 연동).", mapQuery: "넥슨뮤지엄 제주", url: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500099" },
        { name: "테디베어뮤지엄 제주", region: "남부·중문", address: "서귀포시 중문관광로110번길 31", dog: "소·중형견 케이지 동반 시에만 입장 가능(비짓제주 2026)", baby: "만 36개월까지 무료(성인 1인당 2명), 유모차·수유실", hours: "연중무휴, 입장 마감 17:30", desc: "테디베어 이색 박물관. 중문 우천 대비 코스.", mapQuery: "테디베어뮤지엄 제주" },
        { name: "제주민속자연사박물관", region: "제주시", address: "제주시 삼성로 40", dog: "동반 불가", baby: "어린이 무료, 유모차 가능", hours: "매표 마감 17:30 (월 휴관)", desc: "제주 자연·민속·역사. 어른 2,000원(방문 전 확인), 우천 시 알참.", mapQuery: "제주민속자연사박물관" },
      ],
    },
    {
      key: "exp", name: "체험 (레저·생태)", icon: "🎯", color: "orange",
      spots: [
        { name: "제주레일바이크", region: "동부·구좌", address: "구좌읍 용눈이오름로 641", dog: "소형견만 — 가슴에 안거나 케이지로 이동, 배변봉투(비짓제주 2026)", baby: "아기 안고 탑승(유아 동반 가능 여부 현장 확인)", hours: "11~2월 09:00~17:00 / 연중무휴(악천후 휴장)", desc: "🆕 용눈이오름·다랑쉬 바라보며 달리는 레일바이크. 숙소에서 차로 약 15분(추정).", mapQuery: "제주레일바이크" },
        { name: "비체올린", region: "서부·한경", address: "한경면 판조로 253-6", dog: "소·중·대형견 입장, 카약은 안고 탈 수 있는 체격만(비짓제주 2026) — 추가요금 확인", baby: "야외, 유모차 부분 가능", hours: "11~2월 08:45~17:30(입장~16:50) / 연중무휴", desc: "레저힐링파크. 카약·미로·곶자왈·토끼 먹이주기.", mapQuery: "비체올린 한경" },
        { name: "9.81파크", region: "서부·애월", address: "애월읍 천덕로 880-24", dog: "매주 토요일 반려동물 전용 티켓 구매 시 입장(1인 1견, 중·대형견 전화문의)", baby: "카트 영아 제한, 동반 입장 가능", hours: "연중무휴 09:00~18:00(체험별 상이, 기상 따라 변동)", desc: "무중력 레이싱 카트. 우천 시도 실내 이용.", mapQuery: "9.81파크 애월", url: "https://www.981park.com" },
        { name: "제주 화조원", region: "서부·애월", address: "애월읍 애원로 804", dog: "정책 불명확 ※확인 권장", baby: "36개월 무료, 새 먹이주기", hours: "11~3월 09:00~17:30 (마감 1시간 전 입장 마감)", desc: "희귀 조류 생태 체험관. 새 먹이주기 인기.", mapQuery: "제주 화조원 애월" },
      ],
    },
    {
      key: "autumn", name: "11월 시즌 (억새·핑크뮬리·축제)", icon: "🍂", color: "orange",
      spots: [
        { name: "따라비오름", region: "동부·표선", address: "서귀포시 표선면 가시리 산62", dog: "소·중·대형견 가능(목줄 2m·배변봉투, 비짓제주 2026)", baby: "아기띠(정상 편도 약 20~30분, 계단)", hours: "상시 / 무료 / 화장실 없음", desc: "'오름의 여왕' 억새 명소. 제주 억새는 10~11월 절정 → 여행 기간과 딱 맞음. 숙소에서 약 30km.", mapQuery: "따라비오름" },
        { name: "백약이오름", region: "동부·성읍", address: "서귀포시 표선면 성읍리 산1", dog: "소·중·대형견 가능(목줄·배변봉투, 비짓제주)", baby: "아기띠(왕복 30~40분)", hours: "상시 / 무료 ※별도 고시일까지 정상 등반 불가(나머지 코스 가능)", desc: "억새 능선 산책. 화장실·안내소 없음. 아부오름과 묶기 좋음.", mapQuery: "백약이오름" },
        { name: "산굼부리", region: "동부·교래", address: "제주시 조천읍 비자림로 768", dog: "⚠️ 반려동물 출입 불가(비짓제주) → 강아지는 차량/펫시터", baby: "완만한 탐방로(약 40분)", hours: "11~2월 09:00~17:40(입장 마감 17:00) / 연중무휴", desc: "천연기념물 분화구 + 억새 평원. 💰2026 요금 성인 7,000원·청소년/어린이 6,000원(비짓제주). 064-783-9900.", mapQuery: "산굼부리" },
        { name: "새별오름", region: "서부·애월", address: "제주시 애월읍 봉성리 산59-8", dog: "반려견 동반 가능(목줄 2m·배변봉투, 비짓제주 2026)", baby: "아기띠 권장(경사 있음)", hours: "상시 / 무료", desc: "제주 대표 억새 오름(들불축제 장소). 서부 일정과 함께. 뱀·진드기 주의.", mapQuery: "새별오름" },
        { name: "카페 글렌코", region: "동부·송당", address: "구좌읍 비자림로 1202", dog: "반려견 동반 가능(비짓제주·네이버 편의정보)", baby: "넓은 정원, 아이 뛰어놀기 OK", hours: "매일 09:30~18:30 (LO 18:00)", desc: "핑크뮬리 명소 정원 카페(가을). 개화 상태는 방문 전 인스타 확인.", mapQuery: "카페 글렌코 송당" },
        { name: "휴애리자연생활공원", region: "남부·남원", address: "서귀포시 남원읍 신례리 2081", dog: "7kg 미만 소형견만 일부 구역(혼잡 구역은 안기/이동장, 카페 내부 불가)", baby: "35개월 이하 무료", hours: "동절기(10~2월) 09:00~18:00, 입장 마감 16:30 / 연중무휴", desc: "가을 핑크뮬리 축제(2024년 9~11월 개최, 2026 일정 미확인) + 감귤체험(현장 상황 따라). 💰성인 13,000원(비짓제주). 064-732-2114.", mapQuery: "휴애리" },
        { name: "2026 제주감귤박람회", region: "남부·남원", address: "서귀포시 남원읍 하례리 1558 제주농업생태원 일원", dog: "행사장 반려견 정책 미확인 — 방문 전 확인", baby: "가족 체험행사·감귤 직거래장", hours: "2026.11.19(목)~23(월) / 10:00~17:00(블로그 기준, 확인 필요)", desc: "🍊 여행 막바지(11/19~23)에 열림! 주최 제주도·제주국제감귤박람회조직위(파이낸셜뉴스 2026.8 보도). 입장료 현장 2,000원·사전 1,000원은 블로그 기준(미확인).", mapQuery: "제주농업생태원" },
        { name: "제26회 최남단방어축제", region: "서부·모슬포", address: "서귀포시 대정읍 모슬포항 일원", dog: "축제장 혼잡 — 반려견 동반 비추천", baby: "어린이 맨손잡기 체험(2025 기준 무료)", hours: "2026.11.19(목)~22(일) / 세부 시간표 미공개", desc: "방어 맨손잡기·경매·시식. 일정은 축제위 공식 홈페이지 게시(블로그 인용), 프로그램·참가비 미확정. 064-794-8032. 숙소에서 편도 1.5시간+.", mapQuery: "모슬포항" },
      ],
    },
  ],
};

// 숙소 주변 편의시설 정보
const NEARBY_PLACES = {
  title: "🏠 숙소 주변 편의시설",
  accommodation: {
    name: "우리 숙소",
    address: "제주시 구좌읍 해맞이해안로 1588-4",
    area: "구좌 동부 해안 (하도리 — 세화 동쪽)",
    coords: [33.5275, 126.8721],
  },
  note: "숙소 기준 차량/도보 예상 소요시간(직선거리×1.3 계획용 추정치, 2026.10 좌표 재계산). 🐶 표시는 네이버 플레이스 '반려동물 동반' 편의정보·비짓제주 기준(2026.10) — 견종·크기·케이지 조건은 업장마다 달라 방문 전 확인.",
  categories: [
    {
      name: "해변",
      icon: "🏖️",
      color: "blue",
      places: [
        { name: "세화해변", address: "구좌읍 세화리", distance: "1.3km", time: "차량 4분", lat: 33.5253, lng: 126.8613, desc: "숙소에서 가장 가까운 해변. 에메랄드빛 바다, 세화오일시장 인접. 강아지 산책 최적.", dog: true, baby: true },
        { name: "평대해변", address: "구좌읍 평대리", distance: "4km", time: "차량 8분", lat: 33.5332, lng: 126.8407, desc: "한적하고 물 맑음. 평대스낵·평대성게국수와 묶기 좋음.", dog: true, baby: true },
        { name: "월정리해변", address: "구좌읍 해맞이해안로 481", distance: "10km", time: "차량 17분", lat: 33.5551, lng: 126.7986, desc: "제주 동부 대표 해변. 카페거리 인접. 11월엔 물놀이보다 산책.", dog: true, baby: true },
        { name: "김녕해변", address: "구좌읍 해맞이해안로 7-6", distance: "14km", time: "차량 23분", lat: 33.5570, lng: 126.7599, desc: "넓은 백사장. 비짓제주: 목줄 2m 이내·배변봉투 필수(동반 세부는 운영주체 확인).", dog: true, baby: true },
      ],
    },
    {
      name: "마트/편의점",
      icon: "🛒",
      color: "green",
      places: [
        { name: "하도리 편의점 (CU/GS25)", address: "구좌읍 하도리 (숙소 인근, 위치 방문 전 확인)", distance: "0.8km", time: "차량 3분", lat: 33.5225, lng: 126.8700, desc: "급한 장보기, 간식, 생필품.", dog: false, baby: true },
        { name: "구좌농협 하나로마트", address: "구좌읍 평대리 3351-2", distance: "2.3km", time: "차량 5분", lat: 33.5248, lng: 126.8534, desc: "농협 마트. 신선한 채소·과일·흑돼지. 08:00 오픈(마감 시간 방문 전 확인). 064-784-3326.", dog: false, baby: true },
        { name: "세화오일시장", address: "구좌읍 세화리", distance: "1.8km", time: "차량 5분", lat: 33.5261, lng: 126.8576, desc: "끝자리 5, 0일에만 장날! 제주 특산물·먹거리.", dog: true, baby: true },
        { name: "이마트 제주점", address: "제주시 탑동로 38", distance: "40km", time: "차량 50분", lat: 33.5183, lng: 126.5206, desc: "대형마트. 대량 장보기 시 이용.", dog: false, baby: true },
      ],
    },
    {
      name: "맛집",
      icon: "🍽️",
      color: "orange",
      places: [
        { name: "평대스낵", address: "구좌읍 대수길 26", distance: "4km", time: "차량 8분", lat: 33.5366, lng: 126.8379, desc: "한치튀김 맛집! 옥상 바다뷰. 반려동물 동반. 11:00~16:00 (수 휴무).", dog: true, baby: true },
        { name: "평대성게국수", address: "구좌읍 해맞이해안로 1172", distance: "4km", time: "차량 8분", lat: 33.5342, lng: 126.8398, desc: "성게국수 전문. 10:00~18:00 (월 휴무). 반려견 동반은 방문 전 확인(네이버 편의정보 미표기).", dog: true, baby: true },
        { name: "고기굽는해녀 구좌흑돼지", address: "구좌읍 한동로1길 25", distance: "5.6km", time: "차량 10분", lat: 33.5360, lng: 126.8268, desc: "흑돼지구이. 반려동물 동반·유아의자(네이버 편의정보). 12:00~22:00 (수 휴무).", dog: true, baby: true },
        { name: "명리동식당 구좌직영점", address: "구좌읍 일주동로 3010-17", distance: "3.5km", time: "차량 7분", lat: 33.5275, lng: 126.8433, desc: "흑돼지 전문. 사장님 직접 구워줌. 매일 11:30~21:10. 유아의자 있음. 반려견은 후기 엇갈림 → 전화 확인.", dog: false, baby: true },
        { name: "쉐프1192레스토랑", address: "성산읍 환해장성로 465", distance: "19km", time: "차량 30분", lat: 33.3986, lng: 126.9052, desc: "오션뷰 양식. 나시고랭, 파스타. 10:00~21:00 (월 휴무). 반려견 동반은 방문 전 확인.", dog: true, baby: true },
      ],
    },
    {
      name: "카페",
      icon: "☕",
      color: "amber",
      places: [
        { name: "모어모어", address: "구좌읍 해맞이해안로 1616", distance: "0.5km", time: "도보 7분", lat: 33.5291, lng: 126.8757, desc: "가장 가까운 카페! 올바다뷰 수플레 전문. 반려동물 동반·유아의자(네이버 편의정보). 09:00~18:00 (목 휴무).", dog: true, baby: true },
        { name: "속솜", address: "구좌읍 해맞이해안로 1655", distance: "0.9km", time: "도보 12분", lat: 33.5286, lng: 126.8798, desc: "하도리 수제 수플레·빵 카페. 반려동물 동반(네이버 편의정보). 10:00~20:00 (목 휴무).", dog: true, baby: true },
        { name: "시시소소", address: "구좌읍 중산간동로 2247", distance: "13km", time: "차량 22분", lat: 33.4721, lng: 126.7828, desc: "환승연애 촬영지. 넓은 정원. 반려동물 동반(네이버 편의정보). 매일 11:00~18:00.", dog: true, baby: true },
        { name: "어니스트밀크", address: "성산읍 중산간동로 3147-7", distance: "11km", time: "차량 19분", lat: 33.4504, lng: 126.8719, desc: "목장 카페. 송아지 우유주기 체험. 성산일출봉 조망. 반려동물 동반·유아의자. 매일 10:00~18:00.", dog: true, baby: true },
      ],
    },
    {
      name: "병원/약국",
      icon: "🏥",
      color: "red",
      places: [
        { name: "세화의원", address: "구좌읍 세화5길 2 (세화리)", distance: "2km", time: "차량 5분", lat: 33.52342, lng: 126.85668, desc: "숙소 최근접 의원(내과·소아청소년과·정형외과 표방). 평일 08:30~18:00 / 토·공휴일 ~12:00 / 일 휴진. 064-783-3196. 아기 진료 가능 여부 전화 확인.", dog: false, baby: true },
        { name: "구좌의원", address: "구좌읍 세화12길 1, 2층 (세화리)", distance: "2km", time: "차량 5분", lat: 33.52083, lng: 126.85928, desc: "경증 1차 동네의원. 월·화·목·금 08:30~18:00 / 수·토 ~12:00 / 일·공휴일 휴진. 064-782-9282.", dog: false, baby: true },
        { name: "세화약국", address: "구좌읍 세화10길 1, 1층", distance: "2km", time: "차량 5분", lat: 33.52084, lng: 126.85881, desc: "숙소 최근접 공공심야약국(도 기준 심야 20~23시). 카카오맵 등록 시간과 달라 밤엔 꼭 전화 후 출발. 064-784-8442.", dog: false, baby: true },
        { name: "발걸음동물병원", address: "구좌읍 세화5길 25 (세화리)", distance: "2km", time: "차량 5분", lat: 33.52563, lng: 126.85667, desc: "숙소 최근접 동물병원(2026.10 신규 확인). 진료시간 미확인 — 반드시 전화 후 방문. 064-783-7576.", dog: true, baby: false },
        { name: "동아동물병원", address: "성산읍 서성일로 1239, 1층 (고성리)", distance: "약 12km", time: "차량 15~20분", lat: 33.44709, lng: 126.9109, desc: "주간 경증 1차. 평일 09:00~17:30 / 토 ~12:00 / 일 휴무(카카오맵). 064-782-1175. 방문 전 전화 확인.", dog: true, baby: false },
        { name: "제주24시숨동물의료센터", address: "제주시 연북로 632", distance: "40km+", time: "차량 45분", lat: 33.4899, lng: 126.5457, desc: "24시 동물병원(365일). 강아지 야간·응급 시. 064-805-8365.", dog: true, baby: false },
      ],
    },
  ],
};
