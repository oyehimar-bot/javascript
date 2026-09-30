const products = [
    {name: 'Laptop', price: 450000, category: 'Electronics'},
    {name: 'Phone', price: 650000, category: 'Electronics'},
    {name: 'Tablet', price: 100000, category: 'Electronics'},
    {name: 'Shirt', price: 4000, category: 'Clothing'},
    {name: 'Pants', price: 5000, category: 'Clothing'},
    {name: 'Shoes', price: 3000, category: 'Clothing'},
    {name: 'Chair', price: 50000, category: 'Furniture'},
    {name: 'Table', price: 29999, category: 'Furniture'},
]

const under50000 = products.filter(product => product.price < 50000);

const allNames = products.map(product => product.name);

const elctronicsTotal = products
    .filter(product => product.category === 'Electronics')
    .reduce((total, product) => total + product.price, 0);

const shoesIndex = products.findIndex(product => product.name === 'Shoes');

const firstFurniture = products.find(product => product.category === 'Furniture');

const hasExpensiveItem = products.some(product => product.price > 400000);

const allOver5000 = products.every(product => product.price > 5000);

const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);

console.log('Original fisrt item:', products[0]);
console.log('Sorted first item:', sortedByPrice[0]);
console.log('Original unchanged?:', products[0].price === 450000);
console.log('All product names:', allNames);



const numbers = [3, 5, 7, 2, 8, -1, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
const max = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
const min = numbers.reduce((min, num) => (num < min ? num : min), numbers[0]);
const mean = sum/ numbers.length;

console.log(sum, max, min, mean);