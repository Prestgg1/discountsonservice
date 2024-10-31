"use client"
import { IoMdSettings } from "react-icons/io";
import {  FaWallet } from "react-icons/fa6";
import { usePathname } from "@/i18n/routing";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";


export default function Sidebar() {
  const t = useTranslations('Sidebar')
   const pathname = usePathname();
   const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="flex md:basis-1/3 w-full  flex-col gap-4 p-4 rounded-2xl bg-white shadow-lg  [&>a]:gap-2 [&>a]:items-center [&>a]:duration-300">
      <div className="w-full flex justify-between items-center md:hover:bg-gray-300 rounded-xl">
    <Link href="/account-info" className={`${pathname==="/account-info" && " [&>svg]:text-blue-500 md:bg-gray-300"} p-4 md:hover:bg-gray-300 gap-2 flex justify-start rounded-xl w-full items-center `}><IoMdSettings className="text-2xl" /> {t('personal')}</Link>
      <button onClick={() => setIsDropdown(!isDropdown)} className="block md:hidden btn px-1 py-1">
      <FaAngleDown  className={`text-[30px] duration-300 ${isDropdown && "rotate-180"}`} />
      </button>
     
      </div>
     
      <Link href="/mysubscriptions" className={`${pathname==="/mysubscriptions" && " [&>svg]:text-blue-500 bg-gray-300"} p-4 rounded-xl ${isDropdown ? "hidden md:flex" : "flex"} hover:bg-gray-300 `}><FaWallet className="text-2xl " />{t('subscription')}</Link>
    </div>
  )
}
