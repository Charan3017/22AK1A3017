function isPrime(num) {
    // A number less than 2 is not prime
    if (num < 2) return false;

    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by i, it's not a prime
        }
    }

    return true; // If no factors were found, it's a prime number
}

// Example usage:
let number = 29;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}