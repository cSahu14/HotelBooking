import React, { useContext } from 'react'
import Styles from "../../Styles/navbar/Navbar.module.css"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className={Styles.navbar}>
        <div className={Styles.navContainer}>
          <Link to="/" style={{color : "inherit", textDecoration : "none"}}>
            <span className={Styles.logo}>
                csbookings
            </span>
          </Link>
            {user ? user.username : <div className={Styles.navItems}>
                <button className={Styles.navButton}>Register</button>
                <button className={Styles.navButton}>Login</button>
            </div>}
        </div>

    </div>
  )
}

export default Navbar