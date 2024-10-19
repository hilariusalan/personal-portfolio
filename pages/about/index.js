import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiKotlin,
  SiTailwindcss,
  SiNativescript,
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiTailwindcss key="tailwind"/>,
          <SiNextdotjs key="next" />,
        ],
      },
      {
        title: 'Software Development',
        icons: [
          <SiKotlin key="kotlin" />,
          <FaReact key="react-native" />,
        ],
      },
    ],
  },
  {
    title: 'part of',
    info: [
      {
        title: 'Pangudi Luhur Xaverius Elementary School',
        stage: '2014 - 2020',
      },
      {
        title: 'State Junior High Scool 2 Semarang',
        stage: '2020 - 2023',
      },
      {
        title: 'State Vocational High School 8 Semarang',
        stage: '2023 - 2026',
      },
    ],
  },
  {
    title: 'Competitions',
    info: [
      {
        title: 'Invention Udayana 2024',
        stage: 'August 2024 - September 2024',
      },
      {
        title: 'Student Competency Competition',
        stage: 'October 2024 - March 2025',
      },
    ],
  },
  {
    title: 'Projects',
    info: [
      {
        title: 'The Bone - Booking Online Website',
        stage: 'April 2024',
      },
      {
        title: 'Portfolio Website',
        stage: 'July 2024',
      },
      {
        title: 'Vidart App - Video & Audio Downloader',
        stage: 'August - November 2024',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0); // State to track current tab

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left relative">
      <Circles />
      {/* Avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden animate-pulse xl:flex absolute bottom-0 -left-[370px] z-0"
      >
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-10">
        {/* Text */}
        <div className='flex flex-col flex-1 justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 text-md'>Start from <span className='text-accent'>Editing</span><br/>to Front-End Developer.</motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '>
          7 years ago, when I was in grade 4 of junior school, I started to be interested in editing. I studied editing until I was used to using Alight Motion, KineMaster, and several other editing applications. Then I became interested in Front-End Development.
          </motion.p>
          {/* Counters */}
          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Trust score */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={97} duration={3} delay={1}/>%
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Trust Score</div>
              </div>
              {/* Experience score */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={91} duration={3} delay={1}/>%
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Experience Score</div>
              </div>
              {/* Relationships */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={999} duration={3} delay={1}/>+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Relationships</div>
              </div>
              {/* Mastered Languages */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={3} delay={1}/>+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Mastered Languages</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden" className='flex flex-col w-full xl:max-w-[48%] h-[480px] scrollable'>
          {/* Navigation Menu */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 cursor-pointer justify-center xl:justify-start">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                }`}
                onClick={() => setIndex(itemIndex)}
                style={{ minWidth: '100px', textAlign: 'center' }} // Set minimum width for each menu item
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Info Display */}
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4">
                <div className="text-lg font-semibold">{item.title}</div>
                {/* Render icons if available */}
                {item.icons && (
                  <div className="flex gap-x-4 mt-2 flex-wrap justify-center xl:justify-start">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white/60">
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
                {/* Render stage if available */}
                {item.stage && <div className="text-sm text-gray-500">{item.stage}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
