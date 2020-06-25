import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';
import { LABELS_DATA } from 'helpers';

export const { Types: FeelingTypes, Creators: FeelingActions } = createActions({
  changeFeeling: ['feeling'],
});

// Reducer

const INITIAL_STATE = Immutable<FeelingAppState>({
  feeling: LABELS_DATA[0],
});
type ImmutableState<T> = ImmutableObject<T> & T;

const change = (
  state: ImmutableState<FeelingAppState>,
  { feeling }: FeelingAction,
): ImmutableState<FeelingAppState> => state.merge({ feeling });

export default createReducer(INITIAL_STATE, {
  [FeelingTypes.CHANGE_FEELING]: change,
});
