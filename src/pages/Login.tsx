
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/auth/LoginForm";
import LanguageSelector from "@/components/auth/LanguageSelector";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      toast({
        title: "Login successful",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-algerian-blue-100">
      <LanguageSelector />
      
      <div className="w-full max-w-md px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-algerian-blue-600">StockPro</h1>
          <p className="text-muted-foreground mt-2">Gestion de stock et vente</p>
        </div>
        
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}
