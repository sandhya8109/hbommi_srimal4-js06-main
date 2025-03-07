"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06b.js
 */
// JavaScript for Payment Form Validation
document.getElementById("payment").addEventListener("submit", function(event) {
   let cardNumber = document.getElementById("cardNumber");
   let cvc = document.getElementById("cvc");
   let cardType = document.querySelector("input[name='credit']:checked");

   if (!cardType) {
       alert("Please select a credit card type.");
       event.preventDefault();
       return;
   }

   let cardRegex = {
       visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
       master: /^5[1-5][0-9]{14}$/,
       amex: /^3[47][0-9]{13}$/,
       discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
   };

   if (!cardRegex[cardType.value].test(cardNumber.value)) {
       alert("Invalid credit card number.");
       event.preventDefault();
       return;
   }

   if ((cardType.value === "amex" && cvc.value.length !== 4) || (cardType.value !== "amex" && cvc.value.length !== 3)) {
       alert("Invalid CVC number.");
       event.preventDefault();
       return;
   }
});



















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

