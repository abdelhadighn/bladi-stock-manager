
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
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
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
  const { open: collapsed, setOpenMobile } = useSidebar();
  const isMobile = useIsMobile();

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

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarComponent
      className={cn(
        "transition-all duration-300 bg-sidebar",
        collapsed ? "w-16" : "w-64",
        isRTL ? "border-l" : "border-r"
      )}
      collapsible="icon"
    >
      <div className="p-4 flex items-center justify-between h-16">
        <h2 className={cn(
          "text-lg font-bold transition-opacity",
          collapsed ? "opacity-0 w-0" : "opacity-100"
        )}>
          StockPro
        </h2>
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
                      onClick={handleLinkClick}
                      className={({ isActive }) => cn(
                        "flex items-center py-3 px-3 w-full rounded-md touch-target",
                        "min-h-[44px]", // iOS touch target minimum
                        isActive ? "bg-sidebar-accent text-primary font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                        isRTL && !collapsed && "flex-row-reverse text-right",
                        collapsed && "justify-center"
                      )}
                    >
                      <link.icon className={cn(
                        "h-5 w-5 flex-shrink-0", 
                        !collapsed && (isRTL ? "ml-3" : "mr-3")
                      )} />
                      <span className={cn(
                        "transition-all whitespace-nowrap",
                        collapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100 inline"
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
