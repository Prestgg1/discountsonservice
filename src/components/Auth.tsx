"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from "@/app/schema/auth";
import { signIn } from "next-auth/react";
import { Notyf } from "notyf";
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();
  const notyf = new Notyf({
    duration: 3000,
    dismissible: true,
    position: {
      x: 'right',
      y: 'top',
    },
  });
  const {
    register: loginRegister,
    formState: { errors: loginErrors },
    handleSubmit: handleLoginSubmit,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const {
    register: registerRegister,
    formState: { errors: registerErrors },
    handleSubmit: handleRegisterSubmit,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onLoginSubmit = async (data: any) => {
    console.log("Login data:", data);
 try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        notyf.error("Giriş başarısız: " + result.error);
      } else {
        notyf.success("Giriş başarılı");
        router.push('/dashboard'); // Giriş başarılı olduğunda yönlendirme
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      notyf.error("Bir hata oluştu");
    } 
  };

  const onRegisterSubmit = async (data: any) => {
    try {
      console.log("Register data:", data);
      const res = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, name: data.name, password: data.password })
      });
     
      if (!res.ok) {
        const errorData = await res.json();
        notyf.error(errorData.message || "Kayıt işlemi başarısız");
        return;
      }

      const result = await res.json();
      notyf.success("Kullanıcı oluşturuldu");
      // Başarılı kayıt sonrası otomatik giriş yapma
      await onLoginSubmit({ email: data.email, password: data.password });
    } catch (error) {
      console.error("Kayıt hatası:", error);
      notyf.error("Bir hata oluştu");
    }
  };

  return (
    <>
      {/* Login Modal */}
      <div className={`modal  z-50`} role="dialog" id="login">
        <div className="modal-box  lg:relative">
          <h3 className="text-lg font-bold">Log in</h3>
          <p className="py-4">New user? <a href="#register" className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer">Create an account</a></p>
          <form className="flex flex-col gap-2" onSubmit={handleLoginSubmit(onLoginSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="login_email">Email</label>
              <input type="email" id="login_email" placeholder="Email" className="input input-bordered w-full" {...loginRegister("email")} />
              {loginErrors.email && <p className="text-red-500">{loginErrors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="login_password">Password</label>
              <input type="password" id="login_password" placeholder="Password" className="input input-bordered w-full" {...loginRegister("password")} />
              {loginErrors.password && <p className="text-red-500">{loginErrors.password.message}</p>}
            </div>
            <button type="submit" className="btn bg-blue-500 text-white w-full mt-4">Login</button>
          </form>

          <div className="modal-action">
            <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl hidden lg:block">✕</a>
          </div>
        </div>
        <div className="modal-backdrop">
          <a href="#">Kapat</a>
        </div>
      </div>

      {/* Register Modal */}
      <div className={`modal backdrop-blur-md z-50`} role="dialog" id="register">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">Register</h3>
          <form className="flex flex-col gap-2" onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="register_email">Email</label>
              <input type="email" id="register_email" placeholder="Email" className="input input-bordered w-full" {...registerRegister("email")} />
              {registerErrors.email && <p className="text-red-500">{registerErrors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="register_name">Name</label>
              <input type="text" id="register_name" placeholder="Name" className="input input-bordered w-full" {...registerRegister("name")} />
              {registerErrors.name && <p className="text-red-500">{registerErrors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="register_password">Password</label>
              <input type="password" id="register_password" placeholder="Password" className="input input-bordered w-full" {...registerRegister("password")} />
              {registerErrors.password && <p className="text-red-500">{registerErrors.password.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full" {...registerRegister("confirmPassword")} />
              {registerErrors.confirmPassword && <p className="text-red-500">{registerErrors.confirmPassword.message}</p>}
            </div>
            <button type="submit" className="btn bg-blue-500 text-white w-full mt-4">Register</button>
          </form>
          <div className="modal-action">
            <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl">✕</a>
          </div>
        </div>
        <div className="modal-backdrop">
          <a href="#">Close</a>
        </div>
      </div>

    </>
  );
}
