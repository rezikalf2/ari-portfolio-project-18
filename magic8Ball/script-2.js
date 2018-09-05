$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
 
    magic8Ball.askQuestion = function(){
        var question = prompt("ASK A YES/NO QUESTION!");
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
 
        $("#answer").text( answer );
 
    };
  
     
    $("#questionButton").click( magic8Ball.askQuestion );
 
});
/*It looks like when we add our  method directly to our  the value of  travels up to our button instead of remaining as our  object.
We use the  function to get around that functionality
It’s a bit complicated and I can’t say exactly why JavaScript was designed that way but that explains why it wouldn’t work for you before.
nother way to skirt around this issue is to change the  to  and then you can have your code set up as you originally had it
*/
 