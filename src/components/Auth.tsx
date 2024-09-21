import Login from "./Auth/Login";
import Register from "./Auth/Register";
export default function Auth() {


  return (
    <>
      {/* Login Modal */}
      <div className={`modal  z-50`} role="dialog" id="login">
        <div className="modal-box  lg:relative">
          <h3 className="text-lg font-bold">Log in</h3>
          <p className="py-4">New user? <a href="#register" className="text-blue-500 border-dotted border-b-2 border-blue-500 cursor-pointer">Create an account</a></p>
          <Login />
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
          <Register />
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
