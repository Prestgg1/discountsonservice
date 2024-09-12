import * as yup from 'yup';
export const authSchema = yup.object().shape({
    email: yup.string().email().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
});