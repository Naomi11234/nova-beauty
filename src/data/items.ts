export type Item = { id: number; title: string; description: string; image: string; price: number; brand: string; shade: string; category: string };
const base = import.meta.env.BASE_URL;
export const items: Item[] = [
{id:1,title:"Velvet Nude",description:"שפתון בגוון ניוד חמים ובגימור קטיפתי.",image:base+"nova-lip.svg",price:79,brand:"NOVA BEAUTY",shade:"ניוד חמים",category:"שפתיים"},
{id:2,title:"Midnight Lash",description:"מסקרה שחורה להדגשת הריסים.",image:base+"nova-mascara.svg",price:69,brand:"NOVA BEAUTY",shade:"שחור",category:"עיניים"},
{id:3,title:"Peach Bloom",description:"סומק נוזלי בגוון קורל רך.",image:base+"nova-blush.svg",price:59,brand:"NOVA BEAUTY",shade:"קורל",category:"פנים"},
{id:4,title:"Soft Focus",description:"פודרה שקופה בתפזורת לקיבוע האיפור.",image:base+"nova-powder.svg",price:89,brand:"NOVA BEAUTY",shade:"שקוף",category:"פנים"}
];