import styles from './PartnershipsInvestors.module.css';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from "tinacms/dist/react";
import { SynconaLogo } from '../svgs/SynconaLogo';
import { CICLogo } from '../svgs/CICLogo';
import { Button } from '../Button';

export const PartnershipsInvestors = (props) => {
  return (
    <div className={styles.partnershipsInvestors}>
      <div className={styles.text}>
        <h2 className={styles.title} data-tina-field={tinaField(props.data, 'title')}>{props.data.title}</h2>
        <div className={styles.body}>
          <TinaMarkdown content={props.data.body} />
        </div>
      </div>
      <div className={styles.logos}>
        <div className={styles.investor}>
          <figure className={`${styles.logo} ${styles.logo__synconia__image}`}>
            <SynconaLogo />
          </figure>
          <Button 
            href={props.data.linkToSynconia || ''} 
            className={styles.logo__synconia__link} 
            text='visit' 
            backgroundColor='green'
          />
        </div>
        <div className={styles.investor}>
          <figure className={`${styles.logo} ${styles.logo__cic__image}`}>
            <CICLogo />
          </figure>
          <Button 
            href={props.data.linkToCIT || ''} 
            className={styles.logo__cit__link} 
            text='visit' 
            backgroundColor='green'
          />
        </div>
      </div>
    </div>
  )
}