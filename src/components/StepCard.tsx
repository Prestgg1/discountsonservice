

interface StepCardProps {
  stepNumber: number;
  description: string;
  iconUrl: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, description, iconUrl }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 mb-4 max-w-lg">
      <img
        src={iconUrl}
        alt={`Step ${stepNumber}`}
        className="absolute top-4 right-4 h-20 w-20" 
      />
      <div className="mt-8"> 
        <h3 className="text-xl font-bold mb-2">Step {stepNumber}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
