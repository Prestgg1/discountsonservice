"use client"
import Button from "../Button";
import { GrFormViewHide } from "react-icons/gr"; 
import { BiSolidShow } from "react-icons/bi"; 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordValidationSchema } from "@/app/schema/resetpassword";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

interface FormData {
  newPassword: string;
  confirmPassword: string;
}



export default function ResetPassword({ email, code }: { email: string, code: number }) {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Auth");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    mode: "all",
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  });



  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const result = await fetch("/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, verificationCode: code, ...data })
      });
      if (!result.ok) {
        const res = await result.json();
        toast.error(res.message || "Serverdə Problem Var");
        return;
      }
      toast.success(t('successChange'));
    } catch (error) {
      console.log(error)
      toast.error("Bilinməyən xəta baş verdi");
      return;
    }
    setLoading(false);
    return;
  };

  return (
    <form className="h-full w-full md:h-auto flex-1 md:flex-initial flex flex-col gap-2 md:gap-5 justify-between md:justify-normal" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 ">
        <label htmlFor="newPassword"> {t('newPassword')} </label>
        <div className="relative">
        <input 
          type={showNewPassword ? "text" : "password"} 
          id="newPassword" 
          placeholder="xxxxxx" 
          className="w-full input input-bordered" 
          {...register("newPassword")} 
        />
        <span 
          className="absolute right-2 top-1/4 cursor-pointer"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? <GrFormViewHide size={20} /> : <BiSolidShow size={20} />}
        </span>
        </div>
      
        {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="confirmPassword"> {t('confirmNewPassword')} </label>
        <input 
          type={showConfirmPassword ? "text" : "password"} 
          id="confirmPassword" 
          placeholder="xxxxxx" 
          className="w-full input input-bordered" 
          {...register("confirmPassword")} 
        />

        <span 
          className="absolute right-2 top-1/2 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <GrFormViewHide size={20} /> : <BiSolidShow size={20} />}
        </span>
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>

      <Button loading={loading} type="submit" className="w-full bg-primary text-white">{t('changepassword')}</Button>
    </form>
  );
}
