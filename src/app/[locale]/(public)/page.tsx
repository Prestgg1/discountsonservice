
import FAQ from '@/components/FAQ';
import SubscriptionRequest from '@/components/SubscriptionRequest';
import AboutUs from '@/components/AboutUs';
import DiscountSection from '@/components/DiscountSection';
import StepList from '@/components/StepList';
import SubscriptionsPage from '@/components/SubscriptionsPage';
import InviteFriends from '@/components/InviteFriends';
import FadeIn from '@/app/animations/Fadein';
import Scale from '@/app/animations/Scale';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'DiscountApp | Home',
  description: 'Endirimlərdən Sizdə Faydalanın',
}

export default function Home() {
  return (
    <>
    <Scale>
    <DiscountSection />
    </Scale>
    
    <SubscriptionsPage/>
    

 
 {/*    <FadeIn>
      
    </FadeIn> */}
  {/*  
    
 */}
 <FadeIn>
<StepList/>
</FadeIn>

      <FadeIn>
      <InviteFriends/>
      </FadeIn>
      <FadeIn>
      <AboutUs/>
      </FadeIn>
  
     <FAQ/>   
     
      
      <SubscriptionRequest/>
    </>
  );
}
