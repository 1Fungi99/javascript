//Complete the following problems:

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius.
// Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit.

//your code...
// Part 1
/************************************************************* */
FtC = (ftc) => {
  var ftcFinal;
  console.log("Fahrenheit input: " + ftc + " degrees");
  // Equation
  ftcFinal = (5 * (ftc - 32)) / 9;
  console.log("Celsius output: " + ftcFinal.toFixed(2) + " degrees");
};
/************************************************************* */

// Part 2
/************************************************************* */
CtF = (ctf) => {
  var ctfFinal;
  console.log("Celsius input: " + ctf + " degrees");
  // Equation
  ctfFinal = ctf * 1.8 + 32;
  console.log("Fahrenheit output: " + ctfFinal.toFixed(2) + " degrees");
};
/************************************************************* */

/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote.
// Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...
ageDetermination = (age) => {
  age >= 18 ? console.log("yes") : console.log("no");
};
/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings.
// (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...
var finish = "";
var array = [];
var string = "The five boxing wizards jump quickly";
array = string.split(" ");
finish = array.join(" ");
/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number.
// Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
telephoneNumber = 1234567890;
telephoneNumber_array = [];
telephoneNumber_string = telephoneNumber.toString();
telephoneNumber_array = telephoneNumber_string.split();
telephoneNumber_array = telephoneNumber_array.reverse().join("");

/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car.
// Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...
carDetails = (year, color, make, model) => {
  this.year = year;
  this.color = color;
  this.make = make;
  this.model = model;
};

var myCar = new carDetails(2017, "Midnight Blue", "Toyota", "Prius");

getCar = (myCar) => {
  console.log(myCar.year);
  console.log(myCar.color);
  console.log(myCar.make);
  console.log(myCar.model);
};
/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15.
// Each iteration, the for loop will check if the current number is odd or even and display the output.

//your code...
let numArray = [];
for (var i = 0; i < 15; i++) {
  if (i % 2 == 0) console.log("even");
  else console.log("odd");
}
/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100.
// For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
TEKcamp_loop = () => {
  for (var i = 0; i < 100; i++) {
    if (i % 15 == 0) console.log("TEKcamp");
    else if (i % 3 == 0) console.log("TEK");
    else if (i % 5 == 0) console.log("camp");
  }
};
/************************************************************* */
// Problem 8:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
problem8 = (array) => {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0) console.log(nums[i]);
  }
};
/************************************************************* */

// Problem 9:
const foodArray = [
  "potatoes",
  "tamales",
  "lemon",
  "strawberries",
  "chocolate",
  "pudding",
  { school: "TEKcamp" },
];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [
  "salty",
  "spicy",
  "sour",
  "sweet",
  "rich",
  "creamy",
  "amazing",
];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".
problem9 = () => {
  for (var i = 0; i < foodArray.length; i++) {
    if (i == 6) console.log(foodArray[i].school + " is " + adjectiveArray[i]);
    else if (foodArray[i].includes("s")) {
      console.log(foodArray[i] + " are " + adjectiveArray[i]);
    } else console.log(foodArray[i] + " is " + adjectiveArray[i]);
  }
};

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.
// Put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.
//  the doMath() function should print out what mathematical function was carried out.
//  The doMath() function should return the computed value of any operation performed.
const operations = ["add", "subtract", "multiply", "divide"];

function doMath(random, x, y) {
    switch (random) {
      case 0:
        console.log(operations[random]);
        var value=x+y;
        console.log(value);
        break;
      case 1:
        console.log(operations[random]);
        var value=x-y;
        console.log(value);
        break;
      case 2:
        console.log(operations[random]);
        var value=x*y;
        console.log(value);
        break;
      case 3:
        console.log(operations[random]);
        var value=x/y;
        console.log(value);
        break;
      default:
      console.log("error");
      break;
    }
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
