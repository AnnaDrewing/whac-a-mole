const squares = document.querySelectorAll('.square');//get everything with class square
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');
const startGameButton = document.getElementById('start-game');

let result = 0;
let timerId = null;
let hitPosition; 
let currentTime = 15;
let countDownTimerId = null;

startGameButton.addEventListener('click', () => {
    runGame();
})

function runGame() {
    timeLeft.textContent = currentTime;
    squares.forEach(square => {
        square.addEventListener("mousedown", () => {
          if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})
moveMole();//TODO attach to a button 'start game'
countDownTimerId = setInterval(countDown, 1000);//change something every 1 second
}

function stopGame() {

}
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');//add the clas mole to the random square
    hitPosition = randomSquare.id;
}


function moveMole() {
    timerId = setInterval(randomSquare, 800); //run the randomSquare method every 500 ms
}


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER. Your final score is ' + result);
        resetGame();
    }
}

function resetGame() {
    currentTime = 15; 
    timeLeft.textContent = currentTime;
    result = 0;
    score.textContent = result;
    squares.forEach(square => {
        square.classList.remove('mole');
    })
}
