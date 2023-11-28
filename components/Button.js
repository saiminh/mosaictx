import Link from "next/link";
import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <Link 
      href={props.href} 
      className={props.className + ' ' + styles.button}
      style={{ backgroundColor: `var(--color-${props.backgroundColor})`, }} 
    >
     <span className={styles.arrowspan}>
      <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="#101313"/>
      </svg>
     </span> 
     <span className={styles.text}>{props.text}</span>
    </Link>    
  )
}