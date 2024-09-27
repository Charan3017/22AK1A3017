const readline = require('readline');

function calculateLuckyNumber(dob) {
    const parts = dob.split(' ');

    // Validate input
    if (parts.length !== 3) {
        throw new Error("Invalid date format. Please use dd mm yyyy.");
    }

    const [day, month, year] = parts.map(Number);
    
    // Check if the input is valid
    if (isNaN(day) || isNaN(month) || isNaN(year) || 
        day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
        throw new Error("Invalid date values. Please ensure day, month, and year are valid.");
    }

    // Calculate the sum of the digits
    const sumDigits = (num) => num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

    // Sum all parts of the date
    let total = sumDigits(day) + sumDigits(month) + sumDigits(year);

    // Reduce to a single digit (1-9)
    while (total > 9) {
        total = sumDigits(total);
    }

    return total;
}

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for user input
rl.question("Enter your date of birth (dd mm yyyy): ", (dobInput) => {
    try {
        const luckyNumber = calculateLuckyNumber(dobInput);
        console.log(`Your lucky number is: ${luckyNumber}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close(); // Close the readline interface
    }
});
