
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, Calendar, BarChart2, LineChart, PieChart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart, LineChart as RechartsLineChart, PieChart as RechartsPieChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data for charts
const salesData = [
  { month: 'Jan', sales: 12400 },
  { month: 'Feb', sales: 13600 },
  { month: 'Mar', sales: 14200 },
  { month: 'Apr', sales: 15800 },
  { month: 'May', sales: 16400 },
  { month: 'Jun', sales: 17200 },
];

const categoryData = [
  { name: 'Produits laitiers', value: 35 },
  { name: 'Boissons', value: 25 },
  { name: 'Épicerie', value: 20 },
  { name: 'Hygiène', value: 15 },
  { name: 'Autres', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function Reports() {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("navigation", "reports")}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            {t("sales", "thisMonth")}
          </Button>
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            {t("common", "export")}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="sales">
        <TabsList>
          <TabsTrigger value="sales">
            <BarChart2 className="h-4 w-4 mr-2" />
            {t("sales", "title")}
          </TabsTrigger>
          <TabsTrigger value="products">
            <LineChart className="h-4 w-4 mr-2" />
            {t("products", "title")}
          </TabsTrigger>
          <TabsTrigger value="clients">
            <PieChart className="h-4 w-4 mr-2" />
            {t("clients", "title")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("sales", "title")} - 2023</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} DA`} />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" name={t("sales", "title")} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("sales", "title")} {t("products", "category")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Add content for other tabs */}
      </Tabs>
    </div>
  );
}
