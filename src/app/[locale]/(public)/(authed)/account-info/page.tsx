"use client"
import Button from "@/components/Button";
import { yupResolver } from "@hookform/resolvers/yup"
import { AccountInfoSchema } from "@/app/schema/accountinfo"
import toast from "react-hot-toast"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import { Session } from "next-auth"

export default function AccountInfo() {
  interface MySession extends Session {
    id: number;
   
  }

  const { data: session } = useSession() as { data: MySession | null };
  console.log(session)
  const [ loading,setLoading ] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit
} = useForm({
    resolver: yupResolver(AccountInfoSchema),
    mode: "all",
    defaultValues: {
      userId: session?.id
    }
});

  async function onSubmit(data: any) {

    console.log(data)
    setLoading(true);
    try {
      const result = await fetch("/api/account-info",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const res = await result.json();
      if(!result.ok){
        toast.error(res.message || "Bilinməyən xəta baş verdi")
        setLoading(false)
        return
      }
      toast.success(res.message)
    } catch (error) {
      toast.error("Bilinməyən xəta baş verdi")
    }
    finally {
      setLoading(false)
    }
        }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full rounded-3xl  md:basis-2/3 p-5 md:p-10 gap-8 flex flex-col">
      <h1 className="my-5 2lg:text-5xl text-3xl font-bold text-center md:text-left">Account info</h1>
      
      <div className="gap-2 flex flex-col">
        
        <label htmlFor="userid">ID user</label>
        <input type="text" id="userid" className="input input-bordered" value={session?.id}  {...register("userId")} disabled />
      </div>
      <div className="gap-2 flex flex-col">
        
        <label htmlFor="name">How can I call you</label>
        <input type="text"  defaultValue={session?.user?.name || "null"} id="name" className="input outline-none input-bordered" placeholder="Enter your name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="gap-2 flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input type="email" defaultValue={session?.user?.email || ''} id="email" placeholder="Enter your email" className="input input-bordered outline-none" {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <Button loading={loading} type="submit" className="bg-primary text-white">Save changes</Button>
    </form>
  )
}
