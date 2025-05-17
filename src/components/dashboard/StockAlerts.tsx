
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { sampleStockAlerts } from "@/lib/sample-data";
import { Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StockAlerts() {
  const { t, isRTL } = useLanguage();

  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          {t("dashboard", "stockAlerts")}
        </CardTitle>
        <Button variant="outline" size="sm">
          {t("common", "add")}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sampleStockAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center p-3 bg-muted/40 rounded-md">
              <div className="p-2 mr-4 bg-red-100 rounded-full">
                <Archive className="h-4 w-4 text-red-600" />
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{alert.productName}</p>
                <p className="text-xs text-muted-foreground">
                  {t("inventory", "currentStock")}: {alert.currentStock} | 
                  {t("inventory", "minStock")}: {alert.minStock}
                </p>
                <p className="text-xs">
                  {t("inventory", "supplier")}: {alert.supplier}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
