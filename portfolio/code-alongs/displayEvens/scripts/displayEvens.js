
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["displayEvens"].elements.length; 
        loopCounter++) {
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

/*
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
} */

function validateItems() {
  
    var starting = parseInt(document.forms["displayEvens"]["startPoint"].value, 10);
    var end = parseInt(document.forms["displayEvens"]["endPoint"].value, 10);
    var step = parseInt(document.forms["displayEvens"]["step"].value, 10);
    var numbers = [];




    if (starting == "" || isNaN(starting)) {
        alert("Starting Point must be filled in with a number.");
        document.forms["displayEvens"]["startPoint"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startPoint"].focus();
        return false;
    }

   if (end == "" || isNaN(end)) {
       alert("Ending Point must be filled in with a number.");
       document.forms["displayEvens"]["endPoint"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["endPoint"].focus();
       return false;
   }

   if (step == "" || isNaN(step)) {
    alert("Step must be filled in with a number.");
    document.forms["displayEvens"]["step"]
       .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["step"].focus();
    return false;
}


        for(var i=starting; i<=end; i+=step){
            if(i%2==0) {
            numbers.push(i);
        }
    }
       
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("resultsDisplay").innerText = numbers;

  
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}