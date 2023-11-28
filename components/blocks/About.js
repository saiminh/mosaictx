'use client'

import styles from './About.module.css';
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { CldImage, getCldImageUrl, getCldVideoUrl } from 'next-cloudinary';
import { MyVideo } from '../MyVideo';

export const About = (props) => {

  const videoURLMobile = getCldVideoUrl({
    src: props.data.video,
    width: 120,
    height: 420,
    crop: 'fill',
    gravity: 'center',
    dpr: 'auto'
  });

  const videoURLDesktop = getCldVideoUrl({
    src: props.data.video,
    width: 530,
    height: 275,
    crop: 'fill',
    gravity: 'center',
    dpr: 'auto'
  });

  return (
    <section className={styles.about} id={props.data.anchor}>
      <div className={styles.about__video} data-tina-field={tinaField(props.data, "video")}>
        <MyVideo
          src={videoURLDesktop}
          loop
          muted
          className={styles.about__video__desktop}
          style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
        />
        <MyVideo
          src={videoURLMobile}
          loop
          muted
          className={styles.about__video__mobile}
          style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
        />
      </div>
      <div className={styles.about__image} data-tina-field={tinaField(props.data, "image")}>
        <CldImage
          src={props.data.image}
          alt={props.data.imageAlt ? props.data.imageAlt : 'This image is lacking an alt description'}
          width="787"
          height="885"
          style={{ width: '100%', height: 'auto'}}
          sizes='(max-width: 768px) 73vw, 34vw'
        />
      </div>
      <div className={styles.about__body}>
        <h2 data-tina-field={tinaField(props.data, "bodyhead")}>{props.data.bodyhead}</h2>
        <h3 data-tina-field={tinaField(props.data, "bodysubhead")}>{props.data.bodysubhead}</h3>
        <div className={styles.about__body__text} data-tina-field={tinaField(props.data, "body")}>
          <TinaMarkdown content={props.data.body} />
        </div>
      </div>
    </section>
  )
}