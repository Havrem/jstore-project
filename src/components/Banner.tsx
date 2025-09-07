import styles from "@css/Banner.module.scss"
import bimage from "@assets/jungle_banner.png";

export const Banner = () => {
    return (
        <div className={styles.mainContainer}>
            <img
                src={bimage}
            />
        </div>
    )
}