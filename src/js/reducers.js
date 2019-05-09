import { combineReducers } from 'redux';
import * as actions from './actions';

function isStarted(state = false, action) {

    console.log(state)

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