import { useTranslations } from 'next-intl';
const SubscriptionRequest = () => {
  const t = useTranslations("SubscriptionRequest")
  return (
    <div className="bg-blue-800 text-white py-6 px-8 rounded-lg shadow-lg my-8 w-full">
      <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row md:items-center items-stretch ">
        <div>
          <h3 className="text-lg font-semibold">
          {t("title")}
          </h3>
          <p className="text-sm mt-2">
          {t("description")}
          </p>
        </div>
        <div>
          <button className="bg-white w-full md:auto text-blue-900 py-2 px-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white duration-300">
          {t("request")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionRequest;
