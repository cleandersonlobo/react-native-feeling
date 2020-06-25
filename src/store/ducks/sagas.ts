import { all, takeLatest } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';
import { loadEmotions } from './emotion/sagas';
import { EmotionTypes } from './emotion';

export default function* rootSaga(): SagaIterator {
  return yield all([takeLatest(EmotionTypes.LOAD_REQUEST, loadEmotions)]);
}
