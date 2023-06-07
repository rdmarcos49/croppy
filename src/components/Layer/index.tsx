import PlusIcon from '../../assets/plus.svg'
import styles from './styles.module.scss'

type LayerProps = {
  thumbnail?: string
}

export const Layer = ({ thumbnail }: LayerProps) => (
  <button className={styles.container}>
    <img className={styles.image} alt='add-new-image' src={PlusIcon} />
  </button>
)
