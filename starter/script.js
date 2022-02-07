"use strict";
// first we select the elements that we need then we store them inside variables,to make it easier for us to access them later and use them over and over again

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// ---MAJOR--- adding or removing classes allows us to activate and deactivate css style properties,hence allowing us to change the appearance of a web page

// function that opens the modal window and displays the overlay
const openModal = function () {
  // the classList property returns a collection of the class attributes of the element.It is a read-only property
  // Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function that closes the modal window and hides the overlay
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// the querySelectorAll() returns all the dom elements as a nodelist that match the specified selector
// to get the individual elements from the nodelist ,we have to loop over the nodelist since it typically functions like an array
const btnsOpenMOdal = document.querySelectorAll(".show-modal");

// looping through the nodeList to access the individual elements
for (let i = 0; i < btnsOpenMOdal.length; i++) {
  btnsOpenMOdal[i].addEventListener("click", openModal);
}

// adding the classes back when the modal window is closed
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// HANDLING KEYPRESS EVENTS
// javascript creates an object that stores all the information concerning a particular keypress event
// we use the .key property to check for the type of key pressed
document.addEventListener("keydown", function (event) {
  // logging to the console to check for the key that was pressed
  console.log(event.key);
  // closes the modal window if the Escape key is pressed
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    // we only want to close the modal window if it is open,ie when it doesn't contain the hidden class
    // the contains() method returns a boolean
    closeModal();
  }
});
