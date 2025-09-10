import type { Product } from "@schemas/product.schema";
import { api } from "./api";

export const retrieveProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/api/products");
  return response.data;
};