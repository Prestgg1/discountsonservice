
import StepCard from './StepCard';

const StepList = () => {
  return (
    <div className=" py-12 w-full">
      <h2 className="text-center text-2xl font-bold mb-8">How it works?</h2>
      <div className="flex gap-4 flex-col md:flex-row justify-center  w-full">
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
