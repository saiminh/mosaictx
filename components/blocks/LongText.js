import styles from './LongText.module.css'
import { TinaMarkdown } from "tinacms/dist/rich-text"

export const LongText = (props) => {
  return (
    <div className={`${styles.longtext} longtext`}> 
      <TinaMarkdown content={props.data.body} />
    </div>
  )
}