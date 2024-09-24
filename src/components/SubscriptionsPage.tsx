import { getSubsName } from '@/app/libs/getSubs';
import SubscriptionCard from './SubscriptionCard';
import { useTranslations } from 'next-intl';

const SubscriptionsPage = async () => {
  const t = useTranslations("SubscriptionPage");
/* 
  const subscriptions = [
    {
      title: t("title1"),
      description: t("description"),
      imageUrl: '/images/netflix-logo.jpg'
    },
    {
      title: t("title2"),
      description: t("description"),
      imageUrl: '/images/spotify-logo.jpg'
    },
    {
      title: t("title3"),
      description: t("description"),
      imageUrl: '/images/youtube.jpg'
    },
  ]; */

  const subscriptions = await getSubsName();


  return (
    <div className="w-full" id='subs'>
      <h1 className="text-center text-2xl font-bold mb-8" >{t("title")}</h1>
      <div className="w-full flex flex-col gap-4" >
      {subscriptions.map((subscription:any) => (
        <SubscriptionCard
          key={subscription.id}
          title={subscription.name}
          description={subscription.description}
          imageUrl={subscription.image}
        />
      ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
