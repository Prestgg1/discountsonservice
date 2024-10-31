import Image from 'next/image';
import { useTranslations } from "next-intl"; 

const AboutUs: React.FC = () => {
  const t = useTranslations("AboutUs")
  return (
    <div className='flex flex-col gap-4 my-16 xl:my-8 2xl:my-10'>
      <h1 className='text-2xl font-bold text-center md:text-4xl md:mb-4'>{t("title")}</h1>

<div className="flex flex-col-reverse gap-4 md:flex-row w-full  mb-4">
      <div className="bg-white text-black p-5 lg:p-10 lg:px-20 rounded-2xl shadow-lg basis-1/2 md:self-stretch">

     


        <div className="flex flex-col gap-2  xl:gap-8 justify-center h-full">
          <Image 
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain w-1/4"
          />
          <p className="text-gray-600 text-xl">
          {t("description")}
          </p>

          <p className="text-gray-600 text-xl mb-2">
          {t("description1")}
          </p>
          <p className="text-black text-xl font-semibold">
          {t("font-semibold")}
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2 overflow-hidden rounded-2xl shadow-lg justify-center items-center    lg:max-h-max 2xl:max-h-[60vh] bg-white">
        <Image
          src="/images/about.png"
          alt="About"
          width={400}
          height={400}
          className="object-fill md:object-contain rounded-lg shadow-lg w-full h-full " />
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
