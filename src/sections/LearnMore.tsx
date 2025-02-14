'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'

interface LearnMoreProps {
    className?: string; 
  }
function LearnMore( { className = "" }: LearnMoreProps ) {
  return (
    <>
      <section className={`pt-10 lg:mt-40 md:mt-28 mb-20 border border-[#D4D4D4] flex flex-col md:mr-20 gap-10 relative ${className}`}>
        <div className='w-full h-full flex gap-10'>
        <div className='md:w-1/2 md:flex hidden items-start'>
         <Image src={'/assets/images/bike10.svg'} alt={'image'} width={550} height={550} className='-translate-y-1/4'/>
        </div>
        <div className='md:w-1/2 relative w-full  md:px-0 px-5 md:bg-none bg-[url("/assets/images/bike10.svg")] bg-cover md:text-black text-white bg-no-repeat flex flex-col gap-10'>
            <div className='flex flex-col gap-5 z-20'>
                <span className='text-2xl text-[#0546D2] tracking-[-4%]'>Lorem ipsum</span>
                <div className='flex flex-col text-[42px] leading-[49.22px] font-primary font-bold'>
                <h1 className='lg:pr-20'>
                 <span className='text-[#1959AC]'>Lorem</span> ipsum dolor sit amet consectetur. Enim donec.
                </h1>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non. 
                </p>

            </div>
            

            <div className='grid grid-cols-2 w-full justify-between gap-5 text-xl font-semibold z-20'>
                <span>Lorem Ipsum</span>
                <span>Lorem Ipsum</span>
                <span>Lorem Ipsum</span>
                <span>Lorem Ipsum</span>
                <span>Lorem Ipsum</span>
                <span>Lorem Ipsum</span>
            </div>
           
            <div className='flex items-center gap-5 mb-20 z-20'>
            <button>
                        <span>Loerum Ipsum</span>
                        <Icon icon = "ep:right" width={24} height={20}/>
                    </button>
               
            </div>
            <div className='md:hidden flex absolute inset-0 bg-black/50 z-10'></div>
        </div>
        
        
        </div>
        <div className='absolute z-30 -bottom-1 left-0 w-[90%] h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] '>

        </div>
      </section>
    </>
  )
}

export default LearnMore;
