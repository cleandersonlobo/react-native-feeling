import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

export const { Types: EmotionTypes, Creators: EmotionActions } = createActions({
  selectEmotion: ['emotion'],
  addEmotions: ['emotions'],
  loadRequest: null,
  failureRequest: null,
});

// Reducer

const INITIAL_STATE = Immutable<EmotionAppState>({
  emotions: [],
  emotion: null,
  loading: false,
  error: false,
});
type ImmutableState<T> = ImmutableObject<T> & T;

export const request = (
  state: ImmutableState<EmotionAppState>,
): ImmutableState<EmotionAppState> =>
  state.merge({ loading: true, error: false });

export const failure = (
  state: ImmutableState<EmotionAppState>,
): ImmutableState<EmotionAppState> =>
  state.merge({ loading: true, error: false });

export const select = (
  state: ImmutableState<EmotionAppState>,
  { emotion }: EmotionAction,
): ImmutableState<EmotionAppState> => state.merge({ emotion });

export const add = (
  state: ImmutableState<EmotionAppState>,
  { emotions }: EmotionAction,
): ImmutableState<EmotionAppState> => state.merge({ emotions, loading: false });

export default createReducer(INITIAL_STATE, {
  [EmotionTypes.SELECT_EMOTION]: select,
  [EmotionTypes.ADD_EMOTIONS]: add,
  [EmotionTypes.LOAD_REQUEST]: request,
  [EmotionTypes.FAILURE_REQUEST]: failure,
});
