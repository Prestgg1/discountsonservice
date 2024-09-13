import Image from 'next/image';

interface SubscriptionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, description, imageUrl, bgColor }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
      <div className="p-6 w-1/2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Learn more
        </button>
      </div>
      <div className={`w-1/2 h-full ${bgColor}`}>
        <Image src={imageUrl} alt={title} layout="responsive" width={500} height={300} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default SubscriptionCard;
