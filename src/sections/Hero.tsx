'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify-icon/react';
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <section className='w-full lg:min-h-[823px] min-h-screen lg:mb-20 md:mb-10 mb-5 flex overflow-visible bg-white '>
        
        
        <motion.div 
        
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className='lg:w-1/2 w-full relative lg:bg-none bg-no-repeat bg-cover lg:text-black text-white bg-[url("/assets/images/heroimage.svg")] flex flex-col items-center justify-center md:px-10 px-5 lg:px-20 gap-20'>
           <div className='flex flex-col gap-5 z-20'>
            <h1 className=''>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse. </p>
           </div>
           <div className='flex flex-col w-full gap-4 z-20'>
            <div className='flex gap-2'>
            <input type="text" className=' w-1/2 border border-[#C3C3C3] rounded-[6px] px-3' />
            <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }} 
            >submit <Icon icon={'ep:right'} width={16}/></motion.button>
            </div>
            <span className=' flex items-center text-center'><Icon icon={"mdi:tick-circle"} width={30} height={30} className='text-[#155ADA] pr-3'/> No credit card required! </span>
           </div>
           <div className='lg:hidden flex absolute inset-0 bg-black/50 z-10'></div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className='lg:w-1/2 lg:flex hidden relative h-[821px]'>
           <Image width={600} height={821} src="/assets/images/heroimage.svg" alt="this is a image" className='absolute w-full h-full object-cover clip-slant z-10 -top-20 [clip-path:polygon(30%_0%,100%_0%,100%_100%,0%_100%)] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.5)]'/>
           <div className='absolute bottom-[8%] w-full h-[50px] z-20 bg-white blur-3xl'></div>
        </motion.div>
    

      </section>
    </>
  )
}

export default Hero
