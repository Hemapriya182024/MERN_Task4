let array = ['level', 'hello', 'radar', 'world', 'madam', 'example'];

let findPalindromes = function(arr) {
    return arr.filter(item => {
        let reversed = item.split('').reverse().join('');
        return item === reversed;
    });
};

let palindromes = findPalindromes(array);

console.log(palindromes); 