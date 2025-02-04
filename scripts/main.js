// Using the Axios ES6 Module

// Q2. In your main.js file, import the default export from /libs/axios.js and give it the name axios using the ES6 module import syntax. ~ Slide 23
// Q3. Don’t forget: when importing local modules, you must put a ./ in front of the package name in your import statement and .js at the end of the filename
import axios from "./libs/axios.js";

// Q4. Query for the DOM element with class="dog-image" and save it to a variable
const dogImage = document.querySelector(".dog-image");

// Q5. Make a get request to https://random.dog/woof.json?filter=mp4,webm using the default axios export you imported earlier
// Slide 16 Ex) axios.get('http://domain.com/api')
// Q6. After fetching the data from the Random Dog API, set the src attribute of dog image element to the value of the url property in the API response
//
axios.get("https://random.dog/woof.json?filter=mp4,webm").then((response) => {
  const randomDog = response.data.url;
  dogImage.src = randomDog;
});

// -=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// PART 2: Creating Your Own ES6 Module
// PART 2a: Default Exports and Imports

// Q3...import the default export from your toolbelt.js module. You will have to choose a name for it when you import it. Try printing the value that you imported using console.log. Confirm that it is the same array of tool names that you exported from your module! - slide 24 - 26
import favTools from "./utils/toolbelt.js";

console.group("PART 2a: Default Exports and Imports");
console.log("1. Imported default with fave tools:", favTools);
console.table(favTools);
console.groupEnd();

// PART 2b: Named Exports and Imports
// Q1. Augment your original ‘toolbelt’ import statement so that you are also importing the two named exports we just created
import favToolsImport, { construction, business } from "./utils/toolbelt.js";

console.group("PART 2b: Named Exports and Imports");

// Log the imported values to check if everything is working correctly
console.log("Import all defaults:");
console.log("1. favToolsImport:", favToolsImport);
console.table(favToolsImport);

// Q2. Try calling the construction() function to confirm that it was imported correctly. You should see 'CLANG!' printed to the console
console.log("2. Construction function:");
construction();

// Q3. Use console.log() to print the named 'business' import that you just imported. Confirm that it was imported correctly by viewing it printed in the console
console.log("3. Business Object:");
console.table(business);

console.groupEnd();

// PART 2c: RENamed Exports and Imports
import favToolsImportRENAMED, {
  construction as constructionRenamed,
  business as businessRenamed,
} from "./utils/toolbelt.js";

console.group("PART 2c: RENamed Exports and Imports");

console.log("Import all RENAMED defaults:");
console.log("1. favToolsImportRENAMED:", favToolsImportRENAMED);
console.table(favToolsImportRENAMED);

console.log("2. constructionRenamed function:");
constructionRenamed();

console.log("3. businessRenamed Object:");
console.table(businessRenamed);
console.groupEnd();

// Q5. Try using destructuring on the 'business' object you imported, to concisely pull out the values into individual variables
let { name, address, phone } = businessRenamed;
console.group("PART 2d: Destructuring imported objects:");
console.log("Name of business:", name);
console.groupEnd();
