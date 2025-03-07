"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: 
      Date:   

      Filename: project06-03.js
*/

window.addEventListener("load", function() {
   const useShip = document.getElementById("useShip");
   const form = document.getElementById("billShip");
   const errorBox = document.getElementById("errorBox");

   useShip.addEventListener("change", function() {
      if (useShip.checked) {
         document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
         document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
         document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
         document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
         document.getElementById("cityBill").value = document.getElementById("cityShip").value;
         document.getElementById("stateBill").value = document.getElementById("stateShip").value;
         document.getElementById("countryBill").value = document.getElementById("countryShip").value;
         document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      }
   });

   form.addEventListener("submit", function(event) {
      let requiredFields = document.querySelectorAll("input[required]");
      let formValid = true;

      requiredFields.forEach(function(field) {
         if (field.value.trim() === "") {
            field.style.border = "2px solid red";  // Highlight empty fields
            formValid = false;
         } else {
            field.style.border = "";  // Remove highlight if filled
         }
      });

      if (!formValid) {
         event.preventDefault(); // Prevent form submission
         errorBox.textContent = "Complete all highlighted fields."; // Display error message
         errorBox.style.color = "red";
         errorBox.style.fontWeight = "bold";
      } else {
         errorBox.textContent = ""; // Clear error message if form is valid
      }
   });
});
"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: 
      Date:   

      Filename: project06-03.js
*/

window.addEventListener("load", function() {
   const useShip = document.getElementById("useShip");
   const form = document.getElementById("billShip");
   const errorBox = document.getElementById("errorBox");

   useShip.addEventListener("change", function() {
      if (useShip.checked) {
         document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
         document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
         document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
         document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
         document.getElementById("cityBill").value = document.getElementById("cityShip").value;
         document.getElementById("stateBill").value = document.getElementById("stateShip").value;
         document.getElementById("countryBill").value = document.getElementById("countryShip").value;
         document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      }
   });

   form.addEventListener("submit", function(event) {
      let requiredFields = document.querySelectorAll("input[required]");
      let formValid = true;

      requiredFields.forEach(function(field) {
         if (field.value.trim() === "") {
            field.style.border = "2px solid red";  // Highlight empty fields
            formValid = false;
         } else {
            field.style.border = "";  // Remove highlight if filled
         }
      });

      if (!formValid) {
         event.preventDefault(); // Prevent form submission
         errorBox.textContent = "Complete all highlighted fields."; // Display error message
         errorBox.style.color = "red";
         errorBox.style.fontWeight = "bold";
      } else {
         errorBox.textContent = ""; // Clear error message if form is valid
      }
   });
});