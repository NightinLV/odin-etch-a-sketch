const boardContainer = document.querySelector(".container");

let size = 16 * 16;

function createBoard() {
    for (let i = 0; i < size; i+= 1) {
        const boardSquare = document.createElement("div");
        boardSquare.className = "board-square"
        boardSquare.style.minWidth = 960 / 16 + "px";
        boardSquare.style.minHeight = boardSquare.style.width;
        boardContainer.appendChild(boardSquare);
    }
}

createBoard();
