let name = prompt("Hello,pleas enter your name for party")
let age = +prompt("Pleas,enter your age")
let gender = prompt("Pleas,enter your gender(m/w)")
if (age >= 18 && gender === "m") {
  console.log(`The information you entered has been verified and you are invited to the party Mr.${name}`);
} else if (age >= 18 && gender === "w") {
  console.log(`The information you entered has been verified and you are invited to the party Mrs.${name}`);
} else {
  console.log(`You are not invited to the party ${name}`);
}