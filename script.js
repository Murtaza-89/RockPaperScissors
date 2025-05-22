alert("Welcome to Rock paper scissors. You will play three rounds against a robot and whoever wins the most rounds will win the game. Click OK to start the game")
let bestOfThreeWins = []
let bestOfThreeLoses = []
for (i=1; i<4; i++) {
    let userInput = prompt(`Round ${i}: select Rock, paper or scissors`).toLowerCase()
    let validInputs = ["rock","paper","scissors"]
    if (!validInputs.includes(userInput)) {
    alert("Invalid input please choose Rock, paper or scissors")}
    let computerChoice 
    let randomvalue = Math.random()
    randomvalue *= 2
    randomvalue +=1
    randomvalue = Math.round(randomvalue)
    if (randomvalue == 1) {
        computerChoice = "Rock"
    }
    else if (randomvalue == 2) {
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }
    alert("Computer chose: " + computerChoice)
    if ((userInput == "rock") && (computerChoice == "Scissors")) {
        bestOfThreeWins.push("win")
        alert("You win!")}
    else if ((userInput == "paper") && (computerChoice == "Rock")) {
        bestOfThreeWins.push("win")
        alert("You win!")}
    else if ((userInput == "scissors") && (computerChoice == "Paper")) {
        bestOfThreeWins.push("win")
        alert("You win!")}
    else if (userInput == computerChoice.toLowerCase()) {
        alert("It's a tie!")}
    else {
        bestOfThreeLoses.push("Lose")
        alert("You lose :(")}
    
}

if (bestOfThreeLoses.length > bestOfThreeWins.length){
    alert("You lost the best of three :(")
}
else if (bestOfThreeLoses.length < bestOfThreeWins.length) {
    alert("You won the best of three!")
}
else {
    alert("Best of three resulted in a tie")
}




