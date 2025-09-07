import type { LineItem } from '@schemas/product.schema'
import styles from '@css/Card.module.scss'

export const LineItemCard = ({lineItem} : {lineItem : LineItem}) => {
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
                    <button className={styles.qtyBtn}>−</button>
                    <button className={styles.qtyBtn}>+</button>
                </div>
            </div>
        </div>
    )
}