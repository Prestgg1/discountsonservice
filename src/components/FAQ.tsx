import { useTranslations } from "next-intl"; 
import FadeIn from "@/app/animations/Fadein";

const FAQ = () => {
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
      <h2 className="text-2xl font-bold mb-4 text-center">{t("title")}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FadeIn key={index}>
            <div className="collapse collapse-arrow bg-white px-5 md:py-10">
              <input type="checkbox" /> {/* radio yerine checkbox kullanıyoruz */}
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
