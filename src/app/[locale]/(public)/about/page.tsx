import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import InviteFriends from "@/components/InviteFriends";

export default function About(){
    return(
        <div className="w-full my-10 md:my-20 flex flex-col gap-10 justify-center items-center">
            <AboutUs/>
            <InviteFriends/>
            <FAQ title="FAQ"/>
        </div>
    )
}