import { useEffect, useState } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
export default function MobileAuth() {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);


    return (
        <>
            <input type="checkbox" id="loginin" checked={isLogin} onChange={() => setIsLogin(!isLogin)} className="modal-toggle" />
            <div className="mymodal z-40 absolute w-full bg-white h-full p-10 flex flex-col justify-between items-start">
                <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Log in</h1>
                <p className="text-gray-500">New user? <span onClick={() => { setIsRegister(true); setIsLogin(false); }} className="text-primary">Create an account</span> </p>
                </div>
               <Login/>
                <div className="flex w-full text-center justify-center items-center gap-4"><hr className="flex-1" /> Or sign in with <hr className="flex-1" />  </div>
                <div className="flex w-full justify-center items-center gap-4">
                    <button className="btn btn-primary font-extrabold">Google</button>
                    <button className="btn btn-primary  font-extrabold">Facebook</button>
                    <button className="btn btn-primary font-extrabold">Apple</button>

                </div>
                <p className="text-gray-500 text-center text-sm w-full">Protected by reCAPTCHA and subject to the Google <span className="text-primary">Privacy Policy</span> and <span className="text-primary">Terms of Service</span></p>
            </div>
            <input type="checkbox" id="registerin" checked={isRegister} onChange={() => setIsRegister(!isRegister)} className="modal-toggle" />
            <div className="mymodalregister z-50 absolute w-full bg-white h-full p-10 justify-between flex-col items-start ">
                <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Register</h1>
                <p className="text-gray-500">Already have an account? <label onClick={() => { setIsLogin(true); setIsRegister(false); }} className="text-blue-500">Log in</label></p>
                </div>
              <Register/>
                <div className="flex w-full text-center justify-center items-center gap-4"><hr className="flex-1" /> Or sign up with <hr className="flex-1" />  </div>
                <div className="flex w-full justify-center items-center gap-4">
                    <button className="btn btn-primary font-extrabold">Google</button>
                    <button className="btn btn-primary  font-extrabold">Facebook</button>
                    <button className="btn btn-primary font-extrabold">Apple</button>
                </div>
                <p className="text-gray-500 text-center text-sm w-full">Protected by reCAPTCHA and subject to the Google <span className="text-primary">Privacy Policy</span> and <span className="text-primary">Terms of Service</span></p>
            </div>
        </>
    );
}
