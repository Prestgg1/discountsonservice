

const FAQ = () => {
  const faqs = [
    { question: "The set time has passed, but the invoice has not yet arrived, what should I do?", answer: "If the designated time has passed and you have not yet received your invoice, please contact us. Reach out to our customer support team, and we will work to resolve any issues with your invoice as quickly as possible." },
    { question: "Can I change my Netflix account email and password after purchase?", answer: "Yes, you can change the email address and password for your Netflix account after purchase. Simply log into your account, go to the Account  section, and follow the instructions to update your email address and password." },
    { question: "Can I add a phone number for password recovery?", answer: "Yes, you can add a phone number for password recovery. Go to the security settings of your account and follow the steps to add a phone number for recovery purposes." },
    { question: "How soon will I receive the account information I ordered?", answer: "Yes, you can add a phone number for password recovery. Go to the security settings of your account and follow the steps to add a phone number for recovery purposes." },
    { question: "How to pay?", answer: "Payment options we currently have: PayPal, Bitcoin." },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">FAQ</h2>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
