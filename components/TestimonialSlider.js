// testimonial data
const testimonialData = [
  {
    image: '/pp_byan.png',
    name: 'Byantara Nadhif A.D',
    position: 'Customer',
    message:
      'Websitenya bagus, punya fitur responsive, desainnya juga menarik. Saya mungkin akan menggunakan jasa ini lagi !',
  },
  {
    image: '/pp_iben.png',
    name: 'Ardhananta Ibanez',
    position: 'Customer',
    message:
      'Saya pernah memesan untuk layanan mobile 1x, saya berfikir akan membuatnya 2x. Saya sangat menyukainya ! Bravo !',
  },
  {
    image: '/pp_epan.png',
    name: 'Yehezkiel Evan M',
    position: 'Ex-Partner',
    message:
      'Saya pernah bekerja sama dengan Dia, orangnya baik dan sangat ramah. saya senang pernah bekerja sama dengannya',
  },
];

// Swiper component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] relative"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div
              className="flex-1 flex flex-col justify-center items-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute 
            xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
            >
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation buttons */}
      <div className="swiper-button-next text-white"></div>
      <div className="swiper-button-prev text-white"></div>
    </Swiper>
  );
};

export default TestimonialSlider;
