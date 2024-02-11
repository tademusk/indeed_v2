
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs"

function Footer() {
  return (
    <div className="flex flex-col items-center gap-5">
      <span className=" text-white font-bold  text-xl md:text-3xl ">Indeed Community</span>
      <div className="flex flex-row justify-center gap-4 ">
        <a href="/" className=" "> <BsInstagram className="h-7 w-7 md:h-10 md:w-10 p-1 rounded-full bg-slate-50 p-1" color="black" fill="" /> helo</a>
        <a href="/"><BsFacebook   className="h-7 w-7 md:h-10 md:w-10 p-1 rounded-full bg-slate-50"  color="black"> </BsFacebook></a>
        <a href="/"><BsTelegram   className="h-7 w-7 md:h-10 md:w-10 p-1 rounded-full bg-slate-50 " color="black" > </BsTelegram></a>
        <a href="/"> <BsTwitter className="h-7 w-7 md:h-10 md:w-10 p-1 rounded-full bg-slate-50 text-black" color="black" > </BsTwitter></a>
      </div >
      <div style={{display:"flex",flexDirection:"column",gap:"3px"}}><span style={{fontSize:"12px"}}> &copy; Dilla University</span>
      <span>  Developed By <a href="https://ahavahswd.netlify.app/" target="_blank" rel="noopener noreferrer" style={{fontWeight:"bolder"}}>Ahavah SWD</a> </span></div>
      
    </div>
  )
}

export default Footer