const exchangeRate = 1331.75; 

function nairaToUsd(amount) {
    return amount / exchangeRate;
}

function usdToNaira(amount) {
    return amount * exchangeRate;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kgToPounds(kg) {
    return kg * 2.20462;
}

function poundsToKg(pounds) {
    return pounds / 2.20462;
}

console.log(`Naira to USD: ${nairaToUsd(10000).toFixed(2)} naira`); 
console.log(`USD to Naira: ${usdToNaira(100).toFixed(2)} USD`);
console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(25).toFixed(2)}°F`);
console.log(`Fahrenheit to Celsius: ${fahrenheitToCelsius(77).toFixed(2)}°C`);
console.log(`Kilograms to Pounds: ${kgToPounds(70).toFixed(2)} lbs`);
console.log(`Pounds to Kilograms: ${poundsToKg(154.324).toFixed(2)} kg`);