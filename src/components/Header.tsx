'use client'
import React from 'react'
import Logo from './Logo'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <header className='w-full z-50 relative'>
        <nav className='flex w-full justify-between h-auto max-h-[100px] items-center py-5 md:px-10 lg:px-20 px-5'>
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='font-primary'>
              <Logo/>
            </motion.div>
            <div className='md:flex hidden'>
              <div className='flex gap-10 font-secondary '>
              
                <div>
                  <HoverCard openDelay={200} closeDelay={100} >
                  <HoverCardTrigger className='md:text-base lg:text-lg  text-[#1959AC] cursor-pointer group relative flex items-center gap-1 hover:text-blue-800'>Lorem Ipsum <Icon icon="lsicon:down-outline" width={24} className='absoute right-0 transition-transform duration-300 delay-200 group-hover:rotate-180'/> </HoverCardTrigger>
                  <HoverCardContent className='w-fit'>
                  <ul className='flex flex-col gap-3'>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  </ul>
                   </HoverCardContent>
                  </HoverCard>
                </div>
                <div>
                  <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger className='md:text-base lg:text-lg text-[#1959AC] cursor-pointer group relative flex items-center gap-1 hover:text-blue-800'>Lorem Ipsum <Icon icon="lsicon:down-outline" width={24} className='absoute right-0 transition-transform duration-300 delay-200 group-hover:rotate-180'/> </HoverCardTrigger>
                  <HoverCardContent className='w-fit'>
                  <ul className='flex flex-col gap-3'>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  </ul>
                   </HoverCardContent>
                  </HoverCard>
                  </div>
                  <div>
                  <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger className='md:text-base lg:text-lg text-[#1959AC] cursor-pointer group relative flex items-center lg:gap-1 hover:text-blue-800'>Lorem Ipsum <Icon icon="lsicon:down-outline" width={24} className='absoute right-0 transition-transform duration-300 delay-200 group-hover:rotate-180'/> </HoverCardTrigger>
                  <HoverCardContent className='w-fit'>
                  <ul className='flex flex-col gap-3'>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  <li><a href="#" className=' hover:text-blue-800'>dropdown1</a></li>
                  </ul>
                   </HoverCardContent>
                  </HoverCard>
                  </div>
                  
                 
                
              </div>
            </div>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
             <button className=' rounded-[5px] bg-white text-black hover:text-white text-[15px] font-bold border'> Sign In</button>
            </motion.div>
        </nav>
      </header>
    </>
  )
}

export default Header
