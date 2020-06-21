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
  } else if ( featuredElementColor === "actinide") {
    document.getElementById("featuredElement").style.backgroundColor = "plum";
  } else if ( featuredElementColor === "lanthanide") {
    document.getElementById("featuredElement").style.backgroundColor = "thistle";
  } else if ( featuredElementColor === "unknown") {
    document.getElementById("featuredElement").style.backgroundColor = "whitesmoke";
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
} else if (e === "Kr") { var element = new Element("Krypton", "Kr",  36, 83.798, "noble", "gas", "primordial");
} else if (e === "Rb") { var element = new Element("Rubidium", "Rb",  37, 85.468, "alkali metal", "gas", "primordial");
} else if (e === "Sr") { var element = new Element("Strontium", "Sr",  38, 87.62, "alkaline earth metal", "gas", "primordial");
} else if (e === "Y") { var element = new Element("Yttrium", "Y",  39, 88.906, "transition metal", "solid", "primordial");
} else if (e === "Zr") { var element = new Element("Zirconium", "Zr",  40, 91.224, "transition metal", "solid", "primordial");
} else if (e === "Nb") { var element = new Element("Niobium", "Nb",  41, 92.906, "transition metal", "solid", "primordial");
} else if (e === "Mo") { var element = new Element("Molybdenum", "Mo",  42, 95.95, "transition metal", "solid", "primordial");
} else if (e === "Tc") { var element = new Element("Technetium", "Tc",  43, 97, "transition metal", "solid", "from decay");
} else if (e === "Ru") { var element = new Element("Ruthenium", "Ru",  44, 101.07, "transition metal", "solid", "primordial");
} else if (e === "Rh") { var element = new Element("Rhodium", "Rh",  45, 102.91, "transition metal", "solid", "primordial");
} else if (e === "Pd") { var element = new Element("Palladium", "Pd",  46, 106.42, "transition metal", "solid", "primordial");
} else if (e === "Ag") { var element = new Element("Silver", "Ag",  47, 107.87, "transition metal", "solid", "primordial");
} else if (e === "Cd") { var element = new Element("Cadmium", "Cd",  48, 112.41, "post-transition metal", "solid", "primordial");
} else if (e === "In") { var element = new Element("Indium", "In",  49, 114.82, "post-transition metal", "solid", "primordial");
} else if (e === "Sn") { var element = new Element("Tin", "Sn",  50, 118.71, "post-transition metal", "solid", "primordial");
} else if (e === "Sb") { var element = new Element("Antimony", "Sb",  51, 121.76, "metalloid", "solid", "primordial");
} else if (e === "Te") { var element = new Element("Tellurium", "Te",  52, 127.60, "metalloid", "solid", "primordial");
} else if (e === "I") { var element = new Element("Iodine", "I",  53, 126.90, "reactive nonmetal", "solid", "primordial");
} else if (e === "Xe") { var element = new Element("Xenon", "Xe",  54, 131.29, "noble", "gas", "primordial");
} else if (e === "Cs") { var element = new Element("Caesium", "Cs",  55, 132.91, "alkali metal", "solid", "primordial");
} else if (e === "Ba") { var element = new Element("Barium", "Ba",  56, 137.33, "alkaline earth metal", "solid", "primordial");
} else if (e === "La") { var element = new Element("Lanthanum", "La",  57, 138.91, "lanthanide", "solid", "primordial");
} else if (e === "Hf") { var element = new Element("Hafnium", "Hf",  72, 178.49, "transition metal", "solid", "primordial");
} else if (e === "Ta") { var element = new Element("Tantalum", "Ta",  73, 92.906, "transition metal", "solid", "primordial");
} else if (e === "W") { var element = new Element("Tungsten", "W",  74, 95.95, "transition metal", "solid", "primordial");
} else if (e === "Re") { var element = new Element("Rhenium", "Re",  75, 97, "transition metal", "solid", "from decay");
} else if (e === "Os") { var element = new Element("Osmium", "Os",  76, 101.07, "transition metal", "solid", "primordial");
} else if (e === "Ir") { var element = new Element("Iridium", "Ir",  77, 102.91, "transition metal", "solid", "primordial");
} else if (e === "Pt") { var element = new Element("Platinum", "Pt",  78, 106.42, "transition metal", "solid", "primordial");
} else if (e === "Au") { var element = new Element("Gold", "Au",  79, 107.87, "transition metal", "solid", "primordial");
} else if (e === "Hg") { var element = new Element("Mercury", "Hg",  80, 112.41, "post-transition metal", "liquid", "primordial");
} else if (e === "Tl") { var element = new Element("Thallium", "Tl",  81, 114.82, "post-transition metal", "solid", "primordial");
} else if (e === "Pb") { var element = new Element("Lead", "Pb",  82, 118.71, "post-transition metal", "solid", "primordial");
} else if (e === "Bi") { var element = new Element("Bismuth", "Bi",  83, 121.76, "post-transition metal", "solid", "primordial");
} else if (e === "Po") { var element = new Element("Polonium", "Po",  84, 127.60, "post-transition metal", "solid", "from decay");
} else if (e === "At") { var element = new Element("Astatine", "At",  85, 126.90, "metalloid", "solid", "from decay");
} else if (e === "Rn") { var element = new Element("Radon", "Rn",  86, 131.29, "noble", "gas", "from decay");
} else if (e === "Fr") { var element = new Element("Francium", "Fr",  87, 223, "alkali metal", "solid", "from decay");
} else if (e === "Ra") { var element = new Element("Radium", "Ra",  88, 226, "alkaline earth metal", "solid", "from decay");
} else if (e === "Ac") { var element = new Element("Actinium", "Ac",  89, 227, "actinide", "solid", "from decay");
} else if (e === "Rf") { var element = new Element("Rutherfordium", "Rf",  104, 267, "transition metal", "unknown", "synthetic");
} else if (e === "Db") { var element = new Element("Dubnium", "Db",  105, 268, "transition metal", "unknown", "synthetic");
} else if (e === "Sg") { var element = new Element("Seaborgium", "Sb",  106, 269, "transition metal", "unknown", "synthetic");
} else if (e === "Bh") { var element = new Element("Bohrium", "Bh",  107, 270, "transition metal", "unknown", "synthetic");
} else if (e === "Hs") { var element = new Element("Hassium", "Hs",  108, 269, "transition metal", "unknown", "synthetic");
} else if (e === "Mt") { var element = new Element("Meitnerium", "Mt",  109, 278, "unknown", "unknown", "synthetic");
} else if (e === "Ds") { var element = new Element("Darmstadtium", "Ds",  110, 281, "unknown", "unknown", "synthetic");
} else if (e === "Rg") { var element = new Element("Roentgenium", "Rg",  111, 282, "unknown", "unknown", "synthetic");
} else if (e === "Cn") { var element = new Element("Copernicium", "Cn",  112, 285, "post-transition metal", "unknown", "synthetic");
} else if (e === "Nh") { var element = new Element("Nihonium", "Nh",  113, 286, "unknown", "unknown", "synthetic");
} else if (e === "Fl") { var element = new Element("Flerovium", "Fl",  114, 289, "unknown", "unknown", "synthetic");
} else if (e === "Mc") { var element = new Element("Moscovium", "Mc",  115, 290, "unknown", "unknown", "synthetic");
} else if (e === "Lv") { var element = new Element("Livermorium", "Lv",  116, 293, "unknown", "unknown", "synthetic");
} else if (e === "Ts") { var element = new Element("Tennessine", "Ts",  117, 294, "unknown", "unknown", "synthetic");
} else if (e === "Og") { var element = new Element("Oganesson", "Og",  118, 294, "unknown", "unknown", "synthetic");
} else if (e === "Ce") { var element = new Element("Cerium", "Ce",  58, 140.12, "lanthanide", "solid", "primordial");
} else if (e === "Pr") { var element = new Element("Praseodymium", "Pr",  59, 140.91, "lanthanide", "solid", "primordial");
} else if (e === "Nd") { var element = new Element("Neodymium", "Nd",  60, 144.24, "lanthanide", "solid", "primordial");
} else if (e === "Pm") { var element = new Element("Promethium", "Pm",  61, 145, "lanthanide", "solid", "from decay");
} else if (e === "Sm") { var element = new Element("Samarium", "Sm",  62, 150.36, "lanthanide", "solid", "primordial");
} else if (e === "Eu") { var element = new Element("Europium", "Eu",  63, 151.96, "lanthanide", "solid", "primordial");
} else if (e === "Gd") { var element = new Element("Gadolinium", "Gd",  64, 157.25, "lanthanide", "solid", "primordial");
} else if (e === "Tb") { var element = new Element("Terbium", "Tb",  65, 158.93, "lanthanide", "solid", "primordial");
} else if (e === "Dy") { var element = new Element("Dysprosium", "Dy",  66, 162.50, "lanthanide", "solid", "primordial");
} else if (e === "Ho") { var element = new Element("Holmium", "Ho",  67, 164.93, "lanthanide", "solid", "primordial");
} else if (e === "Er") { var element = new Element("Erbium", "Er",  68, 167.23, "lanthanide", "solid", "primordial");
} else if (e === "Tm") { var element = new Element("Thulium", "Tm",  69, 168.93, "lanthanide", "solid", "primordial");
} else if (e === "Yb") { var element = new Element("Ytterbium", "Yb",  70, 173.05, "lanthanide", "solid", "primordial");
} else if (e === "Lu") { var element = new Element("Lutetium", "Lu",  71, 174.97, "lanthanide", "solid", "primordial");
} else if (e === "Th") { var element = new Element("Thorium", "Th",  90, 232.04, "actinide", "solid", "primordial");
} else if (e === "Pa") { var element = new Element("Protactinium", "Pa",  91, 231.01, "actinide", "solid", "from decay");
} else if (e === "U") { var element = new Element("Uranium", "U",  92, 238.03, "actinide", "solid", "primordial");
} else if (e === "Np") { var element = new Element("Neptunium", "Np",  93, 237, "actinide", "solid", "from decay");
} else if (e === "Pu") { var element = new Element("Plutonium", "Pu",  94, 244, "actinide", "solid", "from decay");
} else if (e === "Am") { var element = new Element("Americium", "Am",  95, 243, "actinide", "solid", "synthetic");
} else if (e === "Cm") { var element = new Element("Curium", "Cm",  96, 247, "actinide", "solid", "synthetic");
} else if (e === "Bk") { var element = new Element("Berkelium", "Bk",  97, 247, "actinide", "solid", "synthetic");
} else if (e === "Cf") { var element = new Element("Californium", "Cf",  98, 251, "actinide", "solid", "synthetic");
} else if (e === "Es") { var element = new Element("Einsteinium", "Es",  99, 252, "actinide", "solid", "synthetic");
} else if (e === "Fm") { var element = new Element("Fermium", "Fm",  100, 257, "actinide", "unknown", "synthetic");
} else if (e === "Md") { var element = new Element("Mendelevium", "Md",  101, 258, "actinide", "unknown", "synthetic");
} else if (e === "No") { var element = new Element("Nobelium", "No",  102, 259, "actinide", "unknown", "synthetic");
} else if (e === "Lr") { var element = new Element("Lawrencium", "Lr",  103, 266, "actinide", "unknown", "synthetic");
  } else { console.log("no match & throw error ;)"); }

//add more info based on primordial, from decay or synthetic
var occuranceValue = String(element.occ); //convert to string to match types
if (element.occ === "primordial") {
  var occuranceValue = " meaning that the element consists of nuclides that have existed before the Earth was formed.";
} else if (element.occ === "from decay"){
  var occuranceValue = " meaning that the element occurs from radioactive decay from other elements";
} else if (element.occ === "synthetic") {
  var occuranceValue = " meaning that the element can only be produced in laboratories, and that it does not occur naturally on Earth."
}

//apply element to featuredElement section
  document.getElementById("details").innerHTML = element.name + " is identified with symbol "
    + element.sym + ". The elements number is " + element.num + ". The mass of " + element.name + " is "
    + element.w + ". The state of matter at 0°C and 1 atm for " + element.name + " is " + element.form +
    ". And lastly, the natural occurance of " + element.name + " is " + element.occ + "," + occuranceValue;
  document.getElementById("num").innerHTML = element.num;
  document.getElementById("w").innerHTML = element.w;
  document.getElementById("sym").innerHTML = element.sym;
  document.getElementById("name").innerHTML = element.name;
  document.getElementById("type").innerHTML = element.type;

  featuredElement();
  removeWelcomeText();
}

function  removeWelcomeText() {
   var x = document.getElementById("welcomeText");
   if (x.style.display === "block") {
     x.style.display = "none";
   }
}
