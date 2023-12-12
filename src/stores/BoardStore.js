import { action, observable } from "mobx";

class BoardStore {
    @observable squares;
    @observable xIsNext;
    @observable winner;
    @observable round;
    
    constructor() {
        this.squares = Array(9).fill(null);
        this.xIsNext = true;
        this.winner = null;
        this.round = 1;
    }

    @action
    reset = () => {
        this.squares = Array(9).fill(null);
        this.xIsNext = true;
        this.winner = null;
        this.round = 1;
    }

    @action
    clickSquare = (index) => {
        if (
            this.winner ||
            this.squares[index] ||
            this.round === 10
        ) {
            return;
        }

        this.squares[index] = this.xIsNext ? 'X' : 'O';
        this.xIsNext = !this.xIsNext;
        this.winner = this.calculateWinner(this.squares);
        this.round++;
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                this.squares[a] &&
                this.squares[a] === this.squares[b] &&
                this.squares[a] === this.squares[c]
            ) {
                return this.squares[a];
            }
        }

        return null;
    };
}

const bs = new BoardStore();
export default bs;