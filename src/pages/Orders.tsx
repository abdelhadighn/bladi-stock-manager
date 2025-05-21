
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Orders() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("orders", "title")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <Plus className="h-4 w-4 mr-2" />
            {t("orders", "newOrder")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t("orders", "orderList")}</CardTitle>
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
              <TabsTrigger value="all">{t("common", "all")}</TabsTrigger>
              <TabsTrigger value="auto">{t("orders", "autoOrder")}</TabsTrigger>
              <TabsTrigger value="supplier">{t("orders", "bySupplier")}</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="py-4">
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="px-4 py-3 text-left font-medium">{t("orders", "reference")}</th>
                      <th className="px-4 py-3 text-left font-medium">{t("orders", "supplier")}</th>
                      <th className="px-4 py-3 text-left font-medium">{t("orders", "date")}</th>
                      <th className="px-4 py-3 text-center font-medium">{t("orders", "status")}</th>
                      <th className="px-4 py-3 text-center font-medium">{t("common", "actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample data */}
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3">
                        <div className="font-medium">BC-000056</div>
                      </td>
                      <td className="px-4 py-3">SARL Distrib Plus</td>
                      <td className="px-4 py-3">24/05/2023</td>
                      <td className="px-4 py-3 text-center">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          {t("orders", "pending")}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <Button variant="ghost" size="sm">
                            {t("common", "view")}
                          </Button>
                          <Button variant="ghost" size="sm">
                            {t("common", "print")}
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3">
                        <div className="font-medium">BC-000055</div>
                      </td>
                      <td className="px-4 py-3">Laiterie du Centre</td>
                      <td className="px-4 py-3">22/05/2023</td>
                      <td className="px-4 py-3 text-center">
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          {t("orders", "sent")}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <Button variant="ghost" size="sm">
                            {t("common", "view")}
                          </Button>
                          <Button variant="ghost" size="sm">
                            {t("common", "print")}
                          </Button>
                        </div>
                      </td>
                    </tr>
                    {/* Add more sample data here */}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            {/* Content for other tabs */}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
