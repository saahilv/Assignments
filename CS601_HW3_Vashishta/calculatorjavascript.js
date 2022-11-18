//Declaring variable a (used as a number later)
var a;
//Declaring variable b (used as a number later)
var b;
// The line of code below provides an alert to the visitor
alert("Welcome to Calculator Supreme! We hope you get your numbers!");
// The line of code below asks the user to add their name and assigns it to a variable
var user_name = prompt("Please Enter Your Name");
// The line of code to Welcome the user with another alert
alert("Welcome "+ user_name +"!");
// Alert to instruct the user to enter 2 numbers in 2 different prompts
alert("Please enter 2 numbers of your choice in the next 2 prompts");
//Prompt to get first number 
var a_input = prompt("Please enter the first number:");
// Converting var to integer to use later
var a = parseInt(a_input);
//Prompt to get first number 
var b_input = prompt("Please enter the second number:");
// Converting var to integer to use later
var b = parseInt(b_input);
// Creating a function to add the numbers provided by the user
function addNumbers() {
    var sum_numbers = a + b;
    alert("The sum of your two numbers is: " + sum_numbers);
    return sum_numbers;
}
var sum_numbers = addNumbers();
//Adding conditional logic to provide alerts based on numeric value of sum
if (sum_numbers >= 10) {
    alert("That is a big number.");
} else {
    alert("That is a small number.");
}
// Prompting the user on whether they want to add 2 numbers again and storing that to a variable
var repeat_ask = prompt("Do you want to add two numbers again? (yes/no)");
// Creating a while loop that checks for prompt value and executes logic accordingly 
while (repeat_ask.toLowerCase() == "yes") {
    //Getting first number again
    a_input = prompt("Please enter the first number:");
    a = parseInt(a_input);
    //Getting second number again
    b_input = prompt("Please enter the second number:");
    b = parseInt(b_input);
    // adding the numbers
    sum_numbers = addNumbers();
    //Adding conditional logic to provide alerts based on numeric value of sum
    if (sum_numbers > 10) {
        alert("That is a big number.");
    } else {
        alert("That is a small number.");
    }
    // Asking for prompt again
    repeat_ask = prompt("Do you want to add two numbers again? (yes/no)");
}
// If the user chooses no
alert("Thanks for using the program! ");