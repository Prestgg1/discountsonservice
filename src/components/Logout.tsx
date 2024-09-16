import { signOut } from "next-auth/react"
import { Notyf } from "notyf"
export default function Logout() {
    const notyf = new Notyf({
        duration: 3000,
        dismissible: true,
        position: {
            x: 'right',
            y: 'top',
        },
    });
    return (
        <div className={`modal  z-50`} role="dialog" id="logout">
            <div className="modal-box  lg:relative flex flex-col gap-4">
                <div className="flex w-full mb-5 justify-between items-center">
                    <h3 className="">Are you sure you want to logout?</h3>
                    <a href="#" className="btn btn-sm btn-circle text-2xl hidden lg:block">✕</a>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="btn text-blue-800 border-blue-800 border-2 bg-transparent px-8 py-4 hover:bg-blue-500 duration-300 flex-1">Cancel</a>
                    <button onClick={() => {
                        signOut()
                        notyf.success('You have been logged out')
                    }} className="btn bg-blue-800 text-white px-8 py-4 hover:bg-blue-500 duration-300 flex-1">Logout</button>
                </div>
            </div>
            <div className="modal-backdrop">
                <a href="#">Kapat</a>
            </div>
        </div>
    )
}