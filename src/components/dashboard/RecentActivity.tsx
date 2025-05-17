
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { sampleRecentActivities } from "@/lib/sample-data";
import { ShoppingCart, Archive, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RecentActivity() {
  const { t, isRTL } = useLanguage();

  function getActivityIcon(type: string) {
    switch (type) {
      case "sale":
        return <ShoppingCart className="h-4 w-4 text-green-600" />;
      case "purchase":
        return <ShoppingBag className="h-4 w-4 text-blue-600" />;
      case "inventory":
        return <Archive className="h-4 w-4 text-amber-600" />;
      default:
        return <Archive className="h-4 w-4 text-gray-600" />;
    }
  }

  function getActivityBg(type: string) {
    switch (type) {
      case "sale":
        return "bg-green-100";
      case "purchase":
        return "bg-blue-100";
      case "inventory":
        return "bg-amber-100";
      default:
        return "bg-gray-100";
    }
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {t("dashboard", "recentActivity")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sampleRecentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <div className={cn("p-2 rounded-full", getActivityBg(activity.type))}>
                {getActivityIcon(activity.type)}
              </div>
              <div className={cn("ml-4 space-y-1", isRTL ? "text-right" : "")}>
                <p className="text-sm font-medium">{activity.description}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{new Date(activity.timestamp).toLocaleTimeString()}</span>
                  <span className="mx-1">•</span>
                  <span>{activity.user}</span>
                  {activity.amount && (
                    <>
                      <span className="mx-1">•</span>
                      <span>{activity.amount} DA</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
