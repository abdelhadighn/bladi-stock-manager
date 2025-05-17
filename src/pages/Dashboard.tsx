
import { useLanguage } from "@/context/LanguageContext";
import { sampleDashboardStats } from "@/lib/sample-data";
import StatCard from "@/components/dashboard/StatCard";
import StockAlerts from "@/components/dashboard/StockAlerts";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickAccess from "@/components/dashboard/QuickAccess";

export default function Dashboard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("dashboard", "title")}</h1>
        <p className="text-muted-foreground">{t("common", "welcome")}, Omar!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title={t("dashboard", "todaySales")}
          value="12,450 DA"
          change={7.2}
          icon="sales"
        />
        <StatCard
          title={t("dashboard", "todayCustomers")}
          value="24"
          change={12.5}
          icon="customers"
        />
        <StatCard
          title={t("dashboard", "totalStock")}
          value="342"
          icon="stock"
        />
        <StatCard
          title={t("dashboard", "stockAlerts")}
          value="8"
          change={-3}
          icon="alerts"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <StockAlerts />
        </div>
      </div>

      <QuickAccess />
    </div>
  );
}
