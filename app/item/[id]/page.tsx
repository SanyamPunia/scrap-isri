import { getItems } from "@/lib/test";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const items = await getItems();

  return items.map((item) => ({
    id: item.xata_id,
  }));
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const items = await getItems();
  const item = items.find((item) => item.xata_id === id);

  if (!item) {
    notFound();
  }

  // Split specifications into sections for better display
  const specSections = item?.Specifications?.split("\r\n").filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Inventory
          </Button>
        </Link>
      </div>

      <Card className="border shadow-none rounded-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">{item.Item}</CardTitle>
            <Badge variant="outline" className="text-xs font-normal">
              {item["Category Tags"]}
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-medium text-muted-foreground">Item Code</p>
                <p className="font-semibold">{item["Item Code"]}</p>
              </div>
              <div>
                <p className="font-medium text-muted-foreground">HTS Code</p>
                <p className="font-semibold">{item["HTS Code"]}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Specifications</h3>
              <div className="space-y-3 text-xs">
                {specSections?.map((section, index) => {
                  return (
                    <div key={index} className="grid gap-1">
                      <p>{section}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">
                Additional Information
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-medium text-muted-foreground">Record ID</p>
                  <p className="font-mono">{item.xata_id}</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">
                    Last Updated
                  </p>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
