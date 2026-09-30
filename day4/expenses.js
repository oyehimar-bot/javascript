const expenses = [
 { id: 1, title: "Rice", amount: 4000, category: "food" },
 { id: 2, title: "Phone", amount: 450000, category: "electronics" },
 { id: 3, title: "Soap", amount: 800, category: "home" },
 { id: 4, title: "Bread", amount: 1500, category: "food" }
];

function addExpense(list, newExpense) {
 return list.concat(newExpense);
}

function removeExpense(list, idToRemove) {
 return list.filter(item => item.id!== idToRemove);
}

function totalSpent(list) {
 return list.reduce((sum, item) => sum + item.amount, 0);
}

function byCategory(list, category) {
 return list.filter(item => item.category === category);
}

function biggestExpense(list) {
 if (list.length === 0) return null;
 return list.reduce((biggest, item) => {
 return item.amount > biggest.amount? item: biggest;
 }, list[0]);
}

function hasExpensiveItem(list, limit) {
 return list.some(item => item.amount > limit);
}

function sortedByAmount(list) {
 return list.slice().sort((a, b) => a.amount - b.amount);
}

console.log("Total spent:", totalSpent(expenses));
console.log("Food expenses:", byCategory(expenses, "food"));
console.log("Biggest expense:", biggestExpense(expenses));
console.log("Has item over 100000:", hasExpensiveItem(expenses, 100000));
console.log("Sorted by amount:", sortedByAmount(expenses));