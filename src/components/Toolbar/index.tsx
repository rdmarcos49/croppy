import CutIcon from '../../assets/cut.png'
import EraseIcon from '../../assets/erase.png'
import MoveIcon from '../../assets/move.png'
import PenIcon from '../../assets/pen.png'
import RedoIcon from '../../assets/redo.png'
import UndoIcon from '../../assets/Undo.png'
import styles from './styles.module.scss'

export const Toolbar = () => (
  <div className={styles.container}>
    <button className={`${styles.action} ${styles['action--disabled']}`} disabled>
      <img className={styles.icon} alt='undo' src={UndoIcon} />
    </button>
    <button className={`${styles.action} ${styles['action--disabled']}`} disabled>
      <img className={styles.icon} alt='redo' src={RedoIcon} />
    </button>

    <span className={styles.separator} />

    <button className={styles.action}>
      <img className={styles.icon} alt='cut' src={CutIcon} />
    </button>
    <button className={styles.action}>
      <img className={styles.icon} alt='erase' src={EraseIcon} />
    </button>
    <button className={styles.action}>
      <img className={styles.icon} alt='move' src={MoveIcon} />
    </button>
    <button className={styles.action}>
      <img className={styles.icon} alt='pen' src={PenIcon} />
    </button>
  </div>
)
