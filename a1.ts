import inquirer from "inquirer";
import promptSync from "prompt-sync";
let groceriesPrices = [200, 150, 120, 30, 80, 300, 220];
const fruitPrices = [200, 150, 120, 30, 80, 300, 220];
const vegetablePrices = [200, 150, 120, 30, 80, 300, 220];
let items: string[] = [];
let itemPrices: number[] = [];
const fruits = [
  "Mango",
  "Apple",
  "Peech",
  "Grapes",
  "WaterMelon",
  "Guava",
  "Cherry",
];
const vegetables = [
  "Potato",
  "Tomato",
  "Cabbage",
  "Carrot",
  "Brinjal",
  "Garlic",
  "Lady finger",
];
const Groceries = ["Bread", "Egg", "Grains", "Meat", "Cheese", "Fish", "Pasta"];
function line(): void {
  console.log("******************************");
  console.log("******************************");
}
let count = 0;
function showmenu(): void {
  console.log("1.For Fruits");
  console.log("2.For Vegetables");
  console.log("3.For Groceries");
  console.log("4.To Exit and Print Bill");
}
async function menuProcessing() {
  let getinput;
  do {
    showmenu();
    getinput = await takingUserInput();
    if (getinput == 1) {
      await fruitsProcessing();
    }
    if (getinput == 2) {
      await vegetableProcessing();
    }
    if (getinput == 3) {
      await groceriesProcessing();
    }
    if (getinput == 4) {
      generateBill();
      process.exit();
    }
  } while (!(getinput == 4)); // to make the loop running
}
function showingAllFruits(): void {
  line();
  console.log("S.R\t\tFruits \t\t Prices");
  line();
  for (let count = 0; count < fruits.length; count++) {
    console.log(`${count + 1}.\t\t${fruits[count]}\t\t${fruitPrices[count]}`);
  }
}
function showingAllVegetables(): void {
  line();
  console.log("S.R\t\tVegetables \t\t Prices");
  line();
  for (let count = 0; count < vegetables.length; count++) {
    console.log(
      `${count + 1}.\t\t${vegetables[count]}\t\t${vegetablePrices[count]}`
    );
  }
}
function showingAllGrocereies(): void {
  line();
  console.log("S.R\t\tGroceries \t\t Prices");
  line();
  for (let count = 0; count < Groceries.length; count++) {
    console.log(
      `${count + 1}.\t\t${Groceries[count]}\t\t${groceriesPrices[count]}`
    );
  }
}
// for Taking Input
async function takingUserInput() {
  let input;
  do {
    input = await inquirer.prompt([
      {
        name: "userInput",
        type: "number",
        message: "Enter the Serial numbers to select one item ",
      },
    ]);
    let userinput;
    if (validateinput(input.userInput)) {
      userinput = parseInt(input.userInput);
      return userinput;
    } else {
      console.log("You Entered the Wrong number");
    }
  } while (!validateinput(input.userInput));
}
function validateinput(input: any) {
  //This function is used for validating inputs
  if (isNaN(input) || input <= 0) {
    return false;
  } else {
    return true;
  }
}
function addtoCart(selection: number, getinput: number): void {
  //This function add the items in the cart
  if (getinput == 1) {
    itemPrices.push(fruitPrices[selection]);
    items.push(fruits[selection]);
  } else if (getinput == 2) {
    itemPrices.push(vegetablePrices[selection]);
    items.push(vegetables[selection]);
  } else if (getinput == 3) {
    itemPrices.push(groceriesPrices[selection]);
    items.push(Groceries[selection]);
  }
}
function generateBill() {
  //This function generate a bill for all items
  let sum: number = 0;
  if (items.length == 0) {
    console.log("No Item Selected ");
  } else {
    console.log(`S.R \t\t Items  \t\t Price `);
    for (let iterator = 0; iterator < items.length; iterator++) {
      console.log(
        `${iterator + 1} \t\t ${items[iterator]}  \t\t ${itemPrices[iterator]}`
      );
      sum += itemPrices[iterator];
    }
    console.log(`\t\t\t\t\tTotal : ${sum}`);
    if (sum > 2000) {
      let discount = (sum / 100) * 5; // Calculating Discount
      console.log(`\t\t\t\t\tDiscount : ${discount}`);
      console.log(`\t\t\t\t\tTotal : ${sum - discount}`);
    }
    paymentMethod();
  }
}
async function fruitsProcessing() {
  do {
    const constant = 1;
    showingAllFruits();
    let selection: number = Number(await takingUserInput());
    selection--;
    if (selection > 1 && selection <= fruits.length) {
      console.log(`${fruits[selection]} is added to the cart`);
      addtoCart(selection, constant);
    } else {
      console.log("Only Enter the given Serial numbers");
    }
  } while (asking() == true);
}
async function vegetableProcessing() {
  do {
    const constant = 2;
    showingAllVegetables();
    let selection = Number(await takingUserInput());
    selection--;
    if (selection > 1 && selection <= fruits.length) {
      console.log(`${vegetables[selection]} is added to the cart`);
      addtoCart(selection, constant);
    } else {
      console.log("Only Enter the given Serial numbers");
    }
  } while (asking() == true);
}
async function groceriesProcessing() {
  do {
    const constant = 3;
    showingAllGrocereies();
    let selection = Number(await takingUserInput());
    selection--;
    if (selection > 1 && selection <= fruits.length) {
      console.log(`${Groceries[selection]} is added to the cart`);
      addtoCart(selection, constant);
    } else {
      console.log("Only Enter the given Serial numbers");
    }
  } while (asking() == true);
}
function getStringInput() {
  const prompt = promptSync();
  let name = prompt("Enter yes or no (y/n) ");
  return name;
}
function paymentMethod() {
  let payment = ["Online", "Cash on Delivery", "Card"];
  let onlineMethods = ["Mobile App", "EasyPaisa", "JazzCash"];
  let Cards = ["Visa Card", "Master Card ", "Debit Card", "Credit Card"];

  for (let count: number = 0; count < payment.length; count++) {
    console.log(`Do you pay by ${payment[count]} method `);
    let temporary = asking();
    if (temporary == true && payment[count] == "Online") {
      for (let counter in onlineMethods) {
        console.log(`Do you pay by ${onlineMethods[counter]}`);
        let question = asking();
        if (question == true) {
          console.log(
            `Thank You for using ${payment[count]} Payment method using ${onlineMethods[counter]}`
          );
          return;
          // bool = true;
        }
      }
    }

    if (temporary == true && payment[count] == "Card") {
      for (let counter in Cards) {
        console.log(`Do you pay by ${Cards[counter]}`);
        let question = asking();
        if (question == true) {
          console.log(
            `Thank You for using ${payment[count]} Payment method using ${Cards[counter]}`
          );
          return;
        }
      }
    }
    if (temporary == true && payment[count] == "Cash on Delivery") {
      console.log(`Thank you for using for using ${payment[count]} method`);
      return;
    }
  }
}
function asking() {
  let count: number;
  do {
    let isContinue: string = String(getStringInput());
    count = 0;
    if (isContinue == "yes" || isContinue == "y") {
      return true;
    }
    if (isContinue == "n" || isContinue == "no") {
      return false;
    } else {
      console.log("Wrong Value");
    }
  } while (count == 0);
}
line();
console.log(`Welcome to Shopping Simulation`);
line();
menuProcessing();
