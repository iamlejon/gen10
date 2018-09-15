function validateForm() {
    var customerName = document.forms["contactForm"]["name"].value;
    var customerEmail = document.forms["contactForm"]["email"].value;
    var customerPhone = document.forms["contactForm"]["phone"].value;
    var emailPattern = /\S+@\S+\.\S+/;
    var successMsg = document.getElementById("formSuccess");
    

    if (customerName == "") {
        alert("Name must be filled out");
        return false;
    }
    // This checks to see if email is in a valid format
    else if (emailPattern.test(customerEmail) == false) {
            alert("Email is invalid. Please enter a valid email address. Ex. someone@something.domain");
            return false;
    }
    // This checks to see if string contains letters or if phone number is not 10 digits, note* ignores formatting so (555)-555-5555 would be fine.
    else if ((/[a-z]/i.test(customerPhone) == true || customerPhone.match(/\d/g).length!==10)) {
        alert("Phone number is invalid.  Please enter a valid 10 digit phone number");
        return false;
    }
    else
    {
        successMsg.style.display = "block";
        return false;
    }
    
}
