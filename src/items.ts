export type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  shade: string;
  category?: string;
};

export const items: Item[] = [
  {
    "id": 1,
    "title": "שפתון בגוון ניוד",
    "description": "שפתון בגוון ניוד חמים למראה יומיומי.",
    "image": "33000117-001.webp",
    "price": 79,
    "brand": "Flormar",
    "shade": "ניוד חמים",
    "category": "איפור שפתיים"
  },
  {
    "id": 2,
    "title": "מסקרה Longer Than Ever",
    "description": "מסקרה שחורה להדגשת הריסים.",
    "image": "32000163-001-2.webp",
    "price": 69,
    "brand": "Flormar",
    "shade": "שחור",
    "category": "איפור עיניים"
  },
  {
    "id": 3,
    "title": "סומק נוזלי Puffy",
    "description": "סומק נוזלי בגוון קורל, עם ספוגית למריחה.",
    "image": "31000273-001-2-2.webp",
    "price": 59,
    "brand": "Flormar",
    "shade": "קורל",
    "category": "איפור פנים"
  },
  {
    "id": 4,
    "title": "פודרה שקופה",
    "description": "פודרה בתפזורת לקיבוע האיפור.",
    "image": "0111083-1.png",
    "price": 89,
    "brand": "Flormar",
    "shade": "שקוף"
  }
];
