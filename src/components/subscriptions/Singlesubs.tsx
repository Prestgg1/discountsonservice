"use client"
import { useState } from "react";
import SubscriptionTypes from "./SubscriptionTypes";
import { useLocale, useTranslations } from "next-intl";

export default function Singlesubs({ sub, durations }: { sub: { name: string,description: { [key: string]: string }, slug: string }, durations: { duration: number }[] }) {
  const locale = useLocale()
  const t = useTranslations('subscription')
  const [selectedduration, setSelectedduration] = useState(durations[0].duration);
  return (
    <>
      <div className='flex flex-col gap-2 2xl:gap-5 w-full justify-center items-center '>
        <h1 className='md:text-5xl text-3xl font-bold tracking-wide'> {t('description', { subname: sub.name })} </h1>
        <p className='mt-3 md:text-2xl'>{sub.description[locale]} </p>

          <div className="join">
          {durations.length > 1 ? durations.map((duration: { duration: number },index:number) => (
             <input key={index} className="join-item btn" onClick={() => setSelectedduration(duration.duration)} defaultChecked={selectedduration === duration.duration} type="radio" name="options" aria-label={`${duration.duration} ${t('mounth')}`} />
          )) :    <span
          className="text-xl"
          dangerouslySetInnerHTML={{
            __html: t('select', {
              duration: `<span class="text-blue-600">${durations[0].duration} ${t('mounth')}</span>`
            })
          }}
        />}
    <span className="3xl "></span>
          </div>
      </div>

      <div className='flex w-full gap-12 [&>*]:flex-1 justify-center items-start flex-wrap'>
       <SubscriptionTypes slug={sub.slug} selectedduration={selectedduration.toString()} />
      </div>
    </>
  );
}
