import styles from "@css/Footer.module.scss"

export const Footer = () => {
    return (
        <div className={styles.mainContainer}>
            <p className={styles.brand}>JSTORE </p>
            <p>Josef, Rickard & Alex.</p>
            <p>Copyright © JSTORE 2025</p>
        </div>
    )
}