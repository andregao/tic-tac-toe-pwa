import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: ('O' | 'X')[];
  oNext: boolean;
  winner: 'O' | 'X';

  get player() {
    return this.oNext ? 'O' : 'X';
  }

  constructor() {
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(undefined);
    this.winner = null;
    this.oNext = false;
  }

  makeMove(index: number): void {
    if (!this.squares[index]) {
      this.squares[index] = this.player;
      this.oNext = !this.oNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): 'O' | 'X' | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
