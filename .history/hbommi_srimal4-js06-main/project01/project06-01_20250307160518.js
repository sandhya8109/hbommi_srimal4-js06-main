"use strict";
/*    
   JavaScript 7th Edition
   Chapter 6
   Project 06-01

   Project to validate a form used for setting up a new account
   Author: [Your Name]
   Date: [Current Date]

   Filename: project06-01.js
*/

// Declare variables
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Event listener for submit button
submitButton.addEventListener("click", function(event) {
   // Check if password meets the required format
   if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      alert("Your password must be at least 8 characters with at least one letter and one number");
      event.preventDefault();
   }
   // Check if passwords match
   else if (pwd.value !== pwd2.value) {
      alert("Your passwords must match");
      event.preventDefault();
   }
   // Clear validation message if no issues
   else {
      alert("Form is valid");
   }
});
