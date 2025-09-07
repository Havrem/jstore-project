// api/orders.ts
import {
  placeOrderRequestSchema,
  placeOrderResponseSchema,
  type PlaceOrderRequest,
  type PlaceOrderResponse,
} from "@schemas/order.schema";

export async function placeOrderApi(data: PlaceOrderRequest): Promise<PlaceOrderResponse> {
  placeOrderRequestSchema.parse(data);

  const res = await fetch("http://localhost:8080/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to place order");
  }

  const json = await res.json();

  // validate response matches our schema
  return placeOrderResponseSchema.parse(json);
}