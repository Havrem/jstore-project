import type { Product } from "@schemas/product.schema"
import { retrieveProducts as apiRetrieveProducts } from "api/productApi"

export const retrieveProducts = async (): Promise<Product[]> => {
    return await apiRetrieveProducts()
}