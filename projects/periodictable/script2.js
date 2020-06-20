//better code hurrr

//create objects with values for element symbol, name, type, form, occurance
function Element(name, sym, num, w, type, form, occ) {
  this.name = name;
  this.sym = sym;
  this.num = num;
  this.w = w;
  this.type = type;
  this.form = form;
  this.occ = occ;
}

//show featured element & change background depending on element type
function featuredElement() {
 var x = document.getElementById("det");
 if (x.style.display === "none") {
   x.style.display = "block";
 }
 var y = document.getElementById("type").innerHTML;
  if (y === "reactive nonmetal") {
    document.getElementById("featuredElement").style.backgroundColor = "rgb(255, 255, 128)";
  } else if ( y === "alkali") {
document.getElementById("featuredElement").style.backgroundColor = "lightcoral";
  } else {
    document.getElementById("featuredElement").style.backgroundColor = "lightskyblue";
  }
}

//use onclick to start function to provide element details
function showH() {
  var hydrogen = new Element("Hydrogen", "H",  1, 1.008, "reactive nonmetal", "gas", "primordial");
  document.getElementById("details").innerHTML = hydrogen.name + " is identified with symbol " + hydrogen.sym + ". The elements number is " +hydrogen.num + ", weighs " + hydrogen.w + " and occurs as a " + hydrogen.form + ".";

  //update featuredElement contents
  document.getElementById("num").innerHTML = hydrogen.num;
  document.getElementById("w").innerHTML = hydrogen.w;
  document.getElementById("sym").innerHTML = hydrogen.sym;
  document.getElementById("name").innerHTML = hydrogen.name;
  document.getElementById("type").innerHTML = hydrogen.type;
  featuredElement();
}

function showHe() {
  var helium = new Element("Helium", "He",  2, 4.0026, "noble", "gas", "primordial");
  document.getElementById("details").innerHTML = helium.name + " is identified with symbol " + helium.sym + ". The elements number is " +helium.num + ", weighs " + helium.w + " and occurs as a " + helium.form + ".";

  //update featuredElement contents
  document.getElementById("num").innerHTML = helium.num;
  document.getElementById("w").innerHTML = helium.w;
  document.getElementById("sym").innerHTML = helium.sym;
  document.getElementById("name").innerHTML = helium.name;
  document.getElementById("type").innerHTML = helium.type;
  featuredElement();
}







 /* old stuff

//create arrays for number and weight
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var weight = [1, 1, 1, 1, 1, 1, 1, 1, 1];


var sym = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne"];
var name = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Flurine", "Neon"];

var type = ["Alkali metal", "Alkaline earth metal", "Lanthanide", "Actinide", "Transition metal", "Post-transition metal", "Metalloid", "Reactive nonmetal", "Noble gas", "Unknown"]
var form = ["gas", "solid", "liquid", "unknown"];
var occurance = ["primordial", "from decay", "synthetic"];
*/



/*
//change background of featured element depending on element type
function changeFeaturedElement() {
  var x = document.getElementById("type").innerHTML;
  if (x === "reactive nonmetal") {
    document.getElementById("featuredElement").style.backgroundColor = "rgb(255, 255, 128)";
  } else if ( x === "alkali") {
document.getElementById("featuredElement").style.backgroundColor = "lightcoral";
  } else {
    document.getElementById("featuredElement").style.backgroundColor = "lightskyblue";
  }
}
*/
