"use client"
import Button from "../Button";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { codeValidationSchema } from "@/app/schema/codevalidation"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import ResetPassword from "./ResetPassword";
import { useTranslations } from "next-intl";

interface SendForgetPasswordProps {
  email: string;
}

interface FormData {
  code: string;
}

export default function SendForgetPassword({ email }: SendForgetPasswordProps) {
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [code, setCode] = useState<string | null>(null);
  const t = useTranslations("Auth");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(codeValidationSchema),
    mode: "all",
    defaultValues: {
      code: ""
    }
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resend && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResend(false);
      setCountdown(60);
    }

    return () => clearInterval(timer);
  }, [resend, countdown]);

  const sendCode = async () => {
    if (resend) return; 

    setResend(true);
    try {
      const result = await fetch("/api/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email })
      });
      const res = await result.json();
      if (!result.ok) {
        toast.error(res.message || "Serverdə Problem Var");
        return;
      }
      toast.success(res.message);
    } catch (error) {
      toast.error("Serverdə Problem Var");
      console.log(error)
      setLoading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const result = await fetch("/api/send-forget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, verificationCode: data.code })
      });
      const res = await result.json();
      if (!result.ok) {
        setLoading(false);
        toast.error(res.message || "Bilinməyən xəta baş verdi");
        return;
      }
    } catch (error) {
      toast.error("Serverdə Problem Var");
      setLoading(false);
      return;
    }
    toast.success(t('successForget'));
    setLoading(false);
    setCode(data.code);
  };

  if (code) {
    return <ResetPassword email={email} code={Number(code)} />;
  }

  return (
    <form className="h-full w-full md:h-auto flex-1 md:flex-initial flex flex-col gap-2 md:gap-5 justify-between md:justify-normal" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label htmlFor="forgetpassword">{t('emailvertification')}</label>
        <div className="relative">
          <input type="text" id="forgetpassword" placeholder="xxxxxx" className="w-full input input-bordered" {...register("code")} />
          <span
            onClick={sendCode}
            className={`absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-primary font-bold ${resend ? 'pointer-events-none opacity-50' : ''}`}>
            {resend ? `${countdown} ${t('seconds')}` : t('sendcode')}
          </span>
        </div>

        {errors.code && <p className="text-red-500">{errors.code.message as string}</p>}
      </div>
      <Button loading={loading} type="submit" className="w-full bg-primary text-white">{t('restorepassword')}</Button>
    </form>
  );
}
