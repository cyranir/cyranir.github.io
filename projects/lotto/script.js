function lottery(){

//You have 1 / 26 * 1 / 10 * 1 / 10 * 1 / 10 * 1 / 10 * 1 / 10 * 1 / 10 = 0.0000384% chance to get it right!

//get numbers from input & check for emptyness
if (document.getElementById("lucky0").value != "") {
  var a = document.getElementById("lucky0").value;
} else {
  var a = "A";
}

if (document.getElementById("lucky1").value != "") {
  var b = document.getElementById("lucky1").value;
} else {
  var b = 1;
}

if (document.getElementById("lucky2").value != "") {
  var c = document.getElementById("lucky2").value;
} else {
  var c = 2;
}

if (document.getElementById("lucky3").value != "") {
  var d = document.getElementById("lucky3").value;
} else {
  var d = 3;
}

if (document.getElementById("lucky4").value != "") {
  var e = document.getElementById("lucky4").value;
} else {
  var e = 4;
}

if (document.getElementById("lucky5").value != "") {
  var f = document.getElementById("lucky5").value;
} else {
  var f = 5;
}

//console.log(a,b,c,d,e,f);

//generate random characters
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var string_length = 1;
var aa = '';
for (var i=0; i<string_length; i++) {
  var rnum = Math.floor(Math.random() * chars.length);
  aa += chars.substring(rnum,rnum+1);
}

//generate random numbers
var bb = Math.random().toString(10).substr(3,1);
var cc = Math.random().toString(10).substr(3,1);
var dd = Math.random().toString(10).substr(3,1);
var ee = Math.random().toString(10).substr(3,1);
var ff = Math.random().toString(10).substr(3,1);

//console.log(aa,bb,cc,dd,ee,ff);

//compare characters & numbers
if ((a == aa) & (b == bb) & (c == cc) & (d == dd) & (e == ee) & (f == ff)) {
  document.getElementById("result").innerHTML = "YOU WON! Your input was " + a + b + c + d + e + f + " and the RNG gods smiled upon you, because they selected " + aa + bb + cc + dd + ee + ff;
} else {
  document.getElementById("result").innerHTML = "Aw! No score. Your input was " + a + b + c + d + e + f + " and Lucky You Land® selected " + aa + bb + cc + dd + ee + ff;
}

//show result

showResults();
}

//show result div
function showResults() {
   var x = document.getElementById("results");
   if (x.style.display === "none") {
     x.style.display = "block";
   }
}

//allow only alpha keys for text input
function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8 || key == 9);
};

//allow only num keys for number input
function numOnly(event) {
  var key = event.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 9);
};

//check for min and max values
function maxLengthCheck(object)
{
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)

}

//go to next input after max length is reached
//s00n
