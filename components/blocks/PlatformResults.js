import styles from './PlatformResults.module.css'
import { CldImage, getCldVideoUrl } from 'next-cloudinary';
import { MyVideo } from '../MyVideo';
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text"

export const PlatformResults = (props) => {
  
  const results = props.data || {};
  
  const videoURLs = results?.map((result) => {
    return getCldVideoUrl({
      src: result.resultVideo || '',
      width: 530,
      height: 270,
      crop: 'fill',
      gravity: 'center',
      dpr: 'auto'
    });
  });

  return (
    <section className={styles.results}>
      <h2 className={styles.results__header}>Our Results</h2>
      { results?.map((result, i) => (

        <div key={i} 
          className={
            i===0 ? `${styles.result} ${styles.result__first}` : 
            i===1 ? `${styles.result} ${styles.result__second}` :
            i===2 ? `${styles.result} ${styles.result__third}` :
            `${styles.result} ${styles.result__fourth}`
          } 
          data-tina-field={tinaField(results[i])}
        >
          <div className={styles.result__text}>
            <h3 className={styles.result__title} data-tina-field={tinaField(results[i], 'resultTitle')}>
              {result.resultTitle}
            </h3>
            <p className={styles.result__subtitle} data-tina-field={tinaField(results[i], 'resultSubTitle')}>
              {result.resultSubTitle}
            </p>
            <div 
              className={
                result.resultTextCols ? 
                `${styles.result__body} ${styles.result__body__cols2}` :
                styles.result__body
              } 
              data-tina-field={tinaField(results[i], 'resultText')}
            >
              <TinaMarkdown content={result.resultText} />
            </div>
          </div>
          <div className={styles.result__media}>
            {result?.resultImage?.length > 0 && (
              <figure className={styles.result__image} data-tina-field={tinaField(results[i], 'resultImage')}>
                <CldImage 
                  src={result.resultImage || ''} 
                  alt={result.resultImageAlt || ''} 
                  width='530'
                  height='620'
                  crop='fill'
                  gravity='north'
                />
              </figure>
            )}
            {result?.resultVideo?.length > 0 && (
              <div className={styles.result__video} data-tina-field={tinaField(results[i], 'resultVideo')}>
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