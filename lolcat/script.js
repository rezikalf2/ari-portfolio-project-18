
var time = new Date().getHours();

var lolcat = document.getElementById("lolcat");
var image;
var timeEventJs = document.getElementById("timeEvent");
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
// set isPartyTime to false
var isPartyTime = false;
var partyButtonColor = "";
var wakeUpTime;

var updateClock = function() 
{
if (time == partyTime){
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeupTime.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good Evening!";
} else {
	 image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
}
lolcat.src = image;
timeEventJs.innerText = messageText;
//display an auto-updating clock
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
var partyEvent = function() {
   
    //check isPartyTime
    if (isPartyTime === false){ 
         // if isPartyTime is false, change it to true 
         //so we know the button has been clicked
         isPartyTime = true; 
         // set time to partyTime so the lolCat clock 
         //image and message update to the partyTime image and message
         time = partyTime; 
         partyButtonColor = "red";
         partyTimeButton.style.backgroundColor = partyButtonColor;
     } else { 
         // if isPartyTime is true, change it to false to end the party
         isPartyTime = false; 
         // set time back to the current time
         time = new Date().getHours();
         partyButtonColor = "green";
         partyTimeButton.style.backgroundColor = partyButtonColor; 
     }
  };
  
  var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
    testSelect.innerText = lunchTime.toString();
 };
 
 var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
    testSelect.innerText = wakeUpTime.toString();
 };
 
 var napEvent = function() {
    napTime = napTimeSelector.value;
    testSelect.innerText = napTime.toString();
 };
 var partyTimeButton = document.getElementById("partyTimeButton");
 var napTimeSelector = document.getElementById("napTimeSelector");
 var lunchTimeSelector = document.getElementById("lunchTimeSelector");
 var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
 var testSelect = document.getElementById("testSelect");
 partyTimeButton.addEventListener("click", partyEvent);
 napTimeSelector.addEventListener('change', napEvent);
 lunchTimeSelector.addEventListener('change', lunchEvent);
 wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
 
 // partyTimeButton.style.backgroundColor = partyButtonColor; wrong here, 
 // should be added to each of the if and else of partyEvent function
 // because it appears that the assignment at top overides it but I don't know why 
 // it doesn't overide the time??