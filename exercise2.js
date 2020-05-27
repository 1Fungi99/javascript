//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for (let i = 0; i < 10; i++) {
  console.log(" the value of i in the loop is : " + i);
}

//your code...
problem1 = () => {
  let i = 0;
  while (i < 10) {
    console.log("the value of i in the loop is: " + i);
    i++;
  }
};
/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement.
// Each individual operation needs to be a function expression.
// run all the functions after defining them, and print the answer to the console.

//your code...
let p2 = 0;
let p2Power = 10;

add = () => {
  p2 = p2 + 30 + 2;
  return p2;
};

multiply = () => {
  p2 = p2 * 20;
  return p2;
};

divide = () => {
  p2 = p2 / p2Power;
  return p2;
};

power = () => {
  p2Power = p2Power ** 2;
  return p2Power;
};

add();
multiply();
power();
divide();
console.log(p2);

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
p3 = () => {
  // values :
  // 20
  let val1 = 20;
  console.log(`${val1} is ${val1 ? true : false}`);

  // 0
  let val2 = 0;
  console.log(`${val2} is ${val2 ? true : false}`);

  // "zero";
  let val3 = "zero";
  console.log(`${val3} is ${val3 ? true : false}`);

  //const zero = 20;
  const val4 = 20;
  console.log(`${val4} is ${val4 ? true : false}`);

  // null
  let val5 = null;
  console.log(`${val5} is ${val5 ? true : false}`);

  // "0"
  let val6 = "0";
  console.log(`${val6} is ${val6 ? true : false}`);

  // !""
  let val7 = !"";
  console.log(`${val7} is ${val7 ? true : false}`);

  // {}
  let val8 = {};
  console.log(`${val8} is ${val8 ? true : false}`);

  // () => console.log("hello TEKcamp!");
  let val9 = () => console.log("hello TEKcamp!");
  console.log(`${val9} is ${val9 ? true : false}`);

  // 125
  let val10 = 125;
  console.log(`${val10} is ${val10 ? true : false}`);

  // undefined
  let val11 = undefined;
  console.log(`${val11} is ${val11 ? true : false}`);

  // ""
  let val12 = "";
  console.log(`${val12} is ${val12 ? true : false}`);
};

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = new Date().getDay();

switch (day) {
  case 0:
  case 6:
    console.log("It's a weekend!");
    break;
  case 1:
    console.log("we got a long week ahead of us...");
    break;
  case 2:
    console.log(
      "tuesday's are still beterr than mondays, but LONG way to go still"
    );
    break;
  case 3:
    console.log("We are smack dab in the middle of the week");
    break;
  case 4:
    console.log("Thursday night... the mood is right");
    break;
  case 5:
    console.log("TGIF.  Friday truly is the best day of the week!");
    break;
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;

age > 21 ? console.log("adult") : console.log("minor");
age > 13 && age < 19 ? console.log("teen") : console.log("Not a teenager");
age > 65 ? console.log("retired") : console.log("still working...");

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
let me = {
  name: "Justin Cheng",
  age: 21,
  gender: "male",
  hobbies: [
    "building computers",
    "gaming",
    "coding",
    "playing guitar",
    "playing bass",
  ],
  profession: "Cyber Security",
  education: "high school",
  learn: function () {
    return console.log("My name is: " + this.name);
  },
  myProfession: function () {
    return console.log("My desired profession: " + this.profession);
  },
};

me.learn();
me.myProfession();
/************************************************************* */
// Problem 7: Create an object literal that represents any object in the real world that you like.
//  Try to come up with a realistic set of properties and methods that would accurately describe that object.
//  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.

//your code...
let myComputer = {
  CPU: "Intel i7 7700k",
  cooling: "NZXT Kraken x62 AIO",
  motherboard: "GIGABYTE Gaming K7 Z270",
  GPU: "AORUS RTX 2080",
  case: "Lian-li O-11",
  RAM: "Team Dark 2x8 Gb",
  storage: [
    "Samsung 850 EVO 128 Gb",
    "Samsung 850 EVO 256 Gb",
    "Western Digital 1Tb HDD",
  ],
  computerSpecs: function () {
    return console.log(
      `This computer includes: a ${this.CPU}, a ${this.cooling}, a ${this.motherboard}, a ${this.GPU}, inside a ${this.case} case`
    );
  },
};

myComputer.computerSpecs();
/************************************************************* */
//Problem 8: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.
p8 = () => {
  return console.log(
    `"Strings", numbers, and {objects}. "Strings" since they are easy ways to manipulate sentences and verification. Numbers because I have used them way too much. {Objects} because of their capacity to store data.`
  );
};
//your code...

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.
//  This HOF should return another function fn(y) that takes another single parameter y.
//  This inner function should compute the product of it's parameter with the parameter passed into multiple.
//  Use this returned "first-class" function to compute triples of any given number.

//your code...

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.

//your code...
