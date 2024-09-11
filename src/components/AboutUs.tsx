import Image from 'next/image';


const AboutUs: React.FC = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row gap-4 px-4 justify-center">
        <div className="bg-white shadow-lg rounded-xl p-4 flex-1 flex flex-col max-w-md mx-2">
          <div className="flex mb-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <p className="text-gray-600 text-sm mb-2">
              We offer you a subscription to various media services at the best price.
            </p>
            <p className="text-gray-600 text-sm mb-2">
              We have partnered with several companies to help you find the best prices for your media subscriptions and provide you with the best prices for the Premium subscriptions you want.
            </p>
            <p className="text-gray-500 text-xs font-semibold">
              It&apos;s simple, fast, and economical.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl flex-1 max-w-md mx-2 overflow-hidden">
          <Image
            src="/images/about.png"
            alt="About"
            width={400} 
            height={400} 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
