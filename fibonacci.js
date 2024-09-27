function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1, position = 1;

    // Generate Fibonacci numbers until we reach or exceed the given number
    while (a <= num) {
        if (a === num) {
            return position; // Return the position if it's a Fibonacci number
        }
        const temp = a;
        a = b;
        b = temp + b;
        position++;
    }

    return -1; // Return -1 if it's not a Fibonacci number
}

// Example usage with readline for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (input) => {
    const num = parseInt(input);
    
    if (isNaN(num)) {
        console.error("Please enter a valid integer.");
    } else {
        const position = isFibonacci(num);
        if (position !== -1) {
            console.log(`${num} is a Fibonacci number at position ${position}.`);
        } else {
            console.log(`${num} is not a Fibonacci number.`);
        }
    }

    rl.close();
});
