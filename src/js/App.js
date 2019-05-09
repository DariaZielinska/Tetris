import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tetrisApp from './reducers';
import TetrisGame from './TetrisGame';

export const store = createStore(tetrisApp);

const App = () => (
    <Provider store={store}>
        <TetrisGame/>
	</Provider>
);

export default App

