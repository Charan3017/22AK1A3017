function isArmstrongNumber(num) {
    // Convert the number to a string to easily access each digit
    const numStr = num.toString();
    const numDigits = numStr.length;
    
    // Compute the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i], 10);
        sum += Math.pow(digit, numDigits);
    }
    
    // Check if the sum equals the original number
    return sum === num;
}

function checkArmstrong() {
    // Get the number from user input
    const number = parseInt(prompt("Enter an integer: "), 10);
    
    if (isNaN(number)) {
        console.log("Please enter a valid integer.");
        return;
    }

    if (isArmstrongNumber(number)) {
        console.log(${number} is an Armstrong number.);
    } else {
        console.log(${number} is not an Armstrong number.);
    }
}

// Call the function to execute the check
checkArmstrong();