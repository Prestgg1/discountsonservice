"use client"
import { useState } from "react";
import SubscriptionTypes from "./SubscriptionTypes";
export default function Singlesubs({ sub, durations }: { sub: { name: string, slug: string }, durations: { duration: number }[] }) {
  const [selectedduration, setSelectedduration] = useState(durations[0].duration);
  return (
    <>
      <div className='flex flex-col gap-2 2xl:gap-5 w-full justify-center items-center '>
        <h1 className='md:text-5xl text-3xl font-bold tracking-wide'>Choose a {sub.name} Plan</h1>
        <p className='mt-3 md:text-xl'>Listen without limits at a bargain price</p>

          <div className="join">
          {durations.map((duration: { duration: number },index:number) => (
             <input key={index} className="join-item      btn" onClick={() => setSelectedduration(duration.duration)} checked={selectedduration === duration.duration} type="radio" name="options" aria-label={`${duration.duration} mounths`} />
          ))}
          </div>
      </div>

      <div className='flex w-full gap-12 [&>*]:flex-1 justify-center items-start flex-wrap'>
       <SubscriptionTypes slug={sub.slug} selectedduration={selectedduration} />
      </div>
    </>
  );
}
