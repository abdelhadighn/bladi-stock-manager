
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const { t, language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      toast({
        title: t("common", "welcome"),
        description: "Demo mode - Login successful",
      });
    }, 800);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-algerian-blue-600">
          {t("auth", "title")}
        </h2>
      </div>
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className={isRTL ? "block text-right" : ""}>
              {t("auth", "emailLabel")}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className={isRTL ? "text-right" : ""}>
                {t("auth", "passwordLabel")}
              </Label>
              <a href="#" className="text-sm text-algerian-blue-600 hover:underline">
                {t("auth", "forgotPassword")}
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember-me" 
                checked={rememberMe} 
                onCheckedChange={(checked) => setRememberMe(!!checked)}
              />
              <Label htmlFor="remember-me" className="text-sm">
                {t("auth", "rememberMe")}
              </Label>
            </div>
          </div>
        </div>
        
        <div>
          <Button
            type="submit"
            className="w-full bg-algerian-blue-600 hover:bg-algerian-blue-700 text-white py-2 px-4 rounded btn-hover"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t("auth", "loginButton")}
              </span>
            ) : (
              t("auth", "loginButton")
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
