import type { CartItem, OrderRequest } from "@schemas/order.schema";
import { api } from "./api"

const toOrderRequest = (cartItems: CartItem[]): OrderRequest => ({
    orderItemRequests: cartItems.map(ci => ({
      productId: ci.product.id,
      quantity: ci.quantity,
    })),
});

export const order = async (cartItems: CartItem[]): Promise<void> => {
  const payload = toOrderRequest(cartItems);
  await api.post("/api/order/place", payload);
};