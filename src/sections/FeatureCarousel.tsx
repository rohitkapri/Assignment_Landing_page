import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Image from "next/image";

function FeatureCarousel() {
  
  const testimonial = [
    {
      id: 1,
      icon: 'jam:cloud-thunder',
      description: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      image: '/assets/images/jane.png',
      name: 'Jane Cooper',
    },
    {
      id: 2,
      icon: 'game-icons:stars-stack',
      description: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      image: '/assets/images/Ralph.png',
      name: 'Ralph Edwards',
    },
    {
      id: 3,
      icon: 'game-icons:chess-rook',
      description: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      image: '/assets/images/Courtney.png',
      name: 'Courtney Henry',
    },
    {
      id: 4,
      icon: 'material-symbols-light:timer',
      description: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      image: '/assets/images/Cameron.png',
      name: 'Cameron',
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0);

  return (
<>   
 <section className="md:py-20 py-10 md:mb-20 mb-10 bg-[#155ADA] flex flex-col gap-20">

    <div className="w-full md:px-20 px-5 flex md:flex-row flex-col">
      <div className="md:w-[60%] w-full flex flex-col gap-6 text-white md:pr-20">
        <div className="">
            <h3 className="text-2xl font-semibold">Join other Sun harvesters</h3>
            <h1>Lorem ipsum dolor sit amet </h1>
        </div>
        <div>
            <p className="text-lg">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
        </div>

      </div>
      <div className="md:w-[40%] w-full flex justify-end pt-10 md:pr-10">
          <button className="text-black bg-[white] w-fit h-fit hover:bg-white">Lorem Ipsum</button>
      </div>

    </div>

    <div className="relative px-12 py-20 overflow-x-hidden">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          280: {slidesPerView: 1},
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{
          height: "400px", 
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
          overflow: "visible", 
        }}
      >
        {testimonial.map((cards,index) => (
          <SwiperSlide key={cards.id} className="flex items-center justify-center">
            <div
              className={`transition-all  duration-300 border border-gray-300 px-8 py-10 bg-white rounded-lg shadow-lg md:min-h-[250px] min-h-[180px] md:max-h-[400px] max-h-[350px] overflow-hidden flex flex-col gap-4 justify-between ${
                index === activeIndex ? "scale-y-125 shadow-2xl" : "scale-y-100"
              }`}
            >
              <div>
                <span ><Icon icon={`${cards.icon}`} width={64} height={64} className="text-blue-600"/></span>
              </div>
              <div>
                <p className=" font-Roboto">
{cards.description}                </p>
              </div>
              <div>
                <div className="flex gap-4 items-center"><Image width={32} height={32} src={`${cards.image}`} className="object-cover w-[40px] h-[40px] rounded-full" alt={"image"}/>
                 <span className="font-Roboto">
                  {cards.name}
                 </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-[0%] lg:left-[8%] md:left-[10%] left-[50%] transform -translate-x-1/2 flex gap-4">
        <button className="custom-prev border-white border text-white p-3 rounded-full hover:scale-100">
          <Icon icon={"fluent-mdl2:back"} width={24} height={24}/>
        </button>
        <button className="custom-next  border-white border text-white p-3 rounded-full hover:scale-100">
        <Icon icon={"fluent-mdl2:forward"} width={24} height={24}/>
        </button>
      </div>

      <style>{`
        .swiper-button-prev, .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </div>
    </section>
    </>

  );
}

export default FeatureCarousel;
