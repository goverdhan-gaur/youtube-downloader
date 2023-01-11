import dynamic from 'next/dynamic.js'
import styles from '../styles/Home.module.css'

const HomePage = dynamic(() => import('../src/components/Homepage/Homepage'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  )
}
