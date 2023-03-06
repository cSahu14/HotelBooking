import React from 'react'
import Styles from "../../Styles/mailList/MailList.module.css"

const MailList = () => {
  return (
    <div className={Styles.mail}>
        <h1 className={Styles.mailTitle}>Save time, save money!</h1>
        <span>Sign up and we'l send the best deals to you</span>
        <div className={Styles.mailInputContainer}>
            <input type="text" placeholder="Your Email"/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default MailList