document.getElementById("convertBtn").addEventListener("click", () => {
    const value = parseFloat(document.getElementById("areaValue").value);
    const unit = document.getElementById("areaUnit").value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    const conversionFactors = {
      cm2: 0.0001,
      m2: 1,
      km2: 1e6,
      in2: 0.00064516,
      ft2: 0.092903,
      acres: 4046.86,
      hectares: 10000,
      mi2: 2.59e6,
    };
  
    const squareMeters = value * conversionFactors[unit];
  
    const results = {
      cm2: squareMeters / conversionFactors.cm2,
      m2: squareMeters / conversionFactors.m2,
      km2: squareMeters / conversionFactors.km2,
      in2: squareMeters / conversionFactors.in2,
      ft2: squareMeters / conversionFactors.ft2,
      acres: squareMeters / conversionFactors.acres,
      hectares: squareMeters / conversionFactors.hectares,
      mi2: squareMeters / conversionFactors.mi2,
    };
  
    document.getElementById("resultCM2").textContent =` Square Centimeters: ${results.cm2.toFixed(2)}`;
    document.getElementById("resultM2").textContent = `Square Meters: ${results.m2.toFixed(2)}`;
    document.getElementById("resultKM2").textContent = `Square Kilometers: ${results.km2.toFixed(2)}`;
    document.getElementById("resultIn2").textContent = `Square Inches: ${results.in2.toFixed(2)}`;
    document.getElementById("resultFt2").textContent = `Square Feet: ${results.ft2.toFixed(2)}`;
    document.getElementById("resultAcres").textContent = `Acres: ${results.acres.toFixed(2)}`;
    document.getElementById("resultHectares").textContent = `Hectares: ${results.hectares.toFixed(2)}`;
    document.getElementById("resultMi2").textContent = `Square Miles: ${results.mi2.toFixed(2)}`;
  });

  
var darkModeBtn = document.querySelector("#darkModeBtn");
darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})
