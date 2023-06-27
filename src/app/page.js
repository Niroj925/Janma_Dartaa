import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './component/Navbar/Navbar'
import Homepage from './component/Homepage/Homepage'
export default function Home() {
  return (
    <main >
     <Navbar/>
     <Homepage/>
    </main>
  )
}
