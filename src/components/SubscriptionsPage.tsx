import SubscriptionCard from './SubscriptionCard';

const subscriptions = [
  {
    title: 'Netflix subscription rates',
    description:
      'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
    imageUrl: '/images/netflix-logo.jpg', 
    bgColor: 'bg-black',
  },
  {
    title: 'Spotify Premium',
    description:
      'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
    imageUrl: '/images/spotify-logo.jpg', 
    bgColor: 'bg-green-500',
  },
  {
    title: 'YouTube Premium',
    description:
      'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
    imageUrl: '/images/youtube.jpg', 
    bgColor: 'bg-gray-200',
  },
];

const SubscriptionsPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10">
      <h1 className="text-center text-2xl font-bold mb-8">Choose a subscription</h1>
      <div className="max-w-4xl mx-auto">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            title={subscription.title}
            description={subscription.description}
            imageUrl={subscription.imageUrl}
            bgColor={subscription.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
