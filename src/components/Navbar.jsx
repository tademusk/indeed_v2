import {AiOutlineArrowRight} from "react-icons/ai"
import { CgMenuRight } from "react-icons/Cg";
import { MdOutlineClear } from "react-icons/Md";
import logo from "../assets/logo.png";
import { useState } from 'react'
const Navbar = () => {
  const [clickes,setClicked]=useState()
  const [linkescliked,setLinkesCliked] = useState("1")
  
  const linkto=(e)=>{
    setLinkesCliked(e)
    setClicked(false)
  }

  return (
    <nav className= "flex items-center md:py-1 justify-between">
        <div className="" >
             <img src={logo} className=" h-[75px] w-[180px] " alt="" />
        </div>
        <div className={clickes?" hidden md:block active":"mobile"}>
            <ul className="hidden tracking-widest lx:flex h-full text-whitee text-white items-center justify-center gap-2 ">
                <li className=" list-none mr-5" onClick={()=>{
                  linkto("1")
                }}><a href="#hero" className={linkescliked==="1"?"active":""} >Home </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("2")
                }}><a href="" className={linkescliked==="2"?"active":""}>About </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("3")
                }}><a href="#partner" className={linkescliked==="3"?"active":""}>Researches </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("4")
                }}><a href="#partner" className={linkescliked==="4"?"active":""}>Designes </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("5")
                }}><a href="#partner" className={linkescliked==="5"?"active":""}>Blogs </a></li>
                <li className="list-none mr-5" onClick={()=>{
                  linkto("6")
                }}><a href="#contact" className={linkescliked==="6"?"active":""}>Contact Us </a></li>
                <button style={{ color : '#00E1E7'}} className="flex pl-5 pr-5 border border-white  hover:opacity-90 hover:bg-white rounded-[5px]  items-center h-[40px] font-semibold "><span className="mr-2">Apply as a volunteer</span> <AiOutlineArrowRight/> </button>
        
            </ul>
           
        </div>
        
        <div className="lx:hidden"
        onClick={()=>{
          console.log("cliked");
          setClicked(!clickes)}}>{!clickes? <CgMenuRight size={45} color="white"/> : <MdOutlineClear size={45} color="white"/>}
             </div>
    </nav>
  )
}

export default Navbar