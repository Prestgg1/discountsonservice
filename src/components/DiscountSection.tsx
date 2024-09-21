
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from './Button';
import { Link } from '@/i18n/routing';
const DiscountSection = () => {
  const t = useTranslations("DiscountSection")
  return (
    <div
    className="flex flex-col-reverse gap-4 md:flex-row w-full mx-auto my-4 2xl:my-24 "
  >
      <div className="bg-blue-800 text-white p-6 2xl:px-20 rounded-2xl shadow-lg md:w-1/2 md:self-stretch">
        <div className="flex flex-col gap-4 justify-center h-full">
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-4 leading-6 tracking-wider">
            {t("title")}
          </h2>
          <p className="text-base  leading-6 mb-4 space-x-4">
          {t("description")}
          </p>
          <a href="#subs">
          <Button className='bg-white text-black px-6 2xl:px-16   md:self-start rounded-2xl font-extrabold   '>
            {t('button')}
          </Button>
          </a>
        
        </div>
      </div>
      <div className="flex overflow-hidden rounded-2xl shadow-lg justify-center items-center flex-auto xl:max-h-[50vh] 2xl:max-h-[70vh] bg-white">
        <Image
          src="/images/discount.png"
          alt="Discount"
          width={400}
          height={400}
          placeholder='empty'
          className="object-fill md:object-contain rounded-lg shadow-lg w-full h-full " />
      </div>
    </div>

  );
};

export default DiscountSection;
