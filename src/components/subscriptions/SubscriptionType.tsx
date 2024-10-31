"use client"
import { PiCurrencyDollarBold } from "react-icons/pi";
import Button from "../Button";
import { FaCheckCircle } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { useState } from "react";
import { SubscriptionsType } from '@/app/libs/types';


export default function SubscriptionType({data}:SubscriptionsType) {
  const locale = useLocale()
  const [loading, setLoading] = useState(false)
  const t = useTranslations('subscription')
  async function Checkout(){
    setLoading(true)
    const res = await axios.post('/api/checkout',{
      name:data.type,
      price:data.durations[0].price,
    })
    if(res.status === 200){
      window.location.assign(res.data.session)
    }

  }
  return (
    <div  className="card bg-base-100 shadow-xl rounded-3xl">
    <div className="card-body px-0 items-center text-center">
      <h1 className="card-title font-bold text-3xl">{data.type}</h1>
      <hr className='bg-black w-full ' />
      <div className='py-10 px-5 w-full'>
        <ul className='flex [&_li]:text-xl w-full flex-col justify-start items-start  [&_li]:gap-2'>
         {data.features[locale].map((feature:string,i:any) => (
            <li key={i} className='p-2 flex justify-start items-start text-left '><FaCheckCircle className="flex-shrink-0" />  {feature}</li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center py-2'>
        <div className=''><h1 className='text-2xl font-black'><PiCurrencyDollarBold /></h1> </div>
        <div ><h1 className='text-4xl font-bold'>{data.durations[0].price}</h1></div>
      </div>
      <div className="card-actions w-full px-10">

        <Button loading={loading} onClick={Checkout} className='w-full hover:bg-blue-500 hover:text-white'>
          {t('button')}
        </Button>
      </div>
    </div>
  </div>
  )
}
