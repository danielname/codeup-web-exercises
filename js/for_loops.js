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