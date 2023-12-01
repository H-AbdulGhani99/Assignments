// - **Scenario 1: Sum numbers**
//     - Write a function named **`add`** that takes two numbers as arguments and returns their sum.
function add(num1: number, num2: number): number {
  return num1 + num2; // Adding two numbers
}

console.log(add(12, 14)); // Calling function with parameters
console.log(add(97, 100));
console.log(add(3.2, 7.7));

// - **Scenario 2: Check Even or Odd**
//     - Develop a function **`checkEvenOrOdd`** that checks if a given number is even or odd.
//     - The function should take an integer as a parameter and return a string indicating whether the number is even or odd.

function checkEvenOrOdd(num1: number): string {
  let temp = Math.round(num1 % 2);
  if (temp == 0) {
    return `${num1} is Even`;
  } else {
    return `${num1} is Odd`;
  }
}

console.log(checkEvenOrOdd(20));
console.log(checkEvenOrOdd(11));
console.log(checkEvenOrOdd(2.2));
console.log(checkEvenOrOdd(33));

// - **Scenario 3: Calculate Area:**
//     - Create a function **`calculateArea`** that calculates the area of a rectangle.
//     - The function should take width and height as parameters and return the calculated area.

function calculateArea(length: number, width: number) {
  const rectangleArea: number = length * width;
  return rectangleArea;
}

console.log(calculateArea(2, 3));
console.log(calculateArea(12, 13));
console.log(calculateArea(4, 6));
console.log(calculateArea(9, 18));

// - **Scenario 4: String Reversal**
//     - Implement a function **`reverseString`** that reverses a given string.
//     - The function should take a string as a parameter and return the reversed string.
function reverseString(str: string): string {
  let reverseString: string = "";
  for (let count = str.length - 1; count >= 0; count--) {
    reverseString += str[count];
  }
  return reverseString;
}

console.log(reverseString("ABdul Ghani"));
console.log(reverseString("askdjfklasdf"));
console.log(reverseString("Vala"));
console.log(reverseString("eman"));

// - **Scenario 5: Temperature Conversion:**
//     - Create a function **`convertCelsiusToFahrenheit`** that converts temperature from Celsius to Fahrenheit.
//     // - The function should take a temperature value in Celsius as a parameter and return the equivalent temperature in Fahrenheit.

function convertCelsiusToFahrenheit(Celsius: number) {
  let Fahrenheit: number = (9 / 5) * Celsius + 32;
  return Fahrenheit;
}

console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(12));
console.log(convertCelsiusToFahrenheit(36));
console.log(convertCelsiusToFahrenheit(100));
