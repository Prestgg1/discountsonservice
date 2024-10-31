"use client"
import { PiCurrencyDollarBold } from "react-icons/pi";
import Button from "../Button";
import { FaCheckCircle } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { useState } from "react";
import { SubscriptionsType } from '@/app/libs/types';
import { Feature } from "@/app/libs/types";
export default function SubscriptionType({ data }: { data: SubscriptionsType }) {
  const locale = useLocale() as keyof Feature; // Type assertion to ensure locale matches Feature keys
  const [loading, setLoading] = useState(false);
  const t = useTranslations('subscription');

  async function handleCheckout() {
    try {
      setLoading(true);
      const response = await axios.post('/api/checkout', {
        name: data.type,
        price: data.durations[0].price,
      });

      if (response.status === 200) {
        window.location.assign(response.data.session);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl rounded-3xl">
      <div className="card-body px-0 items-center text-center">
        <h1 className="card-title font-bold text-3xl">{data.type}</h1>
        <hr className='bg-black w-full' />
        
        <div className='py-10 px-5 w-full'>
          <ul className='flex flex-col justify-start items-start [&_li]:text-xl w-full [&_li]:gap-2'>
            {data.features[locale].map((feature: string, index: number) => (
              <li 
                key={`feature-${index}`} 
                className='p-2 flex justify-start items-start text-left'
              >
                <FaCheckCircle className="flex-shrink-0 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-center items-center py-2'>
          <PiCurrencyDollarBold className="text-2xl font-black" />
          <span className='text-4xl font-bold'>{data.durations[0].price}</span>
        </div>

        <div className="card-actions w-full px-10">
          <Button 
            loading={loading} 
            onClick={handleCheckout} 
            className='w-full hover:bg-blue-500 hover:text-white'
          >
            {t('button')}
          </Button>
        </div>
      </div>
    </div>
  );
}
