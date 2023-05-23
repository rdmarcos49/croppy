import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles['inner-wrapper']}>
      Made with <span className={styles.highlight}>❤</span> by <a className={styles.highlight} href='https://www.linkedin.com/in/roberto-david-marcos/' target='_blank'> Roberto Marcos </a>
      {' | '}
      Icons made <a className={styles.highlight} href="https://icons8.com/" target='_blank'>by Icons8</a>
    </div>
  </footer>
)
