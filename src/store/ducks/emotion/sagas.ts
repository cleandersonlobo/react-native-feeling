import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api, { ENDPOINTS } from 'services/api';
import { showMessage } from 'react-native-flash-message';
import { EmotionActions } from '.';

export function* loadEmotions(): SagaIterator {
  try {
    const { data: emotions } = yield call(api.get, ENDPOINTS.emoji);
    yield put(EmotionActions.addEmotions(emotions));
  } catch (err) {
    showMessage({
      message: 'Oops, something went wrong',
      description: 'Try again',
      type: 'danger',
      duration: 2500,
    });
    yield put(EmotionActions.failureRequest());
  }
}
