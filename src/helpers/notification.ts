import { NotificationTypeEnum, openNotificationWithIcon } from '@atoms';

export const notificationSuccess = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.SUCCESS, message);
};

export const notificationError = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.ERROR, message);
};

export const notificationInfo = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.INFO, message);
};

export const notificationWarning = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.WARNING, message);
};
