import { z } from "zod/v4";

export const productSchema = z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    price: z.number()
})
export type Product = z.infer<typeof productSchema>;

export const lineItemSchema = z.object({
    id: z.number(),
    product: productSchema,
    quantity: z.number()
})
export type LineItem = z.infer<typeof lineItemSchema>;