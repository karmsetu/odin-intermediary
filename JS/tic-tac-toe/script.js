const board = document.querySelector(`.board`);
let infoArray = []
var gridIndex = 0
while (gridIndex < 9){
    const grid = document.createElement(`div`);
    grid.classList.add(`grid`);
    grid.classList.add(`grid-${gridIndex +1 }`);
    grid.dataset.grid = gridIndex
    grid.innerText = gridIndex+1
    board.appendChild(grid)
    gridIndex ++;
}

const gameBoard =(() => {
    let gameBoardArray = [``,``,``,``,``,``,``,``,``];
    const render =(params = gameBoardArray)=> {
        for (let index = 0; index < params.length; index++) {
            let cell = document.querySelector(`.grid-${index+1}`)
            cell.innerText = params[index]
            
        }
        // console.log(cell)
    }
    const start =()=>{
        const x = Player(0, `X`)
        let typeX = true
        let type = `X`
        let cell = document.querySelectorAll(`.grid`)
        cell.forEach(function (params) {
            params.addEventListener(`click`, function () {
                if (typeX) {
                    typeX = false
                    type = `O`
                } else {
                    typeX = true
                    type = `X`
                }
                // console.log(params)
                console.log(params.dataset.grid )
                console.log(`clicked!`)
                x.putAndReRender(params.dataset.grid, type)
            })
            // return params
        })
        // const y = Player(0, `O`)
        // y.putAndReRender()
    }
    return {gameBoardArray, render, start}
})

const Player =()=> {
    const {gameBoardArray} = gameBoard() 
    const {render} = gameBoard()
    const putAndReRender =(pos, type) => {
        gameBoardArray[pos] = type

        render(gameBoardArray)
    }
    console.log(gameBoardArray)
    return { gameBoardArray, putAndReRender}
}

console.log(board)