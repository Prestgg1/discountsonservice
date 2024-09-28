"use client"
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import InviteFriends from '@/components/InviteFriends';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";

const SubsPage = () => {
  return (
    <div className='w-full flex flex-col 2xl:gap-20 gap-10 2xl:my-20 my-10'>
      <div className='flex flex-col gap-2 2xl:gap-5 w-full justify-center items-center '>
        <h1 className='md:text-5xl text-3xl font-bold tracking-wide'>Choose a Netflix Plan</h1>
        <p className='mt-3 md:text-xl'>Listen without limits at a bargain price</p>
        <div role="tablist" className=" tabs tabs-boxed md:[&>*]:px-8 [&>*]:px-4  md:[&>*]:py-4 [&>*]:py-2 [&>*]:text-xl [&>*]:font-bold [&>*]:h-auto ">
          <a role="tab" style={{ borderRadius: '5px 0px 0px 5px' }} className="tab rounded-l-none">6 Months</a>
          <a role="tab" style={{ borderRadius: '0px 5px 5px 0px' }} className="tab tab-active">12 Months</a>
        </div>
      </div>

      <div className='flex w-full gap-12 [&>*]:flex-1 justify-center  items-start flex-wrap'>
    

      </div>

      <InviteFriends />
      <FAQ  />
    </div>
  )
}

export default SubsPage
