import styles from '../../styles/Hero.module.scss'
import { BsArrowRightCircle, BsFillMouse2Fill } from "react-icons/bs"
import { BiDownArrowCircle } from "react-icons/bi"
import { useEffect } from "react"

const Hero = () => {
    //  const scrollDown = window.innerHeight;

     const scrollingDown = () => {
         window.scrollTo({
             top: 800,
             behavior: 'smooth',
         })
     }

  return (
    <div className={styles.hero}>
        <div className={styles.hero_titleOne}>
            <h5> Hi, my name is, </h5>
        </div>
        <div className={styles.hero_titleTwo}>
            <h1> Mohammed Raazy </h1>
        </div>
        <div className={styles.hero_titleThree}>
            <h2> I turned the design into a fully responsive web applications </h2>
        </div>
        <div className={styles.hero_desc}>
            <p> Im self taught front end developer with good understanding of web technology such as html, css, javascript which is perfect to build a great web applications </p>
        </div>
        <div className={styles.hero_actionButton}>
            <button> Get In Touch </button>
            <BsArrowRightCircle className={styles.hero_actionButtonIcon} />
        </div>
        <div className={styles.hero_scrollDown} onClick={scrollingDown}>
            <BsFillMouse2Fill  className={styles.hero_scrollDownIcon1}/>
            <h3> Scroll Down </h3>
            <BiDownArrowCircle className={styles.hero_scrollDownIcon2} />
        </div>
    </div>
  )
}

export default Hero