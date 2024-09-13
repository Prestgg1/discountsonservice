import Image from 'next/image';


const AboutUs: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 my-16'>
      <h1 className='text-2xl font-bold text-center md:text-4xl md:mb-4'>About Us</h1>

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
            We offer you a subscription to various media services at the best price.
          </p>

          <p className="text-gray-600 text-xl mb-2">
            We have partnered with several companies to help you find the best prices for your media subscriptions and provide you with the best prices for the Premium subscriptions you want.
          </p>
          <p className="text-black text-xl font-semibold">
            It&apos;s simple, fast, and economical.
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2 overflow-hidden rounded-2xl shadow-lg justify-center items-center  flex-auto md:max-h-[50vh] lg:max-h-max 2xl:max-h-[60vh] bg-white">
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
