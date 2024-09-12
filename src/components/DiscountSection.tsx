import Image from 'next/image';

const DiscountSection = () => {
  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row w-full mx-auto my-4 2xl:my-24 ">
      <div className="bg-blue-800 text-white p-6 2xl:px-20 rounded-2xl shadow-lg md:w-1/2 md:self-stretch">
        <div className="flex flex-col gap-4 justify-center h-full">
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-4 leading-6 tracking-wider">Start enjoying a benefit of up to 50%</h2>
          <p className="text-base  leading-6 mb-4 space-x-4">
          You have always wanted to get the same product at a special price for you, without haggling - and it is yours.
          </p>
          <button className="bg-white text-black px-6 2xl:px-16  py-4 md:self-start rounded-2xl font-extrabold hover:bg-blue-900 hover:text-white duration-300">Start using</button>
        </div>
      </div>
      <div className="flex overflow-hidden rounded-2xl shadow-lg justify-center items-center flex-auto xl:max-h-[50vh] 2xl:max-h-[70vh] bg-white">
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
