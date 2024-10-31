"use client"
import { useForm } from "react-hook-form"
import Button from "./Button"
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from "@/app/schema/contact";
import { toast } from "react-hot-toast";
import axios from "axios"
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations("ContactForm")
  const [loading, setLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    mode: "all"
  })

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true)
    await axios.post('/api/contact', {
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    setLoading(false)
    toast.success("Your message has been sent successfully")
    reset()
  }

  return (
    <form className="flex flex-col gap-4 md:gap-8 items-center justify-center w-1/2 " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="contact_name">{t('nameLabel')}</label>
        <input placeholder={t('namePlaceholder')} id="contact_name" className="w-full input input-bordered" type="text" {...register("name")} />
        {errors.name && <p className="text-red-500">{t('requiredName')}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="contact_email">{t('emailLabel')}</label>
        <input placeholder={t('emailPlaceholder')} id="contact_email" type="email" className="input input-bordered" {...register("email")} />
        {errors.email && <p className="text-red-500">{t('requiredEmail')}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="contact_textarea">{t('messageLabel')}</label>
        <textarea placeholder={t('messagePlaceholder')} className="textarea" id="contact_textarea" {...register("message")} />
        {errors.message && <p className="text-red-500">{t('requiredMessage')}</p>}
      </div>
      <Button loading={loading} type="submit" className="bg-primary text-white w-full">{t('submitButton')}</Button>
    </form>
  )
}
