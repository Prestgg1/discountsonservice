import Image from 'next/image';

const DiscountSection = () => {
  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row container mx-auto my-4 px-10 md:px-0">
      <div className="bg-blue-800 text-white p-6 rounded-2xl shadow-lg md:w-1/2 md:self-stretch">
        <div className="flex flex-col gap-4 justify-center h-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Start enjoying a benefit of up to 50%</h2>
          <p className="text-base mb-4">
          You have always wanted to get the same product at a special price for you, without haggling - and it is yours.
          </p>
          <button className="bg-white text-black px-6  py-4 md:self-start rounded-lg font-extrabold">Start using</button>
        </div>
      </div>
      <div className="flex overflow-hidden rounded-2xl shadow-lg justify-center items-center flex-auto max-h-[50vh] bg-white">
        <Image
          src="/images/discount.png"
          alt="Discount"
          width={400}
          height={400}
          className="object-fill md:object-contain rounded-lg shadow-lg w-full h-full " />
      </div>
    </div>
  );
};

export default DiscountSection;
