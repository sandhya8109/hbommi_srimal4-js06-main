"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06a.js
 */



      window.addEventListener("load", function() {
            let modelSelect = document.getElementById("model");
            let qtySelect = document.getElementById("qty");
            let planOptions = document.getElementsByName("plan");
            let modelCostField = document.getElementById("modelCost");
            let planCostField = document.getElementById("planCost");
            let subtotalField = document.getElementById("subtotal");
            let salesTaxField = document.getElementById("salesTax");
            let totalCostField = document.getElementById("totalCost");
        
            function updateTotals() {
                let modelCost = parseFloat(modelSelect.value);
                let qty = parseInt(qtySelect.value);
                let planCost = 0;
                
                planOptions.forEach(option => {
                    if (option.checked) {
                        planCost = parseFloat(option.value);
                    }
                });
                
                let subtotal = (modelCost * qty) + planCost;
                let salesTax = subtotal * 0.05;
                let totalCost = subtotal + salesTax;
                
                modelCostField.value = `$${(modelCost * qty).toFixed(2)}`;
                planCostField.value = `$${planCost.toFixed(2)}`;
                subtotalField.value = `$${subtotal.toFixed(2)}`;
                salesTaxField.value = `$${salesTax.toFixed(2)}`;
                totalCostField.value = `$${totalCost.toFixed(2)}`;
            }
            
            modelSelect.addEventListener("change", updateTotals);
            qtySelect.addEventListener("change", updateTotals);
            planOptions.forEach(option => option.addEventListener("change", updateTotals));
            
            updateTotals();
        });