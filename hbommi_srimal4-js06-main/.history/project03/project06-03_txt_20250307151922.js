"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: 
      Date:   

      Filename: project06-03.js
*/
// Step 3: Declare useShip variable and add an event listener
let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

// Step 4: Create the copyShippingToBilling() function
function copyShippingToBilling() {
    if (useShip.checked) {
        document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
        document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
        document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
        document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
        document.getElementById("cityBill").value = document.getElementById("cityShip").value;
        document.getElementById("countryBill").value = document.getElementById("countryShip").value;
        document.getElementById("codeBill").value = document.getElementById("codeShip").value;
        document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
    }
}
// Step 5: Declare formElements and errorBox variables
let formElements = document.querySelectorAll("input[type='text']");
let errorBox = document.getElementById("errorBox");

// Step 6: Add event listener for form validation
formElements.forEach(function(element) {
    element.addEventListener("invalid", showValidationError);
});

// Step 7: Create the showValidationError function
function showValidationError(evt) {
    evt.preventDefault();
    errorBox.textContent = "Complete all highlighted fields.";
}