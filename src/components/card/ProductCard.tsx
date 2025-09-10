import type { Product } from '@schemas/product.schema';
import styles from '@css/Card.module.scss';
import { useCart } from "contexts/CartContext";

export const ProductCard = ({product} : {product : Product}) => {
    const id = product.id;
    const { add } = useCart();

    const handleAddToCart = async () => {
        add(product);
    }

    return (
        <div className={styles.product}>
            <img src={product.image}/>
            <p>${product.price}</p>
            <p className={styles.productTitle}>{product.title}</p>
            <button onClick={() => handleAddToCart()}>Add to cart</button>
        </div>
    )
}