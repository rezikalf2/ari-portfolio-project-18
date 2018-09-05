$(document).ready(function(){
    $("#answer").hide();
   var magic8Ball = {};
   
   magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];

   magic8Ball.askQuestion = function(question){
       $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	   $("#8ball").effect("shake");
		
       $("#answer").fadeIn(4000);
       var randomNumber = Math.random();
       var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
       var randomIndex = Math.floor(randomNumberForListOfAnswers);
       var answer = this.listOfAnswers[randomIndex];

       $("#answer").text( answer );
		

       console.log(question);
       //console.log(answer);
   };

   var onClick = function() {
       $("#answer").hide();
       $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	    $("#8ball").effect("shake");
       setTimeout( function() { 
       var question = prompt("ASK A YES/NO QUESTION!");
       magic8Ball.askQuestion(question);
    },500);
   };

   $("#questionButton").click( onClick );

});