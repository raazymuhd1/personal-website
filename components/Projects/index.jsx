import styles from '../../styles/Projects.module.scss';
import Link from "next/link"
import Image from "next/image"

import { projectInfo, projectStack } from "./ProjectData"

const Projects = () => {

  return (
    <div className={styles.project} id="project">
       <div className={styles.project_title}>
          <h2> Latest Project </h2>
       </div>

       <div className={styles.project_contents}>
          <div className={styles.project_details}>
              { projectInfo.map(info => (
                 <div key={info.id} className={styles.project_detailsInfo}>
                    <div key={info.id} className={styles.info_source}>
                        <span className={styles.source_code}> 
                           <Link href={info.sourceLink} target="_blank" rel="noreferrer">
                              <a target="_blank">{ info.sourceName }</a>
                           </Link> 
                        </span>
                        <span className={styles.source_live}> 
                           <Link href={info.liveLink} passHref>
                              <a target="_blank"> { info.liveName } </a> 
                           </Link>
                        </span>
                    </div>
                    <Image src={info.img} className={styles.info_img} alt="project image" />
                    <h2 className={styles.info_title}> {info.title} </h2>
                    <p className={styles.info_desc}> {info.desc} </p>
                    {/* <div className="info_stack">
                        { projectStack.map(stack => {
                            return stack.names.map(name => <h3 key={stack.id}> { name } </h3> )
                        }) }
                    </div> */}
                 </div>
              )) }
          </div>
       </div>
    </div>
  )
}

export default Projects
