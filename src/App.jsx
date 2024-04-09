import { Header } from './components/header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main></main>
      </div>
    </div>
  )
}
