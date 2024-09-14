function countRepeatingCharacters(str) {
    // Create an object to store the count of each character
    const charCount = {};
    
    // Iterate through the string to populate the charCount object
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Count how many characters have a count greater than 1
    let repeatCount = 0;
    for (const count of Object.values(charCount)) {
        if (count > 1) {
            repeatCount++;
        }
    }

    return repeatCount;
}

// Example usage
const inputString = "raja";
const result = countRepeatingCharacters(inputString);
console.log(Number of repeating characters: ${result});