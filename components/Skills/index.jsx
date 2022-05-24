import styles from  '../../styles/Skills.module.scss'; 
import { frontEndData, backEndData, designData } from "./SkillsData.js"

import { Fragment } from "react"

const Skills = () => {
  return (
      <div className={styles.skills} id="skills">
            <h2 className={styles.skills_Name}> Skills </h2>
                <div className={styles.skills_contents}>
                    <div className={styles.skills_left}>
                        <h3 className={styles.skills_leftTitle}> FRONTEND </h3>
                        <div className={styles.skills_leftInfo}>
                            { frontEndData.map(data => (
                                <div className={styles.skills_leftInfo_details} key={data.id}>
                                    <span className={styles.skills_leftInfo_detailsIcons}> <data.icon /> </span>
                                    <h3 className={styles.skills_leftInfo_detailsTitle}> { data.name } </h3>
                                </div>
                            )) }
                        </div>
                        <ul className={styles.skills_leftNote}>
                        <li>NB: Im willing to learn other skills as required</li>
                        </ul>
                    </div>
                    <div className={styles.skills_center}>
                        <h3 className={styles.skills_centerTitle}>DESIGN</h3>
                        <div className={styles.skills_centerInfo}>
                            { designData.map(data => (
                                <div key={data.id} className={styles.skills_centerInfo_details}>
                                    <span className={styles.skills_centerInfo_detailsIcon}>  <data.icon /> </span>
                                    <h3 className={styles.skills_centerInfo_detailsTitle}> { data.name } </h3>
                                </div>
                            )) }
                        </div>
                    </div>
                    <div className={styles.skills_right}>
                        <h3 className={styles.skills_rightTitle}>BACKEND</h3>
                        <div className={styles.skills_rightInfo}>
                            { backEndData.map(data => (
                                <div key={data.id} className={styles.skills_rightInfo_details}>
                                    <span className={styles.skills_rightInfo_detailsIcon}>  <data.icon /> </span>
                                    <h3 className={styles.skills_rightInfo_detailsTitle}> { data.name } </h3>
                                </div>
                            )) }
                        </div>
                 </div>
            </div>
        </div>
  )
}

export default Skills