import FadeIn from "@/app/animations/Fadein";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import InviteFriends from "@/components/InviteFriends";

export default function ContactPage(){
    return(
        <div className="w-full my-10 md:my-20 flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl font-extrabold">Contact US</h1>
        <FadeIn>
        <ContactForm/>
        </FadeIn>
        
        <InviteFriends/>
        <FAQ title="FAQ"/>
        </div>
    )
}
