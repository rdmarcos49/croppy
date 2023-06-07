import { Layer } from '..'
import styles from './styles.module.scss'

export const LayerList = () => {
  return (
    <div className={`${styles.container} with-box-s`}>
      <Layer />
    </div>
  )
}
