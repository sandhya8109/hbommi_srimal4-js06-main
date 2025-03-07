"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06a.js
 */


"use strict";

window.addEventListener("load", function() {
    let modelSelect = document.getElementById("model");
    let qtySelect = document.getElementById("qty");
    let planOptions = document.getElementsByName("plan");
    let modelCostField = document.getElementById("modelCost");
    let planCostField = document.getElementById("planCost");
    let subtotalField = document.getElementById("subtotal");
    let salesTaxField = document.getElementById("salesTax");
    let totalCostField = document.getElementById("totalCost");
    let modelNameField = document.getElementById("modelName");  // Hidden field for model name
    let planNameField = document.getElementById("planName");    // Hidden field for plan name

    function updateTotals() {
        let modelCost = parseFloat(modelSelect.value);
        let qty = parseInt(qtySelect.value);
        let planCost = 0;
        let selectedPlanText = "No protection plan ($0.00)"; // Default plan name
        let selectedModelText = modelSelect.options[modelSelect.selectedIndex].text; // Get model text

        planOptions.forEach(option => {
            if (option.checked) {
                planCost = parseFloat(option.value);
                selectedPlanText = option.nextElementSibling.innerText; // Get label text for the selected plan
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

        // Update hidden fields with selected names
        modelNameField.value = selectedModelText;
        planNameField.value = selectedPlanText;
    }

    modelSelect.addEventListener("change", updateTotals);
    qtySelect.addEventListener("change", updateTotals);
    planOptions.forEach(option => option.addEventListener("change", updateTotals));

    updateTotals();
});
