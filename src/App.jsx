import styles from './styles'
import './App.css'

import { Aman, Hero, Navbar, Home, About, VMG } from './components'
import Blogs from './components/Blogs'

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

       <section className={` ${styles.flexCenter}  ${styles.paddingX} mt-[80px] w-full font-poppins`}>
         <div className={` ${styles.boxWidth}`}>
            <About />
         </div> 
      </section>

       <section className={` ${styles.flexCenter}  ${styles.paddingX} mt-24 py-10 w-full bg-[#F3F3F4] font-poppins`}>
         <div className={` ${styles.boxWidth}`}>
           <VMG />
         </div> 
      </section>

       <section className={` ${styles.flexCenter}  ${styles.paddingX} py-10 w-full font-poppins`}>
         <div className={` ${styles.boxWidth}`}>
           <Blogs />
         </div> 
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
       
       {/* <div className='py-60 bg-[#F3F3F4] my-24'>
         <div className=''>
            <div>
               
            </div>
            <p className="">
                
            </p>
         </div>
          
       </div> */}

  </div>
  )
}