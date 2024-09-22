import { signIn } from "next-auth/react"
import Image from "next/image"
import { FacebookIcon } from "react-share"
import { LinkedinIcon } from "react-share"
export default function SocialAuth() {
  function GoogleGiris(){
    signIn("google",{redirect:false})
  }
  
  return (
    <>
      <div className="flex w-full text-center justify-center items-center gap-4"><hr className="flex-1" /> Or sign in with <hr className="flex-1" />  </div>
    <div className="flex w-full justify-center items-center gap-4">
  
        <Image className="cursor-pointer" onClick={GoogleGiris} alt="Google" width={64} height={64} src="/images/Google_Icons-09-512.webp" />
         <FacebookIcon className="rounded-full" size={64} /> 
        <LinkedinIcon className="rounded-full" size={64} />

    </div>
    </>
  )
}
