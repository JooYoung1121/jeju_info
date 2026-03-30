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
  transport: "자차 선적 (씨월드고속훼리)",
};

const CATEGORIES = {
  sightseeing: { label: "관광", color: "bg-blue-100 text-blue-800", icon: "🏔️" },
  food: { label: "맛집", color: "bg-orange-100 text-orange-800", icon: "🍽️" },
  cafe: { label: "카페", color: "bg-amber-100 text-amber-800", icon: "☕" },
  workation: { label: "워케이션", color: "bg-purple-100 text-purple-800", icon: "💻" },
  baby: { label: "아기", color: "bg-pink-100 text-pink-800", icon: "👶" },
  dog: { label: "강아지", color: "bg-green-100 text-green-800", icon: "🐶" },
  checklist: { label: "준비물", color: "bg-gray-100 text-gray-800", icon: "✅" },
};

const WEEKS = [
  { label: "1주차", subtitle: "이동 + 정착 + 동부 탐색", dates: "10/25 ~ 10/31" },
  { label: "2주차", subtitle: "동부 심화 + 남부(서귀포)", dates: "11/1 ~ 11/7" },
  { label: "3주차", subtitle: "서부(한림/애월) + 제주시", dates: "11/8 ~ 11/14" },
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
        title: "자차로 목포항 이동 → 씨월드고속훼리 탑승",
        places: [
          {
            name: "목포항 연안여객터미널",
            address: "전남 목포시 해안로 253",
            desc: "펫스위트룸 이용 (4인, 전용 화장실). 4kg 이상은 펫스위트룸/펫스탠다드룸, 4kg 미만은 펫코노미 이용. 전용 케이지 필수 지참.",
            duration: "약 3시간 30분 (항해)",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "제주 도착 → 숙소 이동 (성산/구좌)",
        places: [
          {
            name: "제주항",
            address: "제주시 임항로 111",
            desc: "하선 후 자차로 숙소까지 약 1시간",
            duration: "이동 1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 주변 마트 장보기",
        places: [
          {
            name: "이마트 성산점 or 성산 로컬마트",
            address: "서귀포시 성산읍 일주동로",
            desc: "첫날 필수품 장보기 (생수, 간식, 아기용품 등)",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "해녀의집",
        menu: "성게미역국, 전복해물뚝배기",
        price: "1만~2만원대",
        address: "서귀포시 성산읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "도착 후 피곤하면 숙소에서 간단히 해결. 마트에서 생필품 우선 구매.",
    rainPlan: "이동일이므로 날씨 무관",
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
        title: "평대스낵에서 저녁",
        places: [
          {
            name: "평대스낵",
            address: "제주시 구좌읍 평대리",
            desc: "반려견 동반 가능. 분식/간식류.",
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
        menu: "떡볶이, 김밥, 튀김",
        price: "5천~1만원대",
        address: "제주시 구좌읍 평대리",
        baby: true,
        dog: true,
      },
    ],
    memo: "장보기 리스트 정리. 세화오일시장 장날은 끝자리 5, 0일 (10/25, 10/30, 11/5... ). 가까운 장날에 맞춰 방문 추천.",
    rainPlan: "실내에서 숙소 정리에 집중. 세화 카페 탐방.",
  },
  {
    day: 3,
    date: "2026-10-27",
    dayOfWeek: "화",
    theme: "워케이션 + 가벼운 관광",
    categories: ["workation", "sightseeing", "food", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션 (숙소 or 근처 카페)",
        places: [
          {
            name: "숙소 또는 카페",
            address: "구좌 일대",
            desc: "오전 집중 근무. 아기는 배우자가 돌봄.",
            duration: "3~4시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "김녕해수욕장 + 김녕미로공원",
        places: [
          {
            name: "김녕해수욕장",
            address: "제주시 구좌읍 김녕리",
            desc: "반려견 산책 가능한 해변. 수심 얕아 아기와도 안전.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
          {
            name: "김녕미로공원",
            address: "제주시 구좌읍 만장굴길 122",
            desc: "미로 정원. 유모차는 어려울 수 있음, 아기띠 추천.",
            duration: "40분",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "해녀촌 해산물",
        places: [
          {
            name: "김녕 해녀촌",
            address: "제주시 구좌읍 김녕리 해안",
            desc: "싱싱한 해산물 회/물회. 제주 향토 맛집.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "김녕 해녀촌",
        menu: "물회, 해산물 모둠, 전복죽",
        price: "1만5천~3만원대",
        address: "제주시 구좌읍 김녕리",
        baby: true,
        dog: false,
      },
    ],
    memo: "워케이션 시 와이파이 상태 확인 필수. 김녕해변은 조용해서 좋음.",
    rainPlan: "숙소에서 종일 워케이션. 오후 김녕미로공원 대신 실내 카페.",
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
            desc: "UNESCO 세계자연유산. 아기띠로 등반. 반려견 입장 불가 (천연기념물 보호구역).",
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
    rainPlan: "성산일출봉은 비 시 미끄러움 → 아쿠아플라넷 제주로 대체.",
  },
  {
    day: 5,
    date: "2026-10-29",
    dayOfWeek: "목",
    theme: "워케이션 + 동부 카페",
    categories: ["workation", "cafe", "sightseeing"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소 또는 카페",
            address: "구좌 일대",
            desc: "오전 집중 근무.",
            duration: "3~4시간",
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
        title: "구좌 맛집 탐방",
        places: [
          {
            name: "구좌 로컬 맛집",
            address: "제주시 구좌읍",
            desc: "해산물 or 흑돼지 맛집 탐방.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "월정리 카페",
        menu: "커피, 브런치, 디저트",
        price: "5천~1만5천원대",
        address: "제주시 구좌읍 월정리",
        baby: true,
        dog: true,
      },
    ],
    memo: "월정리 카페 중 반려견 동반 가능 카페 사전 체크.",
    rainPlan: "월정리 카페에서 실내 시간 보내기.",
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
            desc: "우도행 여객선 탑승. ⚠️ 반려견 탑승 가능 여부 공식 미확인 → 사전 문의 필수 (064-782-5671).",
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
    memo: "⚠️ 우도 여객선 반려견 탑승 여부 사전 문의 필수 (064-782-5671). 불가 시 부부 번갈아 방문 or 펫시터. 배편 마지막 시간 꼭 확인!",
    rainPlan: "우도는 날씨 좋은 날로 연기. 대신 실내 관광지(아쿠아플라넷 등).",
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
            desc: "세계자연유산 용암동굴. 유모차 불가(바닥 울퉁불퉁) → 아기띠 필수. 동굴 내 서늘(12~13℃), 겉옷 필수. ⚠️ 2023년 말부터 휴관 중 → 방문 전 재개장 여부 반드시 확인!",
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
            desc: "천년 비자나무 숲. 반려견 동반 가능 (목줄 필수, 배변 처리 필수). 유모차보다는 아기띠 추천. 입장료 성인 3,000원.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
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
    memo: "⚠️ 만장굴 휴관 중일 수 있음 → 방문 전 확인 필수(064-710-7903). 유모차 불가, 아기띠 필수. 비자림은 반려견 동반 가능(목줄 필수).",
    rainPlan: "만장굴은 실내이므로 비와 무관 (개장 시). 만장굴 휴관 시 대안: 김녕미로공원 or 아쿠아플라넷. 비자림은 우산 쓰고 산책 or 카페로 대체.",
  },
  // === 2주차 (11/1~7) ===
  {
    day: 8,
    date: "2026-11-01",
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
            desc: "아시아 최대 수족관. 실내라 날씨 무관. 유모차 이용 가능. 수유실 있음.",
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
  },
  {
    day: 9,
    date: "2026-11-02",
    dayOfWeek: "월",
    theme: "워케이션 + 세화 카페",
    categories: ["workation", "cafe"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소 또는 세화 카페",
            address: "구좌읍 세화리",
            desc: "오전 집중 근무.",
            duration: "4시간",
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
    rainPlan: "카페에서 여유로운 시간. 워케이션 연장.",
  },
  {
    day: 10,
    date: "2026-11-03",
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
            desc: "바다와 민물이 만나는 용암 계곡. 투명카누 체험(아기 동반 가능).",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "정방폭포 + 서귀포매일올레시장",
        places: [
          {
            name: "정방폭포",
            address: "서귀포시 칠십리로214번길 37",
            desc: "바다로 떨어지는 폭포. 계단 많으므로 아기띠 필수.",
            duration: "40분",
            baby: true,
            dog: true,
          },
          {
            name: "서귀포매일올레시장",
            address: "서귀포시 중앙로62번길 18",
            desc: "로컬 시장. 흑돼지, 감귤, 떡, 간식거리 풍부.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "서귀포 맛집",
        places: [
          {
            name: "서귀포 해산물",
            address: "서귀포시",
            desc: "서귀포 자리물회 or 갈치조림.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "서귀포 자리물회",
        menu: "자리물회, 갈치조림, 옥돔구이",
        price: "1만5천~3만원",
        address: "서귀포시",
        baby: true,
        dog: false,
      },
    ],
    memo: "서귀포까지 동부에서 차로 약 40분. 아기 낮잠 시간에 이동하면 효율적.",
    rainPlan: "서귀포매일올레시장은 지붕 있는 구간 많음. 정방폭포는 우비 입고 방문 가능.",
  },
  {
    day: 11,
    date: "2026-11-04",
    dayOfWeek: "수",
    theme: "워케이션 + 휴식",
    categories: ["workation", "baby", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "집중 근무. 아기/강아지 쉬는 날.",
            duration: "4시간",
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
  },
  {
    day: 12,
    date: "2026-11-05",
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
            desc: "느긋한 아침. 아기 이유식 후 출발.",
            duration: "자유",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "휴애리자연생활공원",
        places: [
          {
            name: "휴애리자연생활공원",
            address: "서귀포시 남원읍 신례동로 256",
            desc: "수유실, 유모차 대여 가능. 동물 먹이주기 체험, 감귤 따기(11월). 아기에게 좋은 자연 체험.",
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
    memo: "휴애리는 아기와 함께하기 최적. 유모차 무료 대여, 수유실 완비.",
    rainPlan: "휴애리는 야외 위주 → 제주항공우주박물관(실내)으로 변경.",
  },
  {
    day: 13,
    date: "2026-11-06",
    dayOfWeek: "금",
    theme: "제주항공우주박물관",
    categories: ["sightseeing", "baby"],
    babyFriendly: true,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "워케이션 (간단히)",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "오전 가볍게 근무 후 출발.",
            duration: "2시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "제주항공우주박물관",
        places: [
          {
            name: "제주항공우주박물관",
            address: "서귀포시 안덕면 녹차분재로 218",
            desc: "실내 박물관. 키즈존 있음, 유모차 무료대여. 비행기, 우주 전시.",
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
  },
  {
    day: 14,
    date: "2026-11-07",
    dayOfWeek: "토",
    theme: "중문관광단지",
    categories: ["sightseeing", "food"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "주상절리 + 천제연폭포",
        places: [
          {
            name: "대포주상절리",
            address: "서귀포시 중문관광로 216",
            desc: "기둥 모양 절벽. 유모차 산책 가능한 데크길.",
            duration: "40분",
            baby: true,
            dog: true,
          },
          {
            name: "천제연폭포",
            address: "서귀포시 천제연로 132",
            desc: "3단 폭포. 1폭포까지 계단 → 아기띠 추천.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "여미지식물원",
        places: [
          {
            name: "여미지식물원",
            address: "서귀포시 중문관광로 93",
            desc: "실내외 식물원. 유모차 이용 가능. 열대식물, 정원 산책.",
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
    memo: "중문관광단지 내 이동 많으므로 주차장 위치 미리 파악. 아기 낮잠 시간에 차 이동.",
    rainPlan: "여미지식물원(실내) 시간 늘리기. 주상절리는 우비 입고 가능.",
  },
  // === 3주차 (11/8~14) ===
  {
    day: 15,
    date: "2026-11-08",
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
            desc: "용암동굴, 아열대 식물원, 분재원. 유모차 이용 가능. ⚠️ 반려견 7kg 미만 소형견만 입장 가능 (보호자 1인당 1마리, 리드줄+배변봉투 필수).",
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
    memo: "동부→서부 이동 약 1시간. 아기 낮잠 시간에 차 이동 추천. ⚠️ 한림공원 반려견 7kg 미만만 입장 가능 → 강아지 체중 확인!",
    rainPlan: "한림공원 동굴은 실내. 협재해변은 비 시 한림공원 실내 연장.",
  },
  {
    day: 16,
    date: "2026-11-09",
    dayOfWeek: "월",
    theme: "워케이션 + 동부 근처",
    categories: ["workation", "cafe"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소 또는 카페",
            address: "구좌 일대",
            desc: "어제 서부 원정 후 휴식 겸 근무.",
            duration: "4시간",
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
    rainPlan: "카페에서 시간 보내기.",
  },
  {
    day: 17,
    date: "2026-11-10",
    dayOfWeek: "화",
    theme: "오설록 + 이니스프리",
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
            desc: "녹차밭 + 티 뮤지엄. 야외 공간 반려견 OK (실내 불가). 유모차 가능.",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "이니스프리 제주하우스",
        places: [
          {
            name: "이니스프리 제주하우스",
            address: "서귀포시 안덕면 신화역사로 23",
            desc: "오설록 바로 옆. DIY 체험, 카페. 유모차 가능.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "서부 맛집",
        places: [
          {
            name: "중문/안덕 맛집",
            address: "서귀포시 안덕면",
            desc: "흑돼지, 해산물.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "오설록",
        menu: "녹차 롤케이크, 녹차 아이스크림, 녹차 라떼",
        price: "5천~1만5천원",
        address: "서귀포시 안덕면",
        baby: true,
        dog: false,
      },
    ],
    memo: "오설록은 주중이 한적함. 녹차밭 포토존 추천.",
    rainPlan: "오설록 실내 티뮤지엄 + 이니스프리 실내 체험.",
  },
  {
    day: 18,
    date: "2026-11-11",
    dayOfWeek: "수",
    theme: "워케이션 + 휴식",
    categories: ["workation"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "집중 근무.",
            duration: "4시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "휴식",
        places: [
          {
            name: "숙소 주변",
            address: "성산/구좌",
            desc: "느긋한 오후. 빨래, 정리, 아기 놀이.",
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
    memo: "빼빼로 데이! 편의점에서 빼빼로 사기. 3주차 중반 휴식.",
    rainPlan: "원래 휴식일.",
  },
  {
    day: 19,
    date: "2026-11-12",
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
    memo: "동부→제주시 약 50분. 동문시장은 오전이 한적함.",
    rainPlan: "동문시장은 지붕 있음. 이호테우는 비 시 제주시 카페로 대체.",
  },
  {
    day: 20,
    date: "2026-11-13",
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
            desc: "증기기관차 타고 곶자왈 탐험. 키즈타운, 유모차 이용 가능. ⚠️ 반려견 동반 공식 미확인 → 사전 문의 필수 (064-802-8000).",
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
    rainPlan: "에코랜드는 야외 → 비 시 아쿠아플라넷 or 실내 박물관.",
  },
  {
    day: 21,
    date: "2026-11-14",
    dayOfWeek: "토",
    theme: "카페비글 + 애월 + 감귤따기",
    categories: ["dog", "cafe", "sightseeing"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "카페비글 (반려견 카페)",
        places: [
          {
            name: "카페비글",
            address: "제주시 애월읍",
            desc: "반려견 전용 카페. 넓은 야외 공간, 강아지 놀이터. 반려견 가족에게 최고!",
            duration: "1시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "애월 한담해안산책로 + 감귤따기",
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
            name: "감귤따기 체험농장",
            address: "제주시 애월읍 일대",
            desc: "11월 감귤 시즌! 따서 바로 먹기. 아기도 체험 가능.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
      evening: {
        title: "애월 맛집",
        places: [
          {
            name: "애월 해안 맛집",
            address: "제주시 애월읍",
            desc: "바다 뷰 레스토랑.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "애월 카페/맛집",
        menu: "브런치, 파스타, 해산물",
        price: "1만~2만5천원",
        address: "제주시 애월읍",
        baby: true,
        dog: true,
      },
    ],
    memo: "카페비글은 강아지들의 천국! 11월 감귤따기는 노지감귤 시즌.",
    rainPlan: "카페비글 실내 공간 활용. 감귤따기는 비 시 다른 날로.",
  },
  // === 4주차 (11/15~21) ===
  {
    day: 22,
    date: "2026-11-15",
    dayOfWeek: "일",
    theme: "한라산 영실코스",
    categories: ["sightseeing"],
    babyFriendly: false,
    dogFriendly: false,
    schedule: {
      morning: {
        title: "한라산 영실코스 등산",
        places: [
          {
            name: "한라산 영실코스",
            address: "서귀포시 하원동 산1-1",
            desc: "부부 번갈아 등산. 영실코스 왕복 약 3~4시간. 11월 중순 첫눈 가능성!",
            duration: "3~4시간",
            baby: false,
            dog: false,
          },
        ],
      },
      afternoon: {
        title: "한라산 주변 휴식",
        places: [
          {
            name: "1100고지 휴게소",
            address: "1100도로",
            desc: "등산 후 따뜻한 음료. 단풍/첫눈 감상.",
            duration: "30분",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "숙소 근처 맛집",
        places: [
          {
            name: "구좌 맛집",
            address: "제주시 구좌읍",
            desc: "등산 후 보양식.",
            duration: "1시간",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "보양식",
        menu: "흑돼지 구이, 전복죽",
        price: "1만5천~3만원",
        address: "구좌읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "한라산은 부부 번갈아 등산 (한 명은 아기+강아지와 대기). 11월 중순 기온 낮으므로 방한 필수.",
    rainPlan: "한라산은 날씨 좋은 날에만. 비/강풍 시 다른 일정으로 교체.",
  },
  {
    day: 23,
    date: "2026-11-16",
    dayOfWeek: "월",
    theme: "워케이션 + 휴식",
    categories: ["workation"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소",
            address: "성산/구좌",
            desc: "등산 다음 날 휴식 겸 근무.",
            duration: "4시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "휴식",
        places: [
          {
            name: "숙소 주변",
            address: "성산/구좌",
            desc: "가벼운 산책, 쉬기.",
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
    memo: "한라산 등산 다음 날은 무조건 쉬기! 근육통 회복.",
    rainPlan: "원래 휴식일.",
  },
  {
    day: 24,
    date: "2026-11-17",
    dayOfWeek: "화",
    theme: "산굼부리 + 교래자연휴양림",
    categories: ["sightseeing", "dog"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "산굼부리",
        places: [
          {
            name: "산굼부리",
            address: "제주시 조천읍 교래리 산38",
            desc: "분화구 형태 오름. 억새밭 절경 (11월!). 유모차 진입 가능한 데크.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "교래자연휴양림",
        places: [
          {
            name: "교래자연휴양림",
            address: "제주시 조천읍 남조로 2023",
            desc: "편백나무 숲길 산책. 강아지 동반 가능. 유모차보다 아기띠 추천.",
            duration: "1시간 30분",
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
    memo: "산굼부리 11월 억새는 절경! 포토 스팟. 교래숲은 힐링 코스.",
    rainPlan: "비 시 에코랜드 or 실내 관광지. 산굼부리는 가볍게 가능.",
  },
  {
    day: 25,
    date: "2026-11-18",
    dayOfWeek: "수",
    theme: "워케이션 + 동네 카페",
    categories: ["workation", "cafe"],
    babyFriendly: true,
    dogFriendly: true,
    schedule: {
      morning: {
        title: "워케이션",
        places: [
          {
            name: "숙소 또는 카페",
            address: "구좌 일대",
            desc: "집중 근무.",
            duration: "4시간",
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
    rainPlan: "카페에서 비 감상.",
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
    rainPlan: "실내 베스트 스팟 재방문.",
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
            desc: "노지감귤 시즌! 감귤 따기 체험 + 시식. 아기도 참여 가능.",
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
    memo: "동문야시장은 매일 운영 (동절기 18:00~24:00). 재료 소진 시 조기 마감. 사람 많으므로 유모차보다 아기띠.",
    rainPlan: "야시장은 지붕 없는 구간 있음 → 우비 준비 or 토요일로 변경.",
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
        title: "성산 맛집 (마지막 외식)",
        places: [
          {
            name: "성산 맛집",
            address: "서귀포시 성산읍",
            desc: "한달살이 마지막 주말 외식. 특별한 맛집.",
            duration: "1시간 30분",
            baby: true,
            dog: false,
          },
        ],
      },
    },
    food: [
      {
        name: "성산 특별 맛집",
        menu: "해산물 코스, 흑돼지",
        price: "2만~4만원대",
        address: "서귀포시 성산읍",
        baby: true,
        dog: false,
      },
    ],
    memo: "마지막 주말! 성산 근처에서 편하게. 좋았던 맛집 재방문해도 좋음.",
    rainPlan: "올레길은 비 시 부분 코스만 or 실내 대체.",
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
    memo: "내일 선박 탑승! 짐 꼼꼼히 정리. 강아지 케이지, 아기 카시트 확인.",
    rainPlan: "실내 정리 집중.",
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
            name: "제주항",
            address: "제주시 임항로 111",
            desc: "씨월드고속훼리 탑승. 펫스위트룸. 자차 선적.",
            duration: "항해 3시간 30분",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "목포항 도착 → 귀가",
        places: [
          {
            name: "목포항",
            address: "전남 목포시 해안로 253",
            desc: "하선 후 자차로 귀가.",
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
  },
];

// 사전 준비 체크리스트
const CHECKLISTS = {
  ship: {
    title: "선박 예약",
    icon: "🚢",
    items: [
      { text: "씨월드고속훼리 펫스위트룸 예약 (4인, 전용 화장실. 4kg이상: 펫스위트룸, 4kg미만: 펫코노미. 케이지 필수 지참)", checked: false },
      { text: "자차 선적 예약 (국산 승용차 편도 약 9~18만원)", checked: false },
      { text: "왕복 예약 (10/25 출발, 11/23 귀환)", checked: false },
      { text: "고객센터 확인: 1577-3567", checked: false },
      { text: "반려동물 승선 서류 준비 (동물등록증, 예방접종증명)", checked: false },
    ],
  },
  baby: {
    title: "아기 용품",
    icon: "👶",
    items: [
      { text: "분유 2주분 + 이유식 재료/시판 이유식", checked: false },
      { text: "기저귀 240장 or 현지 구매 계획", checked: false },
      { text: "해열제/체온계/비상약 (타이레놀, 코감기약)", checked: false },
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
    ],
  },
  life: {
    title: "생활용품",
    icon: "🏠",
    items: [
      { text: "노트북 + 충전기 (워케이션)", checked: false },
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
  { name: "소아과", place: "아이사랑소아과의원", phone: "064-751-8275", icon: "🏥" },
  { name: "동물병원", place: "제주24시숨동물의료센터", phone: "064-805-8365", icon: "🐾" },
  { name: "대학병원", place: "제주대학교병원", phone: "064-717-1114", icon: "🏨" },
  { name: "페리", place: "씨월드고속훼리", phone: "1577-3567", icon: "🚢" },
  { name: "경찰", place: "제주경찰청", phone: "182", icon: "🚔" },
  { name: "소방/구급", place: "119 구급대", phone: "119", icon: "🚑" },
  { name: "24시 약국", place: "한라약국 (제주시)", phone: "064-757-7766", icon: "💊" },
];

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
  title: "30일 예산 가이드 (2인+아기+강아지2)",
  items: [
    { category: "숙소", estimate: "150~250만원", desc: "월단위 할인, 에어비앤비/펜션 (반려동물 가능)" },
    { category: "선박 (왕복)", estimate: "40~60만원", desc: "펫스위트룸 + 자차 선적 왕복" },
    { category: "식비", estimate: "100~150만원", desc: "외식 + 자취 병행 (하루 3~5만원)" },
    { category: "관광/입장료", estimate: "20~30만원", desc: "주요 관광지 입장료" },
    { category: "카페/간식", estimate: "15~25만원", desc: "카페 탐방 (하루 5천~1만원)" },
    { category: "교통/주유", estimate: "15~25만원", desc: "자차 주유비 (한달)" },
    { category: "기타", estimate: "20~30만원", desc: "생필품, 비상비, 기념품" },
    { category: "합계 (추정)", estimate: "360~570만원", desc: "상황에 따라 유동적" },
  ],
};
