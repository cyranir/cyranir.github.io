function generatePassword(){

//get password length & check for emptyness
if (document.getElementById("passwordLength").value != "") {
var passwordLength = document.getElementById("passwordLength").value;
} else {
  var passwordLength = 16;
}

//process radio button selection
if (document.getElementById("fullmonty").checked) {
  var characters = "0123456789~!@#$%^&*()_-=+{[]}|:;/?><,.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
} else if (document.getElementById("charnum").checked)  {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
} else if (document.getElementById("char").checked) {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
} else var characters = "0123456789~!@#$%^&*()_-=+{[]}|:;/?><,.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var result           = '';
//var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < passwordLength; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
}


   document.getElementById("passwordResult").innerHTML = result;
   showPasswordResult();

}


//show result div
function showPasswordResult() {
   var x = document.getElementById("showPasswordResult");
   if (x.style.display === "none") {
     x.style.display = "block";
   }
}

//allow only num keys for number input
function numOnly(event) {
  var key = event.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 9);
};
