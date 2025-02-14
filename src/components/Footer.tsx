import React from 'react'
import Logo from './Logo'

function Footer() {
  return (
    <>
      <footer className='w-full flex mt-20 bg-[#171E2B] text-white py-20 md:flex-row flex-col md:px-0 px-5'>
        <div className='md:w-[20%] w-full flex justify-center'>
            <Logo className="text-black"/>
        </div>
        <div className='md:w-[80%] w-full md:gap-0 gap-10 grid md:grid-cols-4 grid-cols-2 justify-between py-10'>
            <div className='flex flex-col gap-12'>
                <h3 className='font-bold text-xl leading-[23px] tracking-[-4%]'>Lorem Ipsum</h3>
                <div className='flex flex-col text-lg leading-[23px] tracking-[-4%] gap-6'>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                </div>

            </div>
            <div className='flex flex-col gap-12'>
                <h3 className='font-bold text-xl leading-[23px] tracking-[-4%]'>Lorem Ipsum</h3>
                <div className='flex flex-col text-lg leading-[23px] tracking-[-4%] gap-6'>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                </div>

            </div>
            <div className='flex flex-col gap-12'>
                <h3 className='font-bold text-xl leading-[23px] tracking-[-4%]'>Lorem Ipsum</h3>
                <div className='flex flex-col text-lg leading-[23px] tracking-[-4%] gap-6'>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                  
                </div>

            </div>
            <div className='flex flex-col gap-12'>
                <h3 className='font-bold text-xl leading-[23px] tracking-[-4%]'>Lorem Ipsum</h3>
                <div className='flex flex-col text-lg leading-[23px] tracking-[-4%] gap-6'>
                    <span>Lorem Ipsum</span>
                    
                </div>

            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
