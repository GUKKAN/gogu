var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");
var result = Math.floor(Math.random() * 10) + 1;
var no_of_guess = 0;
var guess_num = [];

function play() {
    var user_guess =document.querySelector("#Guess").value; 
    if (user_guess < 1 || user_guess > 10) {
        alert("Please Enter a number between 1-10😒");
    } else {
        guess_num.push(user_guess);
        no_of_guess = no_of_guess + 1;

        if (user_guess < result) 
        {
            msg3.textContent = "Your guess is low 🫣";
            msg1.textContent = "Number of guesses: " + no_of_guess;
            msg2.textContent = "Guess number are :"+guess_num;
        } 
        else if (user_guess > result) 
        { 
            msg3.textContent = "Your guess is high 🚀"; 
            msg1.textContent = "Number of guesses: " + no_of_guess;
            msg2.textContent = "Guess number are :"+guess_num;
        } 
        else {
            msg3.textContent = "Congratulations! You guessed it right! 🎉";
            msg1.textContent = "Number of guesses: " + no_of_guess;
            msg2.textContent = "Guess number are :"+guess_num; 
        }
        document.getElementById("form").reset();
    }
}



