"use client"
import { SubscriptionsType } from "@/app/libs/types";
import SubscriptionType from "./SubscriptionType";
import useSWR from "swr";


export default  function  SubscriptionTypes({ slug, selectedduration }: {slug: string,selectedduration:string}) {
  function fetcher(url:string){
    return fetch(url).then((res) => res.json());
  }

  const {data, error, isLoading} = useSWR(`/api/subscriptions/prices?slug=${slug}&duration=${selectedduration}`,fetcher)
  if(isLoading) return <div className="skeleton h-64 w-32"></div>
  if(data.length === 0) return <div className="text-center text-red-500"> Heç Bir Təklifiniz Yoxdur</div>
  if(error){
    return <div className="text-center text-red-500">Serverdə Problem Oldu</div>
  }
  
  return (
      <>
      
      {data.map((data: SubscriptionsType, index: number) => (
          <SubscriptionType key={index} data={data} />
        ))}
      </>
  );
}
