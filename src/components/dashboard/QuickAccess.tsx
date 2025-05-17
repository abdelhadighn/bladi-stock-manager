
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingCart, Archive, Plus, FileText, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickAccess() {
  const { t } = useLanguage();

  const actions = [
    {
      title: t("pos", "title"),
      icon: <ShoppingCart className="h-5 w-5" />,
      href: "/pos",
      color: "bg-algerian-blue-600 hover:bg-algerian-blue-700",
    },
    {
      title: t("inventory", "add"),
      icon: <Plus className="h-5 w-5" />,
      href: "/inventory/add",
      color: "bg-algerian-green-600 hover:bg-algerian-green-700",
    },
    {
      title: t("inventory", "title"),
      icon: <Archive className="h-5 w-5" />,
      href: "/inventory",
      color: "bg-gray-600 hover:bg-gray-700",
    },
    {
      title: t("sales", "title"),
      icon: <FileText className="h-5 w-5" />,
      href: "/sales",
      color: "bg-amber-600 hover:bg-amber-700",
    },
    {
      title: t("reports", "title"),
      icon: <BarChart2 className="h-5 w-5" />,
      href: "/reports",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {t("dashboard", "quickAccess")}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {actions.map((action) => (
          <Button
            key={action.href}
            className={`flex flex-col items-center justify-center h-24 btn-hover text-white ${action.color}`}
            asChild
          >
            <Link to={action.href}>
              <div className="mb-1">{action.icon}</div>
              <span className="text-xs">{action.title}</span>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
