
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, Calendar, FileUp, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Purchases() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("purchases", "title")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
          <Button variant="outline" size="sm">
            <FileUp className="h-4 w-4 mr-2" />
            {t("purchases", "uploadInvoice")}
          </Button>
          <Button variant="outline" size="sm">
            <Camera className="h-4 w-4 mr-2" />
            {t("purchases", "scanInvoice")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <Plus className="h-4 w-4 mr-2" />
            {t("purchases", "newPurchase")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t("purchases", "purchaseList")}</CardTitle>
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
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="px-4 py-3 text-left font-medium">{t("purchases", "reference")}</th>
                  <th className="px-4 py-3 text-left font-medium">{t("purchases", "supplier")}</th>
                  <th className="px-4 py-3 text-left font-medium">{t("purchases", "date")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("purchases", "total")}</th>
                  <th className="px-4 py-3 text-center font-medium">{t("purchases", "status")}</th>
                  <th className="px-4 py-3 text-center font-medium">{t("common", "actions")}</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data */}
                <tr className="hover:bg-muted/50 border-b">
                  <td className="px-4 py-3">
                    <div className="font-medium">ACH-000123</div>
                  </td>
                  <td className="px-4 py-3">SARL Distrib Plus</td>
                  <td className="px-4 py-3">22/05/2023</td>
                  <td className="px-4 py-3 text-right">245,600 DA</td>
                  <td className="px-4 py-3 text-center">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {t("purchases", "paid")}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <Button variant="ghost" size="sm">
                        {t("common", "view")}
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 border-b">
                  <td className="px-4 py-3">
                    <div className="font-medium">ACH-000122</div>
                  </td>
                  <td className="px-4 py-3">Laiterie du Centre</td>
                  <td className="px-4 py-3">20/05/2023</td>
                  <td className="px-4 py-3 text-right">125,300 DA</td>
                  <td className="px-4 py-3 text-center">
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                      {t("purchases", "partial")}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <Button variant="ghost" size="sm">
                        {t("common", "view")}
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
