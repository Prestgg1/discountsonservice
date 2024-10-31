
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useAuthSchemas = () => {
  const t = useTranslations("AuthMessages");

  const loginSchema = useMemo(() => Yup.object().shape({
    email: Yup.string().email(t("requiredEmailMessage")).required(t("requiredEmail")),
    password: Yup.string().required(t("requiredPasswordMessage")),
    captcha: Yup.string().required(t('checkboxMessage'))
  }), [t]);

  const registerSchema = useMemo(() => Yup.object().shape({
    name: Yup.string().required(t("requiredNameMessage")),
    email: Yup.string().email(t("requiredEmailMessage")).required(t("requiredEmail")),
    password: Yup.string()
      .min(8, t("passwordMinMessage"))
      .matches(/[a-zA-Z]/, t("passwordLetterMessage"))
      .matches(/[0-9]/, t("passwordNumberMessage"))
      .required(t("requiredPasswordMessage")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("passwordMatchMessage"))
      .required(t("requiredConfirmPasswordMessage")),
      captcha:Yup.string().required(t('checkboxMessage'))
  }), [t]);
  return { loginSchema, registerSchema };
};
