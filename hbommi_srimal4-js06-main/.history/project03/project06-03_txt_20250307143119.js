"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: 
      Date:   

      Filename: project06-03.js
*/document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("billShip");
   const errorBox = document.getElementById("errorBox");

   form.addEventListener("submit", function (event) {
       let isValid = true;
       let firstInvalidField = null;

       // Remove previous error styles
       errorBox.textContent = "";
       errorBox.style.color = "red";
       errorBox.style.fontWeight = "bold";

       document.querySelectorAll("#billShip input[required]").forEach((input) => {
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
       }
   });
});
