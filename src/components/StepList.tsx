
import StepCard from './StepCard';

const StepList = () => {
  return (
    <div className="bg-blue-50 py-12">
      <h2 className="text-center text-2xl font-bold mb-8">How it works?</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <StepCard
          stepNumber={1}
          description="Enter your account information"
          iconUrl="/images/step-1.svg" 
        />
        <StepCard
          stepNumber={2}
          description="Select the desired subscription and plan"
          iconUrl="/images/step-2.svg" 
        />
        <StepCard
          stepNumber={3}
          description="Pay your bill with PayPal"
          iconUrl="/images/step-3.svg" 
        />
      </div>
    </div>
  );
};

export default StepList;
