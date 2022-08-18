function showMultiplicationTable (number) {
    for (let i = 1; i <= 10; i++){
        console.log(number + " x " + i + " = " + (number * i));
    }
}

let currentNumber;
for (let i = 0; i < 10; i++) {
    currentNumber = Math.floor(Math.random() * 181) + 20;
    if (currentNumber % 2 === 0) {
        console.log(currentNumber + ` is even.`)
    } else {
        console.log(currentNumber + ` is odd.`);
    }
}

for (i = 1; i < 10; i++) {
    console.log(parseInt(parseFloat(`0.${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`)* 10 ** (i)));
}

// for (i = 1; i < 10; i++) {
// console.log(String(i).repeat(i));
// }

// for (i = 1; i < 10; i++) {
//     let s = [i]
//     s = s.fill(i,0,1);
//     s = s.push(i);
//     s = s.join("");
//     console.log(s);
//     s = s.split("");
// }
//
// let num = "";
// function numTriangle() {
//     for (let i = 1; i < 10; i++) {
//         for (let j = 1; j <= i; j++) {
//             num += i;
//         }
//         num += "\n";
//     }
//     console.log(num);
// }

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}

