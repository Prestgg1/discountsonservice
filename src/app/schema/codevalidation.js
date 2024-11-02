import * as yup from 'yup';

export const codeValidationSchema = yup.object().shape({
    code: yup.string()
        .required('Kod Yazılmalıdır')
        .matches(/^\d{6}$/, 'Kod Rəqəmlərdən ibarət olmalıdır')
        .length(6, 'Kod 6 hərfdən ibarət olmalıdır'),
});
