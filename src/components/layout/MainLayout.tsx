
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLanguage } from "@/context/LanguageContext";

export default function MainLayout() {
  const { isRTL } = useLanguage();

  return (
    <SidebarProvider defaultOpen={true}>
      <div className={`flex min-h-screen w-full bg-background ${isRTL ? "rtl" : ""}`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Navbar />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
