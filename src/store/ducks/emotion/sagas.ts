import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api, { ENDPOINTS } from 'services/api';

import { EmotionActions } from '.';

export function* loadEmotions(): SagaIterator {
  try {
    const { data: emotions } = yield call(api.get, ENDPOINTS.emoji);
    yield put(EmotionActions.addEmotions(emotions));
  } catch (err) {
    yield put(EmotionActions.failure());
  }
}
