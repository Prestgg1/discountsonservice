import ForgetPassword from "./Auth/ForgetPassword";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import SocialAuth from "./Auth/SocialAuth";
export default function Auth() {


  return (
    <>
      {/* Login Modal */}
      <div className={`modal  z-50`} role="dialog" id="login">
        <div className="modal-box  lg:relative">
          <h3 className="text-2xl font-bold">Log in</h3>
          <p className="py-4">New user? <a href="#register" className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer">Create an account</a></p>
          <Login />

       
          <a href="#forgetpassword" className="text-gray-500 block my-5 text-center self-center w-full">Forgot password?</a>
          <div className="my-5 flex flex-col gap-5">
          <SocialAuth />
          </div>
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
          <h3 className="text-2xl font-bold">Register</h3>
          <Register />
          <div className="modal-action">
            <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl">✕</a>
          </div>
        </div>
        <div className="modal-backdrop">
          <a href="#">Close</a>
        </div>
      </div>
{/* ForgetPassword Modal */}

<div className={`modal  z-50`} role="dialog" id="forgetpassword">
        <div className="modal-box  lg:relative flex flex-col gap-4">
          <h3 className="text-lg md:text-2xl font-bold">Forget Password</h3>
          <p className="py-4">We will send reset code in this email.</p>
          <ForgetPassword/>
          <div className="modal-action">
            <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 text-2xl hidden lg:block">✕</a>
          </div>
        </div>
        <div className="modal-backdrop">
          <a href="#">Kapat</a>
        </div>
      </div>
    </>
  );
}
