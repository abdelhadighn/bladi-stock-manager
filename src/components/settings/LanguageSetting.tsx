
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSetting() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-lg">{t("settings", "language")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant={language === "fr" ? "default" : "outline"}
            size="lg"
            className={language === "fr" ? "bg-algerian-blue-600 hover:bg-algerian-blue-700" : ""}
            onClick={() => setLanguage("fr")}
          >
            <span className="font-medium">Français</span>
          </Button>
          
          <Button
            variant={language === "ar" ? "default" : "outline"}
            size="lg"
            className={`font-arabic ${language === "ar" ? "bg-algerian-blue-600 hover:bg-algerian-blue-700" : ""}`}
            onClick={() => setLanguage("ar")}
          >
            <span className="font-medium">العربية</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
