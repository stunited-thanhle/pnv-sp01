import moment from 'moment';

import { DATE_TIME } from '@constants';

export const toMomentDateTimeData = (value: any) =>
  moment(new Date(value)).format(DATE_TIME.YEAR_MONTH_DATE_TIME);

export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const lowercaseFirstLetter = (value: string) => {
  return value.charAt(0).toLowerCase() + value.slice(1);
};

export const trim = (obj: any) => {
  const trimmed = JSON.stringify(obj, (_key, value) => {
    if (typeof value === 'string') {
      return value.replace(/ +(?= )/g, '').trim();
    }
    return value;
  });
  return JSON.parse(trimmed);
};
