export interface AppNotificationState {
  loading: boolean;
}

export enum AppNotificationActionTypes {
  REPORT_ERROR = 'REPORT_ERROR',
  REPORT_MESSAGE = 'REPORT_MESSAGE',
  SET_LOADING = 'SET_LOADING',
}

export interface ReportErrorAction {
  type: AppNotificationActionTypes.REPORT_ERROR;
  payload: {
    error: string;
  };
}

export interface ReportMessageAction {
  type: AppNotificationActionTypes.REPORT_MESSAGE;
  payload: {
    message: string;
  };
}

export interface SetLoadingAction {
  type: AppNotificationActionTypes.SET_LOADING;
  payload: {
    loading: boolean;
  };
}

export type AppNotificationAction = SetLoadingAction;
