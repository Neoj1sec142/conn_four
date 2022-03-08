// Below will contain the main variables within the JS code
const squares = document.querySelectorAll('.grid div')
const result = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#current-player')
let currentPlayer = 1

// const resetB = document.querySelector('#reset')
// const sqs = document.querySelectorAll('.item')
// let player = 0
// let player2 = 1
// let score = ['','','','','']


///////
// Below will contain the functions used for game functionality
// function checkWinner() { }
reload = () => {
    reload = location.reload();
}

//Function to alternate players
changePl = () => {
    if (player % 2 == 0){
        player++;
    }else if (player % 2 == 1){
        player++;
    }else {
        player = null;
    }
}
////////
// Below will hold eventlisters and their respective assignment

for(let i = 0; i <= 3; i++){
    sqs[i].addEventListener('click', () => {
        console.log('click')
    })
}         

resetB.addEventListener('click',reload, false);
//////


