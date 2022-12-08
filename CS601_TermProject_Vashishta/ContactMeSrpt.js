// Validation for first name
function validateFirstName(showError) {
    var firstName = document.getElementById("firstName");
    // alpha character regex
    const re = new RegExp('^[a-zA-Z]+$');
    var errorMsg = "";
    var valid = true;
    // conditions to check min number of characters
    if (firstName.value.length < 2) {
        errorMsg = "The first name should be at least 2 characters long";
        valid = false;  
    } 
    // conditions to check all characters are alphabets
    else if (!re.test(firstName.value)) { 
        errorMsg = "The first name should only contian alpha characters";
        valid = false;  
    }
    // Error message update
    if(showError){
        firstNameError.textContent = errorMsg;
    }

    return valid;
}
// Validation for last name
function validateLastName(showError) {
    var lastName = document.getElementById("lastName");
    // alpha character regex
    const re = new RegExp('^[a-zA-Z]+$');
    var errorMsg = "";
    var valid = true;
    // conditions to check min number of characters
    if (lastName.value.length < 2) {
        errorMsg = "The last name should be at least 2 characters long";
        valid = false;   
    } 
    // conditions to check all characters are alphabets
    else if (!re.test(lastName.value)) { 
        errorMsg = "The last name should only contian alpha characters";
        valid = false;  
    }
    // Error message update
    if (showError) {
        lastNameError.textContent=errorMsg;
    }
    
    return valid;
}
// Validation for facilitator name
function validateFacilitatorName(showError) {
    var facilitorNames = ['jen', 'josh', 'chris', 'christian', 'behdad'];
    var facilitatorElement = document.getElementById("facilitator");
    var facilitatorName = facilitatorElement.value.toLowerCase();
    var valid = true;
    var errorMsg = "";
    //Checking to see if names in text field match the correct names
    if (!facilitorNames.includes(facilitatorName)) {
        errorMsg = "Please enter a valid facilitator name";
        valid = false; 
    } 
    // Error message update
    if(showError){
        facilitatorError.textContent= errorMsg;
    }
    
    return valid;
}

//Validation function to show errors and disable/enable submit
function validateContactForm(validateName, validateAge, validateLocationCity,validateLocationCountry) {
    //Declaration of necessary variables
    var submitButton = document.getElementById("submitBt");
        
    //Check conditions of first name and update form validation
    var validFirst = validateFirstName(validateFirst);

    //Check conditions of last name and update form validation
    var validLast = validateLastName(validateLast);

    //Check conditions of facilitator name and update form validation
    var validFacilitator = validateFacilitatorName(validateFacilitator);
    //Disable button for invalid form values
    if (validFirst && validLast && validFacilitator) {
        submitButton.disabled=false;
    }
    else {
        submitButton.disabled=true;
    }
    
    return true;
}

