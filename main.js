// Create a variable named myAge,
// and set it equal to your age as a number.

const myAge = 24;

// Create a variable named earlyYears and save the value 2 to it
let earlyYears = 2;

// Use the multiplication assignment operator to multiply the value saved to earlyYears
// by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

// take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years
// accounted for by your later years. Use the multiplication assignment
// operator to multiply and assign in one step.

laterYears *= 4;
//
// console.log(laterYears);
// console.log(earlyYears);

// Add earlyYears and laterYears together
// and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string, call its built-in method .toLowerCase()
// and store the result in a variable called myName.

let myName = "Eva".toLowerCase();
// console.log(myName)

//using string interpolation to display name and age in dog years
console.log(`My name ia ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);