/////////////////////////////////////////////////////////////////////////////////
///The Below Function waits for the page to load the DOM content before proceeding
/////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    //////////////////////////////////////////////////////
    //////// GLOBAL VARIABLES FOR GAME: //////////////////
    //////////////////////////////////////////////////////
    //var grabbing all square divs in the grid class//////
    const allsq = document.querySelectorAll('.grid div')
    //var grabbing the winning message slot///////////////
    const winner = document.querySelector('#winner')
    //var grabbing the current player/////////////////////
    const disCpl = document.querySelector('#cpl')
    //var grabbing the reset button///////////////////////
    const resetB = document.querySelector('#reset')
    //var grabbing the clear score button ////////////////
    const clear = document.querySelector('#clear')
    //variable storing the current player starting at = 1/
    let cpl = 1
    //add two variable to hold the score for each player// 
    //after the game unless reset/////////////////////////
    const displayOneSc = document.getElementById('one')
    const displayTwoSc = document.getElementById('two')
    let playerOneScore = 0
    let playerTwoScore = 0
    // and array of all possible winning combinations/////
    const winningCombos = [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31],
        [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24], [20, 19, 18, 17],
        [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
        [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], [40, 33, 26, 19],
        [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17],
        [4, 11, 18, 25], [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
        [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
        [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3],
        [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
        [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23],
        [37, 31, 25, 19], [4, 10, 16, 22], [2, 10, 18, 26], [39, 31, 23, 15],
        [1, 9, 17, 25], [40, 32, 24, 16], [9, 17, 25, 33], [8, 16, 24, 32],
        [11, 17, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2],
        [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
        [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
        [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], [8, 15, 22, 29],
        [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33],
        [13, 20, 27, 34]
    ]
    //////////////////////////////////////////////////////
    ///////////////////// FUNCTIONS: /////////////////////
    //////////////////////////////////////////////////////
    //this function checks the board for winning combos //
    ///////then applies winning attributes ///////////////
    function checkWin() {
        for(let x=0; x < winningCombos.length; x++){
            //variables for each square of the winning arrays
            const sq1 = allsq[winningCombos[x][0]]
            const sq2 = allsq[winningCombos[x][1]]
            const sq3 = allsq[winningCombos[x][2]]
            const sq4 = allsq[winningCombos[x][3]]
            ///check if the board reaches any winning combos 
            //by seeing if the class of any of the squares that
            //are 4 in a row have one player to determine connect 4
            if (sq1.classList.contains('plone') &&
                sq2.classList.contains('plone') &&
                sq3.classList.contains('plone') &&
                sq4.classList.contains('plone')){
                winner.innerHTML = 'Player One You Win'
                playerOneScore++
                displayOneSc.innerText = `Player One: ${playerOneScore}`
                displayTwoSc.innerText = `Player Two: ${playerTwoScore}`
            }else if(sq1.classList.contains('pltwo') &&
                sq2.classList.contains('pltwo') &&
                sq3.classList.contains('pltwo') &&
                sq4.classList.contains('pltwo')){
                winner.innerHTML = 'Player Two You Win!!'
                playerTwoScore++ 
                displayOneSc.innerText = `Player One: ${playerOneScore}`
                displayTwoSc.innerText = `Player Two: ${playerTwoScore}`
            }else if(allsq[x].classList.contains('invalid')){
                winner.innerHTML = 'Its a Tie Game!'
            }
        }
    }
    //////////////////////////////////////////////////////
    ////////////////// EVENT LISTENERS: //////////////////
    //////////////////////////////////////////////////////
    //////adding event listener to my reset button////////
    resetB.onclick = () => {
        //remove the winning message
        winner.innerHTML = null;
        for(let i=0; i<allsq.length; i++){
            ///if any square contains player one class (pl filled square)
            if(allsq[i].classList.contains('plone')){
                //remove player one from class and reactivate game functionality
                allsq[i].classList.remove('plone', 'invalid')
                allsq[i].onclick = () => {
                    if (allsq[i + 7].classList.contains('invalid')){
                        if(cpl == 1){
                            allsq[i].innerHTML = '0'
                            allsq[i].classList.add('invalid')
                            allsq[i].classList.add('plone')
                            cpl = 2
                            disCpl.innerHTML = cpl
                            checkWin()
                            allsq[i].onclick = null
                        }else if (cpl == 2){
                            allsq[i].innerHTML = '1'
                            allsq[i].classList.add('invalid')
                            allsq[i].classList.add('pltwo')
                            cpl = 1
                            disCpl.innerHTML = cpl 
                            checkWin()
                            allsq[i].onclick = null
                        }
                    //alert to tell you to choose another slot if square is not chooseable
                    }else {alert('Choose another slot')}
                }
            //the same goes for player two if any square is theirs remove and reactivate
            }else if(allsq[i].classList.contains('pltwo')){
                allsq[i].classList.remove('pltwo', 'invalid')
                allsq[i].onclick = () => {
                    //if else statement to run through game sequence
                    //you can only choose a square if the one below = invaild
                    //invalid meaning the square is already full 
                    if (allsq[i + 7].classList.contains('invalid')){
                        //if current player = pl1
                        if(cpl == 1){
                            allsq[i].innerHTML = '0'
                            //add the invalid to the square to disqualify square for future use
                            allsq[i].classList.add('invalid')
                            //add the current players color to the square on board
                            allsq[i].classList.add('plone')
                            //change players
                            cpl = 2
                            //change the display of whos turn it is
                            disCpl.innerHTML = cpl
                            //check the board for winniner
                            checkWin()
                            //remove event listener
                            allsq[i].onclick = null
                        }else if (cpl == 2){
                            allsq[i].innerHTML = '1'
                            allsq[i].classList.add('invalid')
                            allsq[i].classList.add('pltwo')
                            cpl = 1
                            disCpl.innerHTML = cpl 
                            checkWin()
                            allsq[i].onclick = null
                        }
                    //alert to tell you to choose another slot if square is not chooseable
                    }else {alert('Choose another slot')}
                }
            } 
        }
    }
    //adding event listeners and game functionality to each square
    //using a for loop to run through each sq/////////////
    for(let i = 0; i < allsq.length; i++){
        //adding onclick eventlistener for all squares
        allsq[i].onclick = () => {
            //if else statement to run through game sequence
            //you can only choose a square if the one below = invaild
            //invalid meaning the square is already full 
            if (allsq[i + 7].classList.contains('invalid')){
                //if current player = pl1
                if(cpl == 1){
                    //possibleadd inner html
                    allsq[i].innerHTML = '0'
                    //add the invalid to the square to disqualify square for future use
                    allsq[i].classList.add('invalid')
                    //add the current players color to the square on board
                    allsq[i].classList.add('plone')
                    //change players
                    cpl = 2
                    //change the display of whos turn it is
                    disCpl.innerHTML = cpl
                    //check the board for winniner
                    checkWin()
                    //remove event listener
                    allsq[i].onclick = null
                }else if (cpl == 2){
                    allsq[i].innerHTML = '1'
                    allsq[i].classList.add('invalid')
                    allsq[i].classList.add('pltwo')
                    cpl = 1
                    disCpl.innerHTML = cpl 
                    checkWin()
                    allsq[i].onclick = null
                }
            //alert to tell you to choose another slot if square is not chooseable
            }else {alert('Choose another slot')}
        }
    }
    //adding event listener to clear score button/////////
    clear.onclick = () => {
        playerOneScore = 0;
        playerTwoScore = 0;
        displayOneSc.innerText = `Player One: ${playerOneScore}`
        displayTwoSc.innerText = `Player Two: ${playerOneScore}`
    }
})



