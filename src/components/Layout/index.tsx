import { ReactNode } from 'react'
import styles from './styles.module.scss'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <main className={styles.container}>
    {children}
  </main>
)
