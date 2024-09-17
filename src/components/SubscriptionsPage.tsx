import SubscriptionCard from './SubscriptionCard';
import { useTranslations } from 'next-intl';

const SubscriptionsPage = () => {
  const t = useTranslations("SubscriptionPage");

  const subscriptions = [
    {
      title: t("title1"),
      description: t("description"),
      imageUrl: '/images/netflix-logo.jpg', 
      bgColor: 'bg-black',
    },
    {
      title: t("title2"),
      description: t("description"),
      imageUrl: '/images/spotify-logo.jpg', 
      bgColor: 'bg-green-500',
    },
    {
      title: t("title3"),
      description: t("description"),
      imageUrl: '/images/youtube.jpg', 
      bgColor: 'bg-gray-200',
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold mb-8">{t("choose_subscription")}</h1>
      <div className="w-full flex flex-col gap-4">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            title={subscription.title}
            description={subscription.description}
            imageUrl={subscription.imageUrl}
            bgColor={subscription.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
