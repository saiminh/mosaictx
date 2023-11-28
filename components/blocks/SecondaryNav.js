import styles from './SecondaryNav.module.css'
import { tinaField } from "tinacms/dist/react";
import { CldImage } from 'next-cloudinary';

export const SecondaryNav = (props) => {
  return (
    <section className={styles.secondaryNav}>
      <h2 data-tina-field={tinaField(props.data, "title")}>{props.data.title}</h2>
      <nav className={styles.secondaryNav__nav}>
        {props.data.nav?.map((item, i) => (
          <a key={i} href={`${item.anchor}`} data-tina-field={tinaField(props.data, "nav", i)} className={styles.secondaryNav__navitem}>
            <figure 
              className={styles.secondaryNav__nav__image} 
              style={{
                backgroundColor: `${item.backgroundColor}`,
              }}>
              <CldImage 
                src={item.image ? item.image : ''} 
                alt={`A graphic representing the concept of '${item.text}'`} 
                width='80'
                height='80'
                format='svg'
              />
            </figure>
            <span className={styles.secondaryNav__navitem__label}>{item.text}</span>
          </a>
        ))}
      </nav>
    </section>
  )   
}