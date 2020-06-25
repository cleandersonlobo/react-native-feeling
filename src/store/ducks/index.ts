import { combineReducers } from 'redux';

import emotion from './emotion';
import feeling from './feeling';

const reducers = combineReducers({ emotion, feeling });

export default reducers;
