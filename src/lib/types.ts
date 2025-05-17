
export type Language = "fr" | "ar";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  barcode: string;
  price: number;
  cost: number;
  stock: number;
  minStock: number;
  category: string;
  supplier: string;
  image?: string;
}

export interface DashboardStat {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface StockAlert {
  id: string;
  productId: string;
  productName: string;
  currentStock: number;
  minStock: number;
  supplier: string;
}

export interface RecentActivity {
  id: string;
  type: "sale" | "purchase" | "inventory" | "other";
  description: string;
  timestamp: string;
  amount?: number;
  user: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
}
