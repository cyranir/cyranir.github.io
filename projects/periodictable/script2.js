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
 var featuredElementColor = document.getElementById("type").innerHTML;
  if (featuredElementColor === "reactive nonmetal") {
    document.getElementById("featuredElement").style.backgroundColor = "rgb(255, 255, 128)";
  } else if ( featuredElementColor === "alkali metal") {
    document.getElementById("featuredElement").style.backgroundColor = "lightcoral";
  } else if ( featuredElementColor === "alkaline earth metal") {
    document.getElementById("featuredElement").style.backgroundColor = "burlywood";
  } else if ( featuredElementColor === "noble") {
    document.getElementById("featuredElement").style.backgroundColor = "lightskyblue";
  } else if ( featuredElementColor === "metalloid") {
    document.getElementById("featuredElement").style.backgroundColor = "rgb(254, 216, 177)";
  } else if ( featuredElementColor === "post-transition metal") {
    document.getElementById("featuredElement").style.backgroundColor = "lightgray";
  } else { //transition type
    document.getElementById("featuredElement").style.backgroundColor = "pink";
  }
}

function magicHappens(clicked) {
var buttonValue = clicked; //get value from clicked button
var e = String(buttonValue); //convert to string to match types
//console.log(e);
//match element symbol with element name (i.e. H = Hydrogen) and create object
  if (e === "H") { var element = new Element("Hydrogen", "H",  1, 1.008, "reactive nonmetal", "gas", "primordial");
  } else if (e === "He") { var element = new Element("Helium", "He",  2, 4.0026, "noble", "gas", "primordial");
} else if (e === "Li") { var element = new Element("Lithium", "Li",  3, 6.94, "alkali metal", "solid", "primordial");
} else if (e === "Be") { var element = new Element("Beryllium", "Be",  4, 9.0122, "alkaline earth metal", "solid", "primordial");
} else if (e === "B") { var element = new Element("Boron", "B",  5, 10.81, "metalloid", "solid", "primordial");
} else if (e === "C") { var element = new Element("Carbon", "C",  6, 12.011, "reactive nonmetal", "solid", "primordial");
} else if (e === "N") { var element = new Element("Nitrogen", "N",  7, 14.007, "reactive nonmetal", "gas", "primordial");
} else if (e === "O") { var element = new Element("Oxygen", "O",  8, 15.999, "reactive nonmetal", "gas", "primordial");
} else if (e === "F") { var element = new Element("Fluorine", "F",  9, 18.998, "reactive nonmetal", "gas", "primordial");
} else if (e === "Ne") { var element = new Element("Neon", "Ne",  10, 20.180, "noble", "gas", "primordial");
} else if (e === "Na") { var element = new Element("Sodium", "Na",  11, 22.990, "alkali metal", "solid", "primordial");
} else if (e === "Mg") { var element = new Element("Magnesium", "Mg",  12, 24.305, "alkaline earth metal", "solid", "primordial");
} else if (e === "Al") { var element = new Element("Aluminium", "Al",  13, 26.982, "post-transition metal", "solid", "primordial");
} else if (e === "Si") { var element = new Element("Silicon", "Si",  14, 28.085, "metalloid", "solid", "primordial");
} else if (e === "P") { var element = new Element("Phosphorus", "P",  15, 30.974, "reactive nonmetal", "solid", "primordial");
} else if (e === "S") { var element = new Element("Sulfur", "S",  16, 32.06, "reactive nonmetal", "solid", "primordial");
} else if (e === "Cl") { var element = new Element("Chlorine", "Cl",  17, 35.45, "reactive nonmetal", "gas", "primordial");
} else if (e === "Ar") { var element = new Element("Argon", "Ar",  18, 39.95, "noble", "gas", "primordial");
} else if (e === "K") { var element = new Element("Potassium", "K",  19, 39.098, "alkali metal", "solid", "primordial");
} else if (e === "Ca") { var element = new Element("Calcium", "Ca",  20, 40.078, "alkaline earth metal", "solid", "primordial");
} else if (e === "Sc") { var element = new Element("Scandium", "Sc",  21, 44.956, "transition metal", "solid", "primordial");
} else if (e === "Ti") { var element = new Element("Titanium", "Ti",  22, 47.867, "transition metal", "solid", "primordial");
} else if (e === "V") { var element = new Element("Vanadium", "V",  23, 50.942, "transition metal", "solid", "primordial");
} else if (e === "Cr") { var element = new Element("Chromium", "Cr",  24, 51.996, "transition metal", "solid", "primordial");
} else if (e === "Mn") { var element = new Element("Manganese", "Mn",  25, 54.938, "transition metal", "solid", "primordial");
} else if (e === "Fe") { var element = new Element("Iron", "Fe",  26, 55.845, "transition metal", "solid", "primordial");
} else if (e === "Co") { var element = new Element("Cobalt", "Co",  27, 58.933, "transition metal", "solid", "primordial");
} else if (e === "Ni") { var element = new Element("Nickel", "Ni",  28, 58.693, "transition metal", "solid", "primordial");
} else if (e === "Cu") { var element = new Element("Copper", "Cu",  29, 63.546, "transition metal", "solid", "primordial");
} else if (e === "Zn") { var element = new Element("Zinc", "Zn",  30, 65.38, "transition metal", "solid", "primordial");
} else if (e === "Ga") { var element = new Element("Gallium", "Ga",  31, 69.723, "post-transition metal", "solid", "primordial");
} else if (e === "Ge") { var element = new Element("Germanium", "Ge",  32, 72.630, "metalloid", "solid", "primordial");
} else if (e === "As") { var element = new Element("Arsenic", "As",  33, 74.922, "metalloid", "solid", "primordial");
} else if (e === "Se") { var element = new Element("Selenium", "Se",  34, 78.971, "reactive nonmetal", "solid", "primordial");
} else if (e === "Br") { var element = new Element("Bromine", "Br",  35, 79.904, "reactive nonmetal", "solid", "primordial");
} else if (e === "Kr") { var element = new Element("Krypton", "Kr",  36, 20.180, "noble", "gas", "primordial");

  } else { console.log("no match & throw error ;)"); }

//apply element to featuredElement section
  document.getElementById("details").innerHTML = element.name + " is identified with symbol "
    + element.sym + ". The elements number is " + element.num + ", weighs "
    + element.w + " and occurs as a " + element.form + ".";
  document.getElementById("num").innerHTML = element.num;
  document.getElementById("w").innerHTML = element.w;
  document.getElementById("sym").innerHTML = element.sym;
  document.getElementById("name").innerHTML = element.name;
  document.getElementById("type").innerHTML = element.type;
  featuredElement();
}
