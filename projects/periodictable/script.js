
var nonmetal = "rgb(255, 255, 128)";
var alkali = "lightcoral";
var alkaline = "burlywood";
var noble = "lightskyblue";
var metalloid = "darkorange";
var posttransition = "lightgrey";
var transition = "pink";

function centerThingy() {
 var x = document.getElementById("det");
 if (x.style.display === "none") {
   x.style.display = "block";
 }
}



function showH() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 1,
    w: 1.008,
    sym: "H",
    name: "Hydrogen",
    form: "gas",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;

}

function showHe() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 2,
    w: 4.0026,
    sym: "He",
    name: "Helium",
    form: "gas",
    occ: "primordial",
    cat: "noble gas"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = noble;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}



function showLi() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 3,
    w: 6.94,
    sym: "Li",
    name: "Lithium",
    form: "solid",
    occ: "primordial",
    cat: "alkali metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = alkali;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showBe() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 4,
    w: 9.0122,
    sym: "Be",
    name: "Beryllium",
    form: "solid",
    occ: "primordial",
    cat: "alkaline earth metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = alkaline;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showB() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 5,
    w: 10.81,
    sym: "B",
    name: "Boron",
    form: "solid",
    occ: "primordial",
    cat: "metalloid"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = metalloid;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showC() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 6,
    w: 12.011,
    sym: "C",
    name: "Carbon",
    form: "solid",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showN() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 7,
    w: 14.007,
    sym: "N",
    name: "Nitrogen",
    form: "gas",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showO() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 8,
    w: 15.999,
    sym: "O",
    name: "Oxygen",
    form: "gas",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showF() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 9,
    w: 18.998,
    sym: "F",
    name: "Fluorine",
    form: "gas",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showNe() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 10,
    w: 20.180,
    sym: "Ne",
    name: "Neon",
    form: "gas",
    occ: "primordial",
    cat: "noble gas"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = noble;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showNa() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 11,
    w: 22.990,
    sym: "Na",
    name: "Sodium",
    form: "solid",
    occ: "primordial",
    cat: "alkali metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = alkali;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showMg() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 12,
    w: 24.305,
    sym: "Mg",
    name: "Magnesium",
    form: "solid",
    occ: "primordial",
    cat: "alkaline earth metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = alkaline;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showAl () {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 13,
    w: 26.982,
    sym: "Al",
    name: "Aluminium",
    form: "solid",
    occ: "primordial",
    cat: "post-transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = posttransition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showSi() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 14,
    w: 28.085,
    sym: "Si",
    name: "Silicon",
    form: "solid",
    occ: "primordial",
    cat: "metalloid"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = metalloid;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showP() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 15,
    w: 30.974,
    sym: "P",
    name: "Phosphorus",
    form: "solid",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showS() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 16,
    w: 32.06,
    sym: "S",
    name: "Sulfur",
    form: "solid",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showCl() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 17,
    w: 35.45,
    sym: "Cl",
    name: "Chlorine",
    form: "gas",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showAr() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 18,
    w: 39.95,
    sym: "Ar",
    name: "Argon",
    form: "gas",
    occ: "primordial",
    cat: "noble gas"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = noble;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showK() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 19,
    w: 39.098,
    sym: "K",
    name: "Potassium",
    form: "solid",
    occ: "primordial",
    cat: "alkali metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = alkali;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showCa() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 20,
    w: 40.078,
    sym: "Ca",
    name: "Calcium",
    form: "solid",
    occ: "primordial",
    cat: "alkaline earth metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = alkaline;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showSc() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 21,
    w: 44.956,
    sym: "Sc",
    name: "Scandium",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showTi() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 22,
    w: 47.867,
    sym: "Ti",
    name: "Titanium",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showV() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 23,
    w: 50.942,
    sym: "V",
    name: "Vanadium",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showCr() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 24,
    w: 51.996,
    sym: "Cr",
    name: "Chromium",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showMn() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 25,
    w: 54.938,
    sym: "Mn",
    name: "Manganese",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showFe() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 26,
    w: 55.845,
    sym: "Fe",
    name: "Iron",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showCo() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 27,
    w: 58.933,
    sym: "Co",
    name: "Cobalt",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showNi() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 28,
    w: 58.693,
    sym: "Ni",
    name: "Nickel",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showCu() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 29,
    w: 63.546,
    sym: "Cu",
    name: "Copper",
    form: "solid",
    occ: "primordial",
    cat: "transition metal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = transition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showZn() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 30,
    w: 65.38,
    sym: "Zn",
    name: "Zinc",
    form: "solid",
    occ: "primordial",
    cat: "post-transition"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = posttransition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showGa() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 31,
    w: 69.723,
    sym: "Ga",
    name: "Gallium",
    form: "solid",
    occ: "primordial",
    cat: "post-transition"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = posttransition;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showGe() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 32,
    w: 72.630,
    sym: "Ge",
    name: "Germanium",
    form: "solid",
    occ: "primordial",
    cat: "metalloid"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = metalloid;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showAs() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 33,
    w: 65.38,
    sym: "As",
    name: "Arsenic",
    form: "solid",
    occ: "primordial",
    cat: "metalloid"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = metalloid;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showSe() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 34,
    w: 78.971,
    sym: "Se",
    name: "Selenium",
    form: "solid",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showBr() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 35,
    w: 79.904,
    sym: "Br",
    name: "Bromine",
    form: "solid",
    occ: "primordial",
    cat: "reactive nonmetal"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = nonmetal;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}

function showKr() {
  centerThingy();
  let {num, w, sym, name, form, occ, cat} = (function() {  return {
    num: 36,
    w: 83.798,
    sym: "Kr",
    name: "Krypton",
    form: "gas",
    occ: "primordial",
    cat: "noble gas"}}) ();
  document.getElementById("featuredElement").style.backgroundColor = noble;

  document.getElementById("details").innerHTML = "";
  var h = document.getElementById("details");
  h.innerHTML = name + " is element number " + num + ", occurs as a " + form  + " and weighs " + w + ". It is a " + occ + " element and considered a " + cat + " type.";

  var number = document.getElementById("num");
  var weight = document.getElementById("w");
  var symb = document.getElementById("sym");
  var elementName = document.getElementById("name");

  number.innerHTML = num;
  weight.innerHTML = w;
  symb.innerHTML = sym;
  elementName.innerHTML = name;
}
