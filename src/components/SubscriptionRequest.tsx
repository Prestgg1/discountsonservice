const SubscriptionRequest = () => {
  return (
    <div className="bg-blue-800 text-white py-6 px-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            Request for an additional subscription that was not found here
          </h3>
          <p className="text-sm mt-2">
            Disney, Amazon Prime, Microsoft Office, Microsoft Windows
          </p>
        </div>
        <div>
          <button className="bg-white text-blue-900 py-2 px-4 rounded-lg font-semibold">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionRequest;
