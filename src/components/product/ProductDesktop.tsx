import { Banner } from "@components/Banner"
import styles from "@css/Product.module.scss"
import type { Product } from '@schemas/product.schema';
import { ProductCard } from "../card/ProductCard";
import defaultImage from "@assets/default_product.png";

const mockProducts: Product[] = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: `Title`,
  image: defaultImage, // placeholder image
  price: (i + 1) * 10,
}));


export const ProductDesktop = () => {
    return (
        <div className={styles.mainContainer}>
            <Banner/>
            <h1>Merchandise</h1>
            <div className={styles.content}>
                {mockProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))} 
            </div>
        </div>
    )
}