import styles from './PlatformIntro.module.css';
import { CldImage } from 'next-cloudinary';
import { tinaField } from "tinacms/dist/react";

export const PlatformIntro = (props) => {

  const intro = props.data || {};
  return (
    <div className={styles.intro}>
      <div className={styles.intro__headline}>
        <figure className={styles.intro__image} data-tina-field={tinaField(intro, 'image')}>
          <CldImage 
            src={intro.image || ''} 
            alt='An icon symbolising the concept of a Platform' 
            width='300'
            height='300'
            format='svg'
          />
        </figure>
        <h2 className={styles.intro__title} data-tina-field={tinaField(intro, 'title')}>{intro.title}</h2>
        <p className={styles.intro__what} data-tina-field={tinaField(intro, 'whatIsIt')}>{intro.whatIsIt}</p>
      </div>
      <div className={styles.intro__text}>
        <ul className={styles.intro__whatList}>
          {intro.whatIsItList?.map((item, i) => (
            <li key={i} data-tina-field={tinaField(intro, 'whatIsItList', i)}>{item}</li>
          ))}
        </ul>
        <p className={styles.intro__toDo} data-tina-field={tinaField(intro, 'toDoWhat')}>{intro.toDoWhat}</p>
        <ul className={styles.intro__toDoList}>
          {intro.toDoWhatList?.map((item, i) => (
            <li key={i} data-tina-field={tinaField(intro, 'toDoWhatList', i)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}