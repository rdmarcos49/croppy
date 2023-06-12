import { useState, useRef, useEffect } from 'react'
import CutIcon from '../../assets/cut.png'
import EraseIcon from '../../assets/erase.png'
import MoveIcon from '../../assets/move.png'
import PenIcon from '../../assets/pen.png'
import RedoIcon from '../../assets/redo.png'
import UndoIcon from '../../assets/Undo.png'
import styles from './styles.module.scss'

const CONTAINER_NODENAME = 'SECTION'

export const Toolbar = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const draggableRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = document.querySelector('main')
    const draggable = draggableRef.current

    if (!container || !draggable) return

    const handleMouseDown = (event: MouseEvent) => {
      if (!event.target) return

      if (event.target.nodeName !== CONTAINER_NODENAME) return
      setIsDragging(true)
      draggable.classList.add(styles['container--grabbing'])
    }

    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault()
      if (!isDragging) return

      const containerRect = container.getBoundingClientRect()
      const draggableRect = draggable.getBoundingClientRect()
      const initialX = event.clientX - draggableRect.width / 2
      const initialY = event.clientY - draggableRect.height / 2
      const x = initialX - containerRect.left
      const y = initialY - containerRect.top

      setPosition({ x, y })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      draggable.classList.remove(styles['container--grabbing'])
    }

    draggable.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      draggable.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section ref={draggableRef}
      className={styles.container}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x
      }}
    >
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
    </section>
  )
}

export default Toolbar
