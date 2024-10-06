import { signOut } from "next-auth/react"
import { toast } from "react-hot-toast"
import Button from "./Button";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { useTranslations } from "next-intl";

export default function Logout() {
  const path = usePathname()
  const t = useTranslations("Logout")
    const [loading, setLoading] = useState(false);
    async function logout(){
        setLoading(true)
        await signOut({redirect:false});
        toast.success(t('success'));
        setLoading(false)
        window.location.href = path
    }
    return (
        <div className={`modal  z-50`} role="dialog" id="logout">
            <div className="modal-box  lg:relative flex flex-col gap-4">
                <div className="flex w-full mb-5 justify-between items-center">
                    <h3 className="">{t('title')}</h3>
                    <a href="#" className="btn btn-sm btn-circle text-2xl hidden lg:block">✕</a>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <a href="#" className="btn text-blue-800 border-blue-800 border-2 bg-transparent px-8 py-4 hover:bg-blue-500 duration-300 flex-1">{t('cancel')}</a>
                    <Button loading={loading}  className="bg-blue-800 text-white px-8 flex-1" onClick={logout}>
                        {t('accept')}
                    </Button>
                </div>
            </div>
            <div className="modal-backdrop">
                <a href="#">Bağla</a>
            </div>
        </div>
    )
}
