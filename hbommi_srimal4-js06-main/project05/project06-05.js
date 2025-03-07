"use strict";
      window.addEventListener("load", function() {
         calcCart();
         document.getElementById("regSubmit").addEventListener("click", sessionTest);
         document.getElementById("fnBox").addEventListener("blur", calcCart);
         document.getElementById("lnBox").addEventListener("blur", calcCart); 
         document.getElementById("groupBox").addEventListener("blur", calcCart);   
         document.getElementById("mailBox").addEventListener("blur", calcCart);   
         document.getElementById("phoneBox").addEventListener("blur", calcCart);   
         document.getElementById("sessionBox").addEventListener("change", calcCart);   
         document.getElementById("banquetBox").addEventListener("blur", calcCart); 
         document.getElementById("mediaCB").addEventListener("click", calcCart);   
      });
      function sessionTest(event) {
         let confSession = document.getElementById("sessionBox");
         if (confSession.selectedIndex === -1) {
            alert("Please select a Session Package.");
            event.preventDefault();
         }
      }
      function calcCart() {
         let form = document.forms.register;
         let guestCount = form.elements.banquetGuests.value;
         let guestCost = guestCount * 55;
         document.getElementById("regBanquet").textContent = guestCount || "0";
         let sessionCost = 0;
         let sessionChoice = "";
         let sessionBox = document.getElementById("sessionBox");
         if (sessionBox.selectedIndex !== -1) {
            sessionChoice = sessionBox.options[sessionBox.selectedIndex].text;
            sessionCost = parseFloat(sessionBox.value);
         }
         let mediaCost = form.elements.mediaPack.checked ? 115 : 0;
         let mediaChoice = form.elements.mediaPack.checked ? "Yes" : "No";
         let totalCost = guestCost + sessionCost + mediaCost;
         document.getElementById("regName").textContent = form.elements.firstName.value + " " + form.elements.lastName.value;
         document.getElementById("regGroup").textContent = form.elements.group.value || "N/A";
         document.getElementById("regEmail").textContent = form.elements.email.value;
         document.getElementById("regPhone").textContent = form.elements.phoneNumber.value;
         document.getElementById("regSession").textContent = sessionChoice || "None";
         document.getElementById("regPack").textContent = mediaChoice;
         document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
      }
