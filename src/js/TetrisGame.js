import React from 'react';
import GameInitializer from './GameInitializer';

class TetrisGame extends React.Component {
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

const CELL_SIZE = 40;
const WIDTH = 400;
const HEIGHT = 800;

class GameField extends React.Component{
    constructor(){
        super()
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.field = this.generateEmptyBoard();
    }

    generateEmptyBoard() {
        let field = [];
        for (let i = 0; i < this.rows; i++) {
          field[i] = [];
          for (let j = 0; j < this.cols; j++) {
            field[i][j] = [];
            field[i][j].push(<div className={'game_field'} key={i}></div>)
          }
        }
        return field;
    } 

    render(){
        return (<div className={"game_board"}
        style={{ width: WIDTH, height: HEIGHT }}>
            {this.field}
        </div>)
    }
}


export default TetrisGame