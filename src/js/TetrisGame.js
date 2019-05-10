import React from 'react';
import GameInitializer from './GameInitializer';
import GameField from './GameField';
import Timer from './Timer';

const GameState = {
    READY: 'ready',
    STARTED: 'started',
    PAUSED: 'paused',
    OVER: 'over',
}

class TetrisGame extends React.Component {
    constructor(){
        super()
        
        this.state = {
            gameState: GameState.READY,
        }

        this.timer = new Timer(function(){
            console.log('sec');
        });

        this.timer.startCount()
    }

    render(){
        return (
            <div>
                <h1>Tetris Game</h1>
                <ul>
                    <li>game instructions</li>
                    <GameInitializer/>
                    <li>current block</li>
                    <li>next block</li>
                    <li>score</li>
                    <li>timer</li>
                    <li>pause</li>
                    <li>music</li>
                </ul>
                <GameField/>
            </div>
        )
    }
}


export default TetrisGame