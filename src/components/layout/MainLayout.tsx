
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

export default function MainLayout() {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className={`flex min-h-screen w-full bg-background ${isRTL ? "rtl" : ""}`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full min-w-0">
          <Navbar />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
