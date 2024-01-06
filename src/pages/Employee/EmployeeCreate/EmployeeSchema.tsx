import * as yup from 'yup';

import i18n from '@app/config/i18n';

export const EmployeeSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(
      i18n.t('VALIDATE.REQUIRED', {
        field: i18n.t('APPLICATION.NAME'),
      }) as string,
    ),
  type: yup
    .string()
    .trim()
    .required(
      i18n.t('VALIDATE.REQUIRED', {
        field: i18n.t('APPLICATION.TYPE'),
      }) as string,
    ),
  description: yup
    .string()
    .trim()
    .required(
      i18n.t('VALIDATE.REQUIRED', {
        field: i18n.t('APPLICATION.DESCRIPTION'),
      }) as string,
    ),
});
