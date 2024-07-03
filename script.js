function CWAdeficit(goal, totalCredits, CRS, currentCredit) {
    if (goal <= 0 || totalCredits <= 0 || CRS < 0 || currentCredit <= 0) {
        throw new Error("All values must be positive, and CRS cannot be negative.");
    }

    let required = (goal * totalCredits - CRS) / currentCredit;
    return parseFloat(required.toFixed(2));
}

function handleCalculateCWA() {
    try {
        const goal = parseFloat(document.getElementById('goal').value);
        const totalCredits = parseInt(document.getElementById('totalCredits').value);
        const CRS = parseInt(document.getElementById('CRS').value);
        const currentCredit = parseInt(document.getElementById('currentCredit').value);

        // Input validation
        if (isNaN(goal) || isNaN(totalCredits) || isNaN(CRS) || isNaN(currentCredit)) {
            throw new Error("All inputs must be numbers.");
        }
        
        
        // Calculate CWA deficit
        const result = CWAdeficit(goal, totalCredits, CRS, currentCredit);
    if (result<100){
        document.getElementById('result').innerText = `You need to achieve an SWA of approximately ${result} in the current semester to reach your goal CWA of ${goal}.`;
    }
        else{
             document.getElementById('result').innerText = `It is not possible to achieve ${result} in a single semester,Lower your expectations`;
            
        }

    } catch (error) {
        document.getElementById('result').innerText = error.message;
    }
}

function handleReset() {
    document.getElementById('goal').value = '';
    document.getElementById('totalCredits').value = '';
    document.getElementById('CRS').value = '';
    document.getElementById('currentCredit').value = '';
    document.getElementById('result').innerText = '';
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');

// Load the theme from localStorage or default to light mode
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
});

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', themeToggle.checked);
});
