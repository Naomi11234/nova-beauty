import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div id="home" dir="rtl" className="flex min-h-dvh flex-col bg-rose-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}