import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { FacebookIcon } from "react-share"
import { LinkedinIcon } from "react-share"
export default function SocialAuth() {
  const t = useTranslations('Auth')
  function GoogleGiris(){
    signIn("google",{redirect:false})
  }
  
  return (
    <>
      <div className="flex w-full text-center justify-center items-center gap-4"><hr className="flex-1" /> {t('orsignin')} <hr className="flex-1" />  </div>
    <div className="flex w-full justify-center items-center gap-4 [&>*]:border-2 [&>div]:flex-1 [&>div]:flex [&>div]:justify-center [&>div]:rounded-xl [&>div]:p-2 ">
        <div onClick={GoogleGiris}>
        <Image className="cursor-pointer"  alt="Google" width={64} height={64} src="/images/Google_Icons-09-512.webp" />
        </div>
  
        <div><FacebookIcon className="rounded-full" size={64} /> </div>
        <div> <LinkedinIcon className="rounded-full" size={64} /></div>
    </div>
    </>
  )
}
