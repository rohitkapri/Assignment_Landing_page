'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { motion } from 'motion/react';

interface CategoryProps {
    className?: string; 
  }
function Category( { className = "" }: CategoryProps ) {
  return (
    <>
      <section className={`pt-10 px-10 my-20 border border-[#D4D4D4] flex flex-col lg:ml-20 md:bg-none bg-[url("/assets/images/category.svg")] md:text-black text-white gap-10 relative shadow-2xl bg-white ${className}`}>
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ amount: 0 }}
         exit={{ opacity: 0, x: -100 }}
         transition={{ duration: 1, ease: "easeOut" }} 
        className='w-full h-full md:flex md:flex-row flex-col  gap-10 z-20 '>
        <div className='md:w-1/2 w-full '>
            <div className='flex flex-col gap-5'>
                <p className='text-[#0546D2] font-semibold'>Lorem ipsum dolor sit</p>
                <div className='flex flex-col'>
                <h1>
                LOREM IPSUM 
                </h1>
                <h1>
                DOLOR SIT AMET
                </h1>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                </p>

            </div>
            <div className='flex flex-col gap-6 mt-10 mb-20'>
                <div className='w-full flex gap-10 items-center'>
                    <Image width={146} height={146} src="/assets/images/man1.svg" alt="" className='w-[20%]'/>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
                </div>
                <div className='w-full flex gap-10 items-center'>
                    <img src="/assets/images/handshake.svg" alt="" className='w-[20%]'/>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
                </div>
                <div className='w-full flex gap-10 items-center'>
                    <img src="/assets/images/handshake2.svg" alt="" className='w-[20%]'/>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 mb-20'>
            <button >
                        <span>Loerum Ipsum</span>
                        <Icon icon = "ep:right" width={24} height={20}/>
                    </button>
               <span className='flex items-center md:text-blue-800 text-white'><Icon icon = "famicons:call-outline" width={24} height={20} className=' pr-2'/>123456789</span>
            </div>
        </div>
        <div className='md:flex hidden md:w-1/2 w-full items-center justify-center'>
         <Image src={'/assets/images/category.svg'} alt={'image'} width={629} height={803}/>
        </div>
        </motion.div>
        <div className='absolute -bottom-1 left-0 w-[90%] h-5 bg-gradient-to-r z-20 from-[#043898] via-[#079902] to-[#170041] '>

        </div>
        <div className='md:hidden flex absolute inset-0 bg-black/80 z-10'></div>
      </section>
    </>
  )
}

export default Category
