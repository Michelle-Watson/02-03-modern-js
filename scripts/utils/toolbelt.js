// PART 2: Creating Your Own ES6 Module
// PART 2a: Default Exports and Imports
// Q1. Open a file called toolbelt.js in the scripts/utils directory
// Q2. Create an array of strings that contains all your favorite household tools (feel free to use emojis!), and use the export default syntax to make that value the default export of your module

const favTools = ["hammer 🔨", "screwdriver 🪛", "wrench 🔧"];
export default favTools;

// PART 2b: Named Exports and Imports
// Q1. Create a named function called construction(). All this function should do is console.log the string 'CLANG!'
// slide 27
// Q2. Export this function as a named export
export function construction() {
  console.log("CLANG!");
}

// Q3. Create an object called 'business' to describe the properties of your construction business. It should have key-value pairs for your business name, address, and phone number
// Q4. Export this 'business' object as a named export
export let business = {
  name: "ABC Company",
  address: "Toronto, ON",
  phone: "416-123-1234",
};
