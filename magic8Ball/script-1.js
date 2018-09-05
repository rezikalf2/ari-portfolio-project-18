$(document).ready(function(){
 
/*on 30Aug2018
var magic8Ball = {};
magic8Ball.question = "";
magic8Ball.answers = ["Yes", "No", "probable", "Never mind"];
magic8Ball.pickAnswer = function(question) {
  randomNo = Math.random();
  randomNoArray = randomNo * this.answers.length;
  randomIndex = Math.floor(randomNoArray);
  console.log(question + " " + "Our Answer = " + this.answers[randomIndex]);
}
magic8Ball.pickAnswer("Is coding a good Business?");
*/
var magic8Ball = {};
magic8Ball.answers = [];
magic8Ball.answers = [ "It is certain", "It is decidedly so", "Without a doubt"," Yes definitely", "You may rely on it",  "yes", "Most likely", "Outlook good"," No", "Signs point to yes"];
magic8Ball.randomAnswer = function() {
   
    prompt("Ask Me Anything button");
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.answers.length;
    var randomIndex = Math.floor(randomNumberArray);
    var selectedAnswer = this.answers[randomIndex]
    
    //console.log("In response to your question: " + question + " " + "The Magic 8 Ball tells you: " + this.answers[randomIndex]);
};
//magic8Ball.randomAnswer("Shall I be a superior coder?");
$("#questionButton").click(magic8Ball.randomAnswer);
$("#answer").text("love");
});