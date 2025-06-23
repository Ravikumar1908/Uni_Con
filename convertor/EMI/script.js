document.getElementById("emiForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const principal = parseFloat(document.getElementById("principal").value);
    const annualInterest = parseFloat(document.getElementById("interest").value);
    const tenure = parseInt(document.getElementById("tenure").value);
  
    if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenure) || principal <= 0 || annualInterest <= 0 || tenure <= 0) {
      alert("Please enter valid positive numbers for principal, interest, and tenure.");
      return;
    }
  
    const monthlyInterest = annualInterest / (12 * 100);
    const numberOfInstallments = tenure * 12;
    const emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfInstallments)) / (Math.pow(1 + monthlyInterest, numberOfInstallments) - 1);
  
    let resultText = `Principal: ₹${principal.toFixed(2)}\n`;
    resultText += `Annual Interest Rate: ${annualInterest.toFixed(2)}%\n`;
    resultText += `Loan Tenure: ${tenure} years\n`;
    resultText += `Your EMI is ₹${emi.toFixed(2)}`;
    
    document.querySelector(".results p").textContent = resultText;
  });