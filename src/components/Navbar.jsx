import {AiOutlineArrowRight} from "react-icons/ai"
import { CgMenuRight } from "react-icons/Cg";
import { MdOutlineClear } from "react-icons/Md";
import logo from "../assets/logo.png";
import { useState } from 'react'
const Navbar = () => {
  const [clickes,setClicked]=useState()
  const [linkescliked,setLinkesCliked] = useState(0)
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10 && clickes) {
     setClicked(false)
    } 

  });
  const linkto=(e)=>{
    setLinkesCliked(e)
    setClicked(false)
  }

  const menuLists=[
    {
      name:"Home",
      to:"#top"
    },
    {
      name:"Blog",
      to:"#blog"
    },
    {
      name:"About",
      to:"#about"
    },
    {
      name:"Contact Us",
      to:"#contact"
    },
  ]

  return (
 <>
 <div className={`absolute left-0  w-full bg-gradient-to-r from-[#40a0dc] to-[#5F41D9] z-40 px-4 transform duration-300 ease-in-out ${clickes? "h-screen":'h-0'} overflow-hidden md:hidden`}>
 <div className="flex flex-row justify-between " >
             <img src={logo} className=" h-[75px] w-[180px] " alt="" />
             <div className="flex items-center "
        onClick={()=>{
        
          setClicked(!clickes)}}> <MdOutlineClear size={30} color="white"/>
             </div>
  </div>
  <div className="">
            <ul className="  h-full text-whitee text-white items-center justify-center flex-col  space-y-4 mt-4">
            {
              menuLists.map((list,index)=>{
                return <li className=" list-none mr-5" key={index} onClick={()=>{
                  linkto(index)
                }}><a href={list.to} className={` transform duration-300  ease-linear opacity-75 hover:opacity-100 ${linkescliked===index?"active opacity-100":""}`} >{list.name} </a></li>

              })
              } <button style={{ color : '#00E1E7'}} className="flex pl-5 pr-5 border border-white  hover:opacity-90 hover:bg-white rounded-[5px]  items-center h-[40px] font-semibold "><span className="mr-2">Apply as a volunteer</span> <AiOutlineArrowRight/> </button>
        
            </ul>
           
        </div>

 </div>
    <nav className= "flex items-center md:py-1 justify-between">
        <div className="" >
             <img src={logo} className=" h-[75px] w-[180px] " alt="" />
        </div>
        <div className={clickes?" hidden md:block active":"mobile"}>

            <ul className="hidden tracking-widest lx:flex h-full text-whitee text-white items-center justify-center gap-2 ">
              {
              menuLists.map((list,index)=>{
                return <li className=" list-none mr-5" key={index} onClick={()=>{
                  linkto(index)
                }}><a href={list.to} className={` transform duration-300  ease-linear opacity-75 hover:opacity-100 ${linkescliked===index?"active opacity-100":""}`} >{list.name} </a></li>

              })
              }
     <button style={{ color : '#00E1E7'}} className="flex pl-5 pr-5 border border-white  hover:opacity-90 hover:bg-white rounded-[5px]  items-center h-[40px] font-semibold "><span className="mr-2">Apply as a volunteer</span> <AiOutlineArrowRight/> </button>
        
            </ul>
           
        </div>
        
        <div className="lx:hidden"
        onClick={()=>{
          console.log("cliked");
          setClicked(!clickes)}}>{ <CgMenuRight size={45} color="white"/>}
             </div>
    </nav>
 </>
  )
}

export default Navbar