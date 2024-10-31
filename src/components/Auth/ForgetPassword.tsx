"use client"
import Button from "../Button";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { forgetPasswordSchema } from "@/app/schema/forgetpassword"
import SendForgetPassword from "./SendForgetPassword"
import { useState } from "react"
import toast from "react-hot-toast"
export default function ForgetPassword(){
  const [loading,setLoading]=useState(false)
  const [email,setEmail]=useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
    mode:"all",
    defaultValues: {
      email: ""
    }
  })

   const onSubmit = async (data:{email:string}) => {
    setLoading(true)
    try{
      const result = await fetch("/api/forget-password",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const res = await result.json();
      if(!result.ok){
        toast.error(res.message || "Serverdə Problem Var")
        setLoading(false)
        return
      }
      toast.success(res.message)
    }catch(error){
      toast.error("Serverdə Problem Var")
      setLoading(false)
      return
    }
    setLoading(false)
    setEmail(data.email)
    return
  }
  if(email){
    return <SendForgetPassword email={email}/>
  }
  return(
    <form className="h-full w-full  md:h-auto flex-1 md:flex-initial flex flex-col gap-2 md:gap-5 justify-between md:justify-normal" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label htmlFor="forgetpassword">Email</label>
        <input type="text"  placeholder="Enter your email" className="w-full input input-bordered" {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
    <Button loading={loading} type="submit" className="w-full bg-primary text-white">Submit</Button>
    </form>
  )
}
