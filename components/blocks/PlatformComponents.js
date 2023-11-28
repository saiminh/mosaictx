import styles from './PlatformComponents.module.css'
import { CldImage, getCldVideoUrl } from 'next-cloudinary';
import { MyVideo } from '../MyVideo';
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text"

export const PlatformComponents = (props) => {
  
  const components = props.data || {};
  
  const videoURLs = components?.map((component) => {
    return getCldVideoUrl({
      src: component.componentVideo || '',
      width: 530,
      height: 270,
      crop: 'fill',
      gravity: 'center',
      dpr: 'auto'
    });
  });

  return (
    <section className={styles.components}>
      <h2 className={styles.components__header}>Our components</h2>
      { components?.map((component, i) => (

        <div key={i} 
          className={
            i===0 ? `${styles.component} ${styles.component__first}` : 
            i===1 ? `${styles.component} ${styles.component__second}` :
            i===2 ? `${styles.component} ${styles.component__third}` :
            `${styles.component} ${styles.component__fourth}`
          } 
          data-tina-field={tinaField(components[i])}
        >
          <div className={styles.component__text}>
            <h3 className={styles.component__title} data-tina-field={tinaField(components[i], 'componentTitle')}>
              {component.componentTitle}
            </h3>
            <p className={styles.component__subtitle} data-tina-field={tinaField(components[i], 'componentSubTitle')}>
              {component.componentSubTitle}
            </p>
            <div 
              className={
                component.componentTextCols ? 
                `${styles.component__body} ${styles.component__body__cols2}` :
                styles.component__body
              } 
              data-tina-field={tinaField(components[i], 'componentText')}
            >
              <TinaMarkdown content={component.componentText} />
            </div>
          </div>
          <div className={styles.component__media}>
            {component?.componentImage?.length > 0 && (
              <figure className={styles.component__image} data-tina-field={tinaField(components[i], 'componentImage')}>
                <CldImage 
                  src={component.componentImage || ''} 
                  alt={component.componentImageAlt || ''} 
                  width='530'
                  height='620'
                  crop='fill'
                  gravity='north'
                />
              </figure>
            )}
            {component?.componentVideo?.length > 0 && (
              <div className={styles.component__video} data-tina-field={tinaField(components[i], 'componentVideo')}>
                <MyVideo 
                  src={videoURLs[i]} 
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  width='530'
                  height='270'
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}