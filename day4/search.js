function indexOfValue(arr, target) {
    return arr.findIndex(item => item === target);
}

console.log(indexOfValue([3, 5, 7, 2, 8, -1, 4], 2));