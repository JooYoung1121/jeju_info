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
        title: "자차로 목포항 이동 → 퀸메리호 탑승 (14:00 출발)",
        places: [
          {
            name: "목포항 연안여객터미널",
            address: "전남 목포시 해안로 253",
            desc: "✅ 퀸메리호 예약 완료. 목포발 14:00. 무게/견종 제한 없는 PET FIRST CRUISE. ⚡테슬라는 선적 전 배터리 50% 미만 필수, 출항 1.5시간 전(12:30 전후) 도착. 케이지·반려동물 서류 지참.",
            duration: "오전 이동 + 점심",
            baby: true,
            dog: true,
          },
        ],
      },
      afternoon: {
        title: "항해 (14:00 → 약 18:00 제주 도착)",
        places: [
          {
            name: "퀸메리호 선상",
            address: "목포 → 제주",
            desc: "약 4시간 항해. 펫가든(야외갑판) 산책, 펫 전용 객실 휴식. 파리바게트·라면존 등 선내 편의시설.",
            duration: "약 4시간",
            baby: true,
            dog: true,
          },
        ],
      },
      evening: {
        title: "제주 도착 → 숙소 이동 + 간단 장보기",
        places: [
          {
            name: "제주항 → 숙소(성산/구좌)",
            address: "제주시 임항로 111",
            desc: "하선 후 자차로 숙소까지 약 1시간. 저녁이라 가는 길 마트(하나로마트/편의점)에서 생수·간식·아기용품만 빠르게.",
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
    memo: "저녁 도착이라 첫날은 무리 없이. 큰 장보기는 다음 날(하나로마트 구좌점 08:00~22:00). ⚡숙소 도착 후 완속충전 연결해두면 다음 날 아침 완충.",
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
        title: "제주오누이",
        places: [
          {
            name: "제주오누이",
            address: "제주시 구좌읍 해맞이해안로 972",
            desc: "오션뷰 전복돌솥밥·회국수. 대형견 OK, 목줄, 1층 동반.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "제주오누이",
        menu: "전복돌솥밥, 회국수, 전복구이",
        price: "1만5천~2만5천원대",
        address: "제주시 구좌읍 해맞이해안로 972",
        baby: true,
        dog: true,
      },
    ],
    memo: "도착 3일차, 무리하지 않고 동네 적응. 김녕해변은 조용해서 강아지 산책 최적.",
    rainPlan: "오전엔 숙소에서 푹 쉬기. 오후 세화/구좌 실내 카페. 여유 있으면 플레이케이팝(구좌, 실내 체험) 방문.",
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
    rainPlan: "성산일출봉은 비 시 미끄러움 → 스누피가든(구좌, 실내전시+유모차 대여)으로 대체. 강아지는 수요일만 동반 가능, 그 외엔 펫시터 이용 or 숙소 대기.",
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
        title: "평대스낵",
        places: [
          {
            name: "평대스낵",
            address: "제주시 구좌읍 대수길 26",
            desc: "한치튀김 맛집! 옥상 바다뷰. 모든 견종 동반 가능, 리드줄.",
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
        price: "5천~1만원대",
        address: "제주시 구좌읍 대수길 26",
        baby: true,
        dog: true,
      },
    ],
    memo: "월정리 카페 중 반려견 동반 가능 카페 사전 체크. 평대스낵은 숙소에서 도보 10분.",
    rainPlan: "월정리 카페에서 비 오는 바다 감상 + 실내 시간. 여유 있으면 플레이케이팝(구좌, 실내 체험형 전시)도 가능.",
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
    rainPlan: "우도는 날씨 좋은 날로 연기 필수 (풍랑 시 여객선 결항). 대신 스누피가든(구좌, 실내전시) 또는 플레이케이팝(만장굴 인근, 실내 체험)으로 대체.",
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
            desc: "✅ 2026.05.30 재개방! (낙석 보강·관람데크·LED 조명 신설) 세계자연유산 용암동굴. 입구 계단 이후 유아차 이용 가능 수준으로 접근성 개선. 동굴 내 서늘(12~13℃), 겉옷 필수. 입장료 어른 4,000원. 관람 09:00~18:00(매표 ~17:00). 반려견은 동굴 내 불가.",
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
            desc: "천년 비자나무 숲. ⚠️ 반려견 입장 불가 (천연기념물 제374호 보호구역). 유모차보다는 아기띠 추천. 입장료 성인 3,000원.",
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
    memo: "✅ 만장굴 2026.05.30 재개방(입장료 어른 4,000원, 09:00~18:00). 유아차 이용 가능하나 입구 계단 구간은 아기띠가 편함. ⚠️ 비자림 반려견 입장 불가(천연기념물) → 한 명이 강아지와 주차장/입구 근처 산책, 번갈아 관람.",
    rainPlan: "만장굴은 실내이므로 비와 무관. 더 쉬고 싶으면 플레이케이팝(만장굴 인근, 실내 체험) or 김녕미로공원. 비자림은 우산 쓰고 산책 가능하나, 강우량 많으면 세화 카페로 대체.",
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
        title: "오데뜨 한림",
        places: [
          {
            name: "오데뜨",
            address: "제주시 한림읍 중산간서로 4995-6",
            desc: "귤 창고 리모델링 양식당. 크림우동 유명! 반려견 메뉴(수비드 흑돼지) 있음. 대형견 OK.",
            duration: "1시간",
            baby: true,
            dog: true,
          },
        ],
      },
    },
    food: [
      {
        name: "오데뜨",
        menu: "크림우동, 파스타, 반려견 수비드 흑돼지",
        price: "1만5천~2만5천원",
        address: "제주시 한림읍",
        baby: true,
        dog: true,
      },
    ],
    memo: "오설록은 주중이 한적함. 새별오름은 완만해서 아기띠로 충분. 오데뜨는 재료 소진 시 조기 마감 → 일찍 가기.",
    rainPlan: "오설록 실내 티뮤지엄 시간 늘리기. 새별오름 대신 애월 실내 카페.",
    travelInfo: { mainDest: "오설록 → 새별오름 → 한림", oneWay: "90분", roundTrip: "180분", fatigue: "🔴 최고 — 서부 원정" },
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
    memo: "동부→제주시 약 50분. 동문시장은 오전이 한적함.",
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
    rainPlan: "에코랜드는 야외 위주 → 비 시 제주항공우주박물관(실내, 키즈존) or 스누피가든(구좌, 실내전시)으로 대체. 가벼운 비면 에코랜드 실내 카페+기관차만 이용.",
    travelInfo: { mainDest: "에코랜드", oneWay: "28분", roundTrip: "55분", fatigue: "양호" },
    dogAlternatives: [
      { name: "교래자연휴양림", desc: "에코랜드에서 차로 10분. 15kg 이하 반려견 동반 가능(동물등록증 필수). 편백숲 산책.", dog: true },
      { name: "세화해변/월정리해변", desc: "숙소 근처(5~7분). 강아지와 해변 산책.", dog: true },
      { name: "펫시터 이용", desc: "숙소에서 펫시터 방문 돌봄. 가족 모두 에코랜드 즐기기.", dog: true },
    ],
  },
  {
    day: 14,
    date: "2026-11-07",
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
            desc: "3,000평 귤밭 + 잔디밭 운동장. 반려견 특화 감귤따기 체험! 캔들 공방도 가능.",
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
            desc: "흑돼지 근고기 전문. 직접 구워줌. 케이지 이용 시 반려견 동반.",
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
    memo: "카페비글은 강아지들의 천국! 11월 감귤따기는 노지감귤 시즌.",
    rainPlan: "카페비글 실내 공간 활용. 감귤따기는 비 시 다른 날로.",
    travelInfo: { mainDest: "카페비글(조천)/애월", oneWay: "28~75분", roundTrip: "150분", fatigue: "🔴 고 — 서부 원정" },
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
    rainPlan: "세화 카페에서 비 오는 바다 뷰 감상하며 여유. 제주스런 공방(무드등 만들기 체험, 실내, 반려견 케이지 동반 가능) 추천.",
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
            desc: "바다와 민물이 만나는 용암 계곡. ⚠️ 투명카누: 24개월 미만 영아 탑승 불가 → 부부 교대 체험 or 계곡 산책으로 대체.",
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
            desc: "흑돼지 연탄 깡통구이. 캠핑 바비큐 분위기. 대형견 OK, 목줄 자유, 전체이용. 반찬 무제한.",
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
    rainPlan: "쇠소깍 카누는 비 시 취소 가능 → 서귀포올레시장(지붕 있음) 시간 늘리기 + 정방폭포는 우비 입고 가능. 강우량 많으면 9.81파크(실내 레이싱 체험, 서귀포)로 대체.",
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
    memo: "휴애리는 아기와 함께하기 최적. 유모차 무료 대여, 수유실 완비. ⚠️ 반려견 7kg 미만 소형견만 입장 가능 → 10kg 강아지는 입장 불가. 강아지는 숙소 대기 or 펫시터 필요.",
    rainPlan: "휴애리는 야외 위주 → 제주항공우주박물관(실내, 키즈존, 2~3시간)으로 변경. 또는 헬로키티아일랜드(서귀포, 실내전시).",
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
    memo: "🐶 비-강아지 날 — 강아지는 숙소 대기 or 펫시터. 중문관광단지 내 이동 많으므로 주차장 위치 미리 파악. 아기 낮잠 시간에 차 이동.",
    rainPlan: "여미지식물원(실내) 관람 시간 늘리기 + 중문 실내 카페. 주상절리는 우비 입고 짧게 가능. 폭우 시 9.81파크(실내 레이싱)로 대체.",
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
            desc: "새연교·외돈개 방향 해안 산책. 유모차 가능한 포장길. 바다 뷰.",
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
            desc: "솥뚜껑 삼겹살. 캠핑 컨셉 프라이빗 텐트. 귤밭뷰. 대형견 동반 가능. 유아의자 있음.",
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
    rainPlan: "오전 제주항공우주박물관(실내, 유모차 가능) or 9.81파크(실내 레이싱), 오후 서귀포매일올레시장(지붕 있음) + 실내 카페.",
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
            url: "https://www.sangumburi.net/",
            desc: "분화구 형태 오름. 억새밭 절경 (11월!). 유모차 진입 가능한 데크. ⚠️ 반려견 동반 불가 (천연기념물 제263호).",
            duration: "1시간",
            baby: true,
            dog: false,
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
    memo: "산굼부리 11월 억새는 절경! 포토 스팟. ⚠️ 산굼부리 반려견 동반 불가(천연기념물) → 한 명이 강아지와 주차장 대기, 번갈아 관람. 교래숲은 15kg 이하 동반 가능(동물등록증 필수).",
    rainPlan: "산굼부리는 가벼운 비엔 우비 입고 가능하나, 강풍/폭우 시 플레이케이팝(구좌, 실내) or 스누피가든(구좌, 실내)으로 대체. 교래자연휴양림은 비 시 숲길 미끄러움 → 패스.",
    travelInfo: { mainDest: "산굼부리/교래", oneWay: "30분", roundTrip: "60분", fatigue: "양호" },
    dogAlternatives: [
      { name: "교래자연휴양림", desc: "산굼부리에서 차로 5분. 15kg 이하 반려견 동반 OK. 편백숲 산책.", dog: true },
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
    rainPlan: "동네 카페에서 비 오는 바다 감상하며 여유. 외출하고 싶으면 제주스런 공방(무드등 만들기, 실내) 체험 추천.",
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
            desc: "오션뷰 양식. 나시고랭, 찹스테이크, 파스타. 실내 반려견 동반 가능. 마지막 주말 특별 외식!",
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
    memo: "내일 선박 탑승! 짐 꼼꼼히 정리. 강아지 케이지, 아기 카시트 확인.",
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
            name: "제주항",
            address: "제주시 임항로 111",
            desc: "퀸메리호 탑승 (제주발 07:00). 펫 객실 + 모델Y 선적. ⚡귀환 전날에도 배터리 50% 미만으로 충전 조절 필수! 아침 출항이라 일찍 체크아웃.",
            duration: "항해 약 4시간",
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
  { name: "소아과", place: "아이사랑소아과의원", phone: "064-751-8275", icon: "🏥", mapQuery: "아이사랑소아과의원 제주" },
  { name: "동물병원", place: "제주24시숨동물의료센터", phone: "064-805-8365", icon: "🐾", mapQuery: "제주24시숨동물의료센터" },
  { name: "대학병원", place: "제주대학교병원", phone: "064-717-1114", icon: "🏨", mapQuery: "제주대학교병원" },
  { name: "페리", place: "씨월드고속훼리", phone: "1577-3567", icon: "🚢" },
  { name: "경찰", place: "제주경찰청", phone: "182", icon: "🚔", mapQuery: "제주경찰청" },
  { name: "소방/구급", place: "119 구급대", phone: "119", icon: "🚑" },
  { name: "24시 약국", place: "한라약국 (제주시)", phone: "064-757-7766", icon: "💊", mapQuery: "한라약국 제주시" },
];

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
      area: "제주시",
      contact: "인스타 DM",
      link: "https://www.instagram.com/blissful.jeju/",
      note: "넓은 잔디 운동장. 카페 이용하며 강아지 놀이.",
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
    "실내 식당/카페 중 반려견 불가 장소",
  ],
};

// 아기 + 강아지 동반 카페 & 맛집 리스트 (2026.04 검수 완료)
const PET_BABY_SPOTS = {
  title: "아기 + 강아지 동반 카페 & 맛집",
  note: "10개월 아기(유모차/아기의자) + 강아지 2마리(4~10kg) 동반 가능한 곳 위주. 노키즈존 제외. 방문 전 전화 확인 권장.",
  regions: [
    {
      name: "동부 (성산/구좌)",
      icon: "🏖️",
      spots: [
        { type: "cafe", name: "어니스트밀크", address: "서귀포시 성산읍 중산간동로 3147-7", desc: "목장 카페. 송아지 우유주기 체험(11·14·16시). 성산일출봉 조망.", dog: "소형견, 캐리어 필수", baby: "유모차 가능, 체험 가능", note: "매일 10:00~18:00 | 070-7722-1886", mapQuery: "어니스트밀크 성산" },
        { type: "food", name: "제주오누이", address: "제주시 구좌읍 해맞이해안로 972", desc: "오션뷰 전복돌솥밥·전복구이·회국수. 아기의자 있음.", dog: "대형견 OK, 목줄, 1층 동반", baby: "아기의자 있음", note: "매일 10:00~20:00 | 064-782-6801", mapQuery: "제주오누이 월정리" },
        { type: "food", name: "명리동식당 구좌직영점", address: "제주시 구좌읍 일주동로 3010-17", desc: "흑돼지 전문. 사장님이 직접 구워줌. 김치전골 인기.", dog: "소형견, 캐리어/유모차 필수", baby: "아기의자 문의", note: "화~일 11:30~21:00 (브레이크 15:00~16:00), 월 휴무 | 0507-1424-2269", mapQuery: "명리동식당 구좌" },
        { type: "food", name: "평대스낵", address: "제주시 구좌읍 대수길 26", desc: "한치튀김이 유명! 옥상에서 평대해변 바다뷰.", dog: "모든 견종 동반, 리드줄", baby: "유모차 가능", note: "매일 11:00~16:00 (수 휴무)", mapQuery: "평대스낵 제주" },
        { type: "food", name: "성산마씸", address: "서귀포시 성산읍 한도로 257", desc: "옥돔구이 정식, 돔베고기 정식. 제주 한식.", dog: "대형견 OK, 목줄", baby: "문의", note: "인스타 @massim_jeju 확인", mapQuery: "성산마씸" },
        { type: "food", name: "쉐프1192레스토랑", address: "서귀포시 성산읍 환해장성로 465", desc: "오션뷰 양식. 나시고랭, 찹스테이크, 파스타.", dog: "대형견 OK, 목줄, 실내동반", baby: "유모차 가능", note: "10:00~21:00 (월 휴무) | 0507-1472-1430", mapQuery: "쉐프1192 성산", url: "https://www.chef1192.co.kr/" },
        { type: "food", name: "세모", address: "제주시 구좌읍 행원로 121", desc: "제주 재료 삼각김밥(흑돼지, 소라, 톳). 포장 전문.", dog: "리드줄 착용", baby: "포장이라 부담 없음", note: "화·금~일 10:00~16:00 (월·수·목 휴무) | 0507-1340-2197", mapQuery: "세모 제주 구좌" },
      ],
    },
    {
      name: "서부 (한림/애월)",
      icon: "🌅",
      spots: [
        { type: "cafe", name: "애월더선셋", address: "제주시 애월읍 일주서로 6111", desc: "오션뷰 브런치 카페 + 리조트. 야외 테라스.", dog: "대형견 OK, 목줄, 전체이용", baby: "유모차 가능", note: "비수기 10:00~19:00 (연중무휴) | 0507-1403-5943", mapQuery: "애월더선셋" },
        { type: "cafe", name: "카페 사분의 이", address: "제주시 한경면 두신로 92-7", desc: "제주 구옥 개조 카페. 넓은 잔디밭. 전통 디저트.", dog: "대형견 OK, 목줄, 전체이용", baby: "유모차 가능", note: "09:00~16:00 (화 휴무) — 마감 이름", mapQuery: "카페사분의이 제주" },
        { type: "cafe", name: "제주개생활연구소", address: "제주시 한경면 저지리", desc: "멸종위기 제주개 보존 카페. 에그타르트 맛집. 오프리시 운동장.", dog: "실내 소형견, 야외 대형견 OK", baby: "유모차 가능", note: "매일 10:00~18:30", mapQuery: "제주개생활연구소" },
        { type: "cafe", name: "카페비글", address: "제주시 조천읍 신촌남1길 69-1", desc: "반려견 전용 카페. 비글 상주. 넓은 잔디 운동장.", dog: "대형견 OK, 입장료 1마리 2천원", baby: "유모차 가능 (온돌공간은 강아지 불가)", note: "11:00~19:00 (화 휴무) | 0507-1398-0110", mapQuery: "카페비글 제주 조천" },
        { type: "food", name: "금돈가", address: "제주시 애월읍 가문동남길 63", desc: "흑돼지 근고기 전문. 자체 불판에 직접 구워줌. 반찬 정갈.", dog: "케이지 이용 시 동반", baby: "아기의자 문의", note: "매일 11:00~22:30 | 0507-1396-6466", mapQuery: "금돈가 애월" },
        { type: "food", name: "오데뜨", address: "제주시 한림읍 중산간서로 4995-6", desc: "귤 창고 리모델링 양식당. 크림우동 유명! 반려견 메뉴(수비드 흑돼지).", dog: "대형견 OK, 목줄, 실내", baby: "유모차 가능", note: "~18:30 LO (월 휴무) | 0507-1311-2748 | 재료 소진 시 조기 마감", mapQuery: "오데뜨 한림" },
        { type: "food", name: "별돈별 협재해변점", address: "제주시 한림읍 협재1길 4", desc: "협재 바다뷰 흑돼지 맛집. 2층.", dog: "소형견, 캐리어 필수", baby: "아기의자 문의", note: "주중 12:00~22:30", mapQuery: "별돈별 협재" },
      ],
    },
    {
      name: "남부 (서귀포/중문)",
      icon: "🌊",
      spots: [
        { type: "cafe", name: "감따남", address: "서귀포시 월산로 16", desc: "감귤 농장 카페. 감귤따기 체험 + 전문 스냅사진.", dog: "대형견 OK, 목줄, 전체이용", baby: "유모차 가능, 체험 가능", note: "화~토 10:00~18:00 (일·월 휴무) | 0507-1347-2306", mapQuery: "감따남 서귀포" },
        { type: "cafe", name: "벨진밧", address: "서귀포시 대정읍 보성구억로 220-1", desc: "배우 박한별 운영. 제주 구옥 + 야외 정원. 대형 주차장.", dog: "대형견 OK, 목줄, 전체이용", baby: "유모차 가능", note: "매일 09:00~17:30 | 064-794-0121", mapQuery: "벨진밧 서귀포" },
        { type: "cafe", name: "목장카페 밭디", address: "서귀포시 표선면 번영로 2486", desc: "넓은 말 목장 카페. 말 먹이주기·승마·이색자전거 체험.", dog: "대형견 OK, 목줄, 실내외", baby: "유모차 가능, 체험 가능", note: "09:00~18:00 (수 휴무) | 0507-1371-6019", mapQuery: "목장카페밭디 표선" },
        { type: "food", name: "모메든식당", address: "서귀포시 일주서로 508", desc: "흑돼지 연탄 깡통구이. 캠핑 바비큐 분위기. 반찬 무제한.", dog: "대형견 OK, 목줄자유, 전체이용", baby: "야외 잔디 놀이 가능", note: "월·수~일 17:00~22:00 (화 휴무) | 0507-1415-8205", mapQuery: "모메든식당 중문" },
        { type: "food", name: "커뮤니테이블", address: "서귀포시 월평로 15", desc: "가정집 개조 파스타 전문. 시그니처 '바다의 계절' 파스타.", dog: "대형견 OK, 목줄, 전체이용", baby: "유모차 가능", note: "수~일 09:30~20:00 (월·화 ~16:00) | 재료 소진 마감", mapQuery: "커뮤니테이블 서귀포" },
        { type: "food", name: "아솥 서귀포본점", address: "서귀포시 동홍로303번길 13", desc: "솥뚜껑 삼겹살. 캠핑 컨셉 프라이빗 텐트. 귤밭뷰.", dog: "대형견 OK, 동반 가능", baby: "유아의자 있음", note: "매일 12:00~22:00 (예약제) | 0507-1437-8057", mapQuery: "아솥 서귀포" },
        { type: "food", name: "산방산해물라면오빠네", address: "서귀포시 안덕면 사계남로216번길 24-68", desc: "산방산+용머리해안 뷰 해물라면. 생생정보 출연 맛집.", dog: "동반 가능", baby: "유모차 가능", note: "매일 09:00~17:00 (연중무휴) | 테이블링 원격줄서기", mapQuery: "산방산해물라면오빠네" },
      ],
    },
    {
      name: "제주시",
      icon: "🏙️",
      spots: [
        { type: "food", name: "동진식당 공항점", address: "제주시 용화로 51-1", desc: "1965년 4대째 운영 60년 전통. 고기국수, 돔베고기. 공항 5분.", dog: "케이지 이용 시 동반", baby: "아기의자 문의", note: "매일 08:30~18:30 | 064-742-2226", mapQuery: "동진식당 공항점 제주" },
      ],
    },
  ],
};

// 감귤 체험 농장 정보
const TANGERINE_FARMS = {
  title: "🍊 감귤따기 체험 농장",
  note: "11월 감귤 시즌! 방문 전 반드시 전화로 반려견·유아 동반 가능 여부 재확인 권장. 대부분 1인 ~1만원, 2.5~3kg 가져감.",
  sections: [
    {
      title: "🐶👶 아기 + 강아지 모두 동반 가능",
      color: "green",
      farms: [
        {
          name: "귤밭에댕댕이",
          address: "제주시 애월읍",
          desc: "3,000평 귤밭 + 넓은 잔디밭 운동장. 이름부터 반려견 특화! 캔들 공방 체험도 가능.",
          baby: true,
          babyNote: "동반 가능",
          dog: true,
          dogNote: "모든 견종 동반 가능, 잔디밭 자유 활동",
          phone: "인스타그램 확인",
          url: "https://www.myrealtrip.com/guides/17234",
          mapQuery: "귤밭에댕댕이 애월",
        },
        {
          name: "귤의정원 바령",
          address: "제주시 조천읍",
          desc: "유기농 무농약 감귤 농장. 직접 따서 가져갈 수 있음. 목~화 09:30~17:30 (수 휴무).",
          baby: true,
          babyNote: "동반 가능",
          dog: true,
          dogNote: "동반 가능 (주의: 농장 내 진돗개 '귤이' 예민 → 거리 유지)",
          phone: "예약 문의",
          url: "https://eataround.co.kr/trip-jeju/?idx=50",
          mapQuery: "귤의정원 바령 조천",
        },
      ],
    },
    {
      title: "👶 아기만 동반 가능 (강아지 미확인)",
      color: "pink",
      farms: [
        {
          name: "탐나는농장",
          address: "제주시 애월읍",
          desc: "4천평 규모 감귤밭 + 카페 겸업. 깔끔한 시설. 14일차 애월 코스와 동선 일치!",
          baby: true,
          babyNote: "동반 가능, 카페 이용 편리",
          dog: null,
          dogNote: "미확인 — 사전 전화 필수",
          phone: "인스타 @tamnaneun_farm",
          url: "https://www.instagram.com/tamnaneun_farm/",
          mapQuery: "탐나는농장 애월",
        },
        {
          name: "보메와산",
          address: "제주도",
          desc: "모래놀이터 별도 구비 → 아기 놀기 최고! 삼나무 포토존. 가족 단위 추천.",
          baby: true,
          babyNote: "모래놀이터 있음, 유아 친화적",
          dog: null,
          dogNote: "미확인 — 사전 전화 필수",
          phone: "방문 전 확인",
          mapQuery: "보메와산 감귤체험",
        },
        {
          name: "해품은체험농장",
          address: "서귀포시 성산읍 서성일로 1073",
          desc: "숙소(성산)에서 가까움! 당일 접수 가능. 30분 단위 운영.",
          baby: true,
          babyNote: "전연령 참여 가능 (안전사고 주의)",
          dog: null,
          dogNote: "미확인 — 사전 전화 필수",
          phone: "070-8871-2098",
          url: "https://haepoom.com/",
          mapQuery: "해품은체험농장 성산",
        },
        {
          name: "예래팜",
          address: "서귀포시",
          desc: "무농약 인증 농장. 자연놀이터 + 그네 있어 아이들 놀기 좋음.",
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
          desc: "전연령 참여 가능. 체험 안내 친절.",
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
      route: "목포 ↔ 제주 (운항 중) / 진도 ↔ 애월 (향후 계획, 미개통)",
      schedules: [
        { label: "목포→제주", time: "14:00 출발", duration: "약 4시간" },
        { label: "제주→목포", time: "07:00 출발", duration: "약 4시간" },
      ],
      offDays: "매월 1, 3주 토/일 정기휴항 (예약 시 운항일 확인)",
      highlight: "2026.04.30 취항 완료 - 국내 최초 PET FIRST CRUISE (143m·14,919t·차량 270대)",
      rooms: [
        { name: "VIP (2인)", price: "50만원", desc: "최고 프라이빗, 펫 유모차 무상 비치" },
        { name: "스위트 SEA (2인)", price: "25만원", desc: "바다 방향 독립 스위트" },
        { name: "스위트 IN (2인)", price: "24만원", desc: "통로 방향 아늑한 스위트" },
        { name: "펫스위트 MBTI (2인)", price: "26만원", desc: "반려견 성향별 4타입 맞춤 객실" },
        { name: "펫스위트 (2인)", price: "25만원", desc: "반려견+보호자 프리미엄" },
        { name: "패밀리 온돌 (4인)", price: "26.8만원", desc: "가족 여행 온돌형" },
        { name: "패밀리 침대 (4인)", price: "26.8만원", desc: "가족 여행 침대형" },
        { name: "펫의자석 우등", price: "6.2만원", desc: "반려동물 동반 우등석" },
        { name: "의자석 우등", price: "6.2만원", desc: "일반 우등석" },
        { name: "의자석 일반", price: "3.54만원", desc: "기본 좌석" },
        { name: "이코노미", price: "3.23만원", desc: "실속형 공용 객실" },
      ],
      facilities: ["파리바게트", "세븐일레븐 (육상 동일가격)", "라면존", "공용샤워실", "코인노래방", "펫가든 (야외갑판)"],
      petPolicy: "무게/견종 제한 없음! 대형견 OK. 펫 전용 객실 구역 분리. 선내 펫 사료/간식 판매.",
      link: "http://qm.seaferry.co.kr/",
      isNew: true,
    },
    {
      name: "퀸제누비아Ⅱ",
      route: "목포 ↔ 제주",
      schedules: [
        { label: "목포→제주", time: "08:45 출발", duration: "약 4시간 15분" },
        { label: "제주→목포", time: "16:45 출발", duration: "약 4시간 30분" },
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
        { label: "제주→목포", time: "13:40 출발 (화~금)", duration: "4시간 30분" },
      ],
      offDays: "일요일 휴항",
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
      "무게/견종 제한 없음 (30kg+ 대형견 OK)",
      "공격성 맹견만 입마개 필수",
      "공용 구역에서 케이지 또는 펫 가방 사용 권장",
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
    tip: "우리는 퀸메리호로 확정 예약! 펫 전용 객실 구역과 펫가든(야외갑판)이 있어 강아지 2마리 동반에 가장 편합니다. 케이지·서류는 미리 챙기기.",
  },
  booking: {
    title: "확정 예약 정보 & 전기차 선적 가이드",
    currentStatus: "✅ 퀸메리호 왕복 예약 완료 (목포↔제주). 출발 10/25, 귀환 11/23. 테슬라 모델Y 선적 포함.",
    pattern: "⚡ 전기차 선적 핵심: 씨월드고속훼리는 배터리 충전율 50% 초과 차량은 선적 거부. 모델Y(수입차 분류) 선적료 편도 약 17.6만원(평일)/18.5만원(일·공휴일).",
    steps: [
      "출항 1시간 30분 전 목포항 도착 (차량 선적 마감은 출항 40~60분 전)",
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
        schedule: "목포발 14:00 → 제주 약 18:00 도착 / 귀환 제주발 07:00",
        note: "테슬라 모델Y 선적 포함. 선적 전 배터리 50% 미만 필수.",
      },
      {
        label: "참고: 퀸제누비아Ⅱ (대안)",
        ship: "퀸제누비아Ⅱ (펫 특화, 무게 제한 없음, 추가 요금 없음)",
        room: "펫스위트룸 (4인, 전용 화장실, 커피쿠폰)",
        schedule: "목포발 08:45 → 제주 약 13:00 도착 (주간 운항)",
        note: "퀸메리 휴항일이거나 일정 변경 시 대안. 오전 출발이라 도착 후 여유.",
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
    { category: "⚡ 전기차 충전", estimate: "13~22만원", desc: "모델Y 한달 ~1,500km. 슈퍼차저·환경부 급속 약 330~350원/kWh (주유보다 저렴)" },
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

// ⚡ 전기차(테슬라 모델Y) 가이드 — 2026년 6월 기준 조사
const EV_GUIDE = {
  title: "⚡ 전기차(테슬라 모델Y) 가이드",
  car: "테슬라 모델Y · 전장 4,750mm / 공차 약 2,000kg (수입차 분류)",
  note: "제주는 전기차·충전기 보급률 전국 1위지만, 동부(구좌·성산)는 충전소 간격이 넓습니다. 숙소 완속 야간충전을 기본으로, 동선에 맞춰 급속을 더하세요.",
  ferryRules: {
    title: "🚢 페리 선적 규정 (가장 중요!)",
    items: [
      { label: "배터리 충전율", value: "선적 전 50% 미만 필수 — 씨월드고속훼리는 50% 초과 시 선적 거부 (해수부 2024.7.9 안전대책). 테슬라 앱 충전한도 50% 설정." },
      { label: "항해 중 충전", value: "완전 금지. 차량 갑판 출입·차내 탑승도 불가 → 필요한 짐은 미리 객실로." },
      { label: "선적료", value: "모델Y는 수입차 분류, 편도 약 175,820원(평일)/185,170원(일·공휴일). ※실제 요금은 예약 시 확정." },
      { label: "도착 시간", value: "출항 1시간 30분 전 도착 권장 (차량 선적 마감은 출항 40~60분 전). 전기차 간 70cm 안전거리로 성수기 공간 빨리 소진." },
      { label: "차량 조건", value: "사고 이력·외관 손상 차량은 선적 거부될 수 있음. 차량등록증 지참." },
    ],
  },
  chargers: {
    title: "🔌 제주 충전 인프라",
    superchargers: [
      { name: "제주 테슬라 슈퍼차저", address: "제주시 연삼로 136 (오라삼동)", note: "동부 숙소에서 약 30~40km" },
      { name: "서귀포 슈퍼차저", address: "서귀포시 중문관광로72번길 35 (롯데호텔제주)", note: "중문관광단지, 주차비 별도" },
    ],
    destination: [
      { name: "구좌읍 하도리", note: "데스티네이션 차저(고객 전용, 사전 전화 064-784-8216)" },
      { name: "성산읍", note: "한도로·난산리 2곳 (이용 전 사전 연락 권장)" },
    ],
    publicNote: "동부 공공 급속: 김녕 융복합 EV충전스테이션(구좌 김녕리) 등. 구좌·성산은 충전소 간 10~20km로 도심보다 드뭄 → 잔량 30% 전 충전소 탐색.",
    adapters: [
      "CCS 콤보1 어댑터 (공공 급속 DC콤보 필수, 테슬라샵 약 30만원 · 모델3/Y 전용)",
      "J1772 어댑터 (공공 완속 7kW용 · 차량 기본 포함 여부 확인)",
    ],
    apps: [
      { name: "EV Infra", note: "충전소 위치·실시간 상태·통합결제", url: "https://www.evinfra.co.kr/" },
      { name: "탐라는 전기차", note: "제주 전용 충전소 지도", url: "https://www.tamraev.com/electronicList" },
      { name: "무공해차 통합누리집", note: "환경부 충전요금·충전소 검색", url: "https://ev.or.kr/" },
    ],
    price: "슈퍼차저 약 339원/kWh, 환경부 공공 급속 약 324~347원/kWh. 모델Y 1회 완충 약 2.5만원, 한달 약 13~21만원.",
  },
  tips: [
    "숙소 완속(7kW) 충전 여부를 호스트에 미리 확인 — 야간 충전으로 매일 아침 완충 출발이 최선",
    "11월 제주는 내륙보다 온화해 주행거리 감소폭이 작음. 모델Y 실주행 약 260~290km 예상",
    "관광·식사 중 급속충전(30~45분에 20~30% 확보)으로 동선과 충전을 겹치기",
    "슈퍼차저는 제주시·중문뿐 → 제주시 관광 동선과 겹칠 때만 들르기",
    "전날 밤 다음 날 경로의 충전소를 EV Infra/탐라는전기차로 미리 확인",
  ],
  cautions: [
    "중산간·1100도로·516도로: 충전소 거의 없음 → 잔량 30%+ 확보 후 진입",
    "오름 주차장엔 충전기 없음 → 인근 마을·마트 충전소 사전 확인",
    "성수기 관광지 충전소(성산 등) 오전 10시~오후 2시 혼잡",
    "고장·점검 중 충전기 있음 → EV Infra 최근 리뷰 확인 후 방문",
  ],
  sources: [
    { label: "씨월드 전기차 선적 제한 (한국일보)", url: "https://www.hankookilbo.com/News/Read/A2024081914210001380" },
    { label: "해수부 전기차 해상운송 안전대책 (문화일보)", url: "https://www.munhwa.com/news/view.html?no=2024080701071227106001" },
    { label: "테슬라 CCS 콤보1 어댑터 (오토데일리)", url: "https://www.autodaily.co.kr/news/articleView.html?idxno=429978" },
    { label: "무공해차 통합누리집 충전요금", url: "https://ev.or.kr/nportal/evcarInfo/initEvcarChargePrice.do" },
  ],
};

// 숙소 주변 편의시설 정보
const NEARBY_PLACES = {
  title: "🏠 숙소 주변 편의시설",
  accommodation: {
    name: "우리 숙소",
    address: "제주시 구좌읍 해맞이해안로 1588-4",
    area: "구좌 동부 해안 (세화·하도 인근)",
    coords: [33.521, 126.875],
  },
  note: "숙소 기준 차량/도보 예상 소요시간(계획용 추정치). 지도는 실제 위치 기반이라 핀 거리와 라벨이 다소 다를 수 있음.",
  categories: [
    {
      name: "해변",
      icon: "🏖️",
      color: "blue",
      places: [
        { name: "평대해변", address: "구좌읍 평대리", distance: "0.5km", time: "도보 5분", lat: 33.5332, lng: 126.8407, desc: "가장 가까운 해변. 한적하고 물 맑음. 강아지 산책 최적.", dog: true, baby: true },
        { name: "세화해변", address: "구좌읍 세화리", distance: "3km", time: "차량 5분", lat: 33.5253, lng: 126.8613, desc: "에메랄드빛 바다. 세화오일시장 인접.", dog: true, baby: true },
        { name: "월정리해변", address: "구좌읍 월정리", distance: "6km", time: "차량 10분", lat: 33.5558, lng: 126.7966, desc: "제주 동부 대표 해변. 카페거리 인접. 수심 얕아 아기 물놀이 가능.", dog: true, baby: true },
        { name: "김녕해변", address: "구좌읍 김녕리", distance: "8km", time: "차량 12분", lat: 33.5579, lng: 126.7600, desc: "넓은 백사장. 가족 단위 인기.", dog: true, baby: true },
      ],
    },
    {
      name: "마트/편의점",
      icon: "🛒",
      color: "green",
      places: [
        { name: "동복리 편의점 (CU/GS25)", address: "구좌읍 (숙소 인근)", distance: "0.5km", time: "도보 5분", lat: 33.5225, lng: 126.8700, desc: "급한 장보기, 간식, 생필품.", dog: false, baby: true },
        { name: "하나로마트 구좌점", address: "구좌읍 세평항로 13", distance: "5km", time: "차량 8분", lat: 33.5300, lng: 126.8400, desc: "농협 마트. 신선한 채소·과일·흑돼지. 08:00~22:00.", dog: false, baby: true },
        { name: "세화오일시장", address: "구좌읍 세화리", distance: "3km", time: "차량 5분", lat: 33.5261, lng: 126.8576, desc: "끝자리 5, 0일에만 장날! 제주 특산물·먹거리.", dog: true, baby: true },
        { name: "이마트 제주점", address: "제주시 탑동로 38", distance: "28km", time: "차량 40분", lat: 33.5183, lng: 126.5206, desc: "대형마트. 대량 장보기 시 이용.", dog: false, baby: true },
      ],
    },
    {
      name: "맛집",
      icon: "🍽️",
      color: "orange",
      places: [
        { name: "평대스낵", address: "구좌읍 대수길 26", distance: "1km", time: "도보 10분", lat: 33.5340, lng: 126.8410, desc: "한치튀김 맛집! 옥상 바다뷰. 모든 견종 동반 가능.", dog: true, baby: true },
        { name: "평대성게국수", address: "구좌읍 해맞이해안로 1172", distance: "1.5km", time: "차량 3분", lat: 33.5342, lng: 126.8400, desc: "성게국수 전문. 반려견 동반 가능.", dog: true, baby: true },
        { name: "제주오누이", address: "구좌읍 해맞이해안로 972", distance: "5km", time: "차량 8분", lat: 33.5426, lng: 126.8281, desc: "오션뷰 전복돌솥밥·회국수. 대형견 OK.", dog: true, baby: true },
        { name: "명리동식당 구좌직영점", address: "구좌읍 일주동로 3010-17", distance: "4km", time: "차량 7분", lat: 33.5274, lng: 126.8434, desc: "흑돼지 전문. 사장님 직접 구워줌. (월 휴무)", dog: true, baby: true },
        { name: "쉐프1192레스토랑", address: "성산읍 환해장성로 465", distance: "10km", time: "차량 15분", lat: 33.4500, lng: 126.8580, desc: "오션뷰 양식. 나시고랭, 파스타. 실내 동반.", dog: true, baby: true },
      ],
    },
    {
      name: "카페",
      icon: "☕",
      color: "amber",
      places: [
        { name: "모어모어", address: "구좌읍 해맞이해안로 1616", distance: "0.3km", time: "도보 3분", lat: 33.5190, lng: 126.8730, desc: "가장 가까운 카페! 올바다뷰 수플레 전문.", dog: false, baby: true },
        { name: "카페 치즈태비", address: "구좌읍 행원로7길 18-9", distance: "3km", time: "차량 5분", lat: 33.5545, lng: 126.8200, desc: "교회 건물 개조 감성 카페.", dog: false, baby: true },
        { name: "시시소소", address: "구좌읍 중산간동로 2247", distance: "5km", time: "차량 8분", lat: 33.4900, lng: 126.8400, desc: "환승연애 촬영지. 넓은 정원.", dog: false, baby: true },
        { name: "어니스트밀크", address: "성산읍 중산간동로 3147-7", distance: "12km", time: "차량 18분", lat: 33.4619, lng: 126.9433, desc: "목장 카페. 송아지 우유주기 체험. 성산일출봉 조망.", dog: true, baby: true },
      ],
    },
    {
      name: "병원/약국",
      icon: "🏥",
      color: "red",
      places: [
        { name: "구좌중앙의원", address: "구좌읍 세화리 인근", distance: "5km", time: "차량 8분", lat: 33.5250, lng: 126.8600, desc: "내과·소아과. (명칭·위치 방문 전 확인)", dog: false, baby: true },
        { name: "세화약국", address: "구좌읍 세화10길 1", distance: "3km", time: "차량 5분", lat: 33.5250, lng: 126.8620, desc: "기본 의약품. 일·공휴일 휴무.", dog: false, baby: true },
        { name: "제주24시숨동물의료센터", address: "제주시 연북로 632", distance: "30km+", time: "차량 40분", lat: 33.4899, lng: 126.5457, desc: "제주 유일 24시 동물병원. 강아지 응급 시. 064-805-8365.", dog: true, baby: false },
      ],
    },
  ],
};
