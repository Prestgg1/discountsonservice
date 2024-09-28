/* import * as yup from 'yup';
export const authSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters').max(50, 'Name must not exceed 50 characters'),
    email: yup.string().email().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
}); */
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useAuthSchemas = () => {
  const t = useTranslations("AuthMessages");

  const loginSchema = useMemo(() => Yup.object().shape({
    email: Yup.string().email(t("requiredEmailMessage")).required(t("requiredEmail")),
    password: Yup.string().required(t("requiredPassword")),
  }), [t]);

  const registerSchema = useMemo(() => Yup.object().shape({
    name: Yup.string().required(t("requiredName")),
    email: Yup.string().email(t("requiredEmail")).required(t("requiredEmail")),
    password: Yup.string()
      .min(8, t("passwordMinMessage"))
      .matches(/[a-zA-Z]/, t("passwordLetterMessage"))
      .matches(/[0-9]/, t("passwordNumberMessage"))
      .required(t("requiredPassword")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("passwordMatchMessage"))
      .required(t("requiredConfirmPassword")),
  }), [t]);
  return { loginSchema, registerSchema };
};
