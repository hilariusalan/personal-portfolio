import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiTiktokLine, RiPinterestLine, RiGithubLine } from "react-icons/ri"

 const Socials = () => {
  return <div className="flex items-center gap-x-5 text-2xl xl:text-xl -mt-5 xl:mt-8">
    <Link href={'https://youtube.com/@halan-lj5ex?si=WPHZYpVGBn7pIzvU'} className="hover:text-accent transition-all duration-300 ">  
      <RiYoutubeLine/>
    </Link>
    <Link href={'https://www.instagram.com/rryansiusz___/'} className="hover:text-accent transition-all duration-300 ">  
      <RiInstagramLine/>
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100093693222595'} className="hover:text-accent transition-all duration-300 ">  
      <RiFacebookLine/>
    </Link>
    <Link href={'https://www.tiktok.com/@alan.tny'} className="hover:text-accent transition-all duration-300 ">  
      <RiTiktokLine/>
    </Link>
    <Link href={'https://github.com/hilariusalan'} className="hover:text-accent transition-all duration-300 ">  
      <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
