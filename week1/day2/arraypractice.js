// ARRAY
//   ├── map       → transform
//   ├── filter    → keep
//   ├── find      → first item
//   ├── findIndex → position
//   ├── includes  → exists?
//   ├── some      → at least one?
//   ├── every     → all?
//   ├── reduce    → many → one
//   ├── sort      → arrange (changes original)
//   ├── slice     → copy/section
//   └── concat    → combine
// callbacks
function greet(name) {
    console.log("Hello " + name);
}

function doSomething(call) {
    call("Favour");
}

//  .maps()
const products = [
    { name: "Laptop", price: 500000 },
    { name: "Phone", price: 200000 }
];

const names = products.map(product => product.name);

// .filter()
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

// .find() returns the first value found -- what
const num = [5, 10, 15, 20];

const result = num.find(number => number > 10);
let p = products.find(product => product.name === "Phone");

//  find index(),  --where,  returns -1 if not found

const index = num.findIndex(number => number === 15);

// .includes() if it exist in a list
const fruits = ["apple", "banana", "orange"];

// .some() if one or more is true return true
const nums = [2, 4, 6, 8];

const res = nums.some(number => number % 2 !== 0);

// .every() if all in the list is true

const rslt = nums.every(number => number % 2 === 0);
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
const words = ["I", "love", "JavaScript"];

// .reduce()
const sentence = words.reduce((result, word) => {
    return result + " " + word;
}, "");

// .sort()
const nom = ["Sarah", "Favour", "John"];

nom.sort();
//  .concat()
const fruit = ["apple", "banana"];
const vegetables = ["carrot", "tomato"];
const food = fruit.concat(vegetables);
console.log(food)
console.log(nom);
console.log(sentence);
console.log(total)
console.log(`.every() ${rslt}`);
console.log(`.some() ${res}`);
console.log(fruits.includes("banana"));
console.log(index);
console.log(p)
console.log(result);
doSomething(greet);
console.log(names)
console.log(evenNumbers);