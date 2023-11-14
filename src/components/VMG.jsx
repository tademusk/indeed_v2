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
               <img src={vision} alt="vision " className=' w-20 h-20' />
               <p className=' opacity-80 text-[20px] font-semibold'>Our Vision</p>
               <div className=" w-[65px] h-[2px] opacity-50 bg-[#5F41D9]"></div>
               <p className=" text-sm opacity-75 md:pr-6 text-justify">
                   We have in prospect a future where our successfull projects have solved most of our world's prressing problems, and where we have made significant progress towards achiving the Millennium Sustainable Development Goals.
                   <br />
                   <br />
                   Embracing continuous improvement, we envision a future where our projects adapt to emerging challenges. We aim to be recognized for solving today's problems and proactively addressing the complex issues shaping tomorrow's world. Our goal is to build a legacy of positive change, extending far beyond the present boundaries, leaving a lasting impact for generations.
               </p>
            </div>

            <div className=" justify-center max-sm:items-center  sm:w-1/3 flex flex-col gap-4 rounded-2xl">
            <img src={mission} alt="vision " className=' w-20 h-20' />
            <p className=' opacity-80 text-[20px] font-semibold'>Our Mission</p>
            <div className=" w-[65px] h-[2px] opacity-50 bg-[#5F41D9]"></div>
            <p className=" text-sm opacity-75 md:pr-6 text-justify">
                 At Indeed, we believe that the key to solving complex issues lies in the power of collecting action and the unique perspective of young people.
                  <br />
                  <br />
                 Our Mission is to create a world where youth are not only encouraged but empowered to take an active positive change, while working together to eradicate problems that hinder growth.
                 <br />
                 <br />
                 By fostering a culture of youth contribution and leaderdhip, we aim to create a brighter future for all, where innovation, creativity, and collaboration are at the forefront of development efforts.  
            </p>
            </div>

            <div className=" justify-center max-sm:items-center  sm:w-1/3 flex flex-col gap-4 rounded-2xl">
              <img src={goals} alt="vision " className=' w-20 h-20' />               
              <p className=' opacity-80 text-[20px] font-semibold'>Our Goals</p>
              <div className=" w-[65px] h-[2px] opacity-50 bg-[#5F41D9]"></div>
              <p className=" text-sm opacity-75 text-justify">
                  Our goal is to create a platform that connects young people from Africa and around the world, empowering them to work together towards a common goal of eradicating poverty and solving the world's most pressing problems.
                  <br />
                  <br />
                  By fostering a sense of Unity and shared purpose, we believe that we can inspire a new generation of leaders who are commmitted to building a more just and equitable world for all.
                  <br />
                  <br />
                  Through our collective efforts, we are confident that we can make a meaningful difference in the lives of millions of people, and create a brighter future for generaitons to come.
              </p>
            </div>
             
          
         </div>
    </div>
  )
}

export default VMG
