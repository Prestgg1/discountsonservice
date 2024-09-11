"use client"
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

export default function Header(): React.ReactNode {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <header className="flex bg-white z-50  top-0 p-5 shadow-xl items-center w-full justify-between  text-xl sticky ">
      <Link href="/" className="flex items-center justify-center gap-2 text-xl cursor-pointer">
        <Image src="/images/logo.png" width="48" height="48" alt="logo" /><span className="hidden md:flex">DiscountsOnServices</span>
      </Link>
      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-4 [&>*]:capitalize [&>*]:duration-300">
        <Link className="hover:text-blue-500" href="/">{t('home')}</Link>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="p-4 flex gap-2 justify-center items-center">{t('subs')}<FaAngleDown className="text-2xl" /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>netflix</a></li>
            <li><a>youtube</a></li>
            <li><a>spotify</a></li>
          </ul>
        </div>
        <Link className="hover:text-blue-500" href="/about">{t('about')}</Link>
        <Link className="hover:text-blue-500" href="/faq">faq</Link>
        <Link className="hover:text-blue-500" href="/support">{t('sport')}</Link>
      </nav>
      <div className="hidden lg:flex gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="m-1 btn bg-transparent flex uppercase justify-center items-center gap-2">{locale} <IoIosArrowDown /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 p-2 shadow">
            <li><Link href={pathname} locale="en">English</Link></li>
            <li><Link href={pathname} locale="az">Azerbaijani</Link></li>
          </ul>
        </div>
        <label htmlFor="login_modal" className="btn bg-blue-800 text-white px-8 py-4 hover:bg-blue-500 duration-300">{t('login')}</label>

        {/* Login Modal */}
        <input type="checkbox" id="login_modal" className="modal-toggle" checked={isLoginModalOpen} onChange={() => setIsLoginModalOpen(!isLoginModalOpen)} />
        <div className="modal backdrop-blur-md" role="dialog">
          <div className="modal-box relative">
            <label htmlFor="login_modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl" >✕</label>
            <h3 className="text-lg font-bold">Log in</h3>
            <p className="py-4">New user? <span className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer" onClick={openRegisterModal}>Create an account</span></p>
            <form action="" className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" className="input input-bordered w-full " />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" className="input input-bordered w-full" />
              </div>
              <button className="btn bg-blue-500 text-white w-full mt-4">Login</button>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="login_modal">Close</label>
        </div>

        {/* Register Modal */}
        <input type="checkbox" id="register_modal" className="modal-toggle" checked={isRegisterModalOpen} onChange={() => setIsRegisterModalOpen(!isRegisterModalOpen)} />
        <div className="modal backdrop-blur-md" role="dialog">
          <div className="modal-box relative">
            <label htmlFor="register_modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl">✕</label>
            <h3 className="text-lg font-bold">Create an account</h3>
            <p className="py-4">Already have an account? <span className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer" onClick={openLoginModal}>Log in</span></p>
            <form action="" className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="register_email">Email</label>
                <input type="email" id="register_email" placeholder="Email" className="input input-bordered w-full " />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="register_password">Password</label>
                <input type="password" id="register_password" placeholder="Password" className="input input-bordered w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" placeholder="Confirm Password" className="input input-bordered w-full" />
              </div>
              <button className="btn bg-blue-500 text-white w-full mt-4">Register</button>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="register_modal">Close</label>
        </div>
      </div>
      {/* Desktop Menu End */}




      {/* Mobile Menu */}
      {!isOpen ? <RxHamburgerMenu className="cursor-pointer text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} /> : <HiOutlineXMark className="cursor-pointer bg-blue-500 text-white p-0.5 rounded-full text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} />}

      <div className={`absolute lg:hidden [&>ul]:shadow-lg z-30 gap-4 bg-[#ECF3FB] flex flex-col p-10 justify-between items-center left-0 w-full duration-200  ${isOpen ? 'opacity-100 top-full h-[92vh] visible ' : 'invisible h-auto opacity-0 -top-full'}`}>
        <ul className="bg-white p-5 w-full flex justify-center items-center flex-col rounded-lg [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:p-2 [&>li]:rounded-lg [&>li]:cursor-pointer [&>li]:w-full [&>li]:duration-300">
          <li className="hover:bg-gray-100"><FaHome /> Home</li>
          <li className="hover:bg-gray-100">About</li>
          <li className="hover:bg-gray-100">FAQ</li>
          <li className="hover:bg-gray-100">SUPPORT</li>
        </ul>
        <ul className="bg-white p-5 w-full flex justify-center items-center flex-col rounded-lg [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:p-2 [&>li]:rounded-lg [&>li]:cursor-pointer [&>li]:w-full [&>li]:duration-300">
          <li className="hover:bg-gray-100"><FaHome /> Home</li>
          <li className="hover:bg-gray-100">About</li>
          <li className="hover:bg-gray-100">FAQ</li>
        </ul>
        <button className="border-blue-500 font-bold bg-transparent border-2 text-blue-500 p-2 hover:bg-blue-500 hover:text-white duration-300 rounded-2xl w-full" >Login</button>
        <button className="hover:border-blue-500 bg-blue-500 text-white font-bold border-transparent border-2 hover:text-blue-500 p-2 hover:bg-transparent  duration-300 rounded-2xl w-full" >Register</button>
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
      {/* Mobile Menu End */}
    </header>
  );
}