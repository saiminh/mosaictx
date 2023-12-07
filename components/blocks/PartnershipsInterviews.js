import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from "tinacms/dist/react";
import { CldImage, getCldVideoUrl } from 'next-cloudinary';
import { MyVideo } from '../MyVideo';
import styles from './PartnershipsInterviews.module.css';

export const PartnershipsInterviews = (props) => {
  const interviews = props.data;
  return (
    <div className={styles.interviews}>
      { interviews?.map((interview, i) => (
        <div className={styles.interview} key={i}>
          <div className={styles.interview__text}>
            <h3 className={styles.interview__text__title} data-tina-field={tinaField(interview, 'title')}>{interview.title}</h3>
            <div className={styles.interview__text__body} data-tina-field={tinaField(interview, 'body')}>
              <TinaMarkdown content={interview.body} />
            </div>
          </div>
          <div className={styles.interview__info}>
            <figure className={styles.interview__info__logo}>
              <CldImage
                src={interview.logo || ''}
                alt={interview.logoAlt ? interview.logoAlt : 'This image is lacking an alt description'}
                width="787"
                height="885"
                sizes='(max-width: 768px) 73vw, 34vw'
                format='svg'
                className={styles.interview__info__logo__img}
              />
            </figure>
            <div className={styles.interview__info__text}>
              <div className={styles.interview__name} data-tina-field={tinaField(interview, 'name')}>{interview.name}</div>
              <div className={styles.interview__role} data-tina-field={tinaField(interview, 'position')}>{interview.role}</div>
              <div className={styles.interview__organisation} data-tina-field={tinaField(interview, 'organisation')}>{interview.organisation}</div>
            </div>
          </div>
          <figure 
            className={styles.interview__video__interview} 
            onClick={(e) => {
              if ( !e.target.paused ) {
                e.target.pause()
              } else {
                e.target.play()
              }
            }}>
            <MyVideo
              src={getCldVideoUrl({
                src: interview.interview || '',
                width: 530,
                height: 275,
                format: 'mp4',
                crop: 'fill',
                gravity: 'center',
                dpr: 'auto'
              })}
              width='530'
              height='275'
              className={`${styles.interview__video__desktop} videoClickToPlay`}
            />
          </figure>
          <figure className={styles.interview__video__ambient}>
            <MyVideo
              src={getCldVideoUrl({
                src: interview.ambientVideo || '',
                width: 226,
                height: 150,
                format: 'mp4',
                crop: 'fill',
                gravity: 'center',
                dpr: 'auto'
              })}
              loop
              muted
            />
          </figure>
        </div>
      ))}
    </div>
  )
}