"use client"
import { useSession } from "next-auth/react"
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { BsFillInfoSquareFill } from "react-icons/bs";

import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import Auth from "./Auth";
import { FaAngleDown } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import Logout from "./Logout";
import MobileAuth from "./MobileAuth";
import Button from "./Button";
import { getSubsName } from "@/app/libs/getSubs";
import Dropdown from "./Dropdown";

export default function Header(): React.ReactNode {
  const pathname = usePathname();
  const locale = useLocale();
  const [subs, setSubs] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);
<<<<<<< HEAD

=======
  
>>>>>>> 9ee86d9 (asmdkasm)
  const handleClick = () => {
    const elem:any = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };
  



  const getSubs = async () => {
    const res = await getSubsName();
    setSubs(res);
  }
  useEffect(() => {
    getSubs()
  },[])
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession()

  return (
    <header className="flex bg-white z-50  top-0 p-5 shadow-xl items-center w-full justify-between  text-xl sticky ">
      <Link href="/" className="flex items-center justify-center gap-2 text-xl cursor-pointer">
        <Image src="/images/logo.png" width="48" height="48" alt="logo" /><span className="hidden md:flex">DiscountsOnServices</span>
        
      </Link>
      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-4 2xl:gap-8 [&>*]:capitalize [&>*]:duration-300 ">
        <div className={`dropdown dropdown-bottom `}  >
          <Dropdown classNameList="w-52 flex flex-col" title={<><span className={`flex gap-2 ${pathname.startsWith('/subscriptions') ? 'text-blue-500' : ''}`}>{t('subs')}</span>  <FaAngleDown /></>}>
          {subs.map((sub: any) => (
              <Link key={sub.id} href={`/subscriptions/${sub.slug}`} className={`hover:text-blue-500 px-4 py-2 hover:bg-gray-200 duration-200 ${pathname === `/subscriptions/${sub.slug}` ? 'bg-gray-200 text-blue-500' : ''}`}>{sub.name}</Link>
            ))}
          </Dropdown>
     
        </div>
        <Link className={`hover:text-blue-500 ${pathname === '/about'||pathname === '/haqqimizda' ? 'text-blue-500' : ''}`} href="/about">{t('about')}</Link>
        <Link className={`hover:text-blue-500 ${pathname === '/faq' ? 'text-blue-500' : ''}`} href="/faq">faq</Link>
        <Link className={`hover:text-blue-500 ${pathname === '/contact' ? 'text-blue-500' : ''}`} href="/contact">{t('contact')}</Link>
      </nav>
      <div className="hidden justify-center items-center lg:flex gap-2 [&>*]:duration-300">
        <IoLogoWhatsapp className="text-4xl hover:text-blue-500" />
        <FaTelegram className="text-4xl hover:text-blue-500" />
        <div className="dropdown">
          <div tabIndex={0} role="button" className="m-1 btn bg-transparent flex uppercase justify-center items-center gap-2 border-0">{locale} <IoIosArrowDown /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 p-2 shadow [&>li]:font-bold [&>li]:text-lg">
            <li><Link href={pathname} className={locale === 'en' ? 'text-blue-500' : ''} locale="en">English</Link></li>
            <li><Link href={pathname} className={locale === 'az' ? 'text-blue-500' : ''} locale="az">Azerbaijani</Link></li>
          </ul>
        </div>

        {status === 'authenticated' ?
        <>
               <Dropdown className="dropdown-left dropdown-bottom" classNameList="flex  mt-5 flex-col [&>a]:p-4" title={<span className=" text-xl hover:text-blue-500 duration-300"><FaUser/></span>}>
            <Link href="/account-info"  className={`hover:text-blue-500 hover:bg-gray-200 duration-300 ${pathname === '/account-info' ? 'bg-gray-200 text-blue-500' : ''}`}>Account Info</Link>
            <Link href="/mysubscriptions" className={`hover:text-blue-500 hover:bg-gray-200 duration-300 ${pathname === '/mysubscriptions' ? 'bg-gray-200 text-blue-500' : ''}`}>My Subscriptions</Link>
            <a className="hover:text-blue-500 hover:bg-gray-200 duration-300" href="#logout">
    {t("logout")}
    </a>
        </Dropdown>
        
        </>
         
          :
          <a href="#login">
          <Button className="hover:bg-blue-500 bg-blue-800 text-white">
            {t("login")}
          </Button>
        </a>
        }


        


        {/* Login Modal */}
        <Logout />
        <Auth />


      </div>
      {/* Desktop Menu End */}




      {/* Mobile Menu */}
      {!isOpen ? <RxHamburgerMenu className="cursor-pointer text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} /> : <HiOutlineXMark className="cursor-pointer bg-blue-500 text-white p-0.5 rounded-full text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} />}

      <div className={`absolute lg:hidden [&>ul]:shadow-lg z-10 gap-4 bg-[#ECF3FB] flex flex-col  left-0 w-full duration-200  ${isOpen ? 'opacity-100 top-full h-[92vh] visible ' : 'invisible h-auto opacity-0 -top-full'}`}>
        <MobileAuth />
        <div className="flex h-full flex-col gap-4 p-10 justify-between items-center">
          <ul className="bg-white p-5 w-full flex justify-center items-center flex-col rounded-lg [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:p-2 [&>li]:rounded-lg [&>li]:cursor-pointer  [&>li]:w-full [&>li]:duration-300">
            <li className="hover:bg-gray-100"><Link onClick={() => setIsOpen(!isOpen)} className="flex gap-2 justify-center items-center" href="/"> <FaHome className={`${pathname === '/' ? 'text-blue-500' : ''}`}/> Home</Link></li>
            <li className="hover:bg-gray-100"><Link onClick={() => setIsOpen(!isOpen)} className="flex gap-2 justify-center items-center" href="/about"><BsFillInfoSquareFill className={`${pathname === '/about' ? 'text-blue-500' : ''}`}/> About</Link></li>
            <li className="hover:bg-gray-100"><Link onClick={() => setIsOpen(!isOpen)} className="flex gap-2 justify-center items-center" href="/faq"><FaQuestionCircle className={`${pathname === '/faq' ? 'text-blue-500' : ''}`}/> FAQ</Link></li>
            <li className="hover:bg-gray-100"><Link onClick={() => setIsOpen(!isOpen)} className="flex gap-2 justify-center items-center" href="/contact"><GrContact className={`${pathname === '/contact' ? 'text-blue-500' : ''}`}/> Contact</Link></li>
          </ul>
          <ul className="bg-white p-5 w-full flex justify-center items-center flex-col rounded-lg [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:p-2 [&>li]:rounded-lg [&>li]:cursor-pointer [&>li]:w-full [&>li]:duration-300">
          {subs.length > 0 ? subs.map((sub: any) => (
              <li onClick={() => setIsOpen(!isOpen)} key={sub.id}><Link href={`/subscriptions/${sub.slug}`}>{sub.name}</Link></li>
          )): <li className="w-full h-16 skeleton"></li>}

          </ul>
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="loginin" className="border-blue-500 btn font-bold bg-transparent border-2 text-blue-500 p-2 hover:bg-blue-500 hover:text-white duration-300 rounded-2xl w-full">{t('login')}</label>

            <label htmlFor="registerin" className="border-transparent btn font-bold bg-blue-500 border-2 text-white p-2 hover:bg-transparent hover:text-blue-500 hover:border-blue-500 duration-300 rounded-2xl w-full">{t('register')}</label>
          </div>


          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2">
              <IoLogoWhatsapp className="text-4xl" />
              <FaTelegram className="text-4xl" />
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <div tabIndex={0} role="button" className="m-1 btn bg-transparent flex uppercase justify-center items-center gap-2">{locale} <IoIosArrowDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 p-2 shadow">
                <li><Link href={pathname} locale="en">English</Link></li>
                <li><Link href={pathname} locale="az">Azerbaijani</Link></li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      {/* Mobile Menu End */}

    </header>
  );
}
