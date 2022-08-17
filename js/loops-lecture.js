// //while loops
// let slices = 4;
// console.log(`there are ${slices} slices.`);
// while (slices > 0) /*the code will execute so long as the condition is true*/ {
//     console.log("I will have a slice");
//     slices--;
//     console.log(`now there are ${slices} left`);
//     //here the code does not stop executing, it returns to check the condition.
// }
// console.log("No more pizza.");
//
// // let counter = 0;
// // while (counter <= 100) {
// //     console.log(counter);
// //     counter++;
// // }
//
// let counter = 100; //controll variable
// while (counter >= 0) { //condition
//     console.log(counter);
//     counter-- //changing the value
// }
//
// let number = 5;
// while (number < 200) {
//     console.log(number);
//     number *= 2;
// }
//
// //User input in loops
// //price total accumulator (all of the below is pseudocode - listing what you need to do in plain english)
// //ask a user for input -- how much does somthing cost
// //Assign the user input to a variable
// //declare a variable to hold the total cost
// //tell the user what the total is
// //get the user input for the next item's cost
// //there needs to be a way for the user to say there are no more items.
//
// /*let totalCost = 0;
// while (confirm("Do you have more items to check out?")) {
//     let priceOfItem = parseFloat(prompt("Enter the price of your item"));
//     totalCost += priceOfItem;
//     alert(`Your running total is now $` + totalCost)
// }
// alert (`Your final total is $` + totalCost)*/
//
// let total = 0;
// while (true) { //use while(true) any time you want to give the user control of when they break out of a loop
//     let userInput = prompt( (`Enther the price of your item.` +
//                             `\n Enter STOP when you are done.`));
//     if (userInput === "STOP") {
//         alert("Your final total is $" + total.toFixed(2));
//         break;
//         else {
//             total += parseFloat(userInput);
//             alert (`Your running total is $` + total.toFixed(2));
//         }
//     }
// }
//

//do while loops
let number = Math.ceil(Math.random() * 6);
let guess; //global scope allows us to use guess as a condition for the while part.
do {
    guess = parseInt(prompt(`Enter a number between 1 and 6`));
} while (guess !== number);
alert(`your guess of ${guess} matches the number ${number}!`)