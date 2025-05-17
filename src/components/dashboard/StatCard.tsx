
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Archive, ShoppingCart, Bell, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: "sales" | "stock" | "alerts" | "customers";
  className?: string;
}

export default function StatCard({ title, value, change, icon, className }: StatCardProps) {
  let IconComponent: ReactNode;
  let bgColor = "";

  switch (icon) {
    case "sales":
      IconComponent = <ShoppingCart className="h-5 w-5" />;
      bgColor = "bg-blue-100 text-blue-600";
      break;
    case "stock":
      IconComponent = <Archive className="h-5 w-5" />;
      bgColor = "bg-green-100 text-green-600";
      break;
    case "alerts":
      IconComponent = <Bell className="h-5 w-5" />;
      bgColor = "bg-red-100 text-red-600";
      break;
    case "customers":
      IconComponent = <Users className="h-5 w-5" />;
      bgColor = "bg-purple-100 text-purple-600";
      break;
    default:
      IconComponent = <Archive className="h-5 w-5" />;
      bgColor = "bg-gray-100 text-gray-600";
  }

  return (
    <Card className={cn("rounded-lg overflow-hidden card-hover", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {typeof change !== "undefined" && (
              <p className={cn(
                "text-xs font-medium mt-1",
                change > 0 ? "text-green-600" : change < 0 ? "text-red-600" : "text-gray-500"
              )}>
                {change > 0 ? "+" : ""}{change}%
              </p>
            )}
          </div>
          <div className={cn("p-3 rounded-full", bgColor)}>
            {IconComponent}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
