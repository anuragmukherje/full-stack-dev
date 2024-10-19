// When a web page is loaded, the browser creates a Document Object Model of the page.
// In the browser, the document object is a fundamental part of the Document Object Model (DOM). 
// It represents the web page currently loaded in the browser and provides a way to 
// interact with and manipulate its content.

// The DOM abstracts the structure of the document into a tree of objects, allowing scripts to 
// manipulate the content and structure dynamically. 
// This abstraction enables more complex interactions and functionalities beyond just static HTML.


// console.log(document);
// console.log(document.head);
// console.log(`title is : ${document.title}`);

// console.log(document.body);
// console.log(document.documentURI);




// ACCESSING THE DOM
//****** DOM SELECTORS *******
// // 1. getElementsByTagName
// console.log(document.getElementsByTagName("h1"));

// // 2. getElementById
// console.log(document.getElementById("main"));

// // 3. getElementsByClassName
// console.log(document.getElementsByClassName("cls"));
// console.log(document.getElementsByClassName("cls-1"));

// // 4. querySelector
// console.log(document.querySelector("h1"));         // For TagName

// console.log(document.querySelector(".cls"));       // For ClassName
// console.log(document.querySelector(".cls-1"));     // For className

// console.log(document.querySelector("#main"));      // For Id
// console.log(document.querySelector("#id-1"));      // For Id

// // 5. querySelectorAll

// console.log(document.querySelector("h1"));
// console.log(document.querySelectorAll("h1"));

// console.log(document.querySelectorAll("li"));

