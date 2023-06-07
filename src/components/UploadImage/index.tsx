import { DragEvent } from 'react'
import UploadIcon from '../../assets/upload.png'
import styles from './styles.module.scss'

export const UploadImage = () => {
  const handleOnDrag = (event: DragEvent) => {
    console.log(event)
  }
  const handleOnDrop = (event: DragEvent) => {
    console.log(event)
  }
  return (
    <section className={styles.container}>
      <button
        className={styles['drag-zone']}
        onDragOver={handleOnDrag}
        onDrop={handleOnDrop}
      >
        <img alt='upload image' className={styles.icon} src={UploadIcon} />
        <span className={styles.text}>
          Click or drag and drop to upload your image
        </span>
      </button>
    </section>
  )
}
