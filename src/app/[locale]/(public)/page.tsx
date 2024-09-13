import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import SubscriptionRequest from '@/components/SubscriptionRequest';
import AboutUs from '@/components/AboutUs';
import DiscountSection from '@/components/DiscountSection';
import StepList from '@/components/StepList';
import SubscriptionsPage from '@/components/SubscriptionsPage';
import SupportButton from '@/components/SupportButton';
import InviteFriends from '@/components/InviteFriends';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <DiscountSection />
      <SubscriptionsPage/>
      <StepList/>
      <InviteFriends/>
      <AboutUs/>
      <FAQ/>
      <SupportButton/>
      <SubscriptionRequest/>

   

      
    </>
  );
}
