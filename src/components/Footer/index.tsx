import { Layer } from '..'
import DummyPhoto from '../../assets/chanito.jpg'
import DummyPhoto2 from '../../assets/badbunny.jpeg'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Layer thumbnail={DummyPhoto} />
      <Layer thumbnail={DummyPhoto2} />
      <Layer />
    </div>
  )
}
