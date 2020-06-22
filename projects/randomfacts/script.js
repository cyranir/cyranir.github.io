//load random facts from random webpage
var request = new XMLHttpRequest();
var url = "https://uselessfacts.jsph.pl/random.json?language=en";

request.open("GET", url, false);
request.send();

var response = request.response;
var data = JSON.parse(response);

document.getElementById("randomfact").innerHTML = data["text"];

function reloadWebpage() {
  location.reload(true);
}
