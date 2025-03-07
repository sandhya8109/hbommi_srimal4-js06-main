"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: 
      Date:   

      Filename: project06-03.js
*/

document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("billShip");
   const errorBox = document.getElementById("errorBox");
   const errorMessage = document.createElement("p");

   errorMessage.textContent = "Complete all highlighted fields when the user doesn't fill in the details.";
   errorMessage.style.color = "red";
   errorMessage.style.fontWeight = "bold";
   errorMessage.style.textAlign = "center";
   errorMessage.style.marginTop = "20px";
   errorMessage.style.display = "none"; // Initially hidden
   document.body.appendChild(errorMessage); // Append it to the bottom of the page

   form.addEventListener("submit", function (event) {
       let isValid = true;
       let firstInvalidField = null;

       // Reset previous error messages and styles
       errorBox.textContent = "";
       errorBox.style.color = "red";
       errorBox.style.fontWeight = "bold";
       errorMessage.style.display = "none"; // Hide bottom message initially

       // Select all required input fields
       const requiredFields = form.querySelectorAll("input[required]");

       requiredFields.forEach((input) => {
           if (!input.value.trim()) {
               isValid = false;
               input.style.border = "2px solid red"; // Highlight required fields
               if (!firstInvalidField) firstInvalidField = input;
           } else {
               input.style.border = ""; // Reset border if filled
           }
       });

       if (!isValid) {
           event.preventDefault(); // Stop form submission
           errorBox.textContent = "Complete all highlighted required fields.";
           alert("Complete all highlighted required fields!"); // Show alert popup
           firstInvalidField.focus(); // Focus on first invalid field
           errorMessage.style.display = "block"; // Show message at the bottom
       }
   });
});
