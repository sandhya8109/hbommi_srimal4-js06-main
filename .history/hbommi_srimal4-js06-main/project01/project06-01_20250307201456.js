"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

// Selecting elements
let password = document.getElementById("pwd");

// Create an inline error message for password
let passwordError = document.createElement("p");
passwordError.style.color = "red";
passwordError.style.fontSize = "0.9em";
passwordError.style.marginTop = "5px";
passwordError.style.display = "none"; // Hide initially
password.parentNode.insertBefore(passwordError, password.nextSibling);

// Validate password on blur (when user clicks away)
password.addEventListener("blur", function () {
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        passwordError.textContent = "Password must be at least 8 characters long and include at least one letter and one number.";
        passwordError.style.display = "block"; // Show error
    } else {
        passwordError.style.display = "none"; // Hide if valid
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
