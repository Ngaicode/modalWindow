"use strict";
// first we select the elements that we need then we store them inside variables,to make it easier for us to access them later and use them over and over again

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// the querySelectorAll() returns all the dom elements as a nodelist that match the specified selector
// to get the individual elements from the nodelist ,we have to loop over the nodelist since it typically functions like an array
const btnsOpenMOdal = document.querySelectorAll(".show-modal");
console.log(btnsOpenMOdal);
// looping through the nodeList to access the individual elements
for (let i = 0; i < btnsOpenMOdal.length; i++) {
  console.log(btnsOpenMOdal[i].textContent);
}
