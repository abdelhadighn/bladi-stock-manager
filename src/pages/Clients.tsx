
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, Users, Phone } from "lucide-react";

export default function Clients() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("clients", "title")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <Plus className="h-4 w-4 mr-2" />
            {t("clients", "addClient")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t("clients", "clientList")}</CardTitle>
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
                  <th className="px-4 py-3 text-left font-medium">{t("clients", "name")}</th>
                  <th className="px-4 py-3 text-left font-medium">{t("clients", "contact")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("clients", "totalPurchases")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("clients", "lastVisit")}</th>
                  <th className="px-4 py-3 text-center font-medium">{t("common", "actions")}</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data */}
                <tr className="hover:bg-muted/50 border-b">
                  <td className="px-4 py-3">
                    <div className="font-medium">Ahmed Benaissa</div>
                    <div className="text-xs text-muted-foreground">Alger, Algérie</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      <span>0555123456</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">45,600 DA</td>
                  <td className="px-4 py-3 text-right">12/05/2023</td>
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
                {/* More sample data would go here */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
