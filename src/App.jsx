import styles from './styles'
import './App.css'

import { Navbar } from './components'

export default function App() {
  return (
<div className='w-full overflow-hidden'>

      <section className={` ${styles.flexStart}  ${styles.paddingX}  bg-secondary z-20 fixed left-0 shadow-lg w-full top-0 shadow-gray-200 font-poppins`}>
           <div className={` ${styles.boxWidth} w-full bg-red-300`}>
              <Navbar />
           </div>   
       </section>

    </div>
  )
}