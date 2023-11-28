import styles from './Nav.module.css'
import { tinaField } from "tinacms/dist/react";
import { useState } from 'react';
import { useEffect } from 'react';
import { popupthe } from '../forms/popupthe';

export const Nav = (props) => {

  const [navtoggled, setToggled] = useState(false);
  const navToggleClass = navtoggled  ? `${styles['navbar--open']}` : '';
  
  const [windowScrolled, setWindowScrolled] = useState(false);

  useEffect(() => {
    let currentScrollPos = window.scrollY;
    
    const handleScroll = () => {
      const newScrollPos = window.scrollY;
      if (newScrollPos > currentScrollPos) {
        setWindowScrolled(true);
      } else {
        setWindowScrolled(false);
      }
      currentScrollPos = newScrollPos;   
    };

    window.addEventListener('scroll', handleScroll);

    function setNavLinksActualWidth() { 
      let navLinksFullWidth = document.querySelector('.nav__links').getBoundingClientRect().width;
      let navLinksActualWidth = 0;
      document.querySelectorAll('.nav__item').forEach((item) => {
        navLinksActualWidth = navLinksActualWidth + item.getBoundingClientRect().width;
      })
      document.documentElement.style.setProperty('--navWidthDifference', `${navLinksFullWidth - navLinksActualWidth}px`);
    }
    setNavLinksActualWidth()
    window.addEventListener('resize', setNavLinksActualWidth());

    document.body.style.overflow = navtoggled ? 'hidden' : 'auto';
  })
  
  const navScrollClass = windowScrolled ? `${styles['navbar--scrolled']}` : '';

  return(
    <div className={`${styles.nav} ${navToggleClass} ${navScrollClass} nav ${navtoggled && 'nav--open' }`}>
      <a className={styles.nav__logo} href="#home" onClick={() => setToggled(false)}>
        <svg width="87" height="20" viewBox="0 0 87 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.9468 19.9992C60.3658 19.9992 58.3564 17.2942 58.3564 13.8421C58.3564 10.3384 60.3658 7.65918 63.9468 7.65918C66.4199 7.65918 67.9656 8.94728 68.79 10.7764L66.8579 11.7296C66.1881 10.2354 65.1318 9.69439 63.9468 9.69439C62.0146 9.69439 60.675 11.2659 60.675 13.8421C60.675 16.3925 61.9888 17.964 63.9468 17.964C65.1318 17.964 66.1623 17.4488 66.8579 15.9546L68.79 16.882C67.9399 18.7111 66.4457 19.9992 63.9468 19.9992Z" fill="#101313"/>
          <path d="M57.2783 19.7412H55.037V7.91635H57.2783V19.7412Z" fill="#101313"/>
          <path d="M57.8207 4.56821C57.8207 3.63712 57.066 2.88232 56.1349 2.88232C55.2038 2.88232 54.449 3.63712 54.449 4.56821C54.449 5.4993 55.2038 6.2541 56.1349 6.2541C57.066 6.2541 57.8207 5.4993 57.8207 4.56821Z" fill="#101313"/>
          <path d="M51.1129 9.5403V7.91729H53.2254V19.7421H51.1129V17.9903C50.3143 19.2526 49.0519 19.9997 47.3516 19.9997C44.0541 19.9997 42.2765 17.2689 42.2765 13.791C42.2765 10.3132 44.2086 7.65967 47.3774 7.65967C49.0262 7.65967 50.2627 8.32948 51.1129 9.5403ZM47.8411 18.016C49.799 18.016 51.0871 16.5991 51.1129 13.791C51.1129 11.1891 49.799 9.64335 47.8411 9.64335C45.8832 9.64335 44.5693 11.1891 44.5693 13.8168C44.5693 16.5734 45.9089 18.016 47.8411 18.016Z" fill="#101313"/>
          <path d="M37.2132 19.9992C34.534 19.9992 32.8337 18.6596 32.2154 16.8305L34.1475 15.8773C34.4052 16.6759 35.2811 18.0928 37.2132 18.0928C38.3725 18.0928 39.5318 17.6033 39.5318 16.5471C39.5318 15.6197 38.6302 15.2075 37.4709 14.821L36.0539 14.4088C34.2764 13.8678 32.6791 13.0177 32.7049 10.9825C32.7306 8.87 34.4567 7.65918 36.9041 7.65918C39.841 7.65918 41.1033 9.35948 41.5155 10.3642L39.5834 11.3174C39.2742 10.4672 38.5013 9.56557 36.9041 9.56557C35.7448 9.56557 34.9719 10.0551 34.9719 10.8794C34.9719 11.7038 35.7963 12.116 36.8526 12.4509L38.2437 12.8631C40.0728 13.4299 41.8247 14.28 41.8247 16.4441C41.8247 18.8915 39.7122 19.9992 37.2132 19.9992Z" fill="#101313"/>
          <path d="M26.3501 19.9997C22.6662 19.9997 20.7083 17.1916 20.7083 13.8426C20.7083 10.4677 22.6662 7.65967 26.3501 7.65967C30.0341 7.65967 31.992 10.4677 31.992 13.8426C31.992 17.1916 30.0341 19.9997 26.3501 19.9997ZM26.3501 17.9645C28.4884 17.9645 29.6735 16.393 29.6735 13.8426C29.6735 11.2664 28.4884 9.69487 26.3501 9.69487C24.2119 9.69487 23.0268 11.2664 23.0268 13.8426C23.0268 16.393 24.2119 17.9645 26.3501 17.9645Z" fill="#101313"/>
          <path d="M19.4198 2.84277V19.7427H17.0497L17.0755 5.31594L11.6139 19.3305H8.59974L3.11241 5.26441L3.16394 19.7427H0.793823V2.84277H4.58085L10.1197 16.9862L15.6586 2.84277H19.4198Z" fill="#101313"/>
          <path d="M82.6155 5.93285L86.3067 11.039H84.4457L81.5235 6.88642L78.6167 11.039H76.7711L80.4623 5.93285L76.8326 0.949707H78.6936L81.5543 4.96391L84.3996 0.949707H86.2298L82.6155 5.93285Z" fill="#101313"/>
          <path d="M76.1306 0.949707V2.45696H72.8854V11.039H71.2551V2.45696H68.0099V0.949707H76.1306Z" fill="#101313"/>
          </svg>
      </a>
      <div className={styles.nav__mobile_toggle}>
        <div className={styles.nav__tagline} data-tina-field={tinaField(props.data, "tagline")}>
          {props.data.tagline}
        </div>
        <div className={`${styles.nav__links} nav__links`}>
          {props.data.navItem?.map((item, i) => (
            <a 
              key={i} 
              className={`${styles.nav__item} nav__item`} 
              href={item.anchor} 
              data-tina-field={tinaField(props.data.navItem[i])}
              onClick={() => setToggled(false)}
            >
            <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/>
            </svg>
            {item.text}
            </a>
          ))}
          <a className={`${styles.nav__item} ${styles.nav__item__cta} nav__item`} onClick={() => popupthe('joinForm')}>
            <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/>
            </svg>
            Join us
          </a>
        </div>
      </div>
      <div className={styles.nav__logoicon} onClick={() => setToggled(!navtoggled)}>
        <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.00976562" width="62.4993" height="61.9638" fill="#F4FE57"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M46.9742 21.8158L31.0976 12.6494L23.1594 17.233L15.2209 21.8158V40.1485L23.1596 44.7314L31.0976 49.3149L39.0357 44.7313L46.9742 40.1485V21.8158ZM29.6936 16.4473L24.453 19.4733L19.0187 22.6104L29.7685 28.6885L29.6936 16.4473ZM17.8079 24.8976V37.1397L28.4765 30.9297L17.8079 24.8976ZM19.0828 39.3909L24.4529 42.491L29.694 45.5173L29.7685 33.1709L19.0828 39.3909ZM32.2802 45.6449L43.0011 39.4552L32.3555 33.171L32.2802 45.6449ZM44.3872 37.2695V24.7714L33.6476 30.9297L44.3872 37.2695ZM43.0664 22.5468L32.2798 16.3191L32.3555 28.6885L43.0664 22.5468Z" fill="#101313"/>
        </svg>
      </div>
    </div>
  )
}