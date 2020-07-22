//Complete the following problems:

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false.

//your code...
check = () => {
  "" ? console.log("Problem 1: false") : console.log("Problem 1: true");
};
/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!).

//your code...
replace = () => {
  const p2 = "Javascript is fun!";
  const p2_split = p2.split(" ");
  let p2_array = [];
  p2_split.forEach((element) => {
    element.includes("Javascript") ? (element = "Python") : (element = element);
    p2_array.push(element);
  });

  console.log(`Problem 2: ${p2_array.join(" ")}`);
};
/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array.
// Use an arrow function and one of the built-in array methods.

//your code...
square = () => {
  const p3_array = [1, 2, 3, 4, 5];
  let p3_array_final = [];
  p3_array.forEach((element) => {
    p3_array_final.push(element ** 2);
  });

  console.log(`Problem 3: ${p3_array_final}`);
};

/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5.
// Write a JavaScript program that returns an array of the numbers that are greater than 3.
// Use an arrow function and one of the built-in array methods.

//your code...
filter = () => {
  const p4_array = [1, 3, 5, 7, 9, 1, 3, 5];
  let p4_final_array = [];
  p4_array.forEach((element) => {
    element > 3 ? p4_final_array.push(element) : (element = element);
  });

  console.log(`Problem 4: ${p4_final_array}`);
};
/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers.
// Write a JavaScript program that returns the sum of those numbers.
// Use an arrow function and one of the built-in array methods.

//your code...
spread = () => {
  add_five_numbers = (a, b, c, d, e) => {
    return a + b + c + d + e;
  };

  const p5_array = [10, 68, 57, 48, 26];
  const p5_sum = add_five_numbers(...p5_array);

  console.log(`Problem 5: ${p5_sum}`);
};
/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A.

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand.
// For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].

//your code...

banana = () => {
  // RNA strand example from a banana, fun fact
  const RNA_string = [
    "G",
    "C",
    "U",
    "A",
    "C",
    "G",
    "G",
    "A",
    "G",
    "C",
    "U",
    "U",
    "C",
    "G",
    "G",
    "A",
    "G",
    "C",
    "U",
    "A",
    "G",
  ];

  let RNA_other_string = [];

  RNA_string.forEach((e) => {
    if (e === "G" || e === "g") {
      RNA_other_string.push("C");
    } else if (e === "C" || e === "c") {
      RNA_other_string.push("G");
    } else if (e === "T" || e === "t") {
      RNA_other_string.push("A");
    } else {
      RNA_other_string.push("T");
    }
  });
};
/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.
//  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.
const numbers = [
  2,
  23,
  1,
  2,
  1,
  1,
  1,
  2,
  2.5,
  20,
  200,
  2000,
  ,
  { k: 1 },
  20000,
  19999,
  1878,
  140,
  23,
  4,
  "sk",
  true,
  true,
  "true-dat",
  "nice",
  "one",
  "two",
  "three",
  "3",
  "tea",
  [],
];

maxNumber = (numbers) => {
  //your code...
  let num_array = [];
  numbers.forEach((e) => {
    if (e === "one") e = 1;
    else if (e === "two") e = 2;
    else if (e === "3") e = 3;
    else if (e === "three") e = 3;

    if (typeof e === "number") num_array.push(e);
  });

  return Math.max(...num_array);
};

maxNumber(numbers);

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

sortNums = (num_array, desc = false) => {
  //your code...
  let newArray = num_array.sort(function (a, b) {
    return b - a;
  });
  console.log(newArray);
};

/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.
//  The key is the example data type, and the value is the name of the data type.
//  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({ company: "TEKsystems" }, "object");

console.log(mapObj.has({ company: "TEKsystems" }));

//The above console.log() statement returns false.
//Write another console.log() statement explaining why this line of code prints false.
//Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
const mapObj = new Map();
let obj = { company: "TEKsystems" };
let int = 123;
let string = "words";
let boolean = true;
let float = 12.12
mapObj.set(obj, "object");
mapObj.set(int, "integer");
mapObj.set(string, "string");
mapObj.set(boolean, "boolean");
mapObj.set(float, "float");

console.log("No direct reference");
console.log(mapObj.has(obj));

let value_array=[]
mapObj.forEach((x,y)=>{
  value_array.push(x)
})

console.log(value_array);

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.
//Use array methods to do this.  Example output : ['string',number','boolean',array','object']
loop = () => {};
/************************************************************* */
//Problem 9:

let ones = [
  1,
  11,
  111,
  1111,
  11111,
  111111,
  1111111,
  11111111,
  111111111,
  1111111111,
];
//reverse the array, without modifying the ones array.

const twos = ones;
console.log(twos.reverse());

/************************************************************* */
//Problem 10:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
  //code goes here
  cb();
  console.log(cb());
}
function func() {
  let str = "Hello World!";
  return str;
}
performer(func);
/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
