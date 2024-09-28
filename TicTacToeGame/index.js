let currentPlayer = "X";
let array = Array(9).fill(null);
// console.log(array);

function checkWinner(){
    if(
        (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
        (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
        (array[2] !== null && array[2] == array[4] && array[4] == array[6]) 
    ){
        document.write(`Winner is ${currentPlayer}`);
        return;
    }
    if(!array.some(e => e === null)){
        document.write("Draw!!");
        return;
    }
    
}
function handleClick(el){
    // console.log(el.id);
    const Id = Number(el.id);
    if(array[Id] !== null) return;
    array[Id] = currentPlayer;    
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

