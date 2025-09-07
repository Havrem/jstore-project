import { z } from "zod";
import { lineItemSchema } from "./product.schema";


export const placeOrderRequestSchema = z.object({
  items: z.array(lineItemSchema),
});

export type PlaceOrderRequest = z.infer<typeof placeOrderRequestSchema>;

export const placeOrderResponseSchema = z.object({
  orderId: z.number(),
  status: z.enum(["SUCCESS", "FAILED"]),
});

export type PlaceOrderResponse = z.infer<typeof placeOrderResponseSchema>;
