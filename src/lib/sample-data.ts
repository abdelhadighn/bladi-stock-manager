
import { Product, StockAlert, RecentActivity, DashboardStat } from "./types";

// Sample products
export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Lait Candia 1L",
    barcode: "6192001234567",
    price: 140,
    cost: 110,
    stock: 23,
    minStock: 10,
    category: "Produits laitiers",
    supplier: "Candia",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Yaourt Trèfle x4",
    barcode: "6192005678901",
    price: 220,
    cost: 175,
    stock: 15,
    minStock: 8,
    category: "Produits laitiers",
    supplier: "Trèfle",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Café Boukari 250g",
    barcode: "6192009876543",
    price: 450,
    cost: 380,
    stock: 5,
    minStock: 10,
    category: "Café & Thé",
    supplier: "Boukari",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Huile Fleurial 1L",
    barcode: "6192002468024",
    price: 650,
    cost: 590,
    stock: 30,
    minStock: 15,
    category: "Huiles & Condiments",
    supplier: "Cevital",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Sucre Cristal 1kg",
    barcode: "6192001357913",
    price: 110,
    cost: 95,
    stock: 40,
    minStock: 20,
    category: "Épicerie",
    supplier: "Cevital",
    image: "/placeholder.svg",
  }
];

// Sample stock alerts
export const sampleStockAlerts: StockAlert[] = [
  {
    id: "1",
    productId: "3",
    productName: "Café Boukari 250g",
    currentStock: 5,
    minStock: 10,
    supplier: "Boukari",
  },
  {
    id: "2",
    productId: "6",
    productName: "Shampooing Dove 250ml",
    currentStock: 3,
    minStock: 8,
    supplier: "Unilever",
  },
  {
    id: "3",
    productId: "7",
    productName: "Chocolat Chocomax",
    currentStock: 4,
    minStock: 12,
    supplier: "Gourmet",
  },
];

// Sample recent activities
export const sampleRecentActivities: RecentActivity[] = [
  {
    id: "1",
    type: "sale",
    description: "Vente #12345",
    timestamp: "2025-05-17T10:23:00Z",
    amount: 2450,
    user: "Karim",
  },
  {
    id: "2",
    type: "purchase",
    description: "Réception commande Cevital",
    timestamp: "2025-05-17T09:45:00Z",
    amount: 15000,
    user: "Fatima",
  },
  {
    id: "3",
    type: "inventory",
    description: "Mise à jour stock",
    timestamp: "2025-05-17T08:30:00Z",
    user: "Fatima",
  },
  {
    id: "4",
    type: "sale",
    description: "Vente #12344",
    timestamp: "2025-05-16T17:55:00Z",
    amount: 890,
    user: "Omar",
  },
];

// Sample dashboard stats
export const sampleDashboardStats: DashboardStat[] = [
  {
    id: "1",
    title: "Ventes du jour",
    value: "12,450 DA",
    change: 7.2,
    icon: "shopping-cart",
  },
  {
    id: "2",
    title: "Articles en stock",
    value: 342,
    change: 0,
    icon: "archive",
  },
  {
    id: "3",
    title: "Alertes de stock",
    value: 8,
    change: -3,
    icon: "bell",
  },
  {
    id: "4",
    title: "Clients du jour",
    value: 24,
    change: 12.5,
    icon: "users",
  },
];
