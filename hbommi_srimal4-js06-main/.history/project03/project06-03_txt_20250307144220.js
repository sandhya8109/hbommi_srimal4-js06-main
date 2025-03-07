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

    // Function to copy shipping to billing address
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

    // Form validation
    form.addEventListener("submit", function(event) {
        const requiredFields = form.querySelectorAll("input[required]");
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            errorBox.textContent = "Complete all required fields before proceeding.";
            errorBox.style.color = "red";
        } else {
            errorBox.textContent = ""; // Clear error message if valid
        }
    });
});
