// this is a great walk through
// https://www.youtube.com/watch?v=dyhuaXeuyGo



const board = document.querySelector(".board");

// Create a 16 x 16 grid
for (let i = 0; i < 16; i++) {
    // Create a new row
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.height="20px";
    
    // Create 16 cells and append them to the row
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width="20px";
      row.appendChild(cell);

    }
    
    // Append the row to the board
    board.appendChild(row);
  }

