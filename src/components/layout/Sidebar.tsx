
import { Home, ShoppingCart, Archive, FileText, ShoppingBag, BarChart2, Settings } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface SidebarProps {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, onCollapsedChange }: SidebarProps) {
  const { t, isRTL } = useLanguage();

  const links = [
    {
      title: t("navigation", "dashboard"),
      icon: Home,
      href: "/",
    },
    {
      title: t("navigation", "pos"),
      icon: ShoppingCart,
      href: "/pos",
    },
    {
      title: t("navigation", "inventory"),
      icon: Archive,
      href: "/inventory",
    },
    {
      title: t("navigation", "sales"),
      icon: FileText,
      href: "/sales",
    },
    {
      title: t("navigation", "purchases"),
      icon: ShoppingBag,
      href: "/purchases",
    },
    {
      title: t("navigation", "reports"),
      icon: BarChart2,
      href: "/reports",
    },
    {
      title: t("navigation", "settings"),
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <SidebarComponent
      className={cn(
        "border-r transition-all duration-300 bg-sidebar",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <div className="p-4 flex items-center justify-center h-16">
        <h2 className={cn(
          "text-lg font-bold transition-opacity",
          collapsed ? "opacity-0 w-0" : "opacity-100"
        )}>
          StockPro
        </h2>
        <SidebarTrigger className={collapsed ? "mx-auto" : "ml-auto"} onClick={() => onCollapsedChange(!collapsed)} />
      </div>
      
      <SidebarContent className={isRTL ? "rtl" : ""}>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            {t("common", "dashboard")}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) => cn(
                        "flex items-center py-2 px-3 w-full rounded-md",
                        isActive ? "bg-sidebar-accent text-primary font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      <link.icon className={cn("h-5 w-5 flex-shrink-0", isRTL ? "ml-2" : "mr-2")} />
                      <span className={cn(
                        "transition-opacity",
                        collapsed ? "opacity-0 w-0" : "opacity-100"
                      )}>
                        {link.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <div className={cn(
        "absolute bottom-4 left-0 right-0 p-4 transition-opacity",
        collapsed ? "opacity-0" : "opacity-100"
      )}>
        <div className="bg-algerian-green-600 text-white p-3 rounded-lg shadow-sm">
          <p className="text-xs font-medium">StockPro v1.0</p>
        </div>
      </div>
    </SidebarComponent>
  );
}
