'use client'
import React from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Image from "next/image";
import {motion} from 'motion/react'

interface CategoryProps {
    className?: string; 
  }
const About = ( { className = "" }: CategoryProps) => {
  return (
    <>
      <section className={`py-10 lg:pl-20 md:pl-10 px-5 mb-20 flex flex-col gap-10 relative bg-white ${className}`}>
        <div className="w-full h-full flex gap-10">
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="w-full ">
            <div className="pt-10 pr-10 pl-5 gap-5 flex flex-col font-primary">
              <p className="text-[#0546D2] font-semibold">Lorem ipsum dolor sit</p>
              <div className="flex flex-col lg:pr-28">
                <h1>LOREM IPSUM DOLOR SIT AMET DOLOR SIT AMET SIT</h1>
               
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisl iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-10 pr-10 pl-5">
              <div className=" flex gap-4">
                <span><Icon icon="carbon:road" width ='24' height='24'className=" pt-2 text-red-500"/></span>
                <p>
                    <span>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</span>
                    <span>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</span>
                </p>
                
              </div>
              <div className="flex gap-4">
                <span><Icon icon="carbon:road" width ='24' height='24'className=" pt-2 text-red-500"/></span>
                <p>
                    <span>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</span>
                    <span>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</span>
                </p>
                
              </div>
              <div className=" flex gap-4">
                <span><Icon icon="carbon:road" width ='24' height='24'className=" pt-2 text-red-500"/></span>
                <p>
                    <span>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</span>
                    <span>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</span>
                </p>
                
              </div>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="lg:flex hidden items-center">
            <Image src="/assets/images/contentimage.svg" width={577.42} height={577.42} alt="image" className="w-full lg:min-w-[577.42px] lg:max-w-[577.42px] max-h-[620px] h-auto object-cover" />
          </motion.div>
        </div>
        <div className="absolute -bottom-1 right-0 w-[90%] h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] "></div>
      </section>
    </>
  );
};

export default About;
