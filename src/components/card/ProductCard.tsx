import type { Product } from '@schemas/product.schema';
import styles from '@css/Card.module.scss';

export const ProductCard = ({product} : {product : Product}) => {
    const id = product.id;

    const handleAddToCart = async () => {

    }

    return (
        <div className={styles.product}>
            <p>{product.title}</p>
            <img src={product.image}/>
            <p>${product.price}</p>
            <button>Add to cart</button>
        </div>
    )
}