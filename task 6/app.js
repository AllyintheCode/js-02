let square = +prompt("Enter square of the house")
let price = +prompt("Enter the price")
let currency = prompt("Enter money currency (usd/azn/rub)")
if (square > 2000 && price === 99999 && currency === "azn") {
  console.log("I buy the house");
} else {
  console.log("I am not a realtor, I do not buy houses");
}