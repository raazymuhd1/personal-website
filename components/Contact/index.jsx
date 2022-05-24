import styles from '../../styles/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
         <h2 className={styles.contact_title}> Contact Me </h2>
        <div className={styles.contact_details}>
           <div className={styles.contact_detailsInput}>
              <label htmlFor="fullname"> FullName: </label>
              <input type="text" name="fullname" placeholder="e.g john doe" />
           </div>
           <div className={styles.contact_detailsInput}>
              <label htmlFor="email"> Email: </label>
              <input type="text" name="email" placeholder="johndoe10@gmail.com" />
           </div>
           <div className={styles.contact_detailsInput}>
              <label htmlFor="message"> Messages: </label>
              <textarea type="text" name="message" placeholder="good day!" />
           </div>

           <button className={styles.contact_detailsButton}> Send </button>
        </div>
    </div>
  )
}

export default Contact