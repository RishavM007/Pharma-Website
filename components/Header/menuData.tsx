import { Menu } from "@/types/menu";

const menuData: { [key: string]: Menu[] } = {
  en: [
    { id: 1, title: "Home", newTab: false, path: "/" },
    { id: 2, title: "About Us", newTab: false, path: "/about" },
    { id: 3, title: "Focus Area", newTab: false, path: "/focus" },
    { id: 4, title: "Strategy", newTab: false, path: "/strategy" },
    { id: 5, title: "Partnership", newTab: false, path: "/partnership" },
    { id: 6, title: "Career", newTab: false, path: "/career" },
  ],
  ar: [
    { id: 1, title: "الرئيسية", newTab: false, path: "/" },
    { id: 2, title: "من نحن", newTab: false, path: "/about" },
    { id: 3, title: "مجال التركيز", newTab: false, path: "/focus" },
    { id: 4, title: "الإستراتيجية", newTab: false, path: "/strategy" },
    { id: 5, title: "الشراكة", newTab: false, path: "/partnership" },
    { id: 6, title: "الوظائف", newTab: false, path: "/career" },
  ],
};

export default menuData;
