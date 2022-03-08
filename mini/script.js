// Below will contain the main variables within the JS code
const allSq = document.querySelectorAll('.grid div')
const winner = document.querySelector('#winner')
const displayCPl = document.querySelector('#plTurn')
const resetB = document.querySelector('#reset')
let plTurn = 1
// const winningCombos = [
//     [0, 1, 2, 3],
//     [41, 40, 39, 38],
//     [7, 8, 9, 10],
//     [34, 33, 32, 31],
//     [14, 15, 16, 17],
//     [27, 26, 25, 24],
//     [21, 22, 23, 24],
//     [20, 19, 18, 17],
//     [28, 29, 30, 31],
//     [13, 12, 11, 10],
//     [35, 36, 37, 38],
//     [6, 5, 4, 3],
//     [0, 7, 14, 21],
//     [41, 34, 27, 20],
//     [1, 8, 15, 22],
//     [40, 33, 26, 19],
//     [2, 9, 16, 23],
//     [39, 32, 25, 18],
//     [3, 10, 17, 24],
//     [38, 31, 24, 17],
//     [4, 11, 18, 25],
//     [37, 30, 23, 16],
//     [5, 12, 19, 26],
//     [36, 29, 22, 15],
//     [6, 13, 20, 27],
//     [35, 28, 21, 14],
//     [0, 8, 16, 24],
//     [41, 33, 25, 17],
//     [7, 15, 23, 31],
//     [34, 26, 18, 10],
//     [14, 22, 30, 38],
//     [27, 19, 11, 3],
//     [35, 29, 23, 17],
//     [6, 12, 18, 24],
//     [28, 22, 16, 10],
//     [13, 19, 25, 31],
//     [21, 15, 9, 3],
//     [20, 26, 32, 38],
//     [36, 30, 24, 18],
//     [5, 11, 17, 23],
//     [37, 31, 25, 19],
//     [4, 10, 16, 22],
//     [2, 10, 18, 26],
//     [39, 31, 23, 15],
//     [1, 9, 17, 25],
//     [40, 32, 24, 16],
//     [9, 17, 25, 33],
//     [8, 16, 24, 32],
//     [11, 17, 23, 29],
//     [12, 18, 24, 30],
//     [1, 2, 3, 4],
//     [5, 4, 3, 2],
//     [8, 9, 10, 11],
//     [12, 11, 10, 9],
//     [15, 16, 17, 18],
//     [19, 18, 17, 16],
//     [22, 23, 24, 25],
//     [26, 25, 24, 23],
//     [29, 30, 31, 32],
//     [33, 32, 31, 30],
//     [36, 37, 38, 39],
//     [40, 39, 38, 37],
//     [7, 14, 21, 28],
//     [8, 15, 22, 29],
//     [9, 16, 23, 30],
//     [10, 17, 24, 31],
//     [11, 18, 25, 32],
//     [12, 19, 26, 33],
//     [13, 20, 27, 34],
// ]





///////
// Below will contain the functions used for game functionality

///check squares to see if they all have class of player one
// function checkWinner() {
//     for(let x=0; x < winningCombos.length; x++){
//         const sq1 = allSq[winningCombos[x][0]]
//         const sq2 = allSq[winningCombos[x][1]]
//         const sq3 = allSq[winningCombos[x][2]]
//         const sq4 = allSq[winningCombos[x][3]]
        
//         if (sq1.classList.contains('plOne') &&
//             sq2.classList.contains('plOne') &&
//             sq3.classList.contains('plOne') &&
//             sq4.classList.contains('plOne')){
//             result.innerHTML = 'Player 1 Wins!!'
//         }else if(sq1.classList.contains('plTwo') &&
//             sq2.classList.contains('plTwo') &&
//             sq3.classList.contains('plTwo') &&
//             sq4.classList.contains('plTwo')){
//             winner.innerHTML = 'Player 2 Wins!!'  
//         }
//     }   
// }

// reload = () => {
//     reload = location.reload();
// }

////////
// Below will hold eventlisters and their respective assignment

for(let i = 0; i < allSq.length; i++){
    allSq[i].onclick = () => {
        alert(`you have clicked square ` + i)
    }
}
        // //if square below current square is taken you can only go on top of it
        // if (allSq[i + 7].classList.contains('notopen')){
        //     if(plTurn == 1){
        //         allSq[i].classList.add('notopen')
        //         allSq[i].classList.add('plOne')
        //         plTurn = 2
        //         displayCPl.innerHTML = currentPlayer
        //         checkWinner()
        //     }else if (plTurn == 2){
        //         allSq[i].classList.add('notopen')
        //         allSq[i].classList.add('plTwo')
        //         plTurn = 1
        //         displayCPl.innerHTML = currentPlayer
        //         checkWinner()
        //     }
        // }else {alert('Choose another slot')}

//resetB.addEventListener('click',reload, false);
//////


