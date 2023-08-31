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

    const check = (params)=> {
        console.log(params)
        //horizontal
         //horizontal
        if((params[0]==`X`&&params[1]==`X`&&params[2]==`X`) || (params[3]==`X`&&params[4]==`X`&&params[5]==`X`) || (params[6]==`X`&&params[7]==`X`&&params[8]==`X`)){
            console.log(`horizontal`)
        } else if ((params[0]==`X`&&params[3]==`X`&&params[6]==`X`) || (params[1]==`X`&&params[4]==`X`&&params[7]==`X`) || (params[2]==`X`&&params[5]==`X`&&params[8]==`X`)) { //vertical logic
            console.log(`vertical x`)
        } else if ((params[0]==`X` && params[4]==`X` && params[8]==`X`) || (params[2]==`X` && params[4]==`X` && params[6]==`X`)) {
            console.log(`diagonal x`)
        }


        //horizontal O
        if((params[0]==`O`&&params[1]==`O`&&params[2]==`O`) || (params[3]==`O`&&params[4]==`O`&&params[5]==`O`) || (params[6]==`O`&&params[7]==`O`&&params[8]==`O`)){
            console.log(`horizontal O`)
        } else if ((params[0]==`O`&&params[3]==`O`&&params[6]==`O`) || (params[1]==`O`&&params[4]==`O`&&params[7]==`O`) || (params[2]==`O`&&params[5]==`O`&&params[8]==`O`)) { //vertical logic
            console.log(`vertical O`)
        } else if ((params[0]==`O` && params[4]==`O` && params[8]==`O`) || (params[2]==`O` && params[4]==`O` && params[6]==`O`)) {
            console.log(`diagonal O`)
        }
    }

    const start =()=>{
        const x = Player()
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
                if (params.innerText == `X` || params.innerText == `O`) {
                    alert(`already taken`)
                    return
                }
                // console.log(params)
                console.log(params.dataset.grid )
                console.log(`clicked!`)
                x.putAndReRender(params.dataset.grid, type)
                check(x.gameBoardArray);
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