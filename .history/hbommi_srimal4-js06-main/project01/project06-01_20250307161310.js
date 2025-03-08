"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

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
    
    // Username validation
    if (username.value.trim() === "") {
        errors.push("Username is required.");
    }
    
    // Email validation
    if (!emailPattern.test(email.value)) {
        errors.push("Invalid email format. Must include '@' and a valid domain.");
    }
    
    // Password validation
    if (!passwordPattern.test(password.value)) {
        password.setCustomValidity("Your password must be at least 8 characters long and contain at least one letter and one number.");
    } else {
        password.setCustomValidity(""); // Reset custom validity if the password matches the pattern
    }
    
    // Password match validation
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
        confirmPassword.setCustomValidity(""); // Reset custom validity if passwords match
    }
    
    // If there are any errors, prevent form submission
    if (errors.length > 0) {
        alert(errors.join("\n"));
        event.preventDefault();
    }
});
