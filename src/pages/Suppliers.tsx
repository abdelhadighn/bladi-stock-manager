
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, Phone, Building } from "lucide-react";

export default function Suppliers() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("suppliers", "title")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <Plus className="h-4 w-4 mr-2" />
            {t("suppliers", "addSupplier")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t("suppliers", "supplierList")}</CardTitle>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative flex-grow">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-muted-foreground`} />
                <Input 
                  placeholder={t("common", "search")} 
                  className={isRTL ? 'pr-10' : 'pl-10'} 
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="px-4 py-3 text-left font-medium">{t("suppliers", "name")}</th>
                  <th className="px-4 py-3 text-left font-medium">{t("suppliers", "contact")}</th>
                  <th className="px-4 py-3 text-left font-medium">{t("suppliers", "nif")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("suppliers", "totalPurchases")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("suppliers", "lastOrder")}</th>
                  <th className="px-4 py-3 text-center font-medium">{t("common", "actions")}</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data */}
                <tr className="hover:bg-muted/50 border-b">
                  <td className="px-4 py-3">
                    <div className="font-medium">SARL Distrib Plus</div>
                    <div className="text-xs text-muted-foreground">Alger, Algérie</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      <span>0550123456</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">123456789012345</td>
                  <td className="px-4 py-3 text-right">1,250,000 DA</td>
                  <td className="px-4 py-3 text-right">10/05/2023</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <Button variant="ghost" size="sm">
                        {t("common", "viewHistory")}
                      </Button>
                      <Button variant="ghost" size="sm">
                        {t("common", "edit")}
                      </Button>
                    </div>
                  </td>
                </tr>
                {/* Add more sample data here */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
