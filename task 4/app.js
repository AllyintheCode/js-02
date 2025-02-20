let name = prompt("Hello,Pleas enter your name")
let gender = prompt("Pleas,enter your gender (M/W)")
if (gender = "m") {
  console.log(`Hello Mr.${name}`);
} else if (gender = "w") {
  console.log(`Hello Mrs.${name}`);
} else {
  console.log("Enter the correct information");
}