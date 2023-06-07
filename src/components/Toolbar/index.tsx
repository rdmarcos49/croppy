import { useEffect, useRef, useState } from 'react'
import CutIcon from '../../assets/cut.png'
import EraseIcon from '../../assets/erase.png'
import MoveIcon from '../../assets/move.png'
import PenIcon from '../../assets/pen.png'
import RedoIcon from '../../assets/redo.png'
import UndoIcon from '../../assets/Undo.png'
import styles from './styles.module.scss'

type Coordinate = {
  x: number,
  y: number
}

export const Toolbar = () => {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let isMoving = false
    let mousePosition: Coordinate = {
      x: 0,
      y: 0
    }

    const handleMouseDown = (event) => {
      if (event.target.nodeName !== 'SECTION') return

      mousePosition = {
        x: event.clientX,
        y: event.clientY
      }
      isMoving = true
    }

    const handleMouseMove = (event) => {
      if (!isMoving) return
      if (!containerRef.current) return

      const { offsetLeft, offsetTop } = event.target

      const moveValueX = event.clientX > mousePosition.x ? Math.abs(event.clientX - mousePosition.x) : -Math.abs(event.clientX - mousePosition.x)
      const moveValueY = event.clientY > mousePosition.y ? Math.abs(event.clientY - mousePosition.y) : -Math.abs(event.clientY - mousePosition.y)

      mousePosition = {
        x: event.clientX,
        y: event.clientY
      }

      const newContainerPositionX = offsetLeft + moveValueX
      const newContainerPositionY = offsetTop + moveValueY

      containerRef.current.style.left = `${newContainerPositionX}px`
      containerRef.current.style.top = `${newContainerPositionY}px`
    }

    const handleOnMouseUp = () => {
      isMoving = false
    }

    const handleMouseLeave = (event) => {
      isMoving = false
      mousePosition = {
        x: 0,
        y: 0
      }
    }

    containerRef.current.addEventListener('mousedown', handleMouseDown)
    containerRef.current.addEventListener('mouseup', handleOnMouseUp)
    containerRef.current.addEventListener('mousemove', handleMouseMove)

    return () => {
      containerRef.current?.removeEventListener('mousedown', handleMouseDown)
      containerRef.current?.removeEventListener('mouseup', handleOnMouseUp)
      containerRef.current?.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className={`${styles.container} with-box-s`}
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
