var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var w = weekday[d.getDay()];
var m = months[d.getMonth()];
var h = d.getDate();
var y = d.getFullYear();

document.getElementById("currentdate").innerHTML = w + ", " + h + " " + m +" " + y;
