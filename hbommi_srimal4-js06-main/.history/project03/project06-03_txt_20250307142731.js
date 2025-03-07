"use strict";

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
      event.preventDefault(); // Prevent form submission initially
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
         errorBox.textContent = "Complete all highlighted fields."; // Show error message
         errorBox.style.color = "red";
         errorBox.style.fontWeight = "bold";
      } else {
         errorBox.textContent = ""; // Clear error message
         form.submit(); // Submit form if all fields are valid
      }
   });
});
window.addEventListener("load", function(){   
   // Retrieve the field/value pairs from the URL
   var formData = location.search.slice(1);
   formData = formData.replace(/\+/g," ");
   formData = decodeURIComponent(formData);
   let formFields = formData.split(/[&=]/g);

   // Write the field values to the account table
   document.getElementById("firstnameShip").textContent = formFields[1]; 
   document.getElementById("lastnameShip").textContent = formFields[3]; 
   document.getElementById("address1Ship").textContent = formFields[5]; 
   document.getElementById("address2Ship").textContent = formFields[7];
   document.getElementById("cityShip").textContent = formFields[9];  
   document.getElementById("stateShip").textContent = formFields[11];   
   document.getElementById("countryShip").textContent = formFields[13];   
   document.getElementById("codeShip").textContent = formFields[15];      
   document.getElementById("firstnameBill").textContent = formFields[19]; 
   document.getElementById("lastnameBill").textContent = formFields[21]; 
   document.getElementById("address1Bill").textContent = formFields[23]; 
   document.getElementById("address2Bill").textContent = formFields[25];
   document.getElementById("cityBill").textContent = formFields[27];  
   document.getElementById("stateBill").textContent = formFields[29];   
   document.getElementById("countryBill").textContent = formFields[31];   
   document.getElementById("codeBill").textContent = formFields[33];          
} );   