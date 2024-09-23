"use client"
import Button from "../Button";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { codeValidationSchema } from "@/app/schema/codevalidation"
import { useState } from "react"
import toast from "react-hot-toast"
import ResetPassword from "./ResetPassword";

export default function SendForgetPassword({email}:any) {
  const [loading,setLoading]=useState(false)
  const [code,setCode] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(codeValidationSchema),
    mode:"all",
    defaultValues: {
      code: ""
    }
  })
   const onSubmit = async (data:any) => {
    
    setLoading(true)
    try{
      const result = await fetch("/api/send-forget",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,verificationCode:data.code})
      })
      const res = await result.json();
      if(!result.ok){
        setLoading(false)
        toast.error(res.message || "Bilinməyən xəta baş verdi")
      return 
      }
    }catch(error){
      toast.error("Serverdə Problem Var")
      setLoading(false)
      return
    }
    toast.success("Kodunu Göndərdim Yoldadı")
    setLoading(false)
    setCode(data.code)
    
    return
  }
  if(code){
    return <ResetPassword email={email} code={code}/>
  }
  return(
    <form className="h-full w-full  md:h-auto flex-1 md:flex-initial flex flex-col gap-2 md:gap-5 justify-between md:justify-normal" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label htmlFor="forgetpassword">Email vertification code</label>
        <input type="text" id="forgetpassword" placeholder="xxxxxx" className="w-full input input-bordered" {...register("code")} />
        {errors.code && <p className="text-red-500">{errors.code.message}</p>}
      </div>
    <Button loading={loading} type="submit" className="w-full bg-primary text-white">Restore Password</Button>
    </form>
  )
}
