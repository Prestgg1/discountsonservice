import * as yup from 'yup';
export const AccountInfoSchema = yup.object().shape({
    userId: yup.number(),
    email: yup.string().email().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'),
    name: yup.string()
    .required('Name is required')
    .min(3, 'Ad minimum 3 hərfdən ibarət olmalıdır.')
    .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$/, 'Ad yalnız hərflərdən ibarət olmalıdır.')
});
