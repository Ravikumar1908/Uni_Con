document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid positive numbers for weight and height.");
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    let resultText = `Your BMI is ${bmi.toFixed(2)}. `;
  
    if (bmi < 18.5) {
      resultText += "You are underweight.";
    } else if (bmi < 24.9) {
      resultText += "You have a normal weight.";
    } else if (bmi < 29.9) {
      resultText += "You are overweight.";
    } else {
      resultText += "You are obese.";
    }
  
    document.getElementById("result").textContent = resultText;
  });