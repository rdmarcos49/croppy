import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles['inner-wrapper']}>
      Made with <span className={styles.highlight}>❤</span> by <a className={styles.highlight} href='https://portfolio-rdmarcos49.vercel.app/' target='_blank'> Roberto Marcos </a>
      {' | '}
      Icons made by <a className={styles.highlight} href="https://icons8.com/" target='_blank'> Icons8 </a>
    </div>
  </footer>
)
