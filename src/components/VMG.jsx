import React from 'react'
import vision from '../assets/vision-logo.png'
import mission from '../assets/mission-logo.png'
import goals from '../assets/goals-logo.png'

const VMG = () => {
  return (
    <div>
        <div className="w-10 h-[3px] my-6 opacity-90 bg-[#5F41D9]">

        </div>
         <p className=" text-[#5F41D9] uppercase text-[18px] tracking-wide leading-[110%] font-[500] my-4"> Let's make wonders together</p>
         <p className="tracking-wide text-2xl opacity-75 font-[500] py-6">Our Commitment to Excellence: Mission, Vision, and Goals</p>

         <div className="flex py-6 w-full max-sm:flex-col gap-4 items-start justify-center">
            <div className=" justify-center max-sm:items-center sm:w-1/3 flex flex-col gap-4">
               <img src={vision} alt="vision " className=' w-16 h-16' />
               <p className=' opacity-80 text-[20px] font-semibold'>Our Vision</p>
               <div className=" w-[65px] h-[2px] opacity-50 bg-[#5F41D9]"></div>
               <p className=" opacity-75 md:pr-6 text-justify">
                   We have in prospect a future where our successfull projects have solved most of our world's prressing problems, and where we have made significant progress towards achiving the Millennium Sustainable Development Goals.
               </p>
            </div>

            <div className=" justify-center max-sm:items-center  sm:w-1/3 flex flex-col gap-4 rounded-2xl">
            <img src={mission} alt="vision " className=' w-16 h-16' />
            <p className=' opacity-80 text-[20px] font-semibold'>Our Mission</p>
            <div className=" w-[65px] h-[2px] opacity-50 bg-[#5F41D9]"></div>
            <p className=" opacity-75 md:pr-6 text-justify">
                 Our Mission is to create a world where youth are not only encouraged but empowered to take an active positive change, while working together to eradicate problems that hinder growth.
            </p>
            </div>

            <div className=" justify-center max-sm:items-center  sm:w-1/3 flex flex-col gap-4 rounded-2xl">
              <img src={goals} alt="vision " className=' w-16 h-16' />               
              <p className=' opacity-80 text-[20px] font-semibold'>Our Goals</p>
              <div className=" w-[65px] h-[2px] opacity-50 bg-[#5F41D9]"></div>
              <p className=" opacity-75 text-justify">
                  Our goal is to create a platform that connects young people from Africa and around the world, empowering them to work together towards a common goal of eradicating poverty and solving the world's most pressing problems.
              </p>
            </div>
             
          
         </div>
    </div>
  )
}

export default VMG
