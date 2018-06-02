const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("s");





function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
    
}
// the output of this will be  r, s, or p
console.log(getComputerChoice());

<!-------------------------------------------------End Function-------------------------------------------------------------------------------->


function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("user choice is " + userChoice);
    console.log("computer choice is " + computerChoice);
    switch
    
}



<!-------------------------------------------------End Function-------------------------------------------------------------------------------->



//where  is user choice defined? why is r being  passed in to the userChoice variable?


function main() {

rock_div.addEventListener('click', function(){
    game("r"); 
    })

paper_div.addEventListener('click', function(){
    game("p");
    })


scissors_div.addEventListener('click', function(){
    game("s");
    })
    
}

main();

<!-------------------------------------------------End Function-------------------------------------------------------------------------------->







































