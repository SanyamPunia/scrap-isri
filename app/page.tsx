import { getItems } from "@/lib/test";
import { InventoryTable } from "@/components/inventory-table";

export default async function Home() {
  const items = await getItems();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Inventory Management System</h1>
      <InventoryTable data={items} />
    </div>
  );
}
