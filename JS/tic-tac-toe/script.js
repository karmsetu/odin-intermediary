const board = document.querySelector(`.board`);

var gridIndex = 0
while (gridIndex < 9){
    const grid = document.createElement(`div`);
    grid.classList.add(`grid`);
    grid.classList.add(`grid-${gridIndex +1 }`);
    grid.innerText = gridIndex+1
    board.appendChild(grid)
    gridIndex ++;
}



console.log(board)