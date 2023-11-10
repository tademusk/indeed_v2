import styles from './styles'
import './App.css'
import homesvg from './assets/home.svg'

import { Aman, Hero, Navbar, Home } from './components'

export default function App() {
  return (
 <div className='w-full overflow-hidden'>

       <section className={` ${styles.flexStart}  ${styles.paddingX} z-20 absolute left-0 w-full top-0 font-poppins`}>
           <div className={` ${styles.boxWidth} `}>
              <Navbar />
           </div>   
       </section>

       <section className={` ${styles.flexCenter}  ${styles.paddingX} w-full font-poppins`}>
          <Home />  
      </section>


      {/* <section className={` ${styles.flexStart}  ${styles.paddingX} w-full top-0  shadow-gray-200 font-poppins`}>
           <div className={`w-full`}>
              <Hero />
           </div>   
       </section> */}

      {/* <section className={` ${styles.flexStart}  ${styles.paddingX} ${styles.paddingY} w-full font-poppins`}>
           <div className={`${styles.boxWidth}`}>
              <Aman />
           </div>   
       </section> */}
       

  </div>
  )
}