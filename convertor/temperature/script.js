document.getElementById("convertBtn").addEventListener("click", () => {
    const value = parseFloat(document.getElementById("temperatureValue").value);
    const unit = document.getElementById("temperatureUnit").value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    // Conversion logic
    switch (unit) {
      case "celsius":
        celsius = value;
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
        break;
      case "fahrenheit":
        celsius = (value - 32) * 5/9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
        break;
      case "kelvin":
        celsius = value - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = value;
        break;
    }
  
    // Display results
    document.getElementById("resultCelsius").textContent = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById("resultFahrenheit").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById("resultKelvin").textContent = `Kelvin: ${kelvin.toFixed(2)}`;
  });
  var darkModeBtn = document.querySelector("#darkModeBtn");
darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})



