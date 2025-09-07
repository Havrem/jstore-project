import type { LineItem } from '@schemas/product.schema'
import styles from '@css/Card.module.scss'
import { useCart } from 'contexts/CartContext'

export const LineItemCard = ({lineItem} : {lineItem : LineItem}) => {
    const { increment, decrement } = useCart();

    const handleDecrement = async () => {
        decrement(lineItem.product.id);
    }

    const handleIncrement = async () => {
        increment(lineItem.product.id);
    }

    return (
        <div className={styles.lineItem}>
            <div className={styles.left}>
                <img src={lineItem.product.image}/>
            </div>
            <div className={styles.right}>
                <p>{lineItem.product.title}</p>
                <p>Price: {lineItem.product.price}</p>

                <div className={styles.qtyRow}>
                    <span>{lineItem.quantity}</span>
                    <button className={styles.qtyBtn} onClick={handleIncrement}>+</button>
                    <button className={styles.qtyBtn} onClick={handleDecrement}>−</button>
                </div>
            </div>
        </div>
    )
}