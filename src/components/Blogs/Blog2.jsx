import React from 'react'
import img from '../../assets/senae.jpg'
import { motion } from 'framer-motion'



const Blog2 = () => {
  return (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className='blogs-buttom grid lg:grid-cols-2 mt-8 text-white rounded-[15px] bg-tade h-[60%]'>
        <div className="bt-left flex flex-col gap-10  p-14">
          <h1 className=' text-2xl font-bold text-center'>Healthy food and life</h1>
          <p className=' leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi tempore qui tenetur distinctio aperiam praesentium excepturi dolore. 
            Labore eius iusto laboriosam odio tenetur aut, 
            possimus dignissimos harum sunt molestias laborum?
          </p>
          <p className=' leading-7'>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Non soluta tempora molestias 
            delectus voluptas suscipit sint debitis magni. 
            Dolores ipsam eaque fugiat et cupiditate vel temporibus sit 
            officiis perferendis perspiciatis.
          </p>
        </div>
        <div className="bt-right p-14 flex flex-col justify-center">
          <img className='rounded-[15px]' src={img} alt="img here" />
        </div>
      </motion.div>
  )
}

export default Blog2
