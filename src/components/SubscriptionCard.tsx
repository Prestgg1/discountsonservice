import Image from 'next/image';
import { useTranslations } from 'next-intl';
interface SubscriptionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, description, imageUrl, bgColor }) => {
  const t = useTranslations("SubscriptionCard")
  return (
    <div className="flex w-full  flex-grow-0 justify-between flex-col-reverse md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 md:w-1/2  flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-blue-600 duration-300 hover:bg-blue-700 font-bold text-white py-3 rounded-xl text-xl p-4 self-start">
        {t("button")}
        </button>
      </div>
      <div className={`md:w-1/2 w-full h-full  rounded-2xl  flex-grow-0`}>
        <Image src={imageUrl} alt={title}  layout="responsive" width={500} height={300} className="object-cover max-w-full max-h-[300px] rounded-2xl" />
      </div>
    </div>
  );
};

export default SubscriptionCard;
