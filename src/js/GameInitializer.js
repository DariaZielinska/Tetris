import React from 'react';
import { startGame } from './actions.js';
import {store} from './App';

const GameInitializer = () => (
    <button onClick={() => {
		store.dispatch(startGame());}}> START </button>
);

export default GameInitializer;