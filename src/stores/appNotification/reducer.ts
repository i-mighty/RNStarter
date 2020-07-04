import { Reducer } from 'redux';
import {
  AppNotificationState,
  AppNotificationAction,
  AppNotificationActionTypes,
} from './types';

const initialState: AppNotificationState = {
  loading: false,
};

const appNotificationReducer: Reducer<
  AppNotificationState,
  AppNotificationAction
> = (state = initialState, action) => {
  switch (action.type) {
    case AppNotificationActionTypes.SET_LOADING: {
      return { ...state, loading: action.payload.loading };
    }
    default:
      return state;
  }
};

export default appNotificationReducer;
