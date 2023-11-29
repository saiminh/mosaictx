import styles from './Platform.module.css'
import { PlatformIntro } from './PlatformIntro';
import { PlatformComponents } from './PlatformComponents';
import { PlatformResults } from './PlatformResults';

export const Platform = (props) => {

  return (
    <section className={styles.platform}>

      <PlatformIntro data={props.data.intro} />
      <PlatformComponents data={props.data.components} />
      <PlatformResults data={props.data.results} />

    </section>
  )
}