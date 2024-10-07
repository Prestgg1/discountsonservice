"use client"
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthSchemas } from "@/app/schema/auth";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useTranslations } from "next-intl";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Register() {
  const { registerSchema } = useAuthSchemas()
  const t = useTranslations("Auth")
  const [loading, setLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const {
    register: registerRegister,
    formState: { errors },
    handleSubmit: handleRegisterSubmit,
    clearErrors,
    setValue,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });


  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
    setValue('captcha', token)
    clearErrors('captcha')
  }

  const onRegisterSubmit = async (data: any) => {
    setLoading(true)
    try {
      const res = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || t('errorRegister'));
        setLoading(false)
        console.log(errorData);
        return;
      }
      toast.success(t('successRegister'));
      toast.success(t('redirectRegister'));
      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        captchaToken
      });
      window.location.assign('/')
    } catch (error: any) {
      toast.error(error.message || "Serverdə Problem Oldu");
      setLoading(false)
    }
  };
  return (
    <form className="flex flex-col gap-2 md:gap-5 w-full " onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="register_email" className="text-sm md:text-base">{t('email')}</label>
        <input type="email"  placeholder={t('emailplaceholder')} className="input input-bordered w-full input-sm md:input-md" {...registerRegister("email")} />
        {errors.email && <p className="text-red-500 text-sm md:text-base">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="register_name" className="text-sm md:text-base"> {t('name')} </label>
        <input type="text"  placeholder={t('nameplaceholder')} className="input input-bordered w-full input-sm md:input-md" {...registerRegister("name")} />
        {errors.name && <p className="text-red-500 text-sm md:text-base">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="register_password" className="text-sm md:text-base"> {t('password')} </label>
        <input type="password"  placeholder={t('passwordplaceholder')} className="input input-bordered w-full input-sm md:input-md" {...registerRegister("password")} />
        {errors.password && <p className="text-red-500 text-sm md:text-base">{errors.password.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="text-sm md:text-base"> {t('confirmPassword')} </label>
        <input type="password"  placeholder={t('confirmPasswordplaceholder')} className="input input-bordered w-full input-sm md:input-md" {...registerRegister("confirmPassword")} />
        {errors.confirmPassword && <p className="text-red-500 text-sm md:text-base">{errors.confirmPassword.message}</p>}
        <input type="text" value={captchaToken || ''} hidden  {...registerRegister('captcha')} />

        {errors.captcha && <>
          <HCaptcha

            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || 'error'}
            onVerify={handleCaptchaVerify}
          />
          <p className="text-red-500">{errors.captcha.message}</p>
        </>}

      </div>
      <Button loading={loading} type="submit" className="
     bg-primary text-white w-full text-sm  md:mt-4"> {t('register')} </Button>
    </form>
  )
}
