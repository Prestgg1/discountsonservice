import { PiCurrencyDollarBold } from "react-icons/pi";
import Button from "../Button";
import { FaCheckCircle } from "react-icons/fa";
import { useLocale } from "next-intl";

export default function SubscriptionType({data}) {
  const locale = useLocale()
  console.log(data)
  return (
    <div  className="card bg-base-100 shadow-xl rounded-3xl">
    <div className="card-body px-0 items-center text-center">
      <h1 className="card-title font-bold text-3xl">{data.type}</h1>
      <hr className='bg-black w-full ' />
      <div className='py-10 px-5 w-full'>
        <ul className='flex [&_li]:text-xl w-full flex-col justify-start items-start [&_li]:flex [&_li]:justify-center [&_li]:items-center [&_li]:gap-2'>
         {data.features[locale].map((feature, index) => (
            <li key={index} className='p-2'><FaCheckCircle /> {feature}</li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center py-2'>
        <div className=''><h1 className='text-2xl font-black'><PiCurrencyDollarBold /></h1> </div>
        <div ><h1 className='text-4xl font-bold'>{data.durations[0].price}</h1></div>
      </div>
      <div className="card-actions w-full px-10">

        <Button className='w-full hover:bg-blue-500 hover:text-white'>
          Get started
        </Button>
      </div>
    </div>
  </div>
  )
}
