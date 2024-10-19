import Image from 'next/image'

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none '>
    <Image src={'/avatar2.png'} width={738} height={678} alt='' className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;
