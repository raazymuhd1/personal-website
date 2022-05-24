import React from 'react'
import styles from "./Footer.module.scss"
import { footerData } from "./footerData.js"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_left}>
            { footerData.map(data => (
              <a key={data.id} className={styles.footer_leftIcons} target="_blank" href={data.link} rel="noreferrer" >
                <data.Icon />
              </a>
            )) }
        </div>
        <div className={styles.footer_center}>
           <h4> created by mohammedRaazy | 2022 </h4>
        </div>
        <div className={styles.footer_right}>
           <h4> raazy.devs@gmail.com </h4>
        </div>
    </div>
  )
}

export default Footer