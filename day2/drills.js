const values = [0, 1, -1, "", "hello", null, undefined, NaN, [], {}];

for (const value of values) {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
}

