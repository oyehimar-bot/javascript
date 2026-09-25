function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'mutiply': return num1 * num2;
        case 'divide': return num1 / num2;
        case 'mod': return num1 % num2;
        default: return 'Invalid Entry';
    }
}

// Example usage:
console.log(calculate('add', 10, 5));
console.log(calculate('divide', 20, 4));
