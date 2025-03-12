let userScore = 0;
let compScore = 0;
let img = document.createElement('img');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
}

const drawGame = () => {
   
    
    img.src = "Draw.webp"
    document.body.appendChild(img);
    console.log(drawGame);
    msg.innerText = "Game is Draw, Play AGAIN!";
    e.preventDefault(); 
   
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        img.src = "win.gif"
        document.body.appendChild(img);
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
      
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        img.src = "paperwin.jpg"
        document.body.appendChild(img);
        console.log(drawGame);
        msg.innerText = `You lose !! ${compChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
   
console.log("user choice = ", userChoice);
//Generate computer choice
const compChoice = genCompChoice();
console.log("comp choice = ", compChoice);

if(userChoice === compChoice){
drawGame();
} else {
    let userWin = true ;
    if (userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
     userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice, compChoice);
}
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        
        const userChoice = choice.getAttribute("id")
     playGame(userChoice);
    })
});
