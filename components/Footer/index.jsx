import React from 'react'
import styles from "./Footer.module.scss"
import Link from "next/link"

import { footerData } from "./footerData.js"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_left}>
            { footerData.map(data => (
              <Link href={data.link} key={data.id} passHref>
                  <a className={styles.footer_leftIcons} target="_blank">
                    <data.Icon />
                  </a>
              </Link>
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