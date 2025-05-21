
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LanguageProvider } from "@/context/LanguageContext";

import MainLayout from "@/components/layout/MainLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Inventory from "@/pages/Inventory";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import Sales from "@/pages/Sales";
import Products from "@/pages/Products";
import Clients from "@/pages/Clients";
import Suppliers from "@/pages/Suppliers";
import Purchases from "@/pages/Purchases";
import Orders from "@/pages/Orders";
import Cashier from "@/pages/Cashier";
import Reports from "@/pages/Reports";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<"admin" | "manager" | "seller">("seller");

  const handleLogin = (role: "admin" | "manager" | "seller") => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {!isAuthenticated ? (
            <Login onLogin={handleLogin} />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/suppliers" element={<Suppliers />} />
                  <Route path="/purchases" element={<Purchases />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/cashier" element={<Cashier />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
