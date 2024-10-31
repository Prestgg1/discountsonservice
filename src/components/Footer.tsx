"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { getSubsName } from "@/app/libs/getSubs";
import { routes } from "@/app/libs/Routes";

const Footer = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Footer");

  const [Subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchSubs = async () => {
      try {
        const subsData = await getSubsName();
        setSubs(subsData); 
      } catch (error) {
        console.error("Subs verisi alınırken hata oluştu:", error);
      }
    };

    fetchSubs();
  }, []); 

  return (
    <footer className="bg-blue-800 text-white py-5 md:py-10 w-full">
      <div className="upper">
        <div className="flex justify-around items-center w-full flex-wrap">
          <div className="slogan flex items-center gap-2 text-xl flex-col my-4 md:my-0 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={48}
                height={48}
              />
              <div className="font-bold text-lg">DiscountsOnServices</div>
            </div>

            <p className="text-sm mt-2">{t("description")}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-start gap-2">
              <div className="font-bold text-lg">{t("subs")}</div>

              <ul className="flex flex-col">
                {Subs.map((sub: { id: number; name: string; slug: string }) => (
                  <Link
                    href={`/subscriptions/${sub.slug}`}
                    key={sub.id}
                    className="duration-300 hover:underline"
                  >
                    {sub.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-start gap-2">
              <div className="font-bold text-lg">{t("site_navigations")}</div>
              <ul className="flex flex-col">
                {routes.map((route: any) => (
                  <Link
                    href={route.path}
                    key={route.id}
                    className="duration-300 hover:underline"
                  >
                    {t(route.name)}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xl w-full justify-between md:flex-col px-5 md:px-0 md:w-auto">
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp size={24} />
              <FaTelegram size={24} />
            </div>

            <div className="dropdown dropdown-left  dropdown-top self-end">
              <div
                tabIndex={0}
                role="button"
                className="m-1 btn hover:bg-slate-500 border-0 bg-transparent flex text-white uppercase justify-center items-center gap-2"
              >
                {locale} <IoIosArrowDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-slate-500 text-white menu  rounded-box z-10 mt-2 p-2 shadow"
              >
                <li>
                  <Link href={pathname} locale="en">
                    {t("en")}
                  </Link>
                </li>
                <li>
                  <Link href={pathname} locale="az">
                    {t("az")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 pt-4 border-t md:border-t-0 border-white">
        <div className="flex flex-col w-full  justify-center items-center md:flex-row md:justify-around text-sm text-opacity-50">
          <a href="#" className="link link-hover">
            {t("privacy_policy")}
          </a>
          <p>{t("copyright")}</p>
          <p>{t("developed")} Səbuhi,Vüsal,Kamil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
