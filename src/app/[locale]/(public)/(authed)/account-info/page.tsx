import AccountInfoForm from "@/components/Auth/AccountInfoForm";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Hesap bilgiləri",
  description: "Burada Hesap bilgilərinizi görə bilərsiniz.",
};

export default function AccountInfo() {
  const t = useTranslations('AccountInfo')
  return (
    <div className="bg-white w-full rounded-3xl  md:basis-2/3 p-5 md:p-10">
       <h1 className="my-5 2lg:text-5xl text-3xl font-bold text-center md:text-left">{t('title')}</h1>
    <AccountInfoForm/>
    </div>

  )
}
