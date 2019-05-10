import { combineReducers } from 'redux';
import * as actions from './actions';

function isStarted(state = false, action) {
	switch (action.type) {
	case actions.START_GAME:
		return true;
	default:
		return state;
    }
}

const tetrisApp = combineReducers({
	isStarted,
});

export default tetrisApp;