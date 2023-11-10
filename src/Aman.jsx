import React from 'react'
import cursor from './assets/cursor.jpg'
import tdesign from './assets/aman.jpg'

const Aman = () => {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center md:flex-row w-full h-full">
      <div className="w-fit h-fit md:w-[50%]">
       <div className="h-[772px] w-[620px] lx:scale-[72%] lx:-ml-[8%] lg:scale-[68%] lg:-ml-[16%] md:scale-[60%] md:-ml-[22%] sm:scale-[80%] sm:mb-0 ss:scale-[70%] ss:-mb-[5%]  xs:scale-[50%] xs:-mb-[20%] scale-[40%] -mb-[30%] flex">
         <div className="w-full">

         <div className="flex w-full h-1/2">

            <div className=" relative w-1/2">
              <div className="absolute bottom-[10px] left-0 w-[200px] h-[230px] shadow-2xl rounded-[7px] bg-white flex flex-col justify-between items-center">
                 <img src={cursor} className='h-[84px] mt-[32px] w-[84px]'/>
                 <h2 className='mb-[31px] text-center text-[20px] font-[400] leading-normal'>User Friendly<br/>Interface</h2>
              </div>
            </div>

            <div className="w-1/2 relative">  
             <div className="w-[300px] h-[330px] absolute bottom-[50px] -left-[50px] bg-white flex flex-col shadow-2xl rounded-[7px] justify-between items-center">
                <img src={tdesign} className='w-[168px] h-[168px] mt-[56px]'/>
                <h2 className='text-center text-[24px] font-[400] leading-normal mb-[41px] '>Secure and Reliable</h2>
              </div>                  
            </div> 

        </div>
          
         <div className="flex w-full h-1/2">

            <div className=" w-1/2 relative">
              <div className="w-[300px] h-[330px] absolute top-[50px] -right-[50px] bg-white flex flex-col shadow-2xl rounded-[7px] justify-between items-center">
                <svg className='mt-[50px]' xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168" fill="none">
                   <path d="M49 119H63V84H49V119ZM105 119H119V49H105V119ZM77 119H91V98H77V119ZM77 84H91V70H77V84ZM35 147C31.15 147 27.853 145.628 25.109 142.884C22.365 140.14 20.9953 136.845 21 133V35C21 31.15 22.372 27.853 25.116 25.109C27.86 22.365 31.1547 20.9953 35 21H133C136.85 21 140.147 22.372 142.891 25.116C145.635 27.86 147.005 31.1547 147 35V133C147 136.85 145.628 140.147 142.884 142.891C140.14 145.635 136.845 147.005 133 147H35ZM35 133H133V35H35V133Z" fill="black"/>
                 </svg>
                 <h2 className='text-center text-[24px] font-[400] leading-normal mb-[41px] '>Comprehensive Exam Analytics</h2>
              </div> 
            </div>
          
            <div className="w-1/2 relative">
              <div className=" absolute  right-0 top-[10px] w-[200px] h-[230px] shadow-2xl rounded-[7px] bg-white flex flex-col justify-between items-center">
               <svg className='mt-[39px]' xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                 <path d="M24.5 59.5454L39.9455 59.4929L73.6575 26.1029C74.9805 24.7799 75.7085 23.0229 75.7085 21.1539C75.7085 19.2849 74.9805 17.5279 73.6575 16.2049L68.1065 10.6539C65.4605 8.0079 60.844 8.0219 58.219 10.6434L24.5 44.0404V59.5454ZM63.1575 15.6029L68.719 21.1434L63.1295 26.6804L57.5785 21.1329L63.1575 15.6029ZM31.5 46.9594L52.605 26.0539L58.156 31.6049L37.0545 52.5034L31.5 52.5209V46.9594Z" fill="black"/>
                 <path d="M17.5 73.5H66.5C70.3605 73.5 73.5 70.3605 73.5 66.5V36.162L66.5 43.162V66.5H28.553C28.462 66.5 28.3675 66.535 28.2765 66.535C28.161 66.535 28.0455 66.5035 27.9265 66.5H17.5V17.5H41.4645L48.4645 10.5H17.5C13.6395 10.5 10.5 13.6395 10.5 17.5V66.5C10.5 70.3605 13.6395 73.5 17.5 73.5Z" fill="black"/>
               </svg>   
               <h2 className='mb-[32px] text-center text-[20px] font-[400] leading-normal'>Customizable Assessments</h2>
               </div>
            </div>
           </div>
          </div>
         </div>
        </div>

        <div className='md:w-[50%] w-full'>
           <div className="flex py-2 w-full max-md:items-center flex-col">
             <h1 className="text-4xl tracking-wide ">Features</h1>
             <div className='h-[6px] my-2 rounded-full w-[72px] bg-[#998537] md:block'/>
           </div>
        
           <p className="text-[20px] md:text-[16px] lg:text-[20px] font-[200px] py-4 lg:pr-8 md:pr-4 pr-2 leading-[32px] md:leading-[28px] lg:leading-[36px]">
           Join thousands of students and educators who have 
           already experienced the benefits of our exam system. 
           Get started today and unlock your full academic 
           potential!
           </p>
           <p className="text-[20px] md:text-[16px] lg:text-[20px] font-[200px] py-4 lg:pr-8 md:pr-4 pr-2 leading-[32px] md:leading-[28px] lg:leading-[36px]">
           Join thousands of students and educators who have 
           already experienced the benefits of our exam system. 
           Get started today and unlock your full academic 
           potential!
           </p>
          
           <div className='flex w-full  mt-6 justify-center md:justify-start'>
             <button className='text-center  border-4 border-[#998537] rounded-md text-[#998537] font-semibold px-6 py-[8px] text-xl'>Explore More</button>
           </div>

         </div>

      </div>

    </>
  )
}

export default Aman
