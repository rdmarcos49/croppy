import React, { useState, useEffect, useRef, PropsWithChildren, HTMLAttributes } from 'react'

type DragAndDropLayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

const CONTAINER_NODENAME = 'SECTION'

export const DragAndDropLayout: React.FC<DragAndDropLayoutProps> = ({ children, ...props }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const draggableRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = document.querySelector('main')
    const draggable = draggableRef.current

    if (!container || !draggable) return

    const handleMouseDown = (event: MouseEvent) => {
      if (!event.target) return
      draggable.style.cursor = 'grabbing'

      if (event.target.nodeName !== CONTAINER_NODENAME) return
      setIsDragging(true)
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
      draggable.style.cursor = 'grab'
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
    <section
      ref={draggableRef}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x
      }}
      {...props}
    >
      {children}
    </section>
  )
}
