var playerBet;
function placeBetGreeting() {
    var playerBet = parseFloat(prompt("Enter your bet")).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    if(playerBet <= 0 || playerBet=="" || isNaN(playerBet)){
        alert("You must enter a numeric number greater than 0")
        placeBetGreeting();
        return false;
    } else {
        document.getElementById("startingBet").innerText = playerBet;
        return false;
    }
    
}

var diceA = 0;
var diceB = 0;


function rollDice() {
        diceA = Math.floor(Math.random() * 6) + 1;
        diceB = Math.floor(Math.random() * 6) + 1;
        document.getElementById("results").style.display = "block";
        document.getElementById("resultsDisplay").innerText = (diceA+diceB);
        return false;
    }
     
  