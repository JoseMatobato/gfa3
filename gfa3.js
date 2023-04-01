var num1 = Math.floor(Math.random() * 20 + 1);
var num2 = Math.floor(Math.random() * 20 + 1);
var num3 = Math.floor(Math.random() * 20 + 1);
var letter = String.fromCharCode(65 + parseInt(num1));
var mostSold;

function hourMinBreakdown(minutes) {

  var minutes = num2 * num3;
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;
  let hourText = hours > 1 ? 'hours' : 'hour';
  let minuteText = remainingMinutes > 1 ? 'minutes' : 'minute';
  return "It took them " + minutes + ' ' + minuteText + ' (' + hours + ' ' + hourText + ' and ' + remainingMinutes + ' ' + minuteText + ') to sell everything'
;}

if (num1 > num2 && num1 > num3) {

  mostSold = "meth";

} else if (num2 > num1 && num2 > num3) {

  mostSold = "tobacco";

} else if (num3 > num1 && num3 > num2) {

  mostSold = "cannabis";

} else {

  mostSold = "nothing special";

}


document.getElementById("meth").innerHTML = num1;
document.getElementById("tobacco").innerHTML = num2;
document.getElementById("cannabis").innerHTML = num3;
document.getElementById("most_sold").innerHTML = "They sold the most " + mostSold;
document.getElementById("time_taken").innerHTML = hourMinBreakdown();
document.getElementById("customer_name").innerHTML = "The name of their most valuable buyer starts with the letter " + letter;
