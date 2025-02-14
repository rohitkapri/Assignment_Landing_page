import React from 'react';
import {motion} from 'motion/react'

const Feature = () => {
  const cards = [
    {
      id: 1,
      image: "/assets/images/building.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      id: 2,
      image: "/assets/images/buddha.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      id: 3,
      image: "/assets/images/women.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      id: 4,
      image: "/assets/images/orange.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
  ];
  return (
    <section className='px-5 md:px-10 lg:px-20 mb-20 bg-transparent flex flex-col gap-20 bg-[url("/assets/images/featureBackground.svg")] bg-no-repeat bg-top bg-cover'>
      <div className='w-full flex flex-col md:gap-10 gap-5 md:w-[60%]'>
        <h3 className='text-[#0546D2] text-2xl font-semibold'>Lorem ipsum dolor sit amet </h3>
        <h1 className='text-3xl md:text-[42px]'>LOREM IPSUM DOLOR SIT</h1>
        <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>
      </div>
      <motion.div 
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
      className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 md:px-10 lg:px-[120px]'>
        {cards.map((card) => (
          <div key={card.id} className='rounded-[12px] overflow-hidden border-2 border-[#F1F0F0] bg-white flex flex-col gap-5 pb-16'>
            <div>
              <img src={card.image} alt="image" className='max-h-[200px] w-full object-cover' />
            </div>
            <div className='mx-5 flex flex-col gap-[25px] md:gap-[35px]'>
              <div className='flex flex-col gap-3 md:gap-4'>
                <h4 className='font-bold'>{card.title}</h4>
                <p>{card.description}</p>
              </div>
              <a href="#" className='text-[#0546D2] underline underline-offset-4'>Learn More</a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feature;
