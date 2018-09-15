function validateForm() {
    var customerName = document.forms["contactForm"]["name"].value;
    var customerEmail = document.forms["contactForm"]["email"].value;
    var customerPhone = document.forms["contactForm"]["phone"].value;
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
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
    // This checks to see if phone number is 10 digits, ignores formatting
    else if ((customerPhone.match(/\d/g).length!==10)) {
        alert("Phone number is invalid.  Please enter a valid 10 digit phone number");
        return false;
    }
    else
    {
        successMsg.style.display = "block";
        return false;
    }
    
}
