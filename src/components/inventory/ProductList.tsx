
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileDown, FileUp } from "lucide-react";
import { sampleProducts } from "@/lib/sample-data";
import { Badge } from "@/components/ui/badge";

export default function ProductList() {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(sampleProducts);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.barcode.includes(searchQuery) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStockStatusBadge = (stock: number, minStock: number) => {
    if (stock === 0) {
      return <Badge variant="destructive">{t("inventory", "outOfStock")}</Badge>;
    }
    if (stock < minStock) {
      return <Badge variant="warning" className="bg-amber-500">{t("inventory", "lowStock")}</Badge>;
    }
    return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">{t("inventory", "inStock")}</Badge>;
  };

  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <CardTitle className="text-lg">{t("inventory", "products")}</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-1" />
            {t("inventory", "export")}
          </Button>
          <Button variant="outline" size="sm">
            <FileUp className="h-4 w-4 mr-1" />
            {t("inventory", "import")}
          </Button>
          <Button size="sm" className="bg-algerian-green-600 hover:bg-algerian-green-700">
            <Plus className="h-4 w-4 mr-1" />
            {t("inventory", "add")}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-muted-foreground`} />
            <Input
              placeholder={t("inventory", "search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={isRTL ? 'pr-10 text-right' : 'pl-10'}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>
        </div>
        
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="px-4 py-3 text-left font-medium">{t("inventory", "product")}</th>
                  <th className="px-4 py-3 text-left font-medium">{t("inventory", "category")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("inventory", "price")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("inventory", "stock")}</th>
                  <th className="px-4 py-3 text-right font-medium">{t("inventory", "status")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/50 border-b last:border-0">
                    <td className="px-4 py-3">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.barcode}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{product.category}</td>
                    <td className="px-4 py-3 text-right">{product.price} DA</td>
                    <td className="px-4 py-3 text-right">{product.stock}</td>
                    <td className="px-4 py-3 text-right">
                      {getStockStatusBadge(product.stock, product.minStock)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
