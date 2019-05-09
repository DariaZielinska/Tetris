import { combineReducers } from 'redux';
import * as actions from './actions';

function gameInitializer(state = [], action) {
	switch (action.type) {
	case actions.START_GAME:
		return state;
	default:
		return state;
	}
}

const tetrisApp = combineReducers({
	gameInitializer,
});

export default tetrisApp;