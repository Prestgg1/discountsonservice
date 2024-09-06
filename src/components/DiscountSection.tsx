import Image from 'next/image';

const DiscountSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 p-10">
      <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg flex-1 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Start enjoying a benefit of up to 50%</h2>
        <p className="text-base mb-4">
          You have always wanted to get the same product at a special price for you, without haggling - and it is yours.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-lg">Start using</button>
      </div>

      <div className="flex justify-center items-center p-10 flex-1 max-w-lg">
        <Image
          src="/images/discount.png"
          alt="Discount"
          width={400}
          height={400}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DiscountSection;
