import styles from "@css/Navbar.module.scss"
import { Link } from "@tanstack/react-router"
import { useState } from "react";
import { AuthModal } from "./auth/AuthModal";

export const Navbar = () => {
    const [authOpen, setAuthOpen] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <Link to="/products">
                Shop
                </Link>
            </div>
            <div className={styles.right}>
                <button className={styles.authBtn} onClick={() => setAuthOpen(true)}>Login</button>
                <Link to="/cart">
                    Cart
                </Link>
            </div>
            <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
        </div>
    )
}