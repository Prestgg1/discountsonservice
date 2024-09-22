import * as yup from 'yup';
export const forgetPasswordSchema = yup.object().shape({
    email: yup.string().email().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Düzgen Email Yazın'),
});
