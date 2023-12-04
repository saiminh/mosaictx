import styles from './Partnerships.module.css';
import { CldImage } from 'next-cloudinary';
import { tinaField } from "tinacms/dist/react";
import { PartnershipsInterviews } from './PartnershipsInterviews';
import { PartnershipsInvestors } from './PartnershipsInvestors';

export const Partnerships = (props) => {
  return (
    <section className={styles.partnerships} id={props.data.anchor}>
    <div className={styles.intro}>
        <figure className={styles.intro__image} data-tina-field={tinaField(props.data.intro, 'image')}>
          <CldImage
            src={props.data.intro?.image || ''}
            alt={props.data.intro?.imageAlt || ''}
            width='300'
            height='300'
            format='svg'
          />
        </figure>
        <h2 className={styles.intro__headline} data-tina-field={tinaField(props.data.intro, 'headline')}>
          <span className={styles.intro__title}>{props.data.intro?.title}</span>
          {props.data.intro?.headline}
        </h2>
    </div>

    <PartnershipsInterviews data={props.data.interviews} />
    <PartnershipsInvestors data={props.data.investors} />

    </section>
  )
}