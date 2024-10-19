import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 ">
        {/* logo */}
        <Link href={'/'}>
          <h1 className="font-semibold text-white text-4xl mt-0 lg:mt-10">Hilarius <span className="font-thin">Alan</span><span className="text-accent text-[20px] ">.</span></h1>
        </Link>
        {/* socials */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
