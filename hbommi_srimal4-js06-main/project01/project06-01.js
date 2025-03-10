"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

// Selecting password field
let password = document.getElementById("pwd");

// Show alert only once when user finishes entering password
password.addEventListener("blur", function () {
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(password.value) && password.value !== "") {
        alert("Password must be at least 8 characters long and include at least one letter and one number.");
        password.value = ""; // Clear the field to force re-entry
    }
});

// Form validation on submit
document.getElementById("signup").addEventListener("submit", function (event) {
    let username = document.getElementById("user");
    let email = document.getElementById("email");
    let confirmPassword = document.getElementById("pwd2");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let errors = [];

    if (username.value.trim() === "") {
        errors.push("Username is required.");
    }

    if (!emailPattern.test(email.value)) {
        errors.push("Invalid email format. Must include '@' and a valid domain.");
    }

    if (!passwordPattern.test(password.value)) {
        errors.push("Password must be at least 8 characters long and include at least one letter and one number.");
    }

    if (password.value !== confirmPassword.value) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n")); // Show all validation errors in one alert
        event.preventDefault(); // Prevent form submission
    }
});
