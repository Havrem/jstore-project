import { Navbar } from '@components/Navbar'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import styles from '@css/Layout.module.scss'
import { Banner } from '@components/Banner'
import { Footer } from '@components/Footer'

const RootLayout = () => ( // Where you are supposed to put navbars, providers etc
  <div className={styles.mainContainer}>
    <Navbar/>
    <Outlet />
    <Footer/>
  </div>
)

export const Route = createRootRoute({ component: RootLayout })