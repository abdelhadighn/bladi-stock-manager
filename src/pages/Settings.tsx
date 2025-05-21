
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Building, Users, Percent, Database, User, Shield } from "lucide-react";
import LanguageSetting from "@/components/settings/LanguageSetting";

export default function Settings() {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t("settings", "title")}</h1>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">
            <Building className="h-4 w-4 mr-2" />
            {t("settings", "general")}
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="h-4 w-4 mr-2" />
            {t("settings", "users")}
          </TabsTrigger>
          <TabsTrigger value="taxes">
            <Percent className="h-4 w-4 mr-2" />
            {t("settings", "taxes")}
          </TabsTrigger>
          <TabsTrigger value="backup">
            <Database className="h-4 w-4 mr-2" />
            {t("settings", "backup")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings", "store")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("settings", "storeName")}</label>
                  <Input placeholder="Supermarché Exemple" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("settings", "storePhone")}</label>
                  <Input placeholder="0555 12 34 56" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("settings", "storeAddress")}</label>
                <Input placeholder="123, Rue Exemple, Alger, Algérie" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("settings", "storeEmail")}</label>
                  <Input type="email" placeholder="contact@exemple.com" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("settings", "rc")}</label>
                  <Input placeholder="RC: 16/00-1234567B15" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("settings", "nif")}</label>
                  <Input placeholder="NIF: 123456789012345" />
                </div>
              </div>
              <Button className="bg-algerian-green-600 hover:bg-algerian-green-700">
                {t("common", "save")}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("settings", "language")}</CardTitle>
            </CardHeader>
            <CardContent>
              <LanguageSetting />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{t("settings", "users")}</CardTitle>
              <Button size="sm">
                <User className="h-4 w-4 mr-2" />
                {t("common", "add")}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="px-4 py-3 text-left font-medium">Nom</th>
                      <th className="px-4 py-3 text-left font-medium">Identifiant</th>
                      <th className="px-4 py-3 text-center font-medium">Rôle</th>
                      <th className="px-4 py-3 text-center font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3 font-medium">Admin Système</td>
                      <td className="px-4 py-3">admin</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Shield className="h-4 w-4 text-algerian-green-600" />
                          <span>Admin</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">{t("common", "edit")}</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3 font-medium">Karim Bendaoud</td>
                      <td className="px-4 py-3">manager</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <User className="h-4 w-4 text-algerian-blue-600" />
                          <span>Gérant</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">{t("common", "edit")}</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-4 py-3 font-medium">Salima Medjkoune</td>
                      <td className="px-4 py-3">seller</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <User className="h-4 w-4" />
                          <span>Vendeur</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">{t("common", "edit")}</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("settings", "roles")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="px-4 py-3 text-left font-medium">Rôle</th>
                      <th className="px-4 py-3 text-left font-medium">Description</th>
                      <th className="px-4 py-3 text-center font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3 font-medium">Admin</td>
                      <td className="px-4 py-3">Accès complet à toutes les fonctionnalités</td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">{t("common", "edit")}</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 border-b">
                      <td className="px-4 py-3 font-medium">Gérant</td>
                      <td className="px-4 py-3">Gestion des produits, bons de commande</td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">{t("common", "edit")}</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-4 py-3 font-medium">Vendeur</td>
                      <td className="px-4 py-3">Accès à l'écran de vente et gestion des clients</td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="ghost" size="sm">{t("common", "edit")}</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="taxes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings", "taxes")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">TVA Standard (%)</label>
                  <Input type="number" value="19" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">TVA Réduite (%)</label>
                  <Input type="number" value="9" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Timbre fiscal (DA)</label>
                <Input type="number" value="26" />
              </div>
              <Button className="bg-algerian-green-600 hover:bg-algerian-green-700">
                {t("common", "save")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings", "backup")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Créez des sauvegardes régulières pour protéger vos données.</p>
              <div className="flex gap-2">
                <Button variant="outline">
                  Sauvegarder maintenant
                </Button>
                <Button variant="outline">
                  Restaurer une sauvegarde
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
