import styles from "./styles";
import "./App.css";
//Aman, Hero,
import { Navbar, Home, About, VMG } from "./components";
import Blogs from "./components/Blogs";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer";
import { MdOutlineArrowUpward } from "react-icons/Md";
import { useState } from "react";

export default function App() {
  const [fab, setFab] = useState("hidden");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30 && fab) {
      setFab(false);
    } else if (window.scrollY < 30 && !fab){
      setFab(true);
    }

  });
  return (
    <div className="w-full overflow-hidden AppDiv">
      <section
        className={` ${styles.flexStart}  ${styles.paddingX} z-20 absolute left-0 w-full top-0 font-poppins`}
      >
        <div className={` ${styles.boxWidth} `}>
          <Navbar />
        </div>
      </section>

      <section
        className={` ${styles.flexCenter}  ${styles.paddingX} w-full font-poppins`}
      >
        <Home />
      </section>

      <section
        className={` ${styles.flexCenter}  ${styles.paddingX} mt-[80px] w-full font-poppins`}
      >
        <div className={` ${styles.boxWidth}`}>
          <About />
        </div>
      </section>

      <section
        className={` ${styles.flexCenter}  ${styles.paddingX} mt-24 py-10 w-full bg-[#F3F3F4] font-poppins`}
      >
        <div className={` ${styles.boxWidth}`}>
          <VMG />
        </div>
      </section>

      <section
        className={` ${styles.flexCenter}  ${styles.paddingX} py-10 w-full font-poppins`}
      >
        <div className={` ${styles.boxWidth}`}>
          <Blogs />
        </div>
      </section>

      <section
        className={` ${styles.flexStart}  ${styles.paddingX} w-full top-0  shadow-gray-200 font-poppins`}
      >
        <div className={`w-full`}>
          <ContactForm />
        </div>
      </section>

      <section
        className={` ${styles.flexStart}  ${styles.paddingX} ${styles.paddingY} w-full font-poppins bg-black`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </section>

      <div
        className={
          ` fixed right-5 sm:right-10 bg-gradient-to-r from-[#00E1E7] to-[#5F41D9] p-4 rounded-full z-20 transform duration-1000  ease-in-out ${fab?" bottom-[-100%]":"bottom-8 "}` 
     
        }
      >
      
       <a href={"#top"}>
       <MdOutlineArrowUpward
          fill="white"
          color="red"
          size={20}
          className="font-bold"
        ></MdOutlineArrowUpward>
       </a>
      </div>
    </div>
  );
}
