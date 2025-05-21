
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/auth/LanguageSelector";
import { Lock, User } from "lucide-react";

interface LoginProps {
  onLogin: (role: "admin" | "manager" | "seller") => void;
}

export default function Login({ onLogin }: LoginProps) {
  const { t } = useLanguage();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError(t("auth", "invalidCredentials"));
      return;
    }

    // Simple role-based authentication for demo
    if (username.toLowerCase() === "admin" && password === "admin") {
      onLogin("admin");
    } else if (username.toLowerCase() === "manager" && password === "manager") {
      onLogin("manager");
    } else if (username.toLowerCase() === "seller" && password === "seller") {
      onLogin("seller");
    } else {
      setError(t("auth", "invalidCredentials"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <LanguageSelector />
      
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">StockPro</CardTitle>
          <CardDescription>{t("auth", "login")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("auth", "username")}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder={t("auth", "password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {error && (
              <div className="text-destructive text-sm text-center">
                {error}
              </div>
            )}
            
            <Button type="submit" className="w-full bg-algerian-green-600 hover:bg-algerian-green-700">
              {t("auth", "signIn")}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              {t("auth", "forgotPassword")}
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Demo credentials:</p>
            <p>Admin: admin / admin</p>
            <p>Manager: manager / manager</p>
            <p>Seller: seller / seller</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-muted-foreground">
            StockPro © 2023
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
