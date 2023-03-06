import React from 'react'
import Styles from "../../Styles/navbar/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
        <div className={Styles.navContainer}>
            <span className={Styles.logo}>
                csbookings
            </span>
            <div className={Styles.navItems}>
                <button className={Styles.navButton}>Register</button>
                <button className={Styles.navButton}>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar