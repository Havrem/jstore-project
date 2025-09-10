import styles from "@css/Navbar.module.scss"
import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react";
import { AuthModal } from "./auth/AuthModal";
import { useAuth } from "contexts/AuthContext";
import { toast } from "react-toastify";

export const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    const [authOpen, setAuthOpen] = useState(false);

    useEffect(() => {
        if (isLoggedIn) setAuthOpen(false);
    }, [isLoggedIn]);

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out!")
        } catch {
            toast.error("Logout failed.");
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <Link to="/shop">
                Shop
                </Link>
            </div>
            <div className={styles.right}>
                {isLoggedIn ? (
                    <button className={styles.authBtn} onClick={handleLogout}>Logout</button>
                ) : (
                    <button className={styles.authBtn} onClick={() => setAuthOpen(true)}>Login</button>
                )}
                <Link to="/cart">
                    Cart
                </Link>
            </div>
            <AuthModal open={authOpen && !isLoggedIn} onClose={() => setAuthOpen(false)} />
        </div>
    )
}