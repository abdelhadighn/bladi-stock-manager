
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import ProductSearch from "@/components/pos/ProductSearch";
import Cart from "@/components/pos/Cart";
import { sampleProducts } from "@/lib/sample-data";
import { CartItem, Product } from "@/lib/types";

export default function POS() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleProductSelected = (product: Product) => {
    // Check if product already exists in cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex >= 0) {
      // Increase quantity of existing item
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }

    toast({
      title: t("pos", "productAdded"),
      description: product.name,
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (productId: string) => {
    const updatedItems = cartItems.filter((item) => item.product.id !== productId);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    toast({
      title: t("pos", "saleCompleted"),
      description: `${t("pos", "totalAmount")}: ${cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)} DA`,
    });
    setCartItems([]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("pos", "title")}</h1>
        <p className="text-muted-foreground">{new Date().toLocaleDateString()}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="py-6">
              <ProductSearch onProductSelected={handleProductSelected} />
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {sampleProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-md cursor-pointer transition-all hover:-translate-y-1"
                onClick={() => handleProductSelected(product)}
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain h-24 w-24"
                  />
                </div>
                <CardContent className="p-3">
                  <div className="space-y-1 text-center">
                    <h4 className="font-medium text-sm line-clamp-2 h-10">{product.name}</h4>
                    <p className="text-lg font-bold">{product.price} DA</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
}
