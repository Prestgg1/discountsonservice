import { getSubsName } from '@/app/libs/getSubs';
import SubscriptionCard from './SubscriptionCard';
import { useTranslations } from 'next-intl';

const SubscriptionsPage = async () => {
  const t = useTranslations("SubscriptionPage");

  const subscriptions = await getSubsName();


  return (
    <div className="w-full" id='subs'>
      <h1 className="text-center text-2xl font-bold mb-8" >{t("title")}</h1>
      <div className="w-full flex flex-col gap-4" >
      {subscriptions.map((subscription:any) => (
        <SubscriptionCard
          key={subscription.id}
          slug={subscription.slug}
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
