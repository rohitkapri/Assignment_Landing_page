import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import {motion} from 'motion/react'

const Gallery = () => {
  return (
    <>
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="gallery mt-20 mb-20 lg:min-h-[765px] md:min-h-[600px] md:max-h-[600px] lg:max-h-[765px] md:px-20 px-5 md:pt-20 pt-5 gap-5 grid lg:grid-cols-2 grid-cols-1 bg-[#F1F5F9] overflow-hidden">
        <div className='flex flex-col justify-between overflow-hidden'>
             <div className='flex gap-5'>
            <div className='w-[70%] flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold text-xl'>NO LIMITS</h2>
                    <h1>Lorem ipsum dolor sit amet </h1>
                    
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                    </p>
                </div>
                <div>
                    <button>
                        <span>Loerum Ipsum</span>
                        <Icon icon = "ep:right" width={24} height={20}/>
                    </button>
                </div>

            </div>
            <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            viewport={{ once: false, amount: 0.3 }}
             className='w-[30%] flex justify-end items-end'>
                <Image width={135.07} height={241} src="/assets/images/bike1.svg" alt="bike1" className='lg:translate-y-1/2'/>
            </motion.div>
            </div> 
            <div className='flex gap-10'>
            <Image width={135} height={231} src="/assets/images/bike3.svg" alt="bike3" className='translate-y-10' />
            <Image width={459} height={239} src="/assets/images/bike2.svg" alt="bike2" className='translate-y-2'/>
            </div>  
        </div>
       <div className='flex flex-col gap-5 overflow-hidden'>
        <div className='flex gap-5 items-end justify-between'>
        <Image width={135} height={210} src="/assets/images/bike8.svg" alt="bike3" className='' />
        <Image width={459} height={240} src="/assets/images/bike2.svg" alt="bike2" className=''/>
        </div>
        <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        viewport={{ once: false, amount: 0.3 }}
        className='flex'>
        <Image width={624} height={312} src="/assets/images/bike6.svg" alt="bike3" className='object-cover w-full' />
        
        </motion.div>
        <div className='flex gap-5 items-end h-full justify-between '>
        <Image width={135} height={210} src="/assets/images/bike5.svg" alt="bike3" className='' />
        <Image width={459} height={240} src="/assets/images/bike4.svg" alt="bike2" className=''/>   
        </div>

       </div>
      </motion.section>
    </>
  )
}

export default Gallery
