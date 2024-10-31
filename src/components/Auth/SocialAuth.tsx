import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
export default function SocialAuth() {
  const t = useTranslations('Auth')
  function GoogleGiris(){
    signIn("google",{redirect:false})
  }
  
  return (
    <>
      <div className="flex w-full text-center justify-center items-center gap-4 text-sm md:text-base"><hr className="flex-1" /> {t('orsignin')} <hr className="flex-1" />  </div>
    <div className="flex w-full justify-center items-center gap-4 [&>*]:border-2 [&>div]:flex-1 [&>div]:flex [&>div]:justify-center [&>div]:rounded-xl [&>div]:p-2 ">
        <div className="" onClick={GoogleGiris}>
        <Image className="cursor-pointer "  alt="Google" sizes="(max-width: 64px) 10vw, 20vw" width={32} height={32}	 src="/images/Google_Icons-09-512.webp" />
        </div>
  
     
    </div>
    </>
  )
}
