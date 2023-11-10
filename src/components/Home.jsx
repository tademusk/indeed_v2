import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
          <div>
             <div className='relative z-10'>
             <svg xmlns="http://www.w3.org/2000/svg" width="1520" height="810" viewBox="0 0 1520 810" fill="none">
              <path d="M0 0.5L1520 0C1520 384.5 1520 460.5 1520 460.5L0 810V0.5Z" fill="url(#paint0_linear_1_53)"/>
              <defs>
                <linearGradient id="paint0_linear_1_53" x1="5.43739e-05" y1="-95.5" x2="807.528" y2="643.239" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E1E7"/>
                  <stop offset="1" stop-color="#5F41D9"/>
                </linearGradient>
              </defs>
              </svg>    
             </div>
             <div className='absolute top-[100px]'>
             <svg xmlns="http://www.w3.org/2000/svg" width="1518" height="810" viewBox="0 0 1518 810" fill="none">
               <path d="M0 0.5L1518 0C1518 384.5 1518 460.5 1518 460.5L0 810V0.5Z" fill="#E7E7E9" fill-opacity="0.5"/>
                </svg>
             </div>
          </div>

         <div className='absolute text-white z-10 top-32 px-32'>
             
          </div>  
    </div>
  )
}

export default Home
