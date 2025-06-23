document.getElementById("convertBtn").addEventListener("click", () => {
    const value = parseFloat(document.getElementById("volumeValue").value);
    const unit = document.getElementById("volumeUnit").value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    const conversionFactors = {
      mm3: 1e-6,
      cm3: 1e-3,
      ml: 1e-3,
      l: 1,
      m3: 1000,
      flOz: 0.0295735,
      gal: 3.78541,
    };
  
    const liters = value * conversionFactors[unit];
  
    const results = {
      mm3: liters / conversionFactors.mm3,
      cm3: liters / conversionFactors.cm3,
      ml: liters / conversionFactors.ml,
      l: liters / conversionFactors.l,
      m3: liters / conversionFactors.m3,
      flOz: liters / conversionFactors.flOz,
      gal: liters / conversionFactors.gal,
    };
  
    document.getElementById("resultMM3").textContent = `Cubic Millimeters: ${results.mm3.toFixed(2)}`;
    document.getElementById("resultCM3").textContent = `Cubic Centimeters: ${results.cm3.toFixed(2)}`;
    document.getElementById("resultML").textContent = `Milliliters: ${results.ml.toFixed(2)}`;
    document.getElementById("resultL").textContent = `Liters: ${results.l.toFixed(2)}`;
    document.getElementById("resultM3").textContent = `Cubic Meters: ${results.m3.toFixed(2)}`;
    document.getElementById("resultFlOz").textContent =` Fluid Ounces: ${results.flOz.toFixed(2)}`;
    document.getElementById("resultGal").textContent = `Gallons: ${results.gal.toFixed(2)}`;
  });

  var darkModeBtn = document.querySelector("#darkModeBtn");
darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})
