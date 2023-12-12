// Board.js
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import BoardStore from '../stores/BoardStore';
import Reset from './Reset';

@inject("BoardStore")
@observer
export default class Board extends Component {
  constructor() {
    super();
    this.store = BoardStore;
  }
  
  renderSquare(i) {
    return (
      <button className="square" onClick={() => this.store.clickSquare(i)}>
        {this.store.squares[i]}
      </button>
    );
  };

  render() {
    let status;

    if (this.store.winner) {
      status = "Победитель: " + this.store.winner;
    } else if (this.store.round === 10) {
      status = "Ничья";
    } else {
      status = "Следующий игрок: " + (this.store.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="status">
          {status}
        </div>
        <Reset onClick={this.store.reset}/>
      </div>
    );
  }
};
