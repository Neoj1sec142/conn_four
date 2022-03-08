// Below will contain the main variables within the JS code
const resetB = document.querySelector('#reset')
const sqs = document.querySelectorAll('.item')
let player = 0
let player2 = 1
let score = ['','','','','']


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

// for(let i = 0; i <= 3; i++){
//     sqs[i].addEventListener('click', () => {
//         console.log('click')
//     })
// }
sqs[0].addEventListener('click', () =>{
    console.log('hey')
})

resetB.addEventListener('click',reload, false);
//////


