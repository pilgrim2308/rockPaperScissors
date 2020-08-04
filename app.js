var button = document.querySelectorAll('button');
var scores=[0,0];
var ok=false;
// var options=button.children;
// console.log(options);
// button.addEventListener('click',playGame());

for(let i=0;i<button.length;i++){
    button[i].addEventListener('click',playGame);
}


function playGame(e){
    if(ok)
        return;
    var playerSelection = e.target.id;
    var computerSelection = Math.random();
    if(computerSelection*3<1)
        computerSelection = 'rock';
    if(computerSelection*3>=1 && computerSelection*3<2)
        computerSelection = 'paper';
    if(computerSelection*3>=2)
        computerSelection = 'scissors';
    var out = document.getElementById('choice');
    var answer;
    var result = document.getElementById('result');
    out.textContent = 'You chose ' + playerSelection + ' and computer chose ' + computerSelection;
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper')
            answer = 1;
        if(computerSelection == 'rock')
            answer = 2;
        if(computerSelection == 'scissors')
            answer = 3;
    }
    if(playerSelection == 'scissors'){
        if(computerSelection == 'paper')
            answer = 3;
        if(computerSelection == 'rock')
            answer = 1;
        if(computerSelection == 'scissors')
            answer = 2;
    }
    if(playerSelection == 'paper'){
        if(computerSelection == 'paper')
            answer = 2;
        if(computerSelection == 'rock')
            answer = 3;
        if(computerSelection == 'scissors')
            answer = 1;
    }
    if(answer==1){
        result.textContent = 'You lose this match';
        scores[1]++;
    }
    if(answer==3){
        result.textContent = 'You win this match';
        scores[0]++;
    }
    if(answer==2)
        result.textContent = "It's a draw";
    var human=document.getElementById('human');
    human.textContent=scores[0];
    var computer = document.getElementById('computer');
    computer.textContent =scores[1];
    if(scores[0]=='3')
    {
        document.getElementById('final').textContent = 'Game Over. YOU WIN!! Final Score: '+scores[0]+' : '+scores[1];
        ok=true;
        return;
    }
    if(scores[1]==3){
        document.getElementById('final').textContent = 'Game Over. YOU LOSE!! Final Score: '+scores[0]+' : '+scores[1];
        ok=true;
        return;
    }
}