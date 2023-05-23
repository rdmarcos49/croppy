import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles['inner-wrapper']}>
      Made with ❤ by <a href='https://www.linkedin.com/in/roberto-david-marcos/' target='_blank'> Roberto Marcos </a>
      {' | '}
      <a href="https://icons8.com/" target='_blank'>Icons made by Icons8</a>
    </div>
  </footer>
)
