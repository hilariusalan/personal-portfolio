import Circles from '/components/Circles';
import { BsFillEnvelopeFill } from 'react-icons/bs'; // Importing a specific icon
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>Let's <span className='text-accent'>connect.</span></motion.h2>
          {/* form */}
          <motion.form variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto' onSubmit={handleSubmit}>
            {/* group */}
            <div className='flex gap-x-6 w-full'>
              <div className='flex-1'>
                <label htmlFor='name' className='sr-only'>Name</label>
                <input type='text' id='name' placeholder='Name' className='input' required />
              </div>
              <div className='flex-1'>
                <label htmlFor='email' className='sr-only'>Email</label>
                <input type='email' id='email' placeholder='Email' className='input' required />
              </div>
            </div>
            <div className='flex-1'>
              <label htmlFor='subject' className='sr-only'>Subject</label>
              <input type='text' id='subject' placeholder='Subject' className='input' required />
            </div>
            <div>
              <label htmlFor='message' className='sr-only'>Message</label>
              <textarea id='message' placeholder='Your message' className='input h-32' required></textarea>
            </div>
            <button type='submit' className='btn bg-accent text-white hover:bg-white hover:text-accent transition-all duration-300'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;