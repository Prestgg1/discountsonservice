
"use client"
import { useForm } from "react-hook-form"
import Button from "./Button"
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from "@/app/schema/contact";
import { toast } from "react-hot-toast";
import axios from "axios"
import { useState } from "react";
export default function ContactForm(){
  const [loading,setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactSchema),
        mode:"all"
        })
 const onSubmit = async (data:any) => {
    
    setLoading(true)
    const result = await axios.post('/api/contact',{
        body:JSON.stringify({...data}),
        headers: {
            "Content-Type": "application/json",
        }
    })
    setLoading(false)
    toast.success("Your message has been sent successfully")
    console.log(result)
    }
    return(
        <form  className="flex flex-col gap-4 md:gap-8 items-center justify-center w-full " onSubmit={handleSubmit(onSubmit)}  >
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="contact_name">Name</label>
                <input placeholder="Write your name" id="contact_name" className="w-full input input-bordered" type="text" {...register("name")} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="contact_email">Email</label>
                <input placeholder="Enter your email adress" id="contact_email" type="email" className="input input-bordered" {...register("email")} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="contact_textarea">Message</label>
               <textarea  placeholder="Enter your message"  className="textarea" id="contact_textarea" {...register("message")}/>
               {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <Button loading={loading} type="submit" className="bg-primary text-white w-full">Submit</Button>

        </form>
    )
}
