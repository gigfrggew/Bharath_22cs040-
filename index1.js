function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax([3, 5, 7, 2, 8])); 
console.log(findMax([]));