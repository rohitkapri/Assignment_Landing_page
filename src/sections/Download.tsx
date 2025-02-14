
import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { motion } from 'motion/react'

function Download() {
  return (
    <>
      <section className='w-full lg:px-20 md:px-10 px-5 lg:mb-20 md:mb-10 mb-10 flex py-10 bg-[#F3F3F3] items-center'>
        <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        viewport={{ once: false, amount: 0.3 }}
         className='md:w-1/2 w-full flex flex-col pr-10 gap-20'>
            <div className='flex flex-col gap-5'>
            <h2 className='text-[#0546D2] md:text-2xl text-xl'>Lorem Ipsum</h2>
            <h1 className='text-[42px] font-extrabold'>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
            </div>
            <div className='flex gap-6'>
                <button className='flex bg-black text-white items-center rounded-[8px] px-2 py-1 gap-2'>
                    <span className='flex items-center w-fit'>
                        <Icon icon="logos:google-play-icon" width={35} height={35}/>
                    </span>
                    <span className='flex flex-col items-start'>
                        <span className='text-xs leading-none'>GET IT ON</span>
                        <span className='text-lg leading-none'>Google Play</span>
                    </span>
                </button>
                <button className='flex bg-black text-white items-center rounded-[8px] px-2 py-1 gap-2'>
                    <span className='flex items-center w-fit'>
                        <Icon icon="ri:apple-fill" width={35} height={35}/>
                    </span>
                    <span className='flex flex-col items-start'>
                        <span className='text-xs leading-none'>Download on the</span>
                        <span className='text-lg leading-none'>App Store</span>
                    </span>
                </button>
            </div>
        </motion.div>

        <div className='md:w-[50%] w-full md:flex hidden items-center justify-center'>
           <img src="/assets/images/mobile.png" alt="" className='object-contain' />
        </div>
      </section>
    </>
  )
}

export default Download
