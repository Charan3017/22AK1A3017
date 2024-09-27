class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Addition
    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }

    // Subtraction
    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }

    // Multiplication
    multiply(other) {
        const realPart = this.real * other.real - this.imaginary * other.imaginary;
        const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Conjugation
    conjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }

    // Display the complex number
    display() {
        const sign = this.imaginary >= 0 ? '+' : '-';
        console.log(`${this.real} ${sign} ${Math.abs(this.imaginary)}i`);
    }
}

// Example usage
const complex1 = new ComplexNumber(3, 2); // 3 + 2i
const complex2 = new ComplexNumber(1, 4); // 1 + 4i

console.log("Complex Number 1:");
complex1.display();

console.log("Complex Number 2:");
complex2.display();

// Addition
const sum = complex1.add(complex2);
console.log("\nAddition:");
sum.display();

// Subtraction
const difference = complex1.subtract(complex2);
console.log("\nSubtraction:");
difference.display();

// Multiplication
const product = complex1.multiply(complex2);
console.log("\nMultiplication:");
product.display();

// Conjugate of complex1
const conjugate1 = complex1.conjugate();
console.log("\nConjugate of Complex Number 1:");
conjugate1.display();

// Conjugate of complex2
const conjugate2 = complex2.conjugate();
console.log("\nConjugate of Complex Number 2:");
conjugate2.display();
