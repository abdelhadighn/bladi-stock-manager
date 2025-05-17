
import { Bell, Search, User, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLanguage } from "@/context/LanguageContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const { t, language, setLanguage, isRTL } = useLanguage();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-card">
      <div className="flex items-center flex-1">
        <SidebarTrigger className="mx-2" />
        <div className={`flex items-center ${isRTL ? 'mr-4' : 'ml-4'} max-w-md w-full`}>
          <Search className="w-4 h-4 mr-2 text-muted-foreground" />
          <Input 
            placeholder={t("common", "search")}  
            className="w-full bg-background border-none focus:ring-0" 
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>{t("common", "notifications")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-96 overflow-auto">
              <div className="flex items-center p-3 hover:bg-muted cursor-pointer">
                <div className="font-medium">
                  <p className="text-sm text-foreground">Stock Alert: Café Boukari 250g</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 hover:bg-muted cursor-pointer">
                <div className="font-medium">
                  <p className="text-sm text-foreground">New Sale: #12345</p>
                  <p className="text-xs text-muted-foreground">30 minutes ago</p>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{t("common", "language")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setLanguage("fr")}>
              Français {language === "fr" && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("ar")}>
              <span className="font-arabic">العربية</span> {language === "ar" && "✓"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar>
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Omar Medjou</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>{t("common", "profile")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>{t("common", "settings")}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {t("common", "logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
