import { action } from 'typesafe-actions';
import { AppNotificationActionTypes } from './types';

export const alertError = (error: string) => {
  return action(AppNotificationActionTypes.REPORT_ERROR, { error });
};
export const alertMessage = (message: string) => {
  return action(AppNotificationActionTypes.REPORT_MESSAGE, { message });
};

export const setAppLoading = (loading: boolean) => {
  return action(AppNotificationActionTypes.SET_LOADING, { loading });
};
