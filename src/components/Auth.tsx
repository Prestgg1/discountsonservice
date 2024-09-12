"use client"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from "@/app/schema/auth";

export default function Auth() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
    const openLoginModal = () => {
      setIsLoginModalOpen(true);
      setIsRegisterModalOpen(false);
    };
  
    const openRegisterModal = () => {
      setIsLoginModalOpen(false);
      setIsRegisterModalOpen(true);
    };
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm({
      resolver: yupResolver(authSchema),
    })
    const onSubmit1 = (data:any) => console.log(data)
    const onSubmit2 = (data:any) => console.log(data)
  return (
    <>
            <input type="checkbox" id="login_modal" className="modal-toggle" checked={isLoginModalOpen} onChange={() => setIsLoginModalOpen(!isLoginModalOpen)} />
        <div className="modal backdrop-blur-md" role="dialog">
          <div className="modal-box relative">
            <label htmlFor="login_modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl" >✕</label>
            <h3 className="text-lg font-bold">Log in</h3>
            <p className="py-4">New user? <span className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer" onClick={openRegisterModal}>Create an account</span></p>
            <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit1)}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" className="input input-bordered w-full " {...register("email")} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" className="input input-bordered w-full" {...register("password")} />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <button type="submit" className="btn bg-blue-500 text-white w-full mt-4">Login</button>

            </form>
          </div>
          <label className="modal-backdrop" htmlFor="login_modal">Close</label>
        </div>

        {/* Register Modal */}
    <input type="checkbox" id="register_modal" className="modal-toggle" checked={isRegisterModalOpen} onChange={() => setIsRegisterModalOpen(!isRegisterModalOpen)} />
    <div className="modal backdrop-blur-md" role="dialog">
      <div className="modal-box relative">
        <label htmlFor="register_modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl">✕</label>
        <h3 className="text-lg font-bold">Create an account</h3>
        <p className="py-4">Already have an account? <span className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer" onClick={openLoginModal}>Log in</span></p>
        <form  className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit2)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="register_email">Email</label>
            <input type="email" id="register_email" placeholder="Email" className="input input-bordered w-full "  {...register("email")} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="register_password">Password</label>
            <input type="password" id="register_password" placeholder="Password" className="input input-bordered w-full"  {...register("password")} />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" placeholder="Confirm Password" className="input input-bordered w-full"  {...register("confirmPassword")} />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="btn bg-blue-500 text-white w-full mt-4">Register</button>
        </form>
      </div>
      <label className="modal-backdrop" htmlFor="register_modal">Close</label>
    </div>
    </>
  );
}