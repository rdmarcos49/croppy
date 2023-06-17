import { useRef, ChangeEvent, DragEvent } from 'react'
import UploadIcon from '../../assets/upload.png'
import styles from './styles.module.scss'

type UploadImageProps = {
  onUpload: (file: File) => void
}

export const UploadImage = ({ onUpload }: UploadImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleOnDrag = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(event)
  }

  const handleOnDrop = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(event)
    const firstFile = event.dataTransfer.files[0]
    onUpload(firstFile)
  }

  const handleButtonClick = () => {
    fileInputRef?.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const firstFile = event?.target?.files[0]
    onUpload(firstFile)
  }

  return (
    <section className={styles.container}>
      <button
        className={styles['drag-zone']}
        onDragOver={handleOnDrag}
        onDrop={handleOnDrop}
        onClick={handleButtonClick}
      >
        <img alt='upload image' className={styles.icon} src={UploadIcon} />
        <span className={styles.text}>
          Click or drag and drop to upload your image
        </span>
      </button>
      <input
        accept='image/png, image/jpeg, image/jpg'
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </section>
  )
}
