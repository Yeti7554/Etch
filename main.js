// this is a great walk through
// https://www.youtube.com/watch?v=dyhuaXeuyGo

let colour = 'black';

function populateBoard(size){
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // 16x16 grid
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size; 
  for(let i = 0; i< amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colourSquare ); 
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square);
  }

}

populateBoard(16);

function changeSize(input) {
  populateBoard(input);
}

function colourSquare() {
  this.style.backgroundColor = colour;
}

function changeColour(choice) {
  colour = choice;
}

function resetBoard() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = 'white');
}