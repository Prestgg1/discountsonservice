"use client"
import SubscriptionCard from './SubscriptionCard';
import { useTranslations } from 'next-intl';
import useSwr from 'swr';
const SubscriptionsPage = () => {
  const t = useTranslations("SubscriptionPage");
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const {data,error,isLoading} = useSwr('/api/subscriptions/get-subs', fetcher)
  return (
    <div className="w-full" id='subs'>
      <h1 className="text-center text-2xl font-bold mb-8" >{t("title")}</h1>
      <div className="w-full flex flex-col gap-4" >
        {isLoading && <SubscriptionCard loading={true}/>}
        {error && <p className='text-center text-red-600'>Serverdə Problem Oldu</p>}
        {data && data.length === 0 && <p className='text-center text-red-600'>Heç Bir Təklifiniz Yoxdur</p>}
        {data && data.map((subscription:any) => (
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
