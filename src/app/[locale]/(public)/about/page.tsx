import LeftScale from "@/app/animations/LeftScale";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import InviteFriends from "@/components/InviteFriends";
import Team from "@/components/Team";

export default function About(){
    return(
        <div className="w-full my-10 md:my-20 flex flex-col gap-10 justify-center items-center">
          <LeftScale>
            <AboutUs/>
          </LeftScale>
          <Team/>
           
            <InviteFriends/>
            <FAQ />
        </div>
    )
}
