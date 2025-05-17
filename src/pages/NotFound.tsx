
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-algerian-blue-600">404</h1>
        <p className="text-xl text-muted-foreground">{t("common", "pageNotFound")}</p>
        <Button asChild className="mt-4 bg-algerian-blue-600 hover:bg-algerian-blue-700">
          <Link to="/">{t("common", "backToHome")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
