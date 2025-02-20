let height = +prompt("Welcome BMI calculator pleas, enter your height")
let weight = +prompt("Pleas,enter your weight")
let BMI = (weight / (height * height))
if (BMI < 18.5) {
  console.log(`Your BMI ${BMI} is little,your Skinny`);
} else if (BMI < 25 && BMI > 18.5) {
  console.log(`Your BMI is ${BMI} normal,your Normal`);
} else if (BMI < 30 && BMI > 25) {
  console.log(`Your BMI is ${BMI} high,your Obese`);
} else {
  console.log("your obese");
}
