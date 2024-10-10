
"use client"
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PiCopy } from "react-icons/pi";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from "react-hot-toast";
import Button from "./Button";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";


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



          <label htmlFor="my_modal_7" className="flex"><span className="ml-2 flex font-bold items-center justify-center border-b-2 border-blue-800 text-nowrap ">{t("discounts")}</span> <PiCopy className="ml-2 text-black text-2xl" />  </label>

          
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box relative flex flex-col gap-4">
              <label htmlFor="my_modal_7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h1 className="text-2xl font-extrabold my-5">{t('share')}</h1>
              <div className="flex flex-wrap gap-4">
              <CopyToClipboard  text={"https://discountsonservice.vercel.app/"} onCopy={() => toast.success("Copied")}>
              <Button className="w-max"><PiCopy className="ml-2 text-black text-2xl" />  {t("copy")}</Button>
              </CopyToClipboard>
   
              <FacebookShareButton className="btn bg-red-700 " url={"https://discountsonservice.vercel.app/"}>
                <FacebookIcon className="h-6 w-6" /> {t("facebook")}
              </FacebookShareButton>
              <WhatsappShareButton className="btn" url={"https://discountsonservice.vercel.app/"}>
                <WhatsappIcon className="h-6 w-6" /> {t("whatsapp")} 
              </WhatsappShareButton>
              <LinkedinShareButton className="btn" url={"https://discountsonservice.vercel.app/"} >
              <LinkedinIcon className="h-6 w-6" /> {t("linkedin")} 
              </LinkedinShareButton>
              <TwitterShareButton className=" btn btn-primary flex justify-center items-center rounded-xl  hover:bg-blue-600" url={"https://discountsonservice.vercel.app/"}>
              <TwitterIcon className="h-6 w-6" /> {t("twitter")} 
              </TwitterShareButton>
              </div>
            
              
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>
        </span>
      </div>
    </div>
  );
};

export default InviteFriends;
