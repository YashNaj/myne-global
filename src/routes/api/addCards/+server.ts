import type { PageServerLoad, Actions } from "./$types";
import { db } from "../../../hooks.server";
export const POST = (async (event) => {
  const body = await event.request.formData();
  const myobj = {
    category: body.get("category"),
    subCategory: body.get("subCategory"),
    brand: body.get("brand"),
    size: body.get("size"),
    purchasedFrom: body.get("purchasedFrom"),
    purchasedValue: body.get("purchasedValue"),
    description: body.get("description"),
  };
  // log all fields
  console.log([...body]);

  return json({
    // get a specific field's value
    name: body.get("name") ?? "world",
  });
}) satisfies RequestHandler;
