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
  