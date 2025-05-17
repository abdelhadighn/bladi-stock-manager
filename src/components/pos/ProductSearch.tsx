
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Search, BarcodeScan } from "lucide-react";
import { useState } from "react";
import { Product } from "@/lib/types";
import { sampleProducts } from "@/lib/sample-data";

interface ProductSearchProps {
  onProductSelected: (product: Product) => void;
}

export default function ProductSearch({ onProductSelected }: ProductSearchProps) {
  const { t, isRTL } = useLanguage();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 1) {
      const results = sampleProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product.barcode.includes(value)
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleProductClick = (product: Product) => {
    onProductSelected(product);
    setQuery("");
    setShowResults(false);
  };

  const handleBarcodeClick = () => {
    // Mock barcode scanning by selecting a random product
    const randomProduct = sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
    onProductSelected(randomProduct);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full">
        <div className="relative flex-grow">
          <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-muted-foreground`} />
          <Input
            placeholder={t("pos", "searchProducts")}
            className={`pl-10 w-full ${isRTL ? 'text-right pr-10 pl-4' : ''}`}
            value={query}
            onChange={handleSearch}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>
        <Button
          type="button"
          className="ml-2 bg-algerian-blue-600 hover:bg-algerian-blue-700 btn-hover"
          onClick={handleBarcodeClick}
        >
          <BarcodeScan className="h-4 w-4 mr-2" />
          {t("pos", "scanBarcode")}
        </Button>
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-10 max-h-64 overflow-y-auto">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="p-3 hover:bg-muted cursor-pointer flex justify-between items-center border-b last:border-0"
              onClick={() => handleProductClick(product)}
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.barcode}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{product.price} DA</p>
                <p className={`text-xs ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                  {product.stock > 0 ? `Stock: ${product.stock}` : t("inventory", "outOfStock")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
