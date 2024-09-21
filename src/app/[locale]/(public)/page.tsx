import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import SubscriptionRequest from '@/components/SubscriptionRequest';
import AboutUs from '@/components/AboutUs';
import DiscountSection from '@/components/DiscountSection';
import StepList from '@/components/StepList';
import SubscriptionsPage from '@/components/SubscriptionsPage';
import InviteFriends from '@/components/InviteFriends';
import FadeIn from '@/app/animations/Fadein';
import Scale from '@/app/animations/Scale';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
    <Scale>
    <DiscountSection />
    </Scale>

      <FadeIn>
      <SubscriptionsPage/>
      </FadeIn>
<FadeIn>
<StepList/>
</FadeIn>

      <FadeIn>
      <InviteFriends/>
      </FadeIn>
      <FadeIn>
      <AboutUs/>
      </FadeIn>
  
     <FAQ title="FAQ"/>   
     
      
      <SubscriptionRequest/>
    </>
  );
}
