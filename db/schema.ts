import {
  pgTable,
  text
} from "drizzle-orm/pg-core";

export const merge = pgTable("merge", {
  xata_id: text("xata_id").primaryKey(),
  "Category Tags": text("Category Tags"),
  "HTS Code": text("HTS Code"),
  Item: text("Item"),
  "Item Code": text("Item Code"),
  Specifications: text("Specifications"),
});
