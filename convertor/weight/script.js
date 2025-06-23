document.getElementById("convertBtn").addEventListener("click", () => {
    const value = parseFloat(document.getElementById("weightValue").value);
    const unit = document.getElementById("weightUnit").value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    const conversionFactors = {
      mg: 0.000001,
      g: 0.001,
      kg: 1,
      oz: 0.0283495,
      lb: 0.453592,
      quintal: 100,
      tonne: 1000,
    };
  
    const kilograms = value * conversionFactors[unit];
  
    const results = {
      mg: kilograms / conversionFactors.mg,
      g: kilograms / conversionFactors.g,
      kg: kilograms / conversionFactors.kg,
      oz: kilograms / conversionFactors.oz,
      lb: kilograms / conversionFactors.lb,
      quintal: kilograms / conversionFactors.quintal,
      tonne: kilograms / conversionFactors.tonne,
    };
  
    document.getElementById("resultMG").textContent = `Milligrams: ${results.mg.toFixed(2)}`;
    document.getElementById("resultG").textContent = `Grams: ${results.g.toFixed(2)}`;
    document.getElementById("resultKG").textContent = `Kilograms: ${results.kg.toFixed(2)}`;
    document.getElementById("resultOZ").textContent = `Ounces: ${results.oz.toFixed(2)}`;
    document.getElementById("resultLB").textContent = `Pounds: ${results.lb.toFixed(2)}`;
    document.getElementById("resultQuintal").textContent = `Quintal: ${results.quintal.toFixed(2)}`;
    document.getElementById("resultTonne").textContent = `Tonne: ${results.tonne.toFixed(2)}`;
  });

  var darkModeBtn = document.querySelector("#darkModeBtn");
darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})
