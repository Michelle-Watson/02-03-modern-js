# Lab: Modern JavaScript Features

In this lab we are going to practice using the JavaScript module system within our project. We will try importing an external library. We will also create our own JS module so that we can also try exporting values from custom modules.

## Getting Started

1.  Download the starter code from [here](./modern-js-starter-code/)

## Using the Axios ES6 Module

In this step we will be using the axios library that is exported using JS Modules syntax.

1.  Inside `index.html` file, make sure to add `type="module"` to the script tag for `main.js` to enable the use of JS Modules
2.  In your `main.js` file, import the default export from `/libs/axios.js` and give it the name `axios` using the ES6 module import syntax.
3.  **Don’t forget:** when importing local modules, you must put a `./` in front of the package name in your import statement and `.js` at the end of the filename
4.  Query for the DOM element with `class="dog-image"` and save it to a variable
5.  Make a `get` request to `https://random.dog/woof.json?filter=mp4,webm` using the default `axios` export you imported earlier
6.  After fetching the data from the Random Dog API, set the `src` attribute of dog image element to the value of the `url` property in the API response

## Creating Your Own ES6 Module

Now it’s time to create our own module! Here we will practice exporting from our own custom module, and importing values into our `main.js file`. We will be making a toolbelt module for a construction business

### Default Exports and Imports

1.  Open a file called `toolbelt.js` in the `scripts/utils` directory
2.  Create an array of strings that contains all your favorite household tools (feel free to use emojis!), and use the `export default` syntax to make that value the default export of your module
3.  In your main.js file, import the default export from your `toolbelt.js` module. You will have to choose a name for it when you import it. Try printing the value that you imported using `console.log`. Confirm that it is the same array of tool names that you exported from your module!

### Named Exports and Imports

In `toolbelt.js`:

1.  Create a named function called `construction()`. All this function should do is `console.log` the string 'CLANG!'
2.  Export this function as a named export
3.  Create an object called ‘business‘ to describe the properties of your construction business. It should have key-value pairs for your business name, address, and phone number
4.  Export this ‘business‘ object as a named export

In `main.js`:

1.  Augment your original ‘toolbelt’ import statement so that you are also importing the two named exports we just created
2.  Try calling the `construction()` function to confirm that it was imported correctly. You should see 'CLANG!' printed to the console
3.  Use `console.log()` to print the named 'business' import that you just imported. Confirm that it was imported correctly by viewing it printed in the console
4.  Try using the `import {<export name> as <new name>}` syntax to rename one of the named imports to a different name
5.  Try using destructuring on the 'business' object you imported, to concisely pull out the values into individual variables

### Bonus: Importing All Named Exports

In `main.js`:

1.  Momentarily comment out your toolbelt import statement
2.  Write another import statement that uses the \* syntax to import all named imports from your toolbelt module and place them into a variable

    - **_Hint:_** use the `import * as <variable name>` syntax to store all the named imports into a variable
