import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const About = () => {
  return (
    <div className='w-full md:flex gap-8'>
       <div className='md:w-1/2'>
          <div className=" border-2 border-b-0 border-black/10 p-3 w-fit rounded-lg">
            <iframe className='' width="560" height="315" src="https://www.youtube.com/embed/gwEP9xGw1fs?si=1a8U1L3-p6BIGx1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
           <div>
            <div className='scale-105 -ml-6'>
             <svg className='border-2 border-black/10 shadow-md rounded-br-xl rounded-bl-xl scale-105' xmlns="http://www.w3.org/2000/svg" width="644" height="15" viewBox="0 0 644 9" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.379944 4.52368C0.379944 2.31454 2.1708 0.523682 4.37994 0.523682H639.522C641.731 0.523682 643.522 2.31454 643.522 4.52368V8.10628H0.379944V4.52368Z" fill="white"/>
            </svg>     
            </div>     
          </div>
       </div>
        <div className="md:w-1/2 flex flex-col">
           <div className="w-[30px] h-[2px] bg-[#5F41D9] my-2"></div>
           <h1 className=" uppercase tracking-widest text-xl text-[#5F41D9]">
             Video
           </h1>
           <h1 className='tracking-wide text-2xl py-6'>
              Factors Affecting Africa's Development
           </h1>
           <p className='opacity-50 text-justify'>
             Africa's development is influenced by a complex interplay of factors, including economic disparities, political stability, access to education and healthcare, infrastructure development, environmental sustainability, and global trade dynamics. Overcoming these challenges and leveraging its vast resources and human potential are crucial steps toward a brighter future for the continent.           </p>
           <div className='flex py-4 w-full justify-end'>
                <div className=" flex gap-4 items-center rounded-lg p-2 hover:border-2 border-[#5F41D9]">
                    <p className=' text-[#5F41D9] cursor-pointer text-[16px] tracking-wide font-bold'>
                        Check Our Youtube Channel
                    </p>
                    <BsArrowRight size={28} color='#5F41D9' /> 
                </div>
           </div>
        </div>
    </div>
  )
}

export default About
