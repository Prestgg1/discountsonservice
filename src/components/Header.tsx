"use client";
import { IoIosArrowDown } from "react-icons/io";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Header: React.FC = () => {
<<<<<<< HEAD
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Header');
  return (
    <header className="w-full flex justify-center items-center">
      <div className="navbar container bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
=======
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            
            <li>
              <a>Subscriptions</a>
              <ul className="p-2">
                <li><a>Netflix</a></li>
                <li><a>YouTube Premium</a></li>
                <li><a>Spotify</a></li>
              </ul>
            </li>
            <li><a>FAQ</a></li>
            <li><a>Support</a></li>
            <li><a>About</a></li>
            <li>
              <details>
                <summary>Language</summary>
                <ul className="p-2">
                  <li><a>English</a></li>
                  <li><a>Azerbaijani</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img src="/images/logo.png" alt="logo" className="w-12 h-12"></img>DiscountsOnServices</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          <li>
            <details>
              <summary>Subscriptions</summary>
              <ul className="p-2">
                <li><a>Netflix</a></li>
                <li><a>YouTube Premium</a></li>
                <li><a>Spotify</a></li>
              </ul>
            </details>
          </li>
          
          
          <li><a>FAQ</a></li>
          <li><a>Support</a></li>
          <li><a>About</a></li>
          <li>
            <details>
              <summary>Language</summary>
              <ul className="p-2">
                <li><a>English</a></li>
                <li><a>Azerbaijani</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-800 text-white px-8 py-4 rounded-lg">Login in</a>
      </div>
    </div>
  );
};
>>>>>>> b4f6c79 (Navbar)

              <li>
                <a>{t('subs')}</a>
                <ul className="p-2">
                  <li><a>Netflix</a></li>
                  <li><a>YouTube Premium</a></li>
                  <li><a>Spotify</a></li>
                </ul>
              </li>
              <li><a>FAQ</a></li>
              <li><a>{t('sport')}</a></li>
              <li><a>{t('about')}</a></li>
              <li>
                <details>
                  <summary>Language</summary>
                  <ul className="p-2">
                  <li><Link href={pathname} locale="en">English</Link></li>
                  <li><Link href={pathname} locale="az">Azerbaijani</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link href="/" className="flex items-center justify-center gap-2 text-xl">
          <Image src="/images/logo.png" width="48" height="48" alt="logo" />DiscountsOnServices
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <details>
                <summary>{t('subs')}</summary>
                <ul className="p-2">
                  <li><a>Netflix</a></li>
                  <li><a>YouTube Premium</a></li>
                  <li><a>Spotify</a></li>
                </ul>
              </details>
            </li>


            <li><a>FAQ</a></li>
            <li><Link href="/about">{t('sport')}</Link></li>
            <li><Link href="/about">{t('about')}</Link></li>

          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="m-1 btn bg-transparent flex uppercase justify-center items-center gap-2">{locale} <IoIosArrowDown /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 p-2 shadow">
              <li><Link href={pathname} locale="en">English</Link></li>
              <li><Link href={pathname} locale="az">Azerbaijani</Link></li>
            </ul>
          </div>
          <a className="btn bg-blue-800 text-white px-8 py-4 rounded-lg">{t('login')}</a>
        </div>
      </div>
    </header>

  );
};

export default Header;
