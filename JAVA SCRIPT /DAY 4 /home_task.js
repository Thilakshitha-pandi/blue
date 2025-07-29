const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

rl.question("Enter a sentence: ", (sentence) => {
  rl.question("Enter numbers separated by commas (e.g., 1,2,2,3): ", (numbersInput) => {
    const numberArray = numbersInput
      .split(',')
      .map(num => Number(num.trim()))
      .filter(num => !isNaN(num));

    const reversedSentence = reverseWords(sentence);
    const uniqueNumbers = removeDuplicates(numberArray);
    const vowelCount = countVowels(sentence);

    console.log("\nReversed words");
    console.log(reversedSentence);
    console.log("Unique numbers");
    console.log(uniqueNumbers.join(', '));
    console.log("Vowel count");
    console.log(vowelCount);

    rl.close();
  });
});
