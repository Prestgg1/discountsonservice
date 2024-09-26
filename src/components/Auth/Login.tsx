"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@/app/schema/login"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react"
import Button from "../Button"
import toast from "react-hot-toast"
import { usePathname } from 'next/navigation'

export default function Login() {
    const path = usePathname()
    const [ loading,setLoading ] = useState(false);
    const router = useRouter()
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
            toast.error('Incorrect email or password')
        } else {
            toast.success('Giriş Olundu')
            window.location.href = path
        }
    } catch (error) {
        toast.error('An error occurred')
    }
    
       
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-center w-full">
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...loginRegister("email")} className="input input-bordered w-full" placeholder="Enter your email adress" />
            {loginErrors.email && <p className="text-red-500">{loginErrors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...loginRegister("password")} className="input input-bordered w-full" placeholder="********" />
            {loginErrors.password && <p className="text-red-500">{loginErrors.password.message}</p>}
        </div>
        <Button loading={loading} type="submit" className="btn-primary w-full font-extrabold">Log in</Button>
        
           
        </form>
    )
}
