import {AiOutlineArrowRight} from "react-icons/ai"
import { CgMenuRight } from "react-icons/Cg";
import { MdOutlineClear } from "react-icons/Md";
import logo from "./assets/td.png"
import { useState } from 'react'
const Navbar = () => {
  const [clickes,setClicked]=useState()
  const [linkescliked,setLinkesCliked]=useState("1")
  
  const linkto=(e)=>{
    setLinkesCliked(e)
    setClicked(false)
  }
 

  return (
    <nav className= "">
        <div className="" >
             <img src={logo} className=" h-[70px] w-[160px] " alt="" />
        </div>
        <div className={clickes?" mobile active":"mobile"}>
            <ul className="flex h-full items-center justify-center ">
                <li className=" list-none mr-5" onClick={()=>{
                  linkto("1")
                }}><a href="#hero" className={linkescliked==="1"?"active":""} >Catagories </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("2")
                }}><a href="" className={linkescliked==="2"?"active":""}>How its work </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("3")
                }}><a href="#partner" className={linkescliked==="3"?"active":""}>Become our partner </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("4")
                }}><a href="#contact" className={linkescliked==="4"?"active":""}>Contact Us </a></li>
                <button className="flex pl-5 pr-5 bg-[#FF35F7] hover:opacity-50 rounded-[5px]  items-center h-[40px] font-semibold "><span className="mr-3">Join our Telegram</span> <AiOutlineArrowRight/> </button>
        
            </ul>
           
        </div>
        
        <div className="btn"
        onClick={()=>{
          console.log("cliked");
          setClicked(!clickes)}}>{!clickes? <CgMenuRight/> : <MdOutlineClear/>}
             </div>
    </nav>
  )
}

export default Navbar