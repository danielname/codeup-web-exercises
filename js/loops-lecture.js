//while loops
let slices = 4;
console.log(`there are ${slices} slices.`);
while (slices > 0) /*the code will execute so long as the condition is true*/ {
    console.log("I will have a slice");
    slices--;
    console.log(`now there are ${slices} left`);
    //here the code does not stop executing, it returns to check the condition.
}
console.log("No more pizza.");

// let counter = 0;
// while (counter <= 100) {
//     console.log(counter);
//     counter++;
// }

let counter = 100; //controll variable
while (counter >= 0) { //condition
    console.log(counter);
    counter-- //changing the value
}

let number = 5;
while (number < 200) {
    console.log(number);
    number *= 2;
}