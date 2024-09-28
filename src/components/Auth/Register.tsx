"use client"
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthSchemas } from "@/app/schema/auth";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Register() {
  const { registerSchema } = useAuthSchemas()
  const t = useTranslations("Auth")
  const [loading,setLoading] = useState(false)
  const {
    register: registerRegister,
    formState: { errors },
    handleSubmit: handleRegisterSubmit,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onRegisterSubmit = async (data: any) => {
    setLoading(true)
    try {
      const res = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
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
        });
      window.location.assign('/')
    } catch (error:any) {
      toast.error(error.message || "Serverdə Problem Oldu");
      setLoading(false)
    }
  };
  return (
    <form className="flex flex-col gap-2 md:gap-5 w-full" onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
    <div className="flex flex-col gap-2">
      <label htmlFor="register_email">{t('email')}</label>
      <input type="email" id="register_email" placeholder={t('emailplaceholder')} className="input input-bordered w-full" {...registerRegister("email")} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="register_name"> {t('name')} </label>
      <input type="text" id="register_name" placeholder={t('nameplaceholder')} className="input input-bordered w-full" {...registerRegister("name")} />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="register_password"> {t('password')} </label>
      <input type="password" id="register_password" placeholder={t('passwordplaceholder')} className="input input-bordered w-full" {...registerRegister("password")} />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="confirmPassword"> {t('confirmPassword')} </label>
      <input type="password" id="confirmPassword" placeholder={t('confirmPasswordplaceholder')} className="input input-bordered w-full" {...registerRegister("confirmPassword")} />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
    </div>
    <Button loading={loading} type="submit" className="btn bg-primary text-white w-full mt-4"> {t('register')} </Button>
  </form>
  )
}
