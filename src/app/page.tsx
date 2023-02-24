import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='bg-[url("/img/tour4.jpg")] w-full h-screen 
          bg-cover bg-no-repeat bg-center bg-fixed p-12 relative overflow-hidden max-h-[650]'>
        <h3>hello world</h3>
      </div>
    </main>
  )
}
