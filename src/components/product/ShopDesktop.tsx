import { Banner } from "@components/Banner"
import styles from "@css/Product.module.scss"
import type { Product } from '@schemas/product.schema';
import { ProductCard } from "../card/ProductCard";
import { retrieveProducts } from 'hooks/useProducts';
import { useEffect, useState } from "react";

export const ProductDesktop = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
    retrieveProducts().then(setProducts);
    }, []);

    return (
        <div className={styles.mainContainer}>
            <Banner/>
            <h1>Merchandise</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))} 
                </div>
            </div>
        </div>
    )
}