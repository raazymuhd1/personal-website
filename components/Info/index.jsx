import styles from '../../styles/Info.module.scss'
import { infoData } from "./infoData.js"

const Info = () => {
  return (
    <div className={styles.info}>
        <div className={styles.info_left}>
            <div className={styles.info_leftIcons}>
                { infoData.map(({id, link, Icon, classes}) => (
                   <a key={id} href={link} target="_blank" rel='noreferrer'>
                      <Icon className={styles.classes} />
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