
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, Calendar, ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Sales() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("sales", "title")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            {t("sales", "newSale")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t("sales", "salesHistory")}</CardTitle>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative flex-grow">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-muted-foreground`} />
                <Input 
                  placeholder={t("common", "search")} 
                  className={isRTL ? 'pr-10' : 'pl-10'} 
                />
              </div>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">{t("sales", "allSales")}</TabsTrigger>
              <TabsTrigger value="today">{t("sales", "today")}</TabsTrigger>
              <TabsTrigger value="this-week">{t("sales", "thisWeek")}</TabsTrigger>
              <TabsTrigger value="this-month">{t("sales", "thisMonth")}</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="py-4">
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="px-4 py-3 text-left font-medium">{t("sales", "reference")}</th>
                      <th className="px-4 py-3 text-left font-medium">{t("sales", "date")}</th>
                      <th className="px-4 py-3 text-left font-medium">{t("sales", "client")}</th>
                      <th className="px-4 py-3 text-right font-medium">{t("sales", "items")}</th>
                      <th className="px-4 py-3 text-right font-medium">{t("sales", "total")}</th>
                      <th className="px-4 py-3 text-center font-medium">{t("sales", "paymentMethod")}</th>
                      <th className="px-4 py-3 text-center font-medium">{t("common", "actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample data */}
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3">
                        <div className="font-medium">VNT-001245</div>
                      </td>
                      <td className="px-4 py-3">15/05/2023 14:30</td>
                      <td className="px-4 py-3">Client anonyme</td>
                      <td className="px-4 py-3 text-right">5</td>
                      <td className="px-4 py-3 text-right">1,450 DA</td>
                      <td className="px-4 py-3 text-center">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {t("sales", "cash")}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <Button variant="ghost" size="sm">
                            {t("common", "view")}
                          </Button>
                          <Button variant="ghost" size="sm">
                            {t("sales", "print")}
                          </Button>
                        </div>
                      </td>
                    </tr>
                    {/* More sample data would go here */}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            {/* Similar content for other tabs */}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
