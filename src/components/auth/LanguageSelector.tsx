
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex gap-2 absolute top-4 right-4">
      <Button 
        variant={language === "fr" ? "default" : "outline"} 
        size="sm"
        onClick={() => setLanguage("fr")}
      >
        Français
      </Button>
      <Button 
        variant={language === "ar" ? "default" : "outline"} 
        size="sm"
        onClick={() => setLanguage("ar")}
        className="font-arabic"
      >
        العربية
      </Button>
    </div>
  );
}
