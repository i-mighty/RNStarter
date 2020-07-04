import { all, fork } from 'redux-saga/effects';
import { appNotificationSaga } from '@src/stores/appNotification';
import { quoteSaga } from '@src/stores/quote';

export default function* rootSaga() {
  yield all([fork(appNotificationSaga), fork(quoteSaga)]);
}
