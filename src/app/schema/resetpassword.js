import * as yup from 'yup';

export const passwordValidationSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Şifrə Yazmalısan')
    .min(8, 'Şifrə ən az 8 simvol olmalıdır')
    .matches(/[A-Z]/, 'Şifrədə ən az bir böyük hərf olmalıdır')
    .matches(/[a-z]/, 'Şifrədə ən az bir kiçik hərf olmalıdır')
    .matches(/[0-9]/, 'Şifrədə ən az bir Rəqəm olmalıdır')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Şifrədə ən az bir simvol olmalıdır'),
  
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Şifrələr eyni olmalıdır')
    .required('Şifrənizin təkrarını yazın'),
});

