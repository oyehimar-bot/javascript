function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}



function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMean(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
    }
    return sum / count;
}

const numbers = [3, 5, 7, 2, 8, -1, 4];
console.log(`The maximum value is: ${findMax(numbers)}`);
console.log(`The minimum value is: ${findMin(numbers)}`);
console.log(`The mean value is: ${findMean(numbers)}`);