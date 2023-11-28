import styles from './ContactForm.module.css'
import { Button } from '../Button'
import { Popup } from './Popup'

export const ContactForm = (props) => {
  return (
    <Popup popupname="contactForm">
      <div className={styles.contactform}>
        <h1 className={styles.contactform__title}>Reach Out</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div className={styles.contactform__field__row}>
            <input type="text" name="name" placeholder='Name' />
            <input type="email" name="email" placeholder='Email' required/>
          </div>
          <div className={styles.contactform__field__row}>
            <textarea name="message" placeholder='Message' rows="4" required></textarea>
          </div>
          <div className={styles.contactform__field__row__buttonrow}>
            <label>Agree to our privacy policy <input type="checkbox" name="agree" required /></label>
            <Button 
              type="submit" 
              text="Send"
              backgroundColor="yellow"
            />
          </div>
        </form>
      </div>
    </Popup>
  )
}