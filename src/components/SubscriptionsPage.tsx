import SubscriptionCard from './SubscriptionCard';
import { useTranslations } from 'next-intl';

const SubscriptionsPage = () => {
  const t = useTranslations("SubscriptionPage");

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
  ];

  return (
    <div className="w-full" id='subs'>
      <h1 className="text-center text-2xl font-bold mb-8" >{t("title")}</h1>
      <div className="w-full flex flex-col gap-4" >
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            title={subscription.title}
            description={subscription.description}
            imageUrl={subscription.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
