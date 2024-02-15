// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the select elements
    const durationSelect = document.getElementById("subscription-type-duration");
    // const currencySelect = document.getElementById("subscription-type-currency");

    // Get all plan cards
    const planCards = document.querySelectorAll(".plan-card");

    // Function to show or hide plan cards based on selected options
    function filterPlans() {
        const selectedDuration = durationSelect.value;
        // const selectedCurrency = currencySelect.value;

        planCards.forEach(card => {
            
            
            // Check if the card matches the selected options
            const shouldShow = (selectedDuration === "any" || selectedDuration === card.getAttribute('value'))

            // Show or hide the card based on the result
            card.style.display = shouldShow ? "block" : "none";

            if (shouldShow) {
                card.style.minWidth = "333px";
                card.style.maxWidth = "45%"; // Set card width to 45% if visible
                // card.style.marginRight = "5%"; // Add right margin to create space between cards
            } else {
                card.style.maxWidth = "0"; // Hide card by setting width to 0
                card.style.marginRight = "0"; // Remove margin
            }
        });
    }

    // Call the filterPlans function initially to show the default set of cards
    filterPlans();

    // Add event listeners to both select elements to trigger the filter function on change
    durationSelect.addEventListener("change", filterPlans);
    // currencySelect.addEventListener("change", filterPlans);

    // Function to update the rates based on the selected currency
    // Function to update the rates based on the selected currency
function updateRates() {
    // Get the selected currency value
    var currencySelect = document.getElementById("subscription-type-currency");
    var selectedCurrency = currencySelect.value;

    // Define currency symbols
    var currencySymbols = {
        "inr": "₹",
        "dollar": "$",
        "euro": "€",
        // Add symbols for other currencies as needed
    };

    // Define rates for each card based on the selected currency and subscription type
    var rates = {
        "annualbasic": {
            "inr": 399,
            "dollar": 399 / 80,
            "euro": 399 / 90, 
        },
        "annualgold": {
            "inr": 899,
            "dollar": 899 / 80,
            "euro": 899 / 90, 
        },
        "annualpremium": {
            "inr": 699,
            "dollar": 699 / 80,
            "euro": 699 / 90, 
        },
        "quarterlypremium": {
            "inr": 199,
            "dollar": 199 / 80,
            "euro": 199 / 90, 
        },
        "quarterlymobile": {
            "inr": 99,
            "dollar": 99 / 80,
            "euro": 99 / 90, 
        },
        "monthlybasic": {
            "inr": 99,
            "dollar": 99 / 80,
            "euro": 99 / 90, 
        }
    };

    // Get all rate elements
    var rateElements = document.querySelectorAll(".rate");

    // Loop through each rate element and update the rate based on the selected currency
    rateElements.forEach(function(element) {
        // Get the rate value from the data attribute
        var rateType = element.getAttribute("value");
        // Update the rate based on the selected currency
        var rateValue = rates[rateType][selectedCurrency];
        a = element.textContent.match(/\d+(?:\.\d+)?(.*)/)[1].trim();

        // Update the rate text content with currency symbol and rate value

        element.textContent = currencySymbols[selectedCurrency] +   " " + rateValue.toFixed(2)+" "+ a;
        element.style.fontSize = "1.2vw"; 
        element.style.minWidth = "100px";

    });
}

// Add event listener to the currency select element
var currencySelect = document.getElementById("subscription-type-currency");
currencySelect.addEventListener("change", updateRates);

// Call the function initially to set the default rates
updateRates();


});
