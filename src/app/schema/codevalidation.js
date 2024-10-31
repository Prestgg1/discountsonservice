import * as yup from 'yup';

export const codeValidationSchema = yup.object().shape({
    code: yup.string()
        .required('Kod gerekli')
        .matches(/^\d{6}$/, 'Kod 6 haneli rakamlardan oluşmalıdır')
        .length(6, 'Kod 6 karakter uzunluğunda olmalıdır'),
});
