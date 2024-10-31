"use client"
import InviteFriends from "@/components/InviteFriends";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoMdExit } from "react-icons/io";
import Loading from "../loading";

export default function AuthedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const t = useTranslations('account')
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  if(status === 'loading'){
    return <Loading/>
  }

  return (
    <div className="w-full flex flex-col  justify-center items-center my-5 md:my-10">
      <div className="w-full flex justify-between"><h1 className="lg:text-5xl text-2xl font-extrabold">{t('sidebarPersonal')}</h1> <span onClick={()=>{router.push('/')}} className=" cursor-pointer gap-1 justify-center items-center hidden md:flex text-gray-500"><IoMdExit className="text-2xl" />
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
