
import { Outlet,Route, Routes } from "react-router-dom";

import Blog1 from "./Blogs/Blog1.jsx";
import Blog2 from "./Blogs/Blog2.jsx";
import Blog3 from "./Blogs/Blog3.jsx";
import Blog4 from './Blogs/Blog4.jsx';
import Blog5 from './Blogs/Blog5.jsx';
import Catagory from "./Catagory"

const Blogs = () => {
  return (
    <div
     className="h-full lg:pt-24 pt-16 " id="blog">
      <div

        className="blogs-top mt-4 h-[15%] w-full flex flex-col gap-4">
        <p className="text-center text-md md:text-lg font-bold text-violet-600">OUR BLOG POSTS</p>
        <p className="text-xl md:text-4xl text-center font-bold">
          Please Read <span className="text-violet-600">Blogs</span> By Our Team
        </p>
        <div className="w-full justify-center flex">
          <div className="h-[2px] w-14 mt-3 bg-violet-500"></div>
        </div>
        <p></p>
      </div>
      <div className=" pt-10 flex-wrap flex mt-4 text-white gap-[5px] justify-center items-center text-center h-[15%] w-full">
      
          <Catagory id='0' bgColor="bg-senae" link="./blogBySenae" title='Senae' />
          <Catagory id='1' bgColor="bg-tade" link="./blogByTade" title='Tadele' />
          <Catagory id='2' bgColor="bg-nahom" link="./blogByNahom" title='Nahom' />
          <Catagory id='3' bgColor="bg-kalab" link="./blogByKalab" title='Kalab' />
          <Catagory id='4' bgColor="bg-kume" link="./blogByKume" title='Kume' />
      </div>

      <Outlet />
      
      <Routes>
        <Route path='*' element={<Blog1 />} />
        <Route path='/blogBySenae' element={<Blog1 />} />
        <Route path='/blogByTade' element={<Blog2 />} />
        <Route path='/blogByNahom' element={<Blog3 />} />
        <Route path='/blogByKalab' element={<Blog4 />} />
        <Route path='/blogByKume' element={<Blog5 />} />
      </Routes>

    </div>

    
  );
};

export default Blogs;
