const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    // Function to 
    const playGame = () => {
        const rockBtn = document.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorBtn = document.getElementById('scissors');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['ROCK','PAPER','SCISSORS']
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                
  
                // Function to check who wins
                winner(this.innerText,computerChoice)
                  
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toUpperCase();
        computer = computer.toUpperCase();


        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'ROCK'){
            if(computer == 'PAPER'){
                result.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'SCISSORS'){
            if(computer == 'ROCK'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'PAPER'){
            if(computer == 'SCISSORS'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
  
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  
        if(playerScore > computerScore){
            result.style.fontSize = '30px';
            result.innerText = 'You Won The Game'
            result.style.color = 'black';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '30px';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '30px';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
  
  
    // Calling playGame function inside game
    playGame();
      
}
  
// Calling the game function
game();