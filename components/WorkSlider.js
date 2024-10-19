  // Data
  const workSlider = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/mockup1.jpg',
          },
          {
            title: 'title',
            path: '/mockup2.jpg',
          },
          {
            title: 'title',
            path: '/mockup3.png',
          },
          {
            title: 'title',
            path: '/thumb4.jpg',
          },
        ],
      },
      {
        images: [
          {
            title: 'title',
            path: '/thumb4.jpg',
          },
          {
            title: 'title',
            path: '/mockup1.jpg',
          },
          {
            title: 'title',
            path: '/mockup2.jpg',
          },
          {
            title: 'title',
            path: '/mockup3.png',
          },
        ],
      },
    ],
  };

  // Komponen Swiper
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  import Image from 'next/image';
  import {BsArrowRight} from 'react-icons/bs'

  const WorkSlider = () => {
    return (
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlider.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imgIndex) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="relative overflow-hidden w-full h-full">
                      {/* Image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                        className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ungu to-unguSemutua opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                      
                      {/* Title */}
                      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] '>
                          {/* Title Part 1 */}
                          <div className="delay-100 ">LIVE</div>
                          {/* Title Part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">PROJECT</div>
                          {/* Icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default WorkSlider;
