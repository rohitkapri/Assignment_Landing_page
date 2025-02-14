'use client'

import React from 'react'
import Logo from '@/components/Logo'
import { motion } from 'motion/react'

const BannerTwo = () => {
  return (
    <>
      <motion.section
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }} 
      className='lg:mb-20 mb-10 py-10 bg-[url("/assets/images/banner2.svg")] bg-no-repeat bg-cover md:h-[607px] h-[450px] overflow-hidden'>
        <div className='w-full lg:px-20 md:px-10 px-5 overflow-hidden'>
            <div>
                <Logo/>
            </div>
            <div className='w-full h-full flex flex-col gap-10 lg:px-40 md:px-20 px-10 text-white text-center lg:pt-32 md:pt-16 pt-8'>
                <h1 className=''>LOREM IPSUM DOLOR SIT AMET COONSECTUERTU. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. QUIS ADISPISCING </h1> </div>
            </div>   
              </motion.section>
    </>
  )    
}

export default BannerTwo
