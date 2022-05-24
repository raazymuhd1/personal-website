import styles from '../../styles/About.module.scss'
import {profile} from "../../assets/img"
import Image from "next/image"

// import { resume } from "../../assets/resume"
import Download from '@axetroy/react-download'
import {BsCloudArrowDownFill} from "react-icons/bs"

const About = () => {
  return (
    <div className={styles.about} id="about">
        <div className={styles.about_left}>
           <h2 className={styles.about_leftTitle}> About Me </h2>
           <p className={styles.about_leftDesc}> Hi, im a self-taught      front-end developer, i havve been learning how to code since august 2020 and i was struggle a lot when i started but im really enjoyed that process. because i think that was the best decision ive ever made in my entire life, ive been spent for like 6-8 hours a day just for learning how to code, cause programming makes me loved to learn <br />
            </p>
             <p className={styles.about_leftDesc2}>
               I never thought that i would get to this stage, but now im so confident to start my career as a professional developer
             </p>
           <div className={styles.about_leftDownload}>
              {/* <Download file={resume} content="# resume"> */}
                <h3 className={styles.about_leftDownload_title}> Download CV </h3>
              {/* </Download> */}
              <BsCloudArrowDownFill className={styles.about_leftDownload_icon} />
           </div>
        </div>
        <div className={styles.about_right}>
            <Image 
                src={profile} 
                alt="profile image"
                />
        </div>
    </div>
  )
}

export default About