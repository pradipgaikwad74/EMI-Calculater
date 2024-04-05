let loanAmount = document.getElementById("amount");
let interestRate = document.getElementById("interest");
let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    calculateEMI();
});

function calculateEMI() {
    let isYear = document.getElementById("year").checked;
    let isMonth = document.getElementById("month").checked;
    let noOfMonths = 0;
    
    // Check if loan tenure type (Month or Year) is selected
    if (!isYear && !isMonth) {
        alert("Please select loan tenure type - Month or Year");
        return; // Stop execution if loan tenure type is not selected
    }

    // Calculate total number of months in loan tenure based on selected type
    if (isYear) {
        noOfMonths = loanDuration.value * 12;
    } else {
        noOfMonths = loanDuration.value;
    }

    let r = parseFloat(interestRate.value) / 12 / 100;
    let p = parseFloat(loanAmount.value);

    // Check if loan amount, interest rate, and loan duration are valid numbers
    if (isNaN(p) || isNaN(r) || isNaN(noOfMonths) || p <= 0 || r <= 0 || noOfMonths <= 0) {
        alert("Please enter valid numbers for loan amount, interest rate, and loan tenure");
        return; // Stop execution if input values are invalid
    }

    // Calculate EMI using the formula
    let EMI = (p * r * Math.pow((1 + r), noOfMonths)) / (Math.pow((1 + r), noOfMonths) - 1);
    let totalInterest = (EMI * noOfMonths) - p;
    let totalPayment = totalInterest + p;

    // Display results
    document.getElementById("emi").innerText = "Rs " + Math.round(EMI);
    document.getElementById("totalInterest").innerText = "Rs " + Math.round(totalInterest);
    document.getElementById("totalpayment").innerText = "Rs " + Math.round(totalPayment);
}
