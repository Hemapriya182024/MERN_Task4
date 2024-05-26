let array = [1, 2, 2, 3, 4, 4, 5];

let removeDuplicates = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

let uniqueArray = removeDuplicates(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
