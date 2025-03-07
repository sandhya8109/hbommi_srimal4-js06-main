"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-02.js
*/


document.addEventListener("DOMContentLoaded", function() {
      let dropdowns = document.querySelectorAll(".optionLinks");
      
      dropdowns.forEach(dropdown => {
          dropdown.addEventListener("change", function() {
              let selectedValue = this.value;
              if (selectedValue !== "#") {
                  window.location.href = selectedValue;
              }
          });
      });
  });
  