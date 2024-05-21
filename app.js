const userInput = prompt("Choose your board size between 1 and 100:", "16");


const boardContainer = document.querySelector(".container");

let size = userInput * userInput;

function createBoard() {
    for (let i = 0; i < size; i+= 1) {
        const boardSquare = document.createElement("div");
        boardSquare.className = "board-square"
        boardSquare.style.minWidth = 960 / userInput + "px";
        boardSquare.style.minHeight = boardSquare.style.width;
        boardContainer.appendChild(boardSquare);
    }
}

function drawing() {
    const boardSquares = document.querySelectorAll(".container > div");
    
    boardSquares.forEach((square) => {
        const boardSquare = square;
        boardSquare.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        });
    });
}

createBoard();
drawing();