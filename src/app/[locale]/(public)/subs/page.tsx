import InviteFriends from '@/components/InviteFriends';
import Subscriptions from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";

const SubsPage = () => {
  return (
    <>
      <div className="h-72 bg-slate-200  flex flex-col justify-center items-center" >
        <div className='w-96 h-20 -translate-y-6 text-center'>
          <h1 className='text-3xl font-bold tracking-wide'>Choose a Netflix Plan</h1>
          <p className='mt-5'>Listen without limits at a bargain price</p>
        </div>

        <div className='h-20 w-80 translate-y-5'>
          <div role="tablist" className="tabs tabs-boxed">
            <a role="tab" className="tab h-12 font-bold flex justify-center items-center">6 months</a>
            <a role="tab" className="tab tab-active h-12 font-bold flex justify-center items-center">12 months</a>
          </div>
        </div>
      </div>

      {/* cards */}

      <div className=' bg-slate-200 flex justify-center gap-2 items-start flex-wrap'>
        <div className="card bg-base-100 px-10 shadow-xl rounded-3xl">


          <div className="card-body px-0 items-center text-center">
            <h1 className="card-title font-bold text-3xl">Basic</h1>
            <hr className='bg-black w-full ' />
            <div className='py-10'>
              <ul className='flex flex-col justify-start items-start [&_li]:flex [&_li]:justify-center [&_li]:items-center [&_li]:gap-2'>
                <li className='p-2'><FaCheckCircle /> Ad-free music listening</li>
                <li className='p-2'> <FaCheckCircle />Play anywhere - even offline</li>
                <li className='p-2'><FaCheckCircle /> On-demand playback</li>
              </ul>
            </div>
            <div className='flex justify-center items-center py-2'>
              <div className=''><h1 className='text-2xl font-black'><PiCurrencyDollarBold /></h1> </div>
              <div ><h1 className='text-4xl font-bold'>45</h1></div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary px-24">Get started</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 px-10 shadow-xl rounded-3xl">


          <div className="card-body px-0 items-center text-center">
            <h1 className="card-title font-bold text-3xl">Standart</h1>
            <hr className='bg-black w-full ' />
            <div className='py-10'>
              <ul className='flex flex-col justify-start items-start [&_li]:flex [&_li]:justify-center [&_li]:items-center [&_li]:gap-2'>
                <li className='p-2'><FaCheckCircle /> Ad-free music listening</li>
                <li className='p-2'> <FaCheckCircle />Play anywhere - even offline</li>
                <li className='p-2'><FaCheckCircle /> On-demand playback</li>
              </ul>
            </div>
            <div className='flex justify-center items-center py-2'>
              <div className=''><h1 className='text-2xl font-black'><PiCurrencyDollarBold /></h1> </div>
              <div ><h1 className='text-4xl font-bold'>60</h1></div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary px-24">Get started</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 px-10 shadow-xl rounded-3xl">


          <div className="card-body px-0 items-center text-center">
            <h1 className="card-title font-bold text-3xl">Premium</h1>
            <hr className='bg-black w-full ' />
            <div className='py-10'>
              <ul className='flex flex-col justify-start items-start [&_li]:flex [&_li]:justify-center [&_li]:items-center [&_li]:gap-2'>
                <li className='p-2'><FaCheckCircle /> Ad-free music listening</li>
                <li className='p-2'> <FaCheckCircle />Play anywhere - even offline</li>
                <li className='p-2'><FaCheckCircle /> On-demand playback</li>
              </ul>
            </div>
            <div className='flex justify-center items-center py-2'>
              <div className=''><h1 className='text-2xl font-black'><PiCurrencyDollarBold /></h1> </div>
              <div ><h1 className='text-4xl font-bold'>80</h1></div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary px-24">Get started</button>
            </div>
          </div>
        </div>
      </div>

      <InviteFriends />
    </>
  )
}

export default SubsPage