document.getElementById("convertBtn").addEventListener("click", () => {
    const value = parseFloat(document.getElementById("lengthValue").value);
    const unit = document.getElementById("lengthUnit").value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    const conversionFactors = {
      km: 1000,
      m: 1,
      dm: 0.1,
      cm: 0.01,
      mm: 0.001,
      inch: 0.0254,
      feet: 0.3048,
      yards: 0.9144,
      miles: 1609.34,
    };
  
    const meters = value * conversionFactors[unit];
  

    const results = {
      km: meters / conversionFactors.km,
      m: meters / conversionFactors.m,
      dm: meters / conversionFactors.dm,
      cm: meters / conversionFactors.cm,
      mm: meters / conversionFactors.mm,
      inch: meters / conversionFactors.inch,
      feet: meters / conversionFactors.feet,
      yards: meters / conversionFactors.yards,
      miles: meters / conversionFactors.miles,
    };
  

    document.getElementById("resultKM").textContent = `Kilometers: ${results.km.toFixed(2)}`;
    document.getElementById("resultM").textContent = `Meters: ${results.m.toFixed(2)}`;
    document.getElementById("resultDM").textContent = `Decimeters: ${results.dm.toFixed(2)}`;
    document.getElementById("resultCM").textContent = `Centimeters: ${results.cm.toFixed(2)}`;
    document.getElementById("resultMM").textContent = `Millimeters: ${results.mm.toFixed(2)}`;
    document.getElementById("resultInch").textContent = `Inches: ${results.inch.toFixed(2)}`;
    document.getElementById("resultFeet").textContent = `Feet: ${results.feet.toFixed(2)}`;
    document.getElementById("resultYards").textContent = `Yards: ${results.yards.toFixed(2)}`;
    document.getElementById("resultMiles").textContent = `Miles: ${results.miles.toFixed(2)}`;
  });


  var darkModeBtn = document.querySelector("#darkModeBtn");
darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})
