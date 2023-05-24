import { Layer } from '..'
import DummyPhoto from '../../assets/chanito.jpg'
import DummyPhoto2 from '../../assets/badbunny.jpeg'
import styles from './styles.module.scss'

export const LayerList = () => {
  return (
    <div className={`${styles.container} with-box-s`}>
      <Layer thumbnail={DummyPhoto} />
      <Layer thumbnail={DummyPhoto2} />
      <Layer />
    </div>
  )
}
