import { getSub } from '@/app/libs/getSubs';
import NotFound from './not-found';
import FAQ from '@/components/FAQ';
import InviteFriends from '@/components/InviteFriends';
import Singlesubs from '@/components/subscriptions/Singlesubs';

interface PageProps {
  params: Promise<{ 
    subsname: string;
    locale: string;
  }>;
}

const SubsPage = async ({ params }: PageProps) => {
  const { subsname } = await params;
  let sub;

  try {
    sub = await getSub(subsname); 
    if (!sub) {
      return <NotFound />;
    }
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }

  const durations = sub.types[0].durations;

  return (
    <div className='w-full flex flex-col 2xl:gap-20 gap-10 2xl:my-20 my-10'>
      <Singlesubs sub={sub} durations={durations} />
      <InviteFriends />
      <FAQ />
    </div>
  );
}

export default SubsPage;
