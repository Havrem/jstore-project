import { z } from "zod";
import { productSchema } from "./product.schema";

export const cartItemSchema = z.object({
    id: z.number(),
    product: productSchema,
    quantity: z.number()
})
export type CartItem = z.infer<typeof cartItemSchema>;

export const orderItemSchema = z.object({
  productId: z.number(),
  quantity: z.number()
})
export type OrderItem = z.infer<typeof orderItemSchema>;

export const orderRequestSchema = z.object({
  items: z.array(orderItemSchema)
})
export type OrderRequest = z.infer<typeof orderRequestSchema>;