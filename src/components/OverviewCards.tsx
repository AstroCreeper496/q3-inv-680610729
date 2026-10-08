import { useItemStore } from '@/store/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CategoryCards } from './CategoryCards';

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  const totalUnit = inventory.map((i) => i.quantity).reduce((s, a) => s + a, 0);
  const totalStockValue = inventory.map((i) => i.quantity * i.price).reduce((s, a) => s + a, 0);
  return (
    <div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="byCategory">By Category</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader >
              <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-red-500 font-bold">฿ {totalStockValue}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-blue-500 font-bold">{totalProducts}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Units in Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-green-700 font-bold">{totalUnit}</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="byCategory">
          <CategoryCards/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
