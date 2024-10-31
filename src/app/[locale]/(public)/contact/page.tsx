import FadeIn from "@/app/animations/Fadein";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import InviteFriends from "@/components/InviteFriends";
import { useTranslations } from "next-intl";

export default function ContactPage(){
    const t = useTranslations("ContactPage")
    return(
        <div className="w-full my-10 md:my-20  flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl font-extrabold"> {t("title")} </h1>
        <FadeIn>
        <ContactForm/>
        </FadeIn>
        
        <InviteFriends/>
        <FAQ />
        </div>
    )
}
