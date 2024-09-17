import { useTranslations } from "next-intl"; 

const FAQ = ({ title }: { title: string }) => {
  const t = useTranslations("FAQ")
  const faqs = [
    { question: t("question"), answer: t("answer1") },
    { question: t("question1"), answer: t("answer2") },
    { question: t("question2"), answer: t("answer3") },
    { question: t("question3"), answer: t("answer4") },
    { question: t("question4"), answer: t("answer5") },
  ];

  return (
    <div className="flex flex-col gap-8 rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div key={index} className="collapse p-8 collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">{faq.question}</div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-black md:w-auto md:self-center px-6 py-3 font-bold text-white w-full rounded-lg text-lg hover:bg-gray-800 transition duration-300">
      {t("button")}
      </button>
    </div>
  );
};

export default FAQ;
