
import StepCard from './StepCard';
import { useTranslations } from 'next-intl';
const StepList = () => {
  const t = useTranslations("StepList")
  return (
    <div className=" py-12 w-full">
      <h2 className="text-center text-2xl font-bold mb-8">{t("title")}</h2>
      <div className="flex gap-4 flex-col md:flex-row justify-center  w-full">
        <StepCard
          stepNumber={1}
          description={t("description1")}
          iconUrl="/images/step-1.svg" 
        />
        <StepCard
          stepNumber={2}
          description={t("description2")}
          iconUrl="/images/step-2.svg" 
        />
        <StepCard
          stepNumber={3}
          description={t("description3")}
          iconUrl="/images/step-3.svg" 
        />
      </div>
    </div>
  );
};

export default StepList;
