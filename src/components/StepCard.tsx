import Image from "next/image";
import { useTranslations } from 'next-intl';

interface StepCardProps {
  stepNumber: number;
  description: string;
  iconUrl: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, description, iconUrl }) => {
  const t = useTranslations("StepCard")
  return (
    <div className="relative flex-1 bg-white shadow-lg rounded-2xl p-6 mb-4 max-w-lg h-full ">
      <Image 
        src={iconUrl}
        width={100}
        height={100}
        alt={`Step ${stepNumber}`}
        className="absolute top-4 right-4 h-20 w-20" 
      />

      <div className="mt-8"> 
        <h3 className="text-xl font-bold mb-2">{t("step")} {stepNumber}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
