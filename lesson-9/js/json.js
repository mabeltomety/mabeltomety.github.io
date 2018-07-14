var request = new XMLHttpRequest();
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=507172261ceb09fe4b119754bd9af920&units=imperial';
request.open('GET', requestURL);
request.send();

request.onload = function () {
    var weatherinfo = JSON.parse(request.responseText);
    /*Here you will call the elements for example*/

    document.getElementById('name').innerHTML = weatherinfo.name;
    document.getElementById('wind').innerHTML = weatherinfo.wind.speed;
    document.getElementById('temp').innerHTML = Math.round(weatherinfo.main.temp);
    document.getElementById('weather').innerHTML = weatherinfo.weather;
    document.getElementById('low').innerHTML = weatherinfo.main.temp_min;
    document.getElementById('high').innerHTML = weatherinfo.main.temp_max;
    document.getElementById('icon').innerHTML = weatherinfo.09d;
}
