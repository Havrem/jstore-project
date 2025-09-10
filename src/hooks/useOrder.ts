import type { CartItem } from "@schemas/order.schema"
import { order as apiOrder } from "api/orderApi"

export const order = async (cartItems: CartItem[]): Promise<void> => {
    await apiOrder(cartItems)
}