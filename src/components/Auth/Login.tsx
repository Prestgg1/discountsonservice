"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signIn } from "next-auth/react"
import { useState } from "react"
import Button from "../Button"
import toast from "react-hot-toast"
import { usePathname } from 'next/navigation'
import { useTranslations } from "next-intl"
import { useAuthSchemas } from "@/app/schema/auth"
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { LoginType } from "@/app/libs/types"

export default function Login() {
  const { loginSchema } = useAuthSchemas()

  const path = usePathname()
  const t = useTranslations("Auth")
  const [loading, setLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>('Yest')

  const {
    register,
    formState: { errors },
    clearErrors,
    setValue,
    handleSubmit
  } = useForm({
    resolver: yupResolver(loginSchema),

  });

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
    setValue('captcha',token)
    clearErrors('captcha')
  }

  async function onSubmit(data: LoginType) {


    
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        captchaToken
      })

      setLoading(false)

      if (result?.error) {
        toast.error(t('wrongLogin'))

      } else {
        toast.success(t('successLogin'))
        window.location.href = path
      }
      setCaptchaToken(null)
    } catch (error) {
      console.log(error)
      toast.error('Serverdə Problem Var')
      setLoading(false)
      setCaptchaToken(null)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-center w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">{t('email')}</label>
        <input
          type="email"
          
          {...register("email")}
          className="input input-bordered w-full"
          placeholder={t('emailplaceholder')}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">{t('password')}</label>
        <input
          type="password"
          
          {...register("password")}
          className="input input-bordered w-full"
          placeholder="********"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <input type="text" value={captchaToken || ''}   hidden  {...register('captcha')} />

      {errors.captcha && <>
        <HCaptcha
          
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || 'error'}
          onVerify={handleCaptchaVerify}
        />
        <p className="text-red-500">{errors.captcha.message}</p>
      </>}

      <Button loading={loading} type="submit" className="btn-primary w-full font-extrabold">
        {t('login')}
      </Button>
    </form>
  )
}
