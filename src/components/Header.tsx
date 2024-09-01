import { useTranslations } from "next-intl";
import Image from "next/image";

const Header: React.FC = () => {
  const t = useTranslations('Header');
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
            <li><a>{t('sport')}</a></li>
            <li><a>{t('about')}</a></li>
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
        <a className="flex items-center justify-center gap-2 text-xl"> <Image src="/images/logo.png" width="48"  height="48" alt="logo"/>DiscountsOnServices</a>
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
          <li><a>{t('sport')}</a></li>
          <li><a>{t('about')}</a></li>
          <li>

            {/* <details className="relative z-10">
              <summary className="cursor-pointer">Subscriptions</summary>
              <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-lg p-2 w-48 z-20">
                <li><a href="#" className="block p-2 hover:bg-gray-200">Netflix</a></li>
                <li><a href="#" className="block p-2 hover:bg-gray-200">YouTube Premium</a></li>
                <li><a href="#" className="block p-2 hover:bg-gray-200">Spotify</a></li>
              </ul>
            </details> */}

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

export default Header;
