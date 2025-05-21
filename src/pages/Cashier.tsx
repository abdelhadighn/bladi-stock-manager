import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Barcode, Plus, Minus, User, CreditCard, Printer } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cashier() {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "Lait Candia 1L", price: 130, quantity: 2 },
    { id: "2", name: "Pain baguette", price: 15, quantity: 4 },
    { id: "3", name: "Yaourt Trèfle x4", price: 320, quantity: 1 },
  ]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.19; // 19% TVA
  const total = subtotal + tax;

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) return;
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  return (
    <div className="h-[calc(100vh-120px)] grid grid-cols-7 gap-4">
      {/* Left side - Products */}
      <div className="col-span-4 flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-muted-foreground`} />
            <Input
              placeholder={t("pos", "searchProducts")}
              className={`${isRTL ? 'pr-10' : 'pl-10'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-algerian-blue-600 hover:bg-algerian-blue-700">
            <Barcode className="h-4 w-4 mr-2" />
            {t("pos", "scanBarcode")}
          </Button>
        </div>

        <Card className="flex-1 overflow-hidden">
          <Tabs defaultValue="favorites" className="h-full flex flex-col">
            <div className="px-4 pt-4">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="favorites">{t("pos", "favorites")}</TabsTrigger>
                <TabsTrigger value="all">{t("pos", "allProducts")}</TabsTrigger>
                <TabsTrigger value="categories">{t("pos", "categories")}</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="favorites" className="flex-1 overflow-auto p-4">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {/* Sample product cards */}
                {Array.from({ length: 20 }).map((_, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-square bg-muted/50 rounded-md border p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-full aspect-square rounded-md bg-muted mb-2 flex items-center justify-center text-muted-foreground text-xs">
                      IMG
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium truncate w-full">Produit {idx + 1}</p>
                      <p className="text-xs text-muted-foreground">{(idx + 1) * 50} DA</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            {/* Other tabs content */}
          </Tabs>
        </Card>
      </div>

      {/* Right side - Cart */}
      <Card className="col-span-3 flex flex-col h-full">
        <div className="flex items-center p-4 border-b gap-2">
          <Button variant="outline" className="flex-1">
            <User className="h-4 w-4 mr-2" />
            {t("pos", "selectClient")}
          </Button>
          <Badge variant="outline" className="text-xs">
            {t("pos", "anonymousClient")}
          </Badge>
        </div>

        <CardContent className="flex-1 overflow-y-auto py-4">
          <div className="space-y-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2 bg-muted/30 rounded-md">
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.price} DA × {item.quantity} = {item.price * item.quantity} DA
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <div className="p-4 border-t">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("pos", "subtotal")}</span>
              <span>{subtotal.toFixed(2)} DA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("pos", "tax")} (19%)</span>
              <span>{tax.toFixed(2)} DA</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>{t("pos", "total")}</span>
              <span>{total.toFixed(2)} DA</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-2">
            <Button variant="outline" className="w-full">
              {t("pos", "cash")}
            </Button>
            <Button variant="outline" className="w-full">
              <CreditCard className="h-4 w-4 mr-1" />
              {t("pos", "card")}
            </Button>
            <Button variant="outline" className="w-full">
              {t("pos", "split")}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              {t("pos", "holdSale")}
            </Button>
            <Button className="w-full bg-algerian-green-600 hover:bg-algerian-green-700">
              <Printer className="h-4 w-4 mr-2" />
              {t("pos", "payment")}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
