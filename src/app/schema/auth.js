import * as yup from 'yup';
export const authSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters').max(50, 'Name must not exceed 50 characters'),
    email: yup.string().email().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
});