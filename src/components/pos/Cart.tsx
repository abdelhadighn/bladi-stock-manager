
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CartItem } from "@/lib/types";
import { Separator } from "@/components/ui/separator";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const { t, isRTL } = useLanguage();
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotal(subtotal);
    setTax(subtotal * 0.19); // 19% TVA
  }, [items]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="py-4">
        <CardTitle className="text-lg">{t("pos", "cart")}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">{t("pos", "emptyCart")}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                <div className="flex-1">
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.product.price} DA × {item.quantity} = {item.product.price * item.quantity} DA
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                      className="w-12 h-8 text-center border-0 p-0"
                    />
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => onRemoveItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex-col pt-4 border-t">
        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t("pos", "subtotal")}</span>
            <span>{total.toFixed(2)} DA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t("pos", "tax")} (19%)</span>
            <span>{tax.toFixed(2)} DA</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>{t("pos", "total")}</span>
            <span>{(total + tax).toFixed(2)} DA</span>
          </div>
          
          <div className="pt-4 grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              {t("pos", "holdSale")}
            </Button>
            <Button
              className="w-full bg-algerian-green-600 hover:bg-algerian-green-700 text-white btn-hover"
              disabled={items.length === 0}
              onClick={onCheckout}
            >
              {t("pos", "payment")}
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
