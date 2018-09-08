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
var winnings = 0;
var pairs = {};



function rollDice() {
    if(playerAmount==0) {
        totalRolls=0;
        startingBet=0;
        sum=0;
        winnings=0;
        pairs = {};
        document.getElementById("results").style.display = "none";
        document.getElementById("submitButton").innerText = "Play";
        placeBetGreeting();
        return false;
    }
        while(Number(playerAmount)>Number(0)){
            diceA = Math.floor(Math.random() * 6) + 1;
            diceB = Math.floor(Math.random() * 6) + 1;
            sum = diceA+diceB;

            if(sum==7) {
                playerAmount = parseFloat(playerAmount) + parseFloat(4.00);
                winnings += 4;
                pairs[totalRolls] = winnings;
            }
            else {
                playerAmount = parseFloat(playerAmount) - parseFloat(1.00);
                winnings=0;
            }
        
            totalRolls++;
        }
       
        let keys = Object.keys(pairs);
        keys.sort(function(a,b){return pairs[b]-pairs[a];});
        let rollCountAtHighestWon = keys[0];
        let highestWon = pairs[rollCountAtHighestWon];
       
        document.getElementById("results").style.display = "block";
        document.getElementById("startingBetDisplay").innerText = (startingBet);
        document.getElementById("rolls").innerText = totalRolls;
        document.getElementById("highestRollCountDisplay").innerText = rollCountAtHighestWon;
        document.getElementById("highestWonDisplay").innerText = highestWon;
        document.getElementById("resultsDisplay").innerText = (sum);
        document.getElementById("submitButton").innerText = "Play Again?";
        return false;
    }
     
  