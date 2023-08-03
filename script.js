let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const numberDiv = document.querySelector('.number');
const betweenDiv = document.querySelector('.between');
const bodyElem = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', playAgain);

function checkNumber() {
    const guess = guessInput.value;
    const showScore = document.querySelector('.score');
    //no input
    if (!guess) {
        displayMessage('⛔️ No number!');
        betweenDiv.style.color = '#b34747';
    //win    
    } else if (guess == secretNumber) {
        displayMessage('👏 Correct Number!');
        bodyElem.style.backgroundColor =  '#60b347';
        numberDiv.style.width = '30rem';
        numberDiv.textContent = secretNumber;
        betweenDiv.removeAttribute('style');
        if(highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    //not the correct guess
    } else if (guess != secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            showScore.textContent = score;
        } else {
            displayMessage('🛑 Game Lost!');
            showScore.textContent = 0;
            bodyElem.style.backgroundColor =  '#b34747';
            checkBtn.style.display = 'none';
        }
    }
}

function playAgain() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    let showScore = document.querySelector('.score');
    showScore.textContent = score;
    displayMessage('Start guessing...');
    numberDiv.textContent = '?';
    guessInput.value = '';
    bodyElem.removeAttribute('style');
    numberDiv.removeAttribute('style');
    betweenDiv.removeAttribute('style');
    checkBtn.removeAttribute('style');
}

function displayMessage(mess) {
    document.querySelector('.message').textContent = mess;
}

