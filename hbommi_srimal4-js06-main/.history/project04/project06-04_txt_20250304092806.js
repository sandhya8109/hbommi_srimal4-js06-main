"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-04.js
*/

"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph to display the selected vehicle
let vehicle = document.getElementById("vehicle");

// Function to filter dropdown options
function filterSelect(selectList, category) {
   for (let option of selectList.options) {
      if (option.classList.contains(category) || option.value === "Select Model" || option.value === "Select Trim") {
         option.hidden = false;
      } else {
         option.hidden = true;
      }
   }
   selectList.selectedIndex = 0; // Reset selection
}

// Function to show all options
function showAll(selectList) {
   for (let option of selectList.options) {
      option.hidden = false;
   }
   selectList.selectedIndex = 0; // Reset selection
}

// Event handler to modify the Model selection list when Make changes
make.onchange = function() {
   let makeCategory = make.value;
   if (makeCategory === "Select Make") {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }
   showAll(trim); // Reset trim selection when Make changes
};

// Event handler to modify the Trim selection list when Model changes
model.onchange = function() {
   let modelCategory = model.value;
   if (modelCategory === "Select Model") {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }
};

// Event handler to display selected vehicle
selectVehicle.onclick = function() {
   let selectedMake = make.value;
   let selectedModel = model.value;
   let selectedTrim = trim.value;

   if (selectedMake !== "Select Make" && selectedModel !== "Select Model" && selectedTrim !== "Select Trim") {
      vehicle.textContent = `You selected: ${selectedMake} ${selectedModel} - ${selectedTrim}`;
   }
};
