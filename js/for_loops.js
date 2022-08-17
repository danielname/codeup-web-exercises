function showMultiplicationTable (number) {
    for (let i = 1; i <= 10; i++){
        console.log(number + " * " + i + " = " + (number * i));
    }
}

let currentNumber;
for (let i = 0; i < 10; i++) {
    currentNumber = Math.floor(Math.random() * 181) + 20;
    if (currentNumber % 2 === 0) {
        console.log(currentNumber + ` is even.`)
    } else {
        console.log(currentNumber + ` is odd.`)
    }
}

for (i = 1; i < 10; i++) {
    console.log(parseInt(parseFloat(`0.${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`)* 10 ** (i)));
}

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}