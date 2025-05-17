
import { useLanguage } from "@/context/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LanguageSetting from "@/components/settings/LanguageSetting";

export default function Settings() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("settings", "title")}</h1>
        <p className="text-muted-foreground">{t("settings", "configureApp")}</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="w-full border-b mb-6">
          <TabsTrigger value="general">{t("settings", "general")}</TabsTrigger>
          <TabsTrigger value="appearance">{t("settings", "appearance")}</TabsTrigger>
          <TabsTrigger value="company">{t("settings", "company")}</TabsTrigger>
          <TabsTrigger value="users">{t("settings", "users")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <LanguageSetting />
        </TabsContent>
        
        <TabsContent value="appearance">
          <div className="text-center p-10">
            <p className="text-muted-foreground">{t("settings", "comingSoon")}</p>
          </div>
        </TabsContent>
        
        <TabsContent value="company">
          <div className="text-center p-10">
            <p className="text-muted-foreground">{t("settings", "comingSoon")}</p>
          </div>
        </TabsContent>
        
        <TabsContent value="users">
          <div className="text-center p-10">
            <p className="text-muted-foreground">{t("settings", "comingSoon")}</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
