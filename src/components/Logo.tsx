import React from 'react'
import Link from 'next/link'
// import { string } from 'yup'


const Logo = ( {className = ""} ) => {
  return (
    <>
    <Link href='/'>
      <span className={`px-[25px] py-2 text-[32px] text-center leading-[38.73px] tracking-[-2%] bg-[#DBDBDB] font-extrabold font-secondary ${className}`}>LOGO</span>
    </Link>
      
    </>
  )
}
export default Logo