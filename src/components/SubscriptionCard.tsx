import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import FadeIn from '@/app/animations/Fadein';
import Button from './Button';
import { Link } from '@/i18n/routing';

interface SubscriptionCardProps {
  title: string;
  description: { [key: string]: string }; 
  imageUrl: string,
  slug:string

}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, description, imageUrl,slug }) => {
  const locale: string = useLocale()
  const t = useTranslations("SubscriptionCard");
  return (
    <FadeIn>
      <div
        className="subscription-card flex w-full flex-grow-0 justify-between flex-col-reverse md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 md:w-1/2 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{description[locale]}</p>
          <Link href={`/subscriptions/${slug}`}> <Button className='mt-4 bg-blue-600 duration-300 hover:bg-blue-700 font-bold text-white  rounded-xl text-xl self-start'>  {t("button")}</Button></Link>

        </div>
        <div className={`md:w-1/2 w-full h-full rounded-2xl flex-grow-0`}>
          <Image src={imageUrl} alt={title} layout="responsive" width={500} height={300} className="object-cover max-w-full max-h-[300px] rounded-2xl" />
        </div>
      </div>
    </FadeIn>

  );
};

export default SubscriptionCard;
