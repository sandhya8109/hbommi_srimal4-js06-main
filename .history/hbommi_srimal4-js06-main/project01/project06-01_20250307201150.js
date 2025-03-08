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
let passwordMessage = document.createElement("p");

// Adding styles for visibility
passwordMessage.style.color = "red";
passwordMessage.style.fontSize = "0.9em";
passwordMessage.style.marginTop = "5px";
passwordMessage.textContent = "Password must be at least 8 characters, including at least one letter and one number";

// Hide message initially
passwordMessage.style.display = "none";

// Insert message after password field
password.parentNode.insertBefore(passwordMessage, password.nextSibling);

// Show message when password field is clicked
password.addEventListener("focus", function() {
    passwordMessage.style.display = "block";
});

// Hide message when user clicks away
password.addEventListener("blur", function() {
    passwordMessage.style.display = "none";
});

// Form validation
document.getElementById("signup").addEventListener("submit", function(event) {
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
        errors.push("Your password must be at least 8 characters with at least one letter and one number.");
    }

    if (password.value !== confirmPassword.value) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        event.preventDefault();
    }
});
