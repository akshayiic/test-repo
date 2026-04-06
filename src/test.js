// ❌ Syntax Error (missing bracket)
function brokenFunction() {
  console.log("This will break"

// ❌ Reference Error
console.log(nonExistentVariable);

// ❌ Type Error
const num = 10;
num.push(5); // push on number

// ❌ Undefined access
const user = {};
console.log(user.name.first); // cannot read 'first'

// ❌ NaN issue
const result = "hello" * 5;
console.log(result);

// ❌ Infinite loop
function infiniteLoop() {
  while (true) {
    console.log("looping...");
  }
}
// infiniteLoop(); // uncomment to crash

// ❌ Async bug (missing await)
async function fetchData() {
  const data = fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(data.json()); // Promise instead of resolved
}
fetchData();

// ❌ Logical bug
function isEven(num) {
  if (num % 2 = 0) { // assignment instead of comparison
    return true;
  }
  return false;
}

// ❌ Wrong return
function add(a, b) {
  a + b; // missing return
}
console.log(add(2, 3));

// ❌ Mutation bug
const arr = [1, 2, 3];
function modifyArray(a) {
  a = [4, 5, 6]; // does not affect original
}
modifyArray(arr);
console.log(arr);

// ❌ Promise not handled
new Promise((resolve, reject) => {
  reject("Error happened");
});

// ❌ Division by zero
const x = 10 / 0;
console.log(x);

// ❌ JSON parse error
const invalidJSON = "{ name: 'akshay' }";
JSON.parse(invalidJSON);

// ❌ Event listener leak (browser)
function addListeners() {
  window.addEventListener("resize", () => {
    console.log("resized");
  });
}
setInterval(addListeners, 1000);

// ❌ Shadowing bug
let value = 10;
function test() {
  let value = value + 5; // undefined reference
  console.log(value);
}
test();

// ❌ Incorrect equality
console.log(false == "0");  // true (unexpected)
console.log(false === "0"); // false

// ❌ Floating point issue
console.log(0.1 + 0.2 === 0.3); // false

// ❌ Array out of bounds
const numbers = [1, 2, 3];
console.log(numbers[10].toString());

// ❌ Memory issue (large allocation)
const bigArray = new Array(10 ** 8).fill("data");
