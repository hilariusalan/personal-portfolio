// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxKeyboard,
  RxCamera,
} from "react-icons/rx";


// data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Expert in building efficient, scalable, and robust applications.',
  },
  {
    icon: < RxKeyboard />,
    title: 'Editing',
    description: 'Skilled in precise, creative editing for photos and videos.',
  },
  {
    icon: <RxCamera />,
    title: 'Photography',
    description: 'Talented in capturing breathtaking moments through creative angles.',
  },
  {
    icon: <FaTools />,
    title: 'Engineering',
    description: 'Experienced in solving complex problems with innovative solutions.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Proficient at creating visually striking and functional designs.',
  },
  
  
];

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FaRegKeyboard, FaTools, FaYoutube } from "react-icons/fa";
import { SiAdobeaftereffects } from "react-icons/si";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-costumPurple h-max px-6 py-8 rounded-lg 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-hoverPurple transition-all duration-300">
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8 ">
                <div className="font-bold text-lg mb-2 ">{item.title}</div>
                <p className="text-gray-600 max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl mt-2">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
