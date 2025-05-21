
import { 
  Home, 
  ShoppingCart, 
  Archive, 
  FileText, 
  ShoppingBag, 
  BarChart2, 
  Settings,
  Package,
  Users,
  User,
  Receipt,
  CreditCard,
  FileCheck
} from "lucide-react";
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
  useSidebar
} from "@/components/ui/sidebar";

export default function Sidebar() {
  const { t, isRTL } = useLanguage();
  const { open: collapsed, setOpen: setCollapsed } = useSidebar();

  // Updated links to match the PRD modules
  const links = [
    {
      title: t("navigation", "dashboard"),
      icon: Home,
      href: "/",
    },
    {
      title: t("navigation", "products"),
      icon: Package,
      href: "/products",
    },
    {
      title: t("navigation", "inventory"),
      icon: Archive,
      href: "/inventory",
    },
    {
      title: t("navigation", "sales"),
      icon: ShoppingCart,
      href: "/sales",
    },
    {
      title: t("navigation", "clients"),
      icon: Users,
      href: "/clients",
    },
    {
      title: t("navigation", "suppliers"),
      icon: User,
      href: "/suppliers",
    },
    {
      title: t("navigation", "purchases"),
      icon: ShoppingBag,
      href: "/purchases",
    },
    {
      title: t("navigation", "orders"),
      icon: FileCheck,
      href: "/orders",
    },
    {
      title: t("navigation", "cashier"),
      icon: CreditCard,
      href: "/cashier",
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
        collapsed ? "w-16" : "w-64",
        isRTL && "border-r-0 border-l"
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
        <SidebarTrigger 
          className={collapsed ? "mx-auto" : isRTL ? "mr-auto" : "ml-auto"} 
          onClick={() => setCollapsed(!collapsed)} 
        />
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            {t("common", "modules")}
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
                        isActive ? "bg-sidebar-accent text-primary font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                        isRTL && "flex-row-reverse text-right"
                      )}
                    >
                      <link.icon className={cn(
                        "h-5 w-5 flex-shrink-0", 
                        isRTL ? collapsed ? "mx-auto" : "ml-2" : collapsed ? "mx-auto" : "mr-2"
                      )} />
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
