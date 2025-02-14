import Logo from '@/components/Logo'
import React from 'react'

function LastSecond() {
  return (
    <>
      <section className='w-full lg:p-60 md:p-30 p-12'>

        <div className='w-full lg:px-20 px-10  flex flex-col gap-10 items-center justify-center'>
            <div><Logo/></div>
            <div><h1 className=' text-center'>LOREM IPSUM DOLOR SIT AMET CONSECTUTOR. DUI.</h1></div>
            <div><p className='text-center md:px-20 px-0 text-lg'>Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.</p></div>
        </div>

      </section>
    </>
  )
}

export default LastSecond
