class TicTacToe{
    constructor(){
        this.cells = [new Array(3).fill(0), new Array(3).fill(0), new Array(3).fill(0)]
        this.playerx = true;
        this.playero = false;
        this.playerxName="Player-X"
        this.playeroName="Player-O"
        this.count=0
    }

}

const ticTacToe=new TicTacToe()

const turn = () => {
    const turnDisplay = document.getElementsByClassName("turn")[0]
    turnDisplay.innerText = `${ticTacToe.playerx ? ticTacToe.playeroName : ticTacToe.playerxName} it's your turn`
}

const refresh = () => {
    location.reload()
}


const cellClickHandler = (row,column,index) => {
    if(ticTacToe.cells[row][column] !== 0) {return};
    ticTacToe.cells[row][column] = 1
    const cell = document.getElementsByClassName("cells")[index];
    const updatedClassName = ticTacToe.playerx ? "x" : "o";
    cell.classList.add(updatedClassName);
    cell.classList.add("flip-animate");
    turn();
    cell.innerText = ticTacToe.playerx ? "X" : "O";
    //console.log(document.getElementsByClassName("cells")[index]);
    //console.log(ticTacToe.cells[row][column]);
    ticTacToe.playerx = !ticTacToe.playerx
    ticTacToe.count += 1
    if(ticTacToe.count > 4) checkResult();
    if(ticTacToe.count===9 && document.getElementsByClassName("winner")[0].innerText=="Begin"){
        document.getElementsByClassName("winner")[0].innerText="Draw";
        document.getElementsByClassName("winner")[0].classList.add("flip-animate1");
        console.log(document.getElementsByClassName("winner")[0].innerText=="Begin");
        }
}
const dispX = () => {
            const win = document.getElementsByClassName("winner")[0]
            win.innerText="PlayerX is the winner";
            ticTacToe.cells.fill(1)
            document.getElementsByClassName("winner")[0].classList.add("flip-animate1");
}

const dispO = () => {
    const win = document.getElementsByClassName("winner")[0]   
    win.innerText="PlayerO is the winner";
    ticTacToe.cells.fill(1)
    console.log("1")
    document.getElementsByClassName("winner")[0].classList.add("flip-animate1");
}

const checkResult = () => {
    const currPlayer = ticTacToe.playerx ? "X" : "O"
    const cells = document.getElementsByClassName("cells")
    if((cells[0].innerText===cells[3].innerText && cells[3].innerText===cells[6].innerText)){
        if((cells)[0].innerText==="X"){
            dispX();
        }
        else if((cells)[0].innerText==="O"){
            dispO();
        }
    }
    if((cells[1].innerText===cells[4].innerText && cells[4].innerText===cells[7].innerText)){
        if((cells)[1].innerText==="X"){
            dispX();
        }
        else if((cells)[1].innerText==="O"){
            dispO();
        }
    }
    if((cells[2].innerText===cells[5].innerText && cells[5].innerText===cells[8].innerText)){
        console.log("Running")
        if((cells)[2].innerText==="X"){
            dispX();
        }
        else if((cells)[2].innerText==="O"){
            dispO();
        }
    }
    if((cells[0].innerText===cells[1].innerText && cells[1].innerText===cells[2].innerText) ){
        if((cells)[0].innerText==="X"){
            dispX();
        }
        else if((cells)[0].innerText==="O"){
            dispO();
        }
    }
    if((cells[3].innerText===cells[4].innerText && cells[4].innerText===cells[5].innerText)){
        if((cells)[3].innerText==="X"){
            dispX();
        }
        else if((cells)[3].innerText==="O"){
            dispO();
        }
    }
    if((cells[6].innerText===cells[7].innerText && cells[7].innerText===cells[8].innerText)){
        if((cells)[6].innerText==="X"){
            dispX();
        }
        else if((cells)[6].innerText==="O"){
            dispO();
        }
    }
    if((cells[0].innerText===cells[4].innerText && cells[4].innerText===cells[8].innerText)){
        if((cells)[0].innerText==="X"){
            dispX();
        }
        else if((cells)[0].innerText==="O"){
            dispO();
       }
    }
    if((cells[2].innerText===cells[4].innerText && cells[4].innerText===cells[6].innerText)){
        if((cells)[2].innerText==="X"){
            dispX();
        }
        else if((cells)[2].innerText==="O"){
            dispO();
        }
    }
}

//https://github.com/techie-abhishek/TicTacToe.git https://github.com/techie-abhishek/TicTacToe.git
