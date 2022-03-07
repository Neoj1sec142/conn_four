// Below will contain the main variables within the JS code
const resetB = document.querySelector('#reset')
const sqs = document.querySelectorAll('.item')


//console.log(sq0)
// const sq1 = document.querySelector('#box1')
// const sq2 = document.querySelector('#box2')
// const sq3 = document.querySelector('#box3')
// const allSq = [sq0, sq1, sq2, sq3]

///////
// Below will contain the functions used for game functionality
// function checkWinner() { }
reload = () => {
    reload = location.reload();
}


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

//resetB.addEventListener('click',reload, false);
//////


