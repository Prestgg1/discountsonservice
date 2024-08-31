import { useTranslations } from "next-intl";

/* import React from "react"; */
export default function About() {
  const t = useTranslations('AboutPage');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
