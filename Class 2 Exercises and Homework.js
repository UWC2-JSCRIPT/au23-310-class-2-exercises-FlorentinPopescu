// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

let selfRepresentation = {
  
  firstName: "Florentin",
  lastName: "Popescu",
  'favorite food': "Pizza",

  bestFriend: {
    firstName: "Gonzo",
    lastName: "The Cat", 
    'favorite food': "Asorted treats"
  }
}

console.log('Type of selfRepresentation: ', typeof selfRepresentation);
console.log('View selfRepresentation:\n', JSON.stringify(selfRepresentation, null, 4));

// 2. console.log best friend's firstName and your favorite food
console.log("Florentin's best friend's firstName: ", selfRepresentation.bestFriend.firstName);
console.log("Florentin's favorite food: ", selfRepresentation['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let ticTacToe = [
  ["-", 0, "-"], 
  ["-", "X", 0], 
  ["X", "-", "X"]
];

console.table(ticTacToe);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = 0;
ticTacToe[0][1] = "-";

// 5. Log the grid to the console.
console.table(ticTacToe);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const validateEmail = (email) => {
  "use strict";
  let re = /\S+@\S+\.\S+/i;

  if (typeof email === 'string' || email instanceof String) {
    if (typeof re.exec(email) != 'undefined') {
      return re.exec(email)
    } else {
      return null;
    };
  } else {
    return null; 
  }
}

let myEmail = "foo\@bar.baz";

if (validateEmail(myEmail)) {
  console.log(`${myEmail} is a valid email`);
} else {
  console.log(`${myEmail} is invalid`);
}


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const convertToDate = (str) => {
  "use strict";
  let re = /(\d{1})\/(\d{1})\/(\d{4})/;
  
  if (typeof str === 'string' || str instanceof String) {
    return new Date(str.replace(re, '$3-$2-$1'));
  } else {
    return null; 
  }
}
 
let assignmentStringDate = '1/21/2019';
let assignmentDate = convertToDate(assignmentStringDate);

console.log('assignment date: ', assignmentDate.toDateString());

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
//let dueDate = new Date();

let dueDate = new Date(assignmentDate.setDate(assignmentDate.getDate() + 7));
console.log('due date: ', dueDate.toDateString());

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
let months = ['January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August', 'September',
              'October', 'November', 'December'];

let days = ['Sunday','Monday','Tuesday','Wednesday',
            'Thursday','Friday','Saturday'];

const addZero = (n) => {
  "use strict";
  return n.toString().length == 1 ? n = '0' + n : n;
}

let yyyy = dueDate.getFullYear();
let mm = addZero(dueDate.getMonth() + 1);
let dd = addZero(dueDate.getDate());
let yyyy_mm_dd = yyyy + "-" + mm + "-" + dd;

let mFull = months[dueDate.getMonth()];
let dFull =  days[dueDate.getDay()];

let htmlTimeTag = `<time datetime="${yyyy_mm_dd}">${mFull} ${dFull}, ${yyyy}</time>`;

// 10. log this value using console.log
console.log('expected html format: ', '<time datetime="YYYY-MM-DD">Month day, year</time>');
console.log('actual html format: ', htmlTimeTag);
