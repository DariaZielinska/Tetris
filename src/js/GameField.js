import React from 'react';

const CELL_SIZE = 40;
const WIDTH = 400;
const HEIGHT = 800;

class GameField extends React.Component {
    constructor() {
        super()
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.generateEmptyBoard();
    }

    generateEmptyBoard() {
        let board = [];
        for (let i = 0; i < this.rows; i++) {
            board[i] = [];
            for (let j = 0; j < this.cols; j++) {
                board[i][j] = [];
                board[i][j].push(<div className={'game_field'} key={i}></div>)
            }
        }
        return board;
    }

    render() {
        return (<div className={"game_board"}
            style={{ width: WIDTH, height: HEIGHT }}>
            {this.board}
        </div>)
    }
}


export default GameField;
