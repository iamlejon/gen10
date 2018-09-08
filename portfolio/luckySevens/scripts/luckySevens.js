function placeBetGreeting() {
    var playerBet = parseFloat(prompt("Welcome to Lucky Sevens \n Go Ahead, Place Your Bet!")).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
    document.getElementById("startingBet").innerText = playerBet;
}