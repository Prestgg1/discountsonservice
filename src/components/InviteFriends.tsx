
"use client"
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PiCopy } from "react-icons/pi";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast from "react-hot-toast";



const InviteFriends = () => {
  const t = useTranslations("InviteFriends")

  return (
    <div className="bg-blue-800 text-white p-6 rounded-2xl shadow-lg mt-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center w-full">
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {t("title")}
          </h3>
        <p className="text-md">
          {t("description")}
        </p>
      </div>
      <div
        className="bg-white text-blue-800 flex flex-col text-center p-6 rounded-2xl hover:bg-gray-100 transition duration-300"
      >
        

        <span className="text-black">{t("link")}</span>
        <span className="flex items-center justify-center">
          
          <Link href="/subs">
          <span className="ml-2 flex font-bold items-center justify-center border-b-2 border-blue-800 text-nowrap ">{t("discounts")}</span> 
          </Link>
          <CopyToClipboard text={"Salam"}
          onCopy={() => toast.success("Copied")}
          >
                      <PiCopy  className="ml-2 text-black text-2xl" />
        </CopyToClipboard>
        </span>
      </div>
    </div>
  );
};

export default InviteFriends;
