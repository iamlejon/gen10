var playerAmount;
var startingBet;
function placeBetGreeting() {
    startingBet = parseFloat(prompt("Enter your bet")).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    playerAmount = parseFloat(startingBet);
    if(playerAmount <= 0 || playerAmount=="" || isNaN(playerAmount)){
        alert("You must enter a numeric number greater than 0")
        placeBetGreeting();
        return false;
    } else {
        document.getElementById("startingBet").innerText = startingBet;
        return false;
    }
    
}

var diceA = 0;
var diceB = 0;
var sum;
var totalRolls = 0;



function rollDice() {
        while(Number(playerAmount)>Number(0)){
            diceA = Math.floor(Math.random() * 6) + 1;
            diceB = Math.floor(Math.random() * 6) + 1;
            sum = diceA+diceB;

            if(sum==7) {
                playerAmount = parseFloat(playerAmount) + parseFloat(4.00);
            }
            else {
                playerAmount = parseFloat(playerAmount) - parseFloat(1.00);
            }
        
            totalRolls++;
        }
       
       
        document.getElementById("results").style.display = "block";
        document.getElementById("current").innerText = (playerAmount);
        document.getElementById("startingBetDisplay").innerText = (startingBet);
        document.getElementById("rolls").innerText = totalRolls;
        document.getElementById("resultsDisplay").innerText = (sum);
        document.getElementById("submitButton").innerText = "Play Again?";
        return false;
    }
     
  