import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const testimonials = [
  {
    id: 1,
    image: '/assets/images/bike11.png',
    subheading: 'Artist & Investor',
    description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estEnim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est',

  },
  {
    id: 2,
    image: '/assets/images/bike11.png',
        subheading: 'Artist & Investor',
    description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estEnim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est',
    
  },
  {
    id: 3,
    image: '/assets/images/bike11.png',
        subheading: 'Artist & Investor',
    description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estEnim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est',
    
  },
  {
    id: 4,
    image: '/assets/images/bike11.png',
        subheading: 'Artist & Investor',
    description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estEnim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est',
    
  },
  {
    id: 5,
    image: '/assets/images/bike11.png',
        subheading: 'Artist & Investor',
    description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estEnim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est',
    
  },
];

const TestimonialSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
 

  return (
    <>

    <section className="w-full flex flex-col  items-center justify-center md:p-20 p-5 gap-20 bg-transparent mb-20">
      <div className="w-full flex gap-8 flex-col">
        <h1 className="text-center">
        Lorem ipsum dolor sit amet 
        </h1>
        <p className="text-center text-lg leading-[25px]">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

   
    <div className="relative w-full">


      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => `
            <span class="${className} custom-bullet"></span>
          `,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          

      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="p-6 bg-white flex flex-col items-center w-full"
          >
            <div className="w-full flex ">
              <div className="w-1/2 md:flex hidden ">
                <Image width={680} height={412} src={`${testimonial.image}`} alt="image" className="w-full h-full max-h-[412px] min-w-[680]"/>
              </div>
              <div className="flex flex-col md:w-1/2 w-full self-center border h-fit  border-[#E2E8F0] gap-5 p-10 lg:-translate-x-24 shadow-xl bg-white backdrop-blur-[10px] rounded-[5px]">
                <h3 className="text-2xl text-[#475569] font-semibold">{testimonial.subheading}</h3>
                <p className="line-clamp-3 text-lg">{testimonial.description}</p>
                <a href="#" className="text-[#1959AC] flex gap-2 items-center pt-5 font-medium" ><span className="leading-none">Read Full Story</span><Icon icon={"ep:right"} width={20} className="flex-shrink-0 self-center mt-1" /></a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Pagination */}
      <div className="flex justify-center items-center mt-12">

        <div className="custom-pagination flex gap-2 w-full"></div>

        
      </div>


      <style    >{`
  .custom-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-bullet {
    width: 8px;
    height: 8px;
    background-color: #1959AC ;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .custom-bullet.swiper-pagination-bullet-active {
    width: 40px;
    border-radius: 12px;
    background-color: #1959AC;
  }
`}</style>

    </div>
    </section>
    </>
  );
};

export default TestimonialSlider;