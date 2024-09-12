"use client"
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

const Footer = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <footer className="bg-blue-800 text-white py-5 md:py-10 w-full">
      
<div className="upper">
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="slogan flex items-center gap-2 text-xl flex-col my-4 md:my-0 w-full md:w-auto">
    <div className="flex items-center gap-2">
    <Image src="/images/logo1.png" alt="Logo" width={48} height={48} /> 
    <div className="font-bold text-lg">DiscountsOnServices</div>
    </div>
  
    <p className="text-sm mt-2">It&apos;s simple, fast and economical</p>
    
</div>
<div className="flex flex-col items-center gap-2">
    <div className="flex flex-col items-start gap-2"> 
    <div className="font-bold text-lg">Subscriptions</div>
    <ul>
        <li>Netflix</li>
        <li>YouTube Premium</li>
        <li>Spotify</li>
    </ul>
    </div>
    
</div>
<div className="flex flex-col items-center gap-2">
    <div className="flex flex-col items-start gap-2">
    <div className="font-bold text-lg">Site navigations</div>
    <ul>
        <li>About</li>
        <li>FAQ</li>
        <li>Support</li>
    </ul>
    </div>
</div>

<div className="flex items-center gap-2 text-xl w-full justify-between md:flex-col px-5 md:px-0 md:w-auto">
    <div className="flex items-center gap-2">
    <IoLogoWhatsapp size={24} />
    <FaTelegram size={24} />
    </div>
  
    <div className="dropdown dropdown-left  dropdown-top self-end">
          <div tabIndex={0} role="button" className="m-1 btn hover:bg-slate-500 border-0 bg-transparent flex text-white uppercase justify-center items-center gap-2">{locale} <IoIosArrowDown /></div>
          <ul tabIndex={0} className="dropdown-content bg-slate-500 text-white menu  rounded-box z-10 mt-2 p-2 shadow">
            <li><Link href={pathname} locale="en">English</Link></li>
            <li><Link href={pathname} locale="az">Azerbaijani</Link></li>
          </ul>
        </div>
    
</div>

    </div>
   
</div>

      <div className="mx-auto mt-8 pt-4 border-t md:border-t-0 border-white">
        <div className="flex flex-col w-full  justify-center items-center md:flex-row md:justify-around text-sm text-opacity-50">
          <a href="#" className="link link-hover">Privacy Policy</a>
          <p>Copyright 2024 © All Rights Reserved.</p>
          <p>Developed by ...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
