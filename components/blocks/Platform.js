import styles from './Platform.module.css'
import { PlatformInfo } from './PlatformInfo';
import { PlatformComponents } from './PlatformComponents';
import { PlatformResults } from './PlatformResults';

export const Platform = (props) => {

  return (
    <section className={styles.platform}>

      <PlatformInfo data={props.data.intro} />
      <PlatformComponents data={props.data.components} />
      <PlatformResults data={props.data.results} />

    </section>
  )
}