
import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'İsim en az 2 karakter olmalıdır.')
    .max(50, 'İsim en fazla 50 karakter olabilir.')
    .required('İsim zorunludur.'),
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin.')
    .required('E-posta zorunludur.'),
  message: Yup.string()
    .min(10, 'Mesaj en az 10 karakter olmalıdır.')
    .max(500, 'Mesaj en fazla 500 karakter olabilir.')
    .required('Mesaj zorunludur.'),
});
