const readline = require('readline');

// Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkArmstrongNumber(number) {
    // Convert the number to a string to easily access each digit
    const numberStr = number.toString();
    const numberOfDigits = numberStr.length;
    let sum = 0;
    let temp = number;
    
    while (temp > 0) {
        const remainder = temp % 10;
        sum += Math.pow(remainder, numberOfDigits);
        temp = Math.floor(temp / 10); // Convert float into integer
    }

    return sum === number;
}

rl.question('Enter a positive integer: ', (input) => {
    const number = parseInt(input, 10);
    
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a valid positive integer.');
        rl.close();
        return;
    }
    
    if (checkArmstrongNumber(number)) {
        console.log(`${number} is an Armstrong number.`);
    } else {
        console.log(`${number} is not an Armstrong number.`);
    }

    rl.close();
});
