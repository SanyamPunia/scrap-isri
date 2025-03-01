import { db } from "@/db/connection";
import { merge } from "@/db/schema";

export const getItems = async () => {
  const record = await db.select().from(merge).execute();

  return record;
};
