// this is a great walk through
// https://www.youtube.com/watch?v=dyhuaXeuyGo



const board = document.querySelector(".board");

let colour = 'black'

function boxColor() {
  this.style.backgroundColor= colour
} // this is really useful



// Create a 16 x 16 grid
for (let i = 0; i < 16; i++) {
    // Create a new row
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.height="20px";

    function resetBoard() {
      row.style.backgroundColor="white";
    };

    // Create 16 cells and append them to the row
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width="20px";
      cell.addEventListener("mouseover", boxColor);
      row.appendChild(cell);

      
    }

   

    
    // Append the row to the board
    board.appendChild(row);

  }

  function resetBoard() {
    row.style.backgroundColor="white";
  }
  



  // now need to add prompt for dimensions
  // variable that changes dimensions - though iterations and height and width
  // need to add event listener to change div colour

  function changeColour(choice) {
    colour = choice;
  }

 