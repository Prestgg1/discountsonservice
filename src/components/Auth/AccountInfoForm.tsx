"use client";
import Button from "@/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAccountInfoSchemas } from "@/app/schema/accountinfo";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { useTranslations } from "next-intl";
import useSWR from "swr";

export default function AccountInfo() {
  const { AccountInfoSchema } = useAccountInfoSchemas();
  const t = useTranslations("AccountInfo");

  interface MySession extends Session {
    id: number;
  }

  const { data: session, status } = useSession() as { data: MySession | null; status: string };
  const [loading, setLoading] = useState(false);
  async function fetcher(url: string) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session?.id }),
    });
    const data = await res.json();
    return data;
  }

  const { data, error, isLoading } = useSWR(session ? "/api/account-info" : null, fetcher);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(AccountInfoSchema),
    mode: "all",
    defaultValues: {
      userId: session?.id,
    },
  });

  async function onSubmit(data: any) {
    setLoading(true);

    try {
      const result = await fetch("/api/account-info", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await result.json();

      if (!result.ok) {
        toast.error(res.message || t("unkdownError"));
        return;
      }


      toast.success(res.message);
    } catch (error) {
      toast.error(t("unkdownError"));
    } finally {
      setLoading(false);
    }
  }
  if (status === "loading" || isLoading) return <p>{t("loading")}</p>;
  if (error) return <p> {t("unkdownError")} </p>;
  if (!session) return <p> {t('notseesion')} </p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-8 flex flex-col">
      <div className="gap-2 flex flex-col">
        <label htmlFor="userid">ID</label>
        <input
          type="text"
          id="userid"
          className="input input-bordered"
          value={session.id || ""}
          {...register("userId")}
          disabled
        />
      </div>
      <div className="gap-2 flex flex-col">
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          defaultValue={data?.user?.name || ""}
          id="name"
          className="input outline-none input-bordered"
          placeholder="Enter your name"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="gap-2 flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          defaultValue={data?.user?.email || ""}
          id="email"
          placeholder="Enter your email"
          className="input input-bordered outline-none"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <Button loading={loading} type="submit" className="bg-primary text-white">
        {t("button")}
      </Button>
    </form>
  );
}
