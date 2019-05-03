// Game value
let min = 1,
    max = 10,
    guessLeft = 3,
    winningNum = getRandomNum(max,min);


// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      message = document.querySelector('.message'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn');

//Assign value
minNum.textContent = min;
maxNum.textContent = max;

//Game Restart

game.addEventListener('mousedown', function(e){
  if(e.target.className ==='play-again'){
    window.location.reload();
  }
});


guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  //console.log(guess);

  if(isNaN(guess) || guess< min || guess > max){
    setMessage(`Please enter value between ${min} and ${max}`, 'red' );
  }
  if (guess === winningNum) {

    gameOver(true,`${winningNum} is correct! YOU WON!!`);
    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'green';
    // setMessage(`${winningNum} is correct! YOU WON!!`, 'green' );
    
  } else {

    guessLeft -= 1;
    if (guessLeft === 0) {

      gameOver(false, `Game over, correct number was ${winningNum}`);
    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'red';
    // setMessage(`Game over, correct number was ${winningNum}`, 'red' );
      
    } else {
    
    guessInput.style.borderColor = 'red';
    guessInput.value = '';
    setMessage(`${guess} not correct, ${guessLeft} are left`, 'red' );
    }
    
  }
});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

//get winning number

function getRandomNum(max, min){

  let num = Math.floor(Math.random()* (max - min + 1) + min);
  //console.log(num);
  return num;

}


// Function GameOver
function gameOver(won, msg){
  let color;
  won === true ? color = 'green': color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg,);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}