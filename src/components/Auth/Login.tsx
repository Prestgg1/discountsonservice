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

export default function Login() {
  const {loginSchema} = useAuthSchemas()
    const path = usePathname()
    const t = useTranslations("Auth")
    const [ loading,setLoading ] = useState(false);
    const {
        register: loginRegister,
        formState: { errors: loginErrors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    async function onSubmit(data: any) {
        console.log(data)
        setLoading(true);
        try {
            const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        })
        setLoading(false);
        if (result?.error) {
            toast.error(t('wrongLogin'))
        } else {
            toast.success(t('successLogin'))
            window.location.href = path
        }
    } catch (error) {
        toast.error('Serverdə Problem Var')
        setLoading(false)
    }
    
       
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-center w-full">
        <div className="flex flex-col gap-2">
            <label htmlFor="email">{t('email')}</label>
            <input type="email" id="email" {...loginRegister("email")} className="input input-bordered w-full" placeholder={t('emailplaceholder')} />
            {loginErrors.email && <p className="text-red-500">{loginErrors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password">{t('password')}</label>
            <input type="password" id="password" {...loginRegister("password")} className="input input-bordered w-full" placeholder="********" />
            {loginErrors.password && <p className="text-red-500">{loginErrors.password.message}</p>}
        </div>
        <Button loading={loading} type="submit" className="btn-primary w-full font-extrabold">{t('login')}</Button>
        
           
        </form>
    )
}
