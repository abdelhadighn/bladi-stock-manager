
import { useLanguage } from "@/context/LanguageContext";
import ProductList from "@/components/inventory/ProductList";

export default function Inventory() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("inventory", "title")}</h1>
        <p className="text-muted-foreground">{t("inventory", "manageProducts")}</p>
      </div>

      <ProductList />
    </div>
  );
}
