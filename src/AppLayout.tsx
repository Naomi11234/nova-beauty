import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
type AppLayoutProps = { children: ReactNode; favoriteCount: number };
export default function AppLayout({children,favoriteCount}: AppLayoutProps) {
 return <div id="home" dir="rtl" className="flex min-h-dvh flex-col bg-[#faf5ef] text-[#382329]"><Navbar favoriteCount={favoriteCount}/>{children}<Footer/></div>;
}