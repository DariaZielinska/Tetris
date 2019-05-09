import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tetrisApp from './reducers';
import GameInitializer from './GameInitializer';

export const store = createStore(tetrisApp);

const App = () => (
    <Provider store={store}>
		<GameInitializer/>
	</Provider>
);

export default App

