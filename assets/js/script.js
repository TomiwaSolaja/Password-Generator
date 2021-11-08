// Assignment code here
const lowercase= "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const symbols = "!@#$%^&*(){}[]=<>/,.".split("");
const numbers ="1234567890".split("");
//let fullarr = [].concat(lowercase,uppercase,symbols,numbers);

function getrandlower(){
  return lowercase[Math.floor(Math.random()*26)];
}
function getrandupper(){
  return uppercase[Math.floor(Math.random()*26)];
}
function getrandsymbols(){
  return symbols[Math.floor(Math.random()*20)];
}
function getrandnumbers(){
  return numbers[Math.floor(Math.random()*10)];
}
function generatePassword(){
  let passlen = window.prompt("How long would you like your password to be?");
  while (passlen>128 || passlen<8 || !/^\d+$/.test(passlen)){
    window.alert("Invalid Length try again");
    // case for if pass len is a string or set of letters
    passlen = window.prompt("How long would you like your password to be?");
  }
  let fullarr=[];
  let l= "no";
  let u= "no";
  let s= "no";
  let n= "no";

  if (confirm("Would you like to include lowercase characters?")){
    l="yes";
  };
  if (confirm("Would you like to include Uppercase characters??")){
    u="yes";
  };
  if (confirm("Would you like to include Symbols??")){
    s="yes";
  };
  if (confirm("Would you like to include Numbers?")){
    n="yes";
  };
  let finalpass=""
  if (l==="yes"){
    fullarr = fullarr.concat(lowercase);
    finalpass=finalpass + getrandlower().toString()

  }
  if (u==="yes"){
    fullarr = fullarr.concat(uppercase);
    finalpass=finalpass + getrandupper().toString()

  }
  if (s==="yes"){
    fullarr = fullarr.concat(symbols);
    finalpass=finalpass + getrandsymbols().toString()

  }
  if (n==="yes"){
    fullarr = fullarr.concat(numbers);
    finalpass=finalpass + getrandnumbers().toString()

  }
  for (let i=finalpass.length; i<passlen ; i++){
    finalpass= finalpass + fullarr[Math.floor(Math.random()*fullarr.length)]
  }
  return finalpass
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
