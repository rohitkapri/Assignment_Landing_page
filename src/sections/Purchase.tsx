"use client"

import React from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Image from "next/image";

interface PurchaseProps {
  className?: string;
}
const Purchase = ({ className = "" }: PurchaseProps) => {
  return (
    <>
      <section className="py-10 px-5 md:px-20 md:mb-40 mb-20 lg:mb-20 flex flex-col gap-10 relative border max-h-[724px]">
  <div className="w-full flex flex-col md:flex-row gap-10 md:bg-none bg-[url('/assets/images/purchase.svg')]">
    <div className="w-full md:w-1/2 flex flex-col gap-10 md:pr-10">
      <div className="gap-4 flex flex-col font-primary  md:text-black text-white px-5">
        <h1 className="text-[#1959AC] text-3xl md:text-[42px] leading-[1.2] font-primary font-bold">
          Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
        </p>
      </div>
      <div className="md:px-0 px-5">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          <span>Loerum Ipsum</span>
          <Icon icon="ep:right" width={24} height={20} />
        </button>
      </div>
      <div className="lg:min-h-[395px] md:hidden lg:flex z-10 max-h-[395px] h-full flex flex-col p-5 gap-5 bg-white shadow-md items-center justify-center backdrop-blur-[25px]">
        <h3 className="text-lg font-semibold w-full">Lorem Ipsum dolor sit</h3>
        <div className="flex flex-col gap-4 text-sm md:text-base">
          <p>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
          <p className="sm:flex hidden">Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
        </div>
      </div>
    </div>
    <div className="w-full  md:w-1/2 md:flex hidden justify-center md:justify-end -translate-y-10 md:-translate-y-20">
      <Image src={'/assets/images/purchase.svg'} width={570} height={570} alt={"image"} className="w-full md:w-[570px] md:-translate-y-24" />
    </div>
  </div>
  <div className="absolute -bottom-1 left-0 w-full md:w-[90%] h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
</section>
    </>
  );
};

export default Purchase;
