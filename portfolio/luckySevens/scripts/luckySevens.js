var accountBalance; // The Amount player has at all times
var startingBet; // The amount player is starting with

/*This function asks user to enter bet in dollars, fixes the starting bet to 2 decimal places and converts it back to a number since .toFixed converts to a string.
  The parseFloat is used to prevent bugs and ensure value is always a number not a string for math operation purposes
  If user enters a non numeric number or number less than or equal to 0, it will display error and user will try again*/
function placeBetGreeting() {
    startingBet = parseFloat(Math.round(prompt("Enter your bet in $ Dollars"))).toFixed(2);
    accountBalance = parseFloat(startingBet);
    if(accountBalance <= 0 || accountBalance=="" || isNaN(accountBalance)){
        alert("You must enter a numeric number greater than 0.  Try again.")
        accountBalance = null; // resets accountBalance to nothing
        return false;
    } else {
        document.getElementById("startingBet").innerText = "$"+startingBet;
        return false;
    }
    
}

var diceA = 0; // Dice number 1
var diceB = 0; // Dice number 2
var sum; // the sum of two dices added together
var currentTotalRolls = 0; // To keep track of roll count per round
var pairs = {}; // This will house they key value relationship between the current roll count and current amount held
var resultsQA = []; //This is to self QA check in console to see relation and history between the dice rolled vs the account balance each round


//The clear all function will clear all totals, objects, arrays, and displays so that everything is reset for a new round, then will call the placeBetGreeting.
function clearAll(){
    accountBalance = 0;
    currentTotalRolls=0;
    startingBet=0;
    sum=0;
    pairs = {};
    resultsQA = [];
    document.getElementById("startingBet").innerText = "$"+startingBet;
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    placeBetGreeting();
    return false;
}


function rollDice() {
    if(accountBalance==0 || accountBalance==null) { //When user clicks play again button, if player amount is 0 it resets all data for new round.
        clearAll(); // After data is reset user will be prompted for new bet and function will continue with calculations below.
    }
        while(Number(accountBalance) > Number(0)){
            diceA = Math.floor(Math.random() * 6) + 1;
            diceB = Math.floor(Math.random() * 6) + 1;
            sum = diceA+diceB; // Takes the sum of two dice rolled.

            if(sum==7) {
                accountBalance = parseFloat(accountBalance) + parseFloat(4.00);
            }
            else {
                accountBalance = parseFloat(accountBalance) - parseFloat(1.00);
            }
        
            currentTotalRolls++;
            pairs[currentTotalRolls] = accountBalance; //Key Value relationship between currentTotalRolls and accountBalance
            resultsQA.push([sum,accountBalance]); //This is to self QA test check in console to see relation and history between the dice rolled vs the account balance each round
        }

    
       //Code to sort the pairs in ascending order and capture the highest Amount won along with it's roll Count at that position
        let keys = Object.keys(pairs);
        keys.sort(function(a,b){return pairs[b]-pairs[a];});
        let rollCountAtHighestWon = keys[0];
        let highestWon = pairs[rollCountAtHighestWon];


        //These final highest won and roll counts cover edge cases.  For instance if the highest amount won is less than the starting bet, then the starting bet is the high amount held
        //Example: If I Bet $3.00 but never rolled a 7, $3.00 at roll 0 should be highest won and highest roll count, not $2.00 at roll 1.

        var highWonFinal = highestWon < startingBet ? startingBet : highestWon;
        var rollCountFinal = highestWon < startingBet ? 0 : rollCountAtHighestWon;
        
       if(currentTotalRolls > 0) {
        document.getElementById("results").style.display = "block";
       }
        
        document.getElementById("startingBetDisplay").innerText = (startingBet);
        document.getElementById("rolls").innerText = currentTotalRolls;
        document.getElementById("highestRollCountDisplay").innerText = rollCountFinal;

        //small workout to include the .00 at the end of the highWonFinal result.  If it's the same as the starting bet, its already included because of the toFixed method
        //But since toFixed converts that to a string, and we convert it back to a number for math calcs, the .00 has to be added back in the results table display
        if(highWonFinal == startingBet) {
            document.getElementById("highestWonDisplay").innerText = highWonFinal;
        }
        else {
            document.getElementById("highestWonDisplay").innerText = highWonFinal + ".00";
        }

        document.getElementById("submitButton").innerText = "Play Again?";
        return false;
    }
     
  