import styles from '../../styles/Info.module.scss'
import { infoData } from "./infoData.js"

const Info = () => {
  return (
    <div className={styles.info}>
        <div className={styles.info_left}>
            <div className={styles.info_leftIcons}>
                { infoData.map(info => (
                   <a key={info.id} href={info.link} target="_blank" rel='noreferrer'>
                      <info.icon className={info.className} />
                   </a>
                )) }
            </div>
            <hr className={styles.info_leftLine} />
        </div>
        <div className={styles.info_right}>
            <h4> raazy.devs@gmail.com </h4>
            <hr className={styles.info_rightLine} />
        </div>
    </div>
  )
}

export default Info