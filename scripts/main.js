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
console.log(favTools);

console.group("PART 2: Default Exports and Imports");
console.log("1. Imported default with fave tools:", favTools);
console.table(favTools);
console.groupEnd();
