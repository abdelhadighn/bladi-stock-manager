
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, FileUp, Barcode } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Products() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("products", "title")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
          <Button variant="outline" size="sm">
            <FileUp className="h-4 w-4 mr-2" />
            {t("common", "import")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <Plus className="h-4 w-4 mr-2" />
            {t("products", "addProduct")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t("products", "productList")}</CardTitle>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative flex-grow">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-muted-foreground`} />
                <Input 
                  placeholder={t("common", "search")} 
                  className={isRTL ? 'pr-10' : 'pl-10'} 
                />
              </div>
              <Button variant="outline" size="icon">
                <Barcode className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">{t("products", "allProducts")}</TabsTrigger>
              <TabsTrigger value="low-stock">{t("products", "lowStock")}</TabsTrigger>
              <TabsTrigger value="out-of-stock">{t("products", "outOfStock")}</TabsTrigger>
              <TabsTrigger value="expiring-soon">{t("products", "expiringSoon")}</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="py-4">
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="px-4 py-3 text-left font-medium">{t("products", "product")}</th>
                      <th className="px-4 py-3 text-left font-medium">{t("products", "category")}</th>
                      <th className="px-4 py-3 text-right font-medium">{t("products", "buyPrice")}</th>
                      <th className="px-4 py-3 text-right font-medium">{t("products", "sellPrice")}</th>
                      <th className="px-4 py-3 text-right font-medium">{t("products", "stock")}</th>
                      <th className="px-4 py-3 text-center font-medium">{t("common", "actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample data would go here */}
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3">
                        <div className="font-medium">Lait Candia 1L</div>
                        <div className="text-xs text-muted-foreground">6194503811209</div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">Produits laitiers</td>
                      <td className="px-4 py-3 text-right">110 DA</td>
                      <td className="px-4 py-3 text-right">130 DA</td>
                      <td className="px-4 py-3 text-right">24</td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">
                          {t("common", "edit")}
                        </Button>
                      </td>
                    </tr>
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
