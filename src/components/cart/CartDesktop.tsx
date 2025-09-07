import { Banner } from "@components/Banner"
import styles from "@css/Cart.module.scss"

import defaultImage from "@assets/default_product.png";
import type { LineItem } from "@schemas/product.schema";
import { LineItemCard } from "@components/card/LineItemCard";

const mockCartItems: LineItem[] = [
  {
    id: 1,
    product: {
      id: 101,
      title: "Cool T-Shirt",
      image: defaultImage,
      price: 25,
    },
    quantity: 2,
  },
  {
    id: 2,
    product: {
      id: 102,
      title: "Stylish Hat",
      image: defaultImage,
      price: 15,
    },
    quantity: 1,
  },
  {
    id: 3,
    product: {
      id: 103,
      title: "Comfy Hoodie",
      image: defaultImage,
      price: 40,
    },
    quantity: 1,
  },
];

export const CartDesktop = () => {
    return (
        <div className={styles.mainContainer}>
            <Banner/>
            <h1>Cart</h1>
            <div className={styles.content}>
                {mockCartItems.map((item) => (
                    <LineItemCard key={item.id} lineItem={item} />
                ))}
            </div>
        </div>
    )
}