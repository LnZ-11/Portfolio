"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { MoveLeft } from "lucide-react";

function Carousel() {
  return (
    <div className="w-full h-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-xl h-full"
      >
        <SwiperSlide className="bg-gray-100 flex items-center justify-center rounded-lg h-full ">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/Images/BloomJuice.jpg" 
              alt="Slide 1" 
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#51DA02FF] bg-opacity-40 z-10 text-black pointer-events-none p-2">
              <p className='text-center font-[caveat] text-xl md:text-3xl'> 💡 Chaque bouteille de Bloom, c'est un petit pas vers une energie plus naturelle... et un grand pas loin des boissons industrielles </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 flex items-center justify-center rounded-lg h-full">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/Images/BloomJuice.jpg" 
              alt="Slide 2" 
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#51DA02FF] bg-opacity-40 z-10 text-black pointer-events-none p-2">
              <p className='text-center font-[caveat] text-xl md:text-3xl'> 💡 Saviez Vous que notre premiere recette nous a donné plus de grimaces que d'energie? Heureusement qu'on a rectifié le tire ! </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 flex items-center justify-center rounded-lg h-full">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/Images/BloomJuice.jpg" 
              alt="Slide 3" 
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#51DA02FF] bg-opacity-40 z-10 text-black pointer-events-none p-2">
              <p className='text-center font-[caveat] text-xl md:text-3xl'> 💡 Pourquoi Bloom ? car on voulait une boisson faite pour s'epanouire, pas juste pour tenir debout </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;