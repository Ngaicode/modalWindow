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
