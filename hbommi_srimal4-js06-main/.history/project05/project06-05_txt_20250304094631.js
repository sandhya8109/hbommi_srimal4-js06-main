"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Project to submit a registration form
      Author: 
      Date:   

      Filename: project06-05.js
*/"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Registration Form with Dynamic Cart Update
      Author: 
      Date:   

      Filename: project06-05.js
*/

window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a session before submitting
   document.getElementById("regSubmit").addEventListener("click", sessionTest);   
   
   // Recalculate the shopping cart when any relevant field loses focus or changes
   document.getElementById("fnBox").addEventListener("blur", calcCart);
   document.getElementById("lnBox").addEventListener("blur", calcCart); 
   document.getElementById("groupBox").addEventListener("blur", calcCart);   
   document.getElementById("mailBox").addEventListener("blur", calcCart);   
   document.getElementById("phoneBox").addEventListener("blur", calcCart);   
   document.getElementById("sessionBox").addEventListener("change", calcCart);   
   document.getElementById("banquetBox").addEventListener("blur", calcCart); 
   document.getElementById("mediaCB").addEventListener("click", calcCart);   
});

// Function to verify that a session was selected by the user
function sessionTest(event) {
   let confSession = document.getElementById("sessionBox");
   if (confSession.selectedIndex === -1) {
      alert("Please select a Session Package.");
      event.preventDefault(); // Stop form submission
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   let form = document.forms.register;

   // Calculate the banquet cost for all guests 
   let guestCount = form.elements.banquetGuests.value;
   let guestCost = guestCount * 55;
   document.getElementById("regBanquet").textContent = guestCount || "0";

   // Determine the cost of the selected session
   let sessionCost = 0;
   let sessionChoice = "";
   let sessionBox = document.getElementById("sessionBox");

   if (sessionBox.selectedIndex !== -1) {
      sessionChoice = sessionBox.options[sessionBox.selectedIndex].text;
      sessionCost = parseFloat(sessionBox.value);
   }

   // Determine the cost of the media pack
   let mediaCost = form.elements.mediaPack.checked ? 115 : 0;
   let mediaChoice = form.elements.mediaPack.checked ? "Yes" : "No";

   // Calculate total cost
   let totalCost = guestCost + sessionCost + mediaCost;

   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = form.elements.firstName.value + " " + form.elements.lastName.value;
   document.getElementById("regGroup").textContent = form.elements.group.value || "N/A";
   document.getElementById("regEmail").textContent = form.elements.email.value;
   document.getElementById("regPhone").textContent = form.elements.phoneNumber.value;
   document.getElementById("regSession").textContent = sessionChoice || "None";
   document.getElementById("regPack").textContent = mediaChoice;
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
