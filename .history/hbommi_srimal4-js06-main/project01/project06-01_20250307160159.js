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

document.getElementById("signup").addEventListener("submit", function(event) {
    let username = document.getElementById("user");
    let email = document.getElementById("email");
    let password = document.getElementById("pwd");
    let confirmPassword = document.getElementById("pwd2");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    let errors = [];
    
    // Check if username is empty
    if (username.value.trim() === "") {
        errors.push("Username is required.");
    }
    
    // Check if email is valid
    if (!emailPattern.test(email.value)) {
        errors.push("Invalid email format. Must include '@' and a valid domain.");
    }
    
    // Check password field with pattern validation
    if (!passwordPattern.test(password.value)) {
        errors.push("Your password must be at least 8 characters with at least one letter and one number");
    } else if (password.value !== confirmPassword.value) {
        errors.push("Your passwords must match.");
    }
    
    // If there are validation errors, prevent form submission and show errors
    if (errors.length > 0) {
        alert(errors.join("\n"));
        event.preventDefault();  // Prevent form submission
    }
});
