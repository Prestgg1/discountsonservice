"use client"
import Button from "../Button";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { passwordValidationSchema } from "@/app/schema/resetpassword"
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast"
export default function ResetPassword({email,code}:any) {
  const [loading,setLoading]=useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    mode:"all",
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  })
   const onSubmit = async (data:any) => {
    setLoading(true)
    try{
      const result = await fetch("/api/change-password",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, verificationCode:code,...data})
      })
      console.log(result)
      if(!result.ok){
        toast.error("Bilinməyən xəta baş verdi")
        setLoading(false)
        return
      }
    }catch(error){
      toast.error("Bilinməyən xəta baş verdi")
      setLoading(false)
      return
    }
    toast.success("Password reset link sent to your email")
    setLoading(false)
    return
  }
  return(
    <form className="h-full w-full  md:h-auto flex-1 md:flex-initial flex flex-col gap-2 md:gap-5 justify-between md:justify-normal" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label htmlFor="forgetpassword">New Password</label>
        <input type="password" id="forgetpassword" placeholder="xxxxxx" className="w-full input input-bordered" {...register("newPassword")} />
        {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="forgetpassword">Confirm Password</label>
        <input type="password" id="forgetpassword" placeholder="xxxxxx" className="w-full input input-bordered" {...register("confirmPassword")} />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>
    <Button loading={loading} type="submit" className="w-full bg-primary text-white">Restore Password</Button>
    </form>
  )
}
