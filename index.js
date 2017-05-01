function Board() {
  this.currPlayer = true;
  this.board = [ 
                ['','',''], 
                ['','',''], 
                ['','',''], ];
  this.move = 0;
}

Board.prototype = {
  printBoard: function() {
    console.log();
    console.log(`====Move #${this.move}====`);
    console.log('current player:', this.currPlayer ? 'X' : 'O' );

    this.board.forEach( row => {
      let printRow = '|';
      row.map( row => {
        row === '' ? row = ' ' : row = row;
        printRow+= ` ${row} |`;
      })
      console.log(printRow);
    })
  }, 
  placeMark: function(x,y) {
    if (this.validMove(x,y)) {
      let player = this.currPlayer ? 'X' : 'O' ;
      this.board[x][y] = player;
      this.move++;
      this.printBoard();
      if (this.checkWin()) {
        console.log(`CONGRATS: Player: ${player} won in ${this.move} moves`);
      } else {  
        this.currPlayer = !this.currPlayer;
      }
    } else {
      console.log('ERROR: Move is not valid, please try another move');
    }
  },
  validMove: function(x,y) {
    if ( this.board[x] === undefined ||this.board[x][y] === undefined) {
      return false;
    }
    if (this.board[x][y] === '') {
      return true;
    }
    return false;
  },
  checkWin: function() {
    let win = false;
    let player = this.currPlayer ? 'X' : 'O' ;
    //check rows
    this.board.forEach( row => {
      row = row.reduce( (prev, curr) => prev+curr);
      row === `${player}${player}${player}` ? win = true : null;
    })


    //TODO: check columns
    //TODO: check diagonals
  }
}


//Tests
const ticBoard = new Board();
ticBoard.placeMark(1,1);
ticBoard.placeMark(0,0);
ticBoard.placeMark(0,0);
ticBoard.placeMark(2,2);
ticBoard.placeMark(0,1);
ticBoard.placeMark(1,2);
ticBoard.placeMark(0,2);