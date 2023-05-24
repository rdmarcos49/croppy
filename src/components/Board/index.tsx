import { useState, useEffect, useRef, MouseEvent } from 'react'
import styles from './styles.module.scss'

function obtenerTamanoEnKB (objeto) {
  const jsonString = JSON.stringify(objeto)
  const bytes = new Blob([jsonString]).size
  const kilobytes = bytes / 1024
  return kilobytes
}

export const Board = () => {
  const [isDrawign, setIsDrawing] = useState(false)
  const movsRef = useRef({
    movements: []
  })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  // const size = obtenerTamanoEnKB(JSON.stringify(movsRef.current.movements))

  console.log(contextRef.current)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.scale(1, 1)
    context.imageSmoothingQuality = 'medium'
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    contextRef.current = context
  }, [])

  const startDrawing = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    const {
      offsetX: x,
      offsetY: y
    } = nativeEvent
    contextRef.current?.beginPath()
    contextRef.current?.moveTo(x, y)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current?.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawign) return
    if (!contextRef.current) return

    const {
      offsetX: x,
      offsetY: y
    } = nativeEvent

    movsRef.current.movements.push({ x, y })

    contextRef.current.lineTo(x, y)
    contextRef.current.stroke()
  }

  return (
    <canvas
      className={`${styles.container} with-box-shadow`}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      onMouseLeave={finishDrawing}
      ref={canvasRef}
      width={800}
      height={550}
    />
  )
}
