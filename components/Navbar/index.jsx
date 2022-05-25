import styles from '../../styles/Navbar.module.scss'
import {useEffect, useRef, useState} from "react"
import Download from '@axetroy/react-download'
// import {resume} from "../../assets/resume"

const Navbar = () => {
     const navRef = useRef(null);
    const [ changeBg, setChangeBg ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollHeight = navRef.current;
            console.log(scrollHeight.offsetTop)
            
            scrollHeight.offsetTop < 200 ? setChangeBg(false) : setChangeBg(true)
            
        })

        // return () => {
        //     window.removeEventListener("scroll", )
        // }
    }, [changeBg, navRef])

  return (
    <nav className={`${styles.navbar} ${changeBg && `${styles.changeBg}`}`} ref={navRef}>
        <div className={styles.nav_logo}>
            <h2> MohammedRaazy <span className={styles.nav_logoDot}>.</span> </h2>
        </div>

        <ul className={styles.nav_link}>
            <li className={styles.nav_linkItem}>
                <a href="#about">About</a>
            </li>
            <li className={styles.nav_linkItem}>
                <a href="#skills">Skills</a>
            </li>
            <li className={styles.nav_linkItem}>
                <a href="#project">Some Project</a>
            </li>
            <li className={styles.nav_linkItem}>
                <a href="#contact"> Contact </a>
            </li>
            <li className={styles.nav_linkItem}>
                {/* <Download file={resume} content="# my resume"> */}
                        {/* <button type="button">Download CV</button> */}
                        <a href="#"> Download CV </a>
                {/* </Download> */}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

