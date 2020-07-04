import { action } from 'typesafe-actions';
import { AppNotificationActionTypes } from './types';

export const alertError = (error: string) =>
  action(AppNotificationActionTypes.REPORT_ERROR, { error });
export const alertMessage = (message: string) =>
  action(AppNotificationActionTypes.REPORT_MESSAGE, { message });
export const setAppLoading = (loading: boolean) =>
  action(AppNotificationActionTypes.SET_LOADING, { loading });
