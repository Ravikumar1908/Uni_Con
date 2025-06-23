
var result = document.querySelector("#result"); 
var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {

    
    async function getResult() {
        const TO = document.querySelector("#to").value.toUpperCase().trim();
        const FROM = document.querySelector("#from").value.toUpperCase().trim();
        const amount = document.querySelector("#amount").value;
        // Validate inputs
        if (!FROM || !TO || !amount || isNaN(amount) || parseFloat(amount) <= 0) {
            result.innerText = "Please provide valid, positive amounts.";
            return;
        }

        
        const apiKey = '0a8e942694941cc09bfcccce'; 

        let url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${FROM}/${TO}`;

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            let data = await response.json();
            // console.log(data); // Log the response for debugging
            let conversionRate = data.conversion_rate;  // Get conversion rate from the API

            // Perform the conversion
            let convertedAmount = parseFloat(amount) * conversionRate;
            
            // Display the result with two decimal points
            result.textContent = `${amount} ${FROM} = ${convertedAmount.toFixed(2)} ${TO}`;
        } catch (error) {
            result.innerText = "Unable to fetch the exchange rate. Please try again. +";
        }
    }

    // Call the function to get the result
    getResult();
});




var darkModeBtn = document.querySelector("#darkModeBtn");

darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})

