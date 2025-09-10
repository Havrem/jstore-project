import type { CartItem, OrderRequest } from "@schemas/order.schema";
import { api } from "./api"

const toOrderRequest = (cartItems: CartItem[]): OrderRequest => ({
  items: cartItems.map((c) => ({
    productId: c.product.id,
    quantity: c.quantity,
  })),
});

export const order = async (cartItems: CartItem[]): Promise<void> => {
  const payload = toOrderRequest(cartItems);
  await api.post("/api/orders/place", payload);
};