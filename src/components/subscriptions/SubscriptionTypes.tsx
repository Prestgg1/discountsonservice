"use client"
import { fetchPrices } from "@/app/libs/getSubs";
import SubscriptionType from "./SubscriptionType";
import { useEffect, useState } from "react";

export default  function  SubscriptionTypes({ slug, selectedduration }: any) {

  let [data, setData] = useState([]);
  async function fetchdata(){
    const res = await fetchPrices(slug,selectedduration)
    setData(res)
  }
  useEffect(() => {
    fetchdata()
  }, [selectedduration,slug])
  if(data.length === 0) return <div className="skeleton h-64 w-32"></div>
  return (
      <>
      
      {data.map((data: any, index: number) => (
          <SubscriptionType key={data.id} data={data} />
        ))}

      </>
  );
}
