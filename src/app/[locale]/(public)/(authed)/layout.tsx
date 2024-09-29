"use client"
import InviteFriends from "@/components/InviteFriends";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { IoMdExit } from "react-icons/io";

export default function AuthedLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('account')
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status !== "authenticated") {
    router.push('/')
    return (
      <div className="min-h-[80vh] flex flex-col  justify-center items-center">
      <h1 className="text-4xl text-red-600"> {t('unauthed')} </h1>
    </div>
    )
    

  }
  return (
    <div className="w-full flex flex-col  justify-center items-center my-5 md:my-10">
      <div className="w-full flex justify-between"><h1 className="lg:text-5xl text-2xl font-extrabold">{t('sidebarPersonal')}</h1> <span className=" gap-1 justify-center items-center hidden md:flex text-gray-500"><IoMdExit className="text-2xl" />
       {t('exit')} </span> </div>
      <div className="w-full my-10  md:flex-row flex-col flex justify-between items-start gap-4">
        <Sidebar />
        {children}
        <span className=" gap-1 justify-center items-center flex text-center mx-auto md:hidden text-gray-500"><IoMdExit className="text-2xl" />
          {t('exit')} </span>
      </div>


      <InviteFriends />
    </div>
  )
}
