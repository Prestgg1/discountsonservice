import FAQ from '@/components/FAQ';
import InviteFriends from '@/components/InviteFriends';
import { FaCheckCircle } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";

const SubsPage = () => {
  const subs = [
    {
      id: 1,
      title: 'Basic',
      price: 45,
      features: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback'
      ]
    },
    {
      id: 2,
      title: 'Standart',
      price: 60,
      features: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback'
      ]
    },
    {
      id: 3,
      title: 'Premium',
      price: 80,
      features: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback'
      ]
    }
  ]
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
        {subs.map((key)=>(
                  <div key={key.id} className="card bg-base-100  shadow-xl rounded-3xl">


                  <div className="card-body px-0 items-center text-center">
                    <h1 className="card-title font-bold text-3xl">{key.title}</h1>
                    <hr className='bg-black w-full ' />
                    <div className='py-10 px-5 w-full'>
                      <ul className='flex [&_li]:text-xl w-full flex-col justify-start items-start [&_li]:flex [&_li]:justify-center [&_li]:items-center [&_li]:gap-2'>
                        {key.features.map((feature,index)=>(
                        <li key={index} className='p-2'><FaCheckCircle /> {feature}</li>
                        ))}
                       
                      </ul>
                    </div>
                    <div className='flex justify-center items-center py-2'>
                      <div className=''><h1 className='text-2xl font-black'><PiCurrencyDollarBold /></h1> </div>
                      <div ><h1 className='text-4xl font-bold'>{key.price}</h1></div>
                    </div>
              <div className="card-actions">
                <button className={`btn duration-300 px-24 ${key.id === 2 ? 'bg-blue-500 text-white hover:bg-blue-600 ' : 'hover:bg-blue-500 hover:text-white'}`}>Get started</button>
              </div>
            </div>
          </div>
        ))}

      </div>

      <InviteFriends />
      <FAQ title="FAQ" />
    </div>
  )
}

export default SubsPage