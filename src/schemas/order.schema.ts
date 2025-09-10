import { z } from "zod";
import { productSchema } from "./product.schema";

export const cartItemSchema = z.object({
    id: z.number(),
    product: productSchema,
    quantity: z.number()
})
export type CartItem = z.infer<typeof cartItemSchema>;

export const orderItemRequestSchema = z.object({
  productId: z.number(),
  quantity: z.number()
})
export type OrderItemRequest = z.infer<typeof orderItemRequestSchema>;

export const orderRequestSchema = z.object({
  orderItemRequests: z.array(orderItemRequestSchema) // ✅ match backend
});
export type OrderRequest = z.infer<typeof orderRequestSchema>;