import styles from './Footer.module.css'
import { tinaField } from "tinacms/dist/react";
import { CldImage } from 'next-cloudinary';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { Button } from '../Button';
import { popupthe } from '../forms/popupthe';

export const Footer = (props) => {
  const footer = props.data || {};
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__titleCTAs}>
        <h2 className={styles.footer__title}>{footer.title}</h2>
        <div className={styles.footer__ctas} data-tina-field={tinaField(footer.contactForms)}>
          <Button 
            type="submit"
            className={styles.footer__cta}
            text={footer.contactForms.contactButtonText}
            backgroundColor="white"
            onClick={() => popupthe('contactForm')}
          />
          { footer.contactForms.jobsButtonText && (
            <Button
              type="submit"
              className={styles.footer__cta}
              text={footer.contactForms.jobsButtonText}
              backgroundColor="yellow"
              onClick={() => popupthe('joinForm')}
            />
          )}
        </div>
      </div>
      <div className={styles.footer__address} data-tina-field={tinaField(footer.contactAdress)}>
        <div className={styles.footer__address__image}>
          <a href='https://maps.app.goo.gl/H4ito21NzWLCkiUY6' target='_blank' rel='noopener noreferrer'>
            <CldImage 
              src={footer.contactAdress.contactImage}
              alt="An image showing the location of the Mosaic offices"
              width="380"
              height="260"
              format='webp'
              crop='fill'
              gravity='center'
            />
          </a>
        </div>
        <div className={styles.footer__address__text}>
          <TinaMarkdown 
            className={styles.footer__address__text}
            content={footer.contactAdress.contactAdress}
            data-tina-field={tinaField(footer.contactAdress, 'contactAdress')}
          />
        </div>
      </div>
      <div className={styles.footer__links}>
        <a className={styles.footer__nav__logo} href="#home">
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
        <div className={styles.footer__links__navigation}>
          {footer.hygiene.footerNav?.map((item, i) => (
            <a 
              className={styles.footer__links__navigation__link}
              key={i}
              href={item.linkUrl}
            >
              {item.linkText}
            </a>
          ))}
          <a href={footer.linkedinLink}>
            <svg className={styles.footer__links__navigation__linkedin} width="26" height="26" viewBox="20 18 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M26.274 20.5979C24.8235 20.5979 23.6436 21.7766 23.6436 23.2254C23.6436 24.6749 24.8235 25.8541 26.274 25.8541C27.7232 25.8541 28.9023 24.6748 28.9023 23.2254C28.9023 21.7766 27.7232 20.5979 26.274 20.5979ZM28.2655 26.9641H24.2793C24.1024 26.9641 23.959 27.1075 23.959 27.2844V40.0904C23.959 40.2674 24.1024 40.4107 24.2793 40.4107H28.2655C28.4424 40.4107 28.5858 40.2674 28.5858 40.0904V27.2844C28.5858 27.1075 28.4424 26.9641 28.2655 26.9641ZM34.9024 28.1161C35.6202 27.3341 36.8037 26.6458 38.4047 26.6458C42.8946 26.6458 43.4999 29.8913 43.4999 33.0662V40.0905C43.4999 40.2674 43.3566 40.4108 43.1797 40.4108H39.2007C39.0238 40.4108 38.8804 40.2674 38.8804 40.0905V33.8643C38.8804 32.121 38.7516 30.7875 37.1307 30.7875C35.6423 30.7875 35.0624 31.6193 35.0624 33.7544V40.0904C35.0624 40.2674 34.919 40.4107 34.7421 40.4107H30.7646C30.5877 40.4107 30.4443 40.2674 30.4443 40.0904V27.2844C30.4443 27.1075 30.5877 26.9641 30.7646 26.9641H34.5821C34.759 26.9641 34.9024 27.1075 34.9024 27.2844V28.1161Z" fill="currentColor"/>
            </svg>
          </a>
          <a className={styles.footer__links__navigation__cta} onClick={() => popupthe('joinForm')}>
            <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/>
            </svg>
            Join us
          </a>
          <svg className={styles.footer__links__navigation__cubelogo} xmlns="http://www.w3.org/2000/svg" width="62" height="63" fill="none" viewBox="0 0 62 63">
            <path fill="#FAF3EF" d="M.202.72h62.536v62H.202z"/>
            <path fill="#F4FE57" d="m16.555 39.702 13.885-7.837-13.856-7.718-.03 15.555Z"/>
            <path fill="#FF5E2C" d="m30.49 14.9.373 16.314-14.141-8.447 13.769-7.868Z"/>
            <path fill="#97FAFA" d="m45.922 40.19-15.059-8.976 16.524-8.725-1.465 17.702Z"/>
            <path fill="#E5E3D6" d="m31.815 13.828-.952 17.385 16.523-8.725-15.57-8.66Z"/>
            <path fill="#1AD0A5" d="m46.506 41.068-15.643-9.854.96 18.231 14.683-8.377Z"/>
            <path fill="#101313" fillRule="evenodd" d="m14.952 22.183 16.518-9.537 16.518 9.537v19.074L31.47 50.793l-16.518-9.536V22.183ZM30.134 16.5l-11.177 6.453 11.177 6.453V16.499ZM17.62 25.267v12.906l11.177-6.453-11.177-6.453Zm1.337 15.22 11.177 6.453V34.035l-11.177 6.453Zm13.85 6.453 11.176-6.452-11.176-6.453V46.94Zm12.513-8.767V25.267L34.143 31.72l11.177 6.453Zm-1.337-15.22-11.176-6.454v12.906l11.176-6.453Z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>
      <div className={styles.footer__hygiene}>
        <div className={styles.footer__hygiene__left}>
          <div className={styles.footer__hygiene__copyRight}>
            {footer.hygiene.copyRightText}
          </div>
          <div className={styles.footer__hygiene__links}>
            {footer.hygiene.hygieneLinks?.map((item, i) => (
              <a 
                className={styles.footer__hygiene__links__link}
                key={i}
                href={item.linkUrl}
              >
                {item.linkText}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.footer__hygiene__branding}>
          {footer.hygiene.brandingText}
        </div>
      </div>
    </footer>
  )
}