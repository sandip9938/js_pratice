//-----DOM-----
/* 
When Web Page is loaded, the browse creates a Document Object Model of the page .  
The DOM is a programming interface for web documents.
It represents the structure of the document and allows you to manipulate the content and structure of a document.

*/
// Accessing Elements in the DOM
let myHead = document.head;
console.log(myHead); //Hitting Head
let myBody = document.body;
console.log(myBody); // Hitting Body
let myTitle = document.title;
console.log(myTitle); // Hitting Tittle
let myParagraph = document.querySelector("p");
console.log(myParagraph); // Hitting Paragraph
let allPElements = document.getElementsByTagName('p');
console.log(allPElements); // Hitting Elements


// Manipulating elements in the DOM
document.getElementById("demo").innerHTML = "Hello World!";

// Creating new HTML element and appending to body
var para1 = document.createElement("p");
para1.textContent = "This is a paragraph.";
document.body.appendChild(para1);

// Removing an existing element from the DOM
document.body.removeChild(para1);

// Adding event listener
document.addEventListener("click", function (event) {
    console.log(event);
});

// Event Handling
function handleClick() {
    alert("You clicked me!");
    }
    document.getElementById("demo").onclick = handleClick();




