import Head from 'next/head';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <Head>
        <title>Portfolio | Hilarius Alan</title>
        <link rel="icon" href="/logo-nextjs.png" />
      </Head>
      {/* Teks */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
          {/* Judul */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='h1'
          >
            Hello everyone, I'm <span className='text-accent'>
              <Typewriter
                options={{
                  strings: ['Hilarius Alan.', 'Front-End Developer.', 'Android Developer.'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  pauseFor: 1000,
                }}
              />
            </span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Hello everyone👋. I am a student at SMKN 8 Semarang. Now I am 16 years old. The skills that I master stand out as a Front-End Developer, here is some information about me. <span className='text-white font-semibold'>Check It Now!</span>
          </motion.p>
          {/* Btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Gambar */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* Avatar */}
        <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          transition={{ duration: 1, ease: 'easeInOut' }} 
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
