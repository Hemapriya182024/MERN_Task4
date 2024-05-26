const array = ['level', 'hello', 'radar', 'world', 'madam', 'example'];

const isPalindrome = (str) => str === str.split('').reverse().join('');
const findPalindromes = (arr) => arr.filter(isPalindrome);

const palindromes = findPalindromes(array);

console.log(palindromes); 