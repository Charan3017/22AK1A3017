function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimeNumbersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Define the range
let start = 1;
let end = 20;

printPrimeNumbersInRange(start, end);