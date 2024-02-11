
import heroLogo from '../assets/heroLogo.png'

const Home = () => {
  return (
    <div className='w-full relative flex justify-center'>
          <div>
            <div>
              <div className='relative z-10'>
             <svg xmlns="http://www.w3.org/2000/svg" width="1520" height="810" viewBox="0 0 1520 810" fill="none">
              <path d="M0 0.5L1520 0C1520 384.5 1520 460.5 1520 460.5L0 810V0.5Z" fill="url(#paint0_linear_1_53)"/>
              <defs>
                <linearGradient id="paint0_linear_1_53" x1="5.43739e-05" y1="-95.5" x2="807.528" y2="643.239" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E1E7"/>
                  <stop offset="1" stopColor="#5F41D9"/>
                </linearGradient>
              </defs>
              </svg>    
             </div>
             <div className='absolute top-[80px]'>
             <svg xmlns="http://www.w3.org/2000/svg" width="1518" height="810" viewBox="0 0 1518 810" fill="none">
               <path d="M0 0.5L1518 0C1518 384.5 1518 460.5 1518 460.5L0 810V0.5Z" fill="#E7E7E9" fillOpacity="0.5"/>
                </svg>
             </div>
            </div>  
          </div> 

          <div className='absolute top-20   flex items-start w-full max-w-[1280px]  z-10 flex-col md:flex-row  max-h-fit'>
              <div className='w-full md:w-[48%]  '>
                 
                  <div className="text-[20px] md:text-[35px] py-8 text-white font-bold">
                     <h1>
                       Researching Community Challenges, Crafting Solutions, and Driving Change Together.                 
                      </h1>
                  </div>
                  <p className="text-white/70 text-[15px] tracking-wide">
                    Committed to in-depth research and innovative problem-solving, our team aims to drive positive change by addressing and resolving the most pressing challenges within our community, with a shared vision of creating a brighter future for all.
                  </p>
                  <div className='pt-12 flex justify-center'>
                      <button className='py-[6px] px-8 border-[3px] border-white font-semibold hover:bg-white hover:text-blue-500 text-white rounded-xl'>
                         Contact Us
                      </button>
                  </div>
              </div>
              <div className='w-full relative  md:w-[52%] flex flex-col ' >

                <img src={heroLogo} className='w-full opacity-30 scale-95 -ml-10' alt=''/>

                  {/* <div className=' scale-[90%] '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="442" height="395" viewBox="0 0 442 395" fill="none">
                      < g filter="url(#filter0_b_1_55)">
                        <path d="M90.628 204.062L378.689 334.814C427.926 360.11 442 395 442 395L441.516 363.294L440.879 315.928L440.713 309.684C439.744 249.828 404.11 195.901 349.282 171.887L84.719 55.5542C14.2259 21.6013 0 0 0 0L0.318294 18.4032L0.802638 51.5289L0.954856 67.0648C1.35992 96.0117 10.0009 124.25 25.8741 148.5C41.7473 172.75 64.2012 192.017 90.628 204.062Z" fill="url(#paint0_linear_1_55)" fill-opacity="0.5"/>
                        <path d="M1.05039 2.90482C1.48051 3.39491 1.99393 3.9592 2.60028 4.59556C5.07277 7.19039 9.09107 10.9842 15.3097 15.8334C27.7457 25.5308 48.9894 39.4551 84.285 56.4551L84.3006 56.4627L84.3164 56.4696L348.88 172.803L348.881 172.803C403.348 196.659 438.751 250.233 439.713 309.7L439.713 309.71L439.879 315.942L439.879 315.955L440.516 363.308L440.516 363.309L440.932 390.524C440.626 389.953 440.283 389.33 439.901 388.658C437.787 384.949 434.459 379.751 429.584 373.762C419.833 361.782 403.9 346.642 379.146 333.925L379.124 333.913L379.102 333.903L91.0427 203.152C64.7877 191.185 42.4802 172.044 26.7108 147.953C10.9418 123.862 2.35759 95.8091 1.95479 67.0529C1.95478 67.0522 1.95477 67.0515 1.95476 67.0508L1.8026 51.5191L1.80253 51.5143L1.31819 18.3886L1.31814 18.3859L1.05039 2.90482Z" stroke="url(#paint1_radial_1_55)" stroke-opacity="0.5" stroke-width="2"/>
                      </g>
                      <defs>
                        <filter id="filter0_b_1_55" x="-4" y="-4" width="450" height="403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_55"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_55" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_55" x1="0" y1="0" x2="442.355" y2="394.602" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0.4"/>
                          <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                        <radialGradient id="paint1_radial_1_55" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(221 197.5) rotate(90) scale(197.5 221)">
                          <stop stopColor="white"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                        </radialGradient>
                      </defs>
                  </svg>
                  </div> */}


                  {/* <div className=' scale-[90%] -mt-44 pl-16'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="353" height="313" viewBox="0 0 353 313" fill="none">
                     <g filter="url(#filter0_b_1_56)">
                       <path d="M72.2997 161.617L302.371 265.244C341.734 285.367 353 313 353 313L352.666 287.925L352.026 250.389V245.437C351.718 222.238 344.681 199.614 331.751 180.255C318.821 160.895 300.542 145.613 279.087 136.226L67.807 44.0698C11.4055 17.2483 0 0 0 0L0.152996 14.6899L0.486818 40.8787L0.639814 53.1754C0.960961 76.1073 7.86817 98.4764 20.556 117.674C33.2438 136.872 51.1892 152.107 72.2997 161.603V161.617Z" fill="url(#paint0_linear_1_56)" fill-opacity="0.5"/>
                       <path d="M351.666 287.942L351.942 308.665C351.8 308.411 351.65 308.145 351.491 307.869C349.795 304.921 347.126 300.792 343.219 296.034C335.404 286.515 322.642 274.484 302.826 264.354L302.804 264.342L302.781 264.332L73.2997 160.97V160.956L72.7099 160.691C51.771 151.272 33.973 136.162 21.3902 117.123C8.80766 98.0843 1.95832 75.9018 1.63973 53.1621C1.63972 53.1618 1.63972 53.1616 1.63972 53.1614L1.48674 40.8663L1.48674 40.866L1.15294 14.6795L1.15291 14.6772L1.02951 2.82775C1.29918 3.12575 1.60224 3.452 1.94126 3.8059C3.92946 5.88133 7.15518 8.90823 12.1408 12.7676C22.1109 20.4854 39.1272 31.5385 67.3776 44.9729L67.3923 44.9799L67.4072 44.9864L278.686 137.142C299.967 146.453 318.096 161.61 330.919 180.81C343.741 200.008 350.719 222.441 351.026 245.444V250.389V250.398L351.027 250.406L351.666 287.939L351.666 287.942Z" stroke="url(#paint1_radial_1_56)" stroke-opacity="0.5" stroke-width="2"/>
                     </g>
                     <defs>
                       <filter id="filter0_b_1_56" x="-4" y="-4" width="361" height="321" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                         <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                         <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_56"/>
                         <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_56" result="shape"/>
                       </filter>
                       <linearGradient id="paint0_linear_1_56" x1="-3.89336e-07" y1="0.00128474" x2="347.26" y2="306.959" gradientUnits="userSpaceOnUse">
                         <stop stopColor="white" stopOpacity="0.4"/>
                         <stop offset="1" stopColor="white" stopOpacity="0"/>
                       </linearGradient>
                       <radialGradient id="paint1_radial_1_56" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(176.5 156.5) rotate(90) scale(156.5 176.5)">
                         <stop stopColor="white"/>
                         <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                       </radialGradient>
                     </defs>
                   </svg>
                  </div> */}



                  {/* <div className=' scale-[90%] -mt-28 pl-32'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="263" height="247" viewBox="0 0 263 247" fill="none">
                     <g filter="url(#filter0_b_1_57)">
                       <path d="M53.9713 127.595L225.393 209.376C254.756 225.231 263 247 263 247L262.684 227.147L262.217 197.534V193.536C261.571 156.078 240.466 122.466 207.778 107.425L50.4675 34.7421C8.40894 13.6073 0 0 0 0L0.151137 11.5255L0.46717 32.1778L0.63204 41.7871C1.0992 78.9143 21.9018 112.374 53.9575 127.581L53.9713 127.595Z" fill="url(#paint0_linear_1_57)" fill-opacity="0.5"/>
                       <path d="M1.03829 2.91331C1.09972 2.98256 1.16288 3.05326 1.22781 3.12539C2.71005 4.77212 5.11248 7.16783 8.82716 10.2183C16.2555 16.3185 28.9379 25.0425 50.0185 35.6357L50.0332 35.643L50.0481 35.6499L207.359 108.333L207.36 108.333C239.675 123.203 260.574 156.449 261.217 193.544V197.534V197.542L261.217 197.55L261.684 227.163L261.928 242.499C260.667 240.198 258.748 237.083 255.999 233.523C250.193 226.002 240.687 216.498 225.868 208.497L225.846 208.485L225.824 208.474L54.5577 126.766L54.5431 126.752L54.3861 126.677C22.695 111.644 2.0946 78.5424 1.63197 41.7745L1.63189 41.7699L1.46705 32.1625L1.46702 32.1607L1.15105 11.5124L1.15102 11.5102L1.03829 2.91331Z" stroke="url(#paint1_radial_1_57)" stroke-opacity="0.5" stroke-width="2"/>
                     </g>
                     <defs>
                       <filter id="filter0_b_1_57" x="-4" y="-4" width="271" height="255" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                         <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                         <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_57"/>
                         <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_57" result="shape"/>
                       </filter>
                       <linearGradient id="paint0_linear_1_57" x1="0" y1="0" x2="262.78" y2="247.234" gradientUnits="userSpaceOnUse">
                         <stop stopColor="white" stopOpacity="0.4"/>
                         <stop offset="1" stopColor="white" stopOpacity="0"/>
                       </linearGradient>
                       <radialGradient id="paint1_radial_1_57" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(131.5 123.5) rotate(90) scale(123.5 131.5)">
                         <stop stopColor="white"/>
                         <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                       </radialGradient>
                     </defs>
                   </svg>
                  </div> */}


                  <div className=' absolute w-full top-0 flex  gap-2 md:gap-4 mt-12  max-w-full  justify-center  md:h-full flex-row items-end'>
                     <div className="card flex md:gap-4   scale-[80%] md:scale-[90%] flex-col items-center justify-center  p-2 md:p-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                        <path d="M42 0C18.816 0 0 18.816 0 42C0 65.184 18.816 84 42 84C65.184 84 84 65.184 84 42C84 18.816 65.184 0 42 0ZM57.162 26.628C61.656 26.628 65.268 30.24 65.268 34.734C65.268 39.228 61.656 42.84 57.162 42.84C52.668 42.84 49.056 39.228 49.056 34.734C49.014 30.24 52.668 26.628 57.162 26.628ZM31.962 19.992C37.422 19.992 41.874 24.444 41.874 29.904C41.874 35.364 37.422 39.816 31.962 39.816C26.502 39.816 22.05 35.364 22.05 29.904C22.05 24.402 26.46 19.992 31.962 19.992ZM31.962 58.338V74.088C21.882 70.938 13.902 63.168 10.374 53.256C14.784 48.552 25.788 46.158 31.962 46.158C34.188 46.158 37.002 46.494 39.942 47.082C33.054 50.736 31.962 55.566 31.962 58.338ZM42 75.6C40.866 75.6 39.774 75.558 38.682 75.432V58.338C38.682 52.374 51.03 49.392 57.162 49.392C61.656 49.392 69.426 51.03 73.29 54.222C68.376 66.696 56.238 75.6 42 75.6Z" fill="url(#paint0_linear_1_73)"/>
                        <defs>
                          <linearGradient id="paint0_linear_1_73" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00E1E7" stopOpacity="0.5"/>
                            <stop offset="1" stopColor="#5F41D9" stopOpacity="0.5"/>
                          </linearGradient>
                        </defs>
                      </svg>

                      <p className="p-4 text-center font-semibold text-md md:text-lg">
                         you can join us as a <span className=" text-orange-500 font-bold"> Researcher </span> here
                      </p>

                      <button className='btn px-16 py-1 hover:bg-[#2F91E0] hover:text-white text-lg font-semibold tracking-widest text-[#2F91E0]'>
                        Join  
                      </button>
                     </div>

                     <div className="card flex gap-2  md:gap-4  scale-[80%] md:scale-[90%] flex-col items-center justify-center p-2 md:p-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                        <path d="M42 0C18.816 0 0 18.816 0 42C0 65.184 18.816 84 42 84C65.184 84 84 65.184 84 42C84 18.816 65.184 0 42 0ZM57.162 26.628C61.656 26.628 65.268 30.24 65.268 34.734C65.268 39.228 61.656 42.84 57.162 42.84C52.668 42.84 49.056 39.228 49.056 34.734C49.014 30.24 52.668 26.628 57.162 26.628ZM31.962 19.992C37.422 19.992 41.874 24.444 41.874 29.904C41.874 35.364 37.422 39.816 31.962 39.816C26.502 39.816 22.05 35.364 22.05 29.904C22.05 24.402 26.46 19.992 31.962 19.992ZM31.962 58.338V74.088C21.882 70.938 13.902 63.168 10.374 53.256C14.784 48.552 25.788 46.158 31.962 46.158C34.188 46.158 37.002 46.494 39.942 47.082C33.054 50.736 31.962 55.566 31.962 58.338ZM42 75.6C40.866 75.6 39.774 75.558 38.682 75.432V58.338C38.682 52.374 51.03 49.392 57.162 49.392C61.656 49.392 69.426 51.03 73.29 54.222C68.376 66.696 56.238 75.6 42 75.6Z" fill="url(#paint0_linear_1_73)"/>
                        <defs>
                          <linearGradient id="paint0_linear_1_73" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00E1E7" stopOpacity="0.5"/>
                            <stop offset="1" stopColor="#5F41D9" stopOpacity="0.5"/>
                          </linearGradient>
                        </defs>
                      </svg>

                      <p className="p-4 text-center font-semibold  text-md md:text-lg">
                         you can join us as a <span className='text-orange-500 font-bold'> Designer </span> here
                      </p>

                      <button className='btn px-16 py-1 text-lg hover:bg-[#2F91E0] hover:text-white font-semibold tracking-widest text-[#2F91E0]'>
                        Join  
                      </button>
                     </div>

                    
      
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Home
