var num1 = parseInt(Math.ceil(Math.random() * 20));
var num2 = parseInt(Math.ceil(Math.random() * 20));
var num3 = parseInt(Math.ceil(Math.random() * 20));

document.getElementById("num1").innerHTML = num1 + " meters";
document.getElementById("num2").innerHTML = num2 + " meters";
document.getElementById("num3").innerHTML = num3 + " meters";

var highestNum = Math.max(num1, num2, num3);
document.getElementById("highestNum").innerHTML="The farthest distance from the next clue or treasure was: " + highestNum + " meters";

var letter = String.fromCharCode(num1+64);
document.getElementById("letter").innerHTML="They also received another clue along with the third clue: " + letter;

var totalMins = num2 * num3;
var mins = totalMins % 60;
var hours = Math.trunc(totalMins / 60);
document.getElementById("hrsMins").innerHTML="The time it took for them to find the treasure was: " + hours + " hours " + mins + " mins (" + totalMins + " mins)";