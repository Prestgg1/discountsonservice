import * as yup from 'yup';
export const AccountInfoSchema = yup.object().shape({

});



import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useAccountInfoSchemas = () => {
  const t = useTranslations("AuthMessages");

  const AccountInfoSchema = useMemo(() => Yup.object().shape({
    userId: yup.number(),
    email: yup.string().email().required(t('requiredEmail')).matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('requiredEmailMessage')),
    name: yup.string()
    .required(t('requiredNameMessage'))
    .min(3, t('userNameMinMessage'))
    .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$/, 'Ad yalnız hərflərdən ibarət olmalıdır.')
  }), [t]);
  return { AccountInfoSchema };
};

