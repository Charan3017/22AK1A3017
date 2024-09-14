function reverseEachWord(str) {
  const words = str.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}
const inputString = "Hello world";
const reversedString = reverseEachWord(inputString);
console.log(reversedString); // Outputs: "olleH dlrow"