import { useEffect, useState } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ForgetPassword from "./Auth/ForgetPassword";
import { signIn } from "next-auth/react";
import SocialAuth from "./Auth/SocialAuth";
import { useTranslations } from "next-intl";
export default function MobileAuth() {
    const t = useTranslations('Auth')
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isForget,setIsForget] = useState(false)
    function GoogleGiris(){
        signIn("google",{redirect:false})

    }
    return (
        <>
            <input type="checkbox" id="loginin" checked={isLogin} onChange={() => setIsLogin(!isLogin)} className="modal-toggle" />
            <div className="mymodal z-40 absolute w-full bg-white h-full p-10 flex flex-col justify-between items-start">
                <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold"> {t('login')} </h1>
                <p className="text-gray-500">{t('newuser')} <span onClick={() => { setIsRegister(true); setIsLogin(false); }} className="text-primary">{t('create')}</span> </p>
                </div>
               <Login/>
               <span onClick={() => setIsForget(true)} className="text-gray-500 block my-2 text-center self-center w-full">{t('forgetpassword')}?</span>
                  <SocialAuth/>
                <p className="text-gray-500 text-center text-sm w-full">Protected by reCAPTCHA and subject to the Google <span className="text-primary">Privacy Policy</span> and <span className="text-primary">Terms of Service</span></p>
            </div>
            <input type="checkbox" id="registerin" checked={isRegister} onChange={() => setIsRegister(!isRegister)} className="modal-toggle" />
            <div className="mymodalregister overflow-y-auto z-50 fixed w-full bg-white h-[90vh]  pt-5 px-10 justify-between flex-col items-start ">
                <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Register</h1>
                <p className="text-gray-500">Already have an account? <label onClick={() => { setIsLogin(true); setIsRegister(false); }} className="text-blue-500">Log in</label></p>
                </div>
              <Register/>
              <div className="flex flex-col gap-4 mb-10 w-full">
              <SocialAuth/>
                <p className="text-gray-500 text-center text-sm w-full">Protected by reCAPTCHA and subject to the Google <span className="text-primary">Privacy Policy</span> and <span className="text-primary">Terms of Service</span></p>
            </div>
              </div>
           
            {}
            <input type="checkbox" id="forgetpassword" checked={isForget} onChange={() => setIsForget(!isForget)} className="modal-toggle" />
            <div className={`${isForget ? "mymodalforgetpassword" : "hidden"}  z-40 absolute w-full bg-white h-full p-10 flex flex-col justify-start items-start`}>
                <div className="flex flex-col gap-4 w-full">
                <h1 className="text-2xl font-bold">Forget Password</h1>
                <p className="py-4">We will send reset code in this email.</p>
                </div>
               <ForgetPassword/>
            </div>
        </>
    );
}
