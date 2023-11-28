import styles from './Popup.module.css'

export const Popup = (props) => {
  return (
    <div className={styles.popup} data-popup-name={props.popupname || 'default'}>
      <div className={`${styles.popup__inner} popup__inner`}>
        {props.children}
      </div>
    </div>
  )
}