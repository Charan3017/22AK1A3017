class Matrix {
    constructor(data) {
        if (!Array.isArray(data) || !data.length || !data.every(Array.isArray)) {
            throw new Error("Invalid matrix data.");
        }
        this.data = data;
        this.rows = data.length;
        this.cols = data[0].length;
        
        // Ensure all rows have the same number of columns
        for (let row of data) {
            if (row.length !== this.cols) {
                throw new Error("All rows must have the same number of columns.");
            }
        }
    }

    // A) Addition
    add(matrix) {
        if (this.rows !== matrix.rows || this.cols !== matrix.cols) {
            throw new Error("Matrices must be of the same dimensions for addition.");
        }

        const result = this.data.map((row, i) =>
            row.map((val, j) => val + matrix.data[i][j])
        );

        return new Matrix(result);
    }

    // B) Subtraction
    subtract(matrix) {
        if (this.rows !== matrix.rows || this.cols !== matrix.cols) {
            throw new Error("Matrices must be of the same dimensions for subtraction.");
        }

        const result = this.data.map((row, i) =>
            row.map((val, j) => val - matrix.data[i][j])
        );

        return new Matrix(result);
    }

    // C) Multiplication
    multiply(matrix) {
        if (this.cols !== matrix.rows) {
            throw new Error("Number of columns in the first matrix must be equal to number of rows in the second.");
        }

        const result = Array.from({ length: this.rows }, () => Array(matrix.cols).fill(0));

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                for (let k = 0; k < this.cols; k++) {
                    result[i][j] += this.data[i][k] * matrix.data[k][j];
                }
            }
        }

        return new Matrix(result);
    }

    // D) Trace
    trace() {
        if (this.rows !== this.cols) {
            throw new Error("Trace can only be calculated for square matrices.");
        }

        return this.data.reduce((sum, row, i) => sum + row[i], 0);
    }

    // Helper method to display the matrix
    display() {
        console.log(this.data.map(row => row.join('\t')).join('\n'));
    }
}

// Example usage:
try {
    const A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const B = new Matrix([[9, 8, 7], [6, 5, 4], [3, 2, 1]]);

    console.log("Matrix A:");
    A.display();

    console.log("\nMatrix B:");
    B.display();

    console.log("\nAddition (A + B):");
    const sum = A.add(B);
    sum.display();

    console.log("\nSubtraction (A - B):");
    const difference = A.subtract(B);
    difference.display();

    console.log("\nMultiplication (A * B):");
    const product = A.multiply(B);
    product.display();

    console.log("\nTrace of Matrix A:");
    console.log(A.trace());

    console.log("\nTrace of Matrix B:");
    console.log(B.trace());
} catch (error) {
    console.error(error.message);
}
