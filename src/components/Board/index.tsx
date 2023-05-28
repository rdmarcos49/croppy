import { useEffect, useRef, useState, MouseEvent } from 'react'
import ChanitoImage from '../../assets/chanito.jpg'
import styles from './styles.module.scss'

type Coordinate = {
  x: number,
  y: number
}

interface IShapePoints {
  list: Coordinate[]
}

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const shapePointsRef = useRef<IShapePoints>({
    list: []
  })

  console.log({ canvasRef })
  console.log({ image })

  useEffect(() => {
    if (!canvasRef.current) return

    const newImage = new Image()
    newImage.src = ChanitoImage

    setImage(newImage)
  }, [canvasRef])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    if (!image) return

    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0)
  }, [image])

  function cropImageWithShape () {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (!image) return

    const shapePoints = shapePointsRef.current.list

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0)

    ctx.globalCompositeOperation = 'destination-in'
    ctx.beginPath()

    // Draw the custom shape as a path
    ctx.moveTo(shapePoints[0].x, shapePoints[0].y)
    for (let i = 1; i < shapePoints.length; i++) {
      ctx.lineTo(shapePoints[i].x, shapePoints[i].y)
    }

    ctx.closePath()
    ctx.fill()

    // Reset the global composite operation
    ctx.globalCompositeOperation = 'source-over'
  }

  const handleOnMouseDown = (event: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    setIsDrawing(true)
    const startX = event.clientX - canvas.offsetLeft
    const startY = event.clientY - canvas.offsetTop
    shapePointsRef.current.list.push({ x: startX, y: startY })
  }

  const handleOnMouseUp = () => {
    console.log('handle mouse up!')
    setIsDrawing(false)
    cropImageWithShape()
  }

  const handleOnMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!isDrawing) return
    if (!canvas) return

    const x = event.clientX - canvas.offsetLeft
    const y = event.clientY - canvas.offsetTop
    shapePointsRef.current.list.push({ x, y })
  }

  return (
    <canvas
      id='myCanvas'
      ref={canvasRef}
      className={styles.container}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseMove={handleOnMouseMove}
    />
  )
}

export default Board
