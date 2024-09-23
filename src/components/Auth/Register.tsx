"use client"
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from "@/app/schema/auth";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

export default function Register() {
  const path = usePathname()
  const [loading,setLoading] = useState(false)
  const route = useRouter()
  const {
    register: registerRegister,
    formState: { errors: registerErrors },
    handleSubmit: handleRegisterSubmit,
  } = useForm({
    resolver: yupResolver(authSchema),
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
        toast.error(errorData.message || "Səhv Bilgilər Daxil Etdiniz");
        setLoading(false)
        console.log(errorData);
        return;
      }
      toast.success("Hesab Yaradıldı");
      setTimeout(() => {
        toast.success("Avtomatik Olaraq Hesaba Daxil Olunur");
      })
      await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });
      window.location.href = path
    } catch (error:any) {
      toast.error(error.message || "Adını Bilmədiyim Bir Xəta Oldu");
      setLoading(false)
    }
  };
  return (
    <form className="flex flex-col gap-2 md:gap-5 w-full" onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
    <div className="flex flex-col gap-2">
      <label htmlFor="register_email">Email</label>
      <input type="email" id="register_email" placeholder="Email" className="input input-bordered w-full" {...registerRegister("email")} />
      {registerErrors.email && <p className="text-red-500">{registerErrors.email.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="register_name">Name</label>
      <input type="text" id="register_name" placeholder="Name" className="input input-bordered w-full" {...registerRegister("name")} />
      {registerErrors.name && <p className="text-red-500">{registerErrors.name.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="register_password">Password</label>
      <input type="password" id="register_password" placeholder="Password" className="input input-bordered w-full" {...registerRegister("password")} />
      {registerErrors.password && <p className="text-red-500">{registerErrors.password.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full" {...registerRegister("confirmPassword")} />
      {registerErrors.confirmPassword && <p className="text-red-500">{registerErrors.confirmPassword.message}</p>}
    </div>
    <Button loading={loading} type="submit" className="btn bg-primary text-white w-full mt-4">Register</Button>
  </form>
  )
}
