'use client'

import React from 'react'
import Logo from '@/components/Logo'
import { motion } from 'motion/react'
const BannerOne = () => {
  return (
    <>
      <motion.section
     initial={{ scaleY: 0, opacity: 0 }}
     whileInView={{ scaleY: 1, opacity: 1 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     style={{ transformOrigin: "center" }}
       className='lg:mb-20 mb-10 py-10 bg-[url("/assets/images/bannerone.svg")] bg-no-repeat bg-cover md:h-[652px] h-[500px] overflow-hidden'>
        <div className='w-full lg:px-20 md:px-10 px-5 overflow-hidden'>
            <div className='flex items-center'>
                <Logo/>
            </div>
            <div className='w-full flex flex-col gap-10 lg:px-40 md:px-20 px-5 py-2 text-white items-center text-center justify-center'>
                <h1 className='lg:text-[42px] text-[24px]'>LOREM IPSUM DOLOR SIT AMET COONSECTUERTU. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.</h1>
                <p className='xl:px-40 lg:px-16 px-0 text-center line-clamp-3'>Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
                </p>
                <p className='xl:px-40 lg:px-16 px-0 text-center line-clamp-3'>Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.</p>
            </div>

        </div>
      </motion.section>
    </>
  )
}

export default BannerOne
