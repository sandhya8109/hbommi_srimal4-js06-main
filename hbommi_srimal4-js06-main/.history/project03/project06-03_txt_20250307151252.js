"use strict";
window.addEventListener("load", function() {
   const useShip = document.getElementById("useShip");
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

   document.getElementById("billShip").addEventListener("submit", function(event) {
      let requiredFields = document.querySelectorAll("input[required]");
      let valid = true;
      let firstInvalidField = null;
      
      requiredFields.forEach(field => {
         if (!field.value.trim()) {
            field.style.border = "2px solid red";
            valid = false;
            if (!firstInvalidField) {
               firstInvalidField = field;
            }
         } else {
            field.style.border = "";
         }
      });

      if (!valid) {
         document.getElementById("errorBox").textContent = "Please complete all highlighted fields.";
         alert("Complete all highlighted fields");
         firstInvalidField.focus();
         event.preventDefault();
      } else {
         document.getElementById("errorBox").textContent = "";
      }
   });
});