import styles from "@css/Navbar.module.scss"
import { Link } from "@tanstack/react-router"

export const Navbar = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <Link to="/products">
                Shop
                </Link>
            </div>
            <div className={styles.right}>
                <p>Logout</p>
                <Link to="/cart">
                    Cart
                </Link>
            </div>
        </div>
    )
}