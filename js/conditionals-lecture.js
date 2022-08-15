// let flavor = prompt("Welcome to Codeup ice cream. What flavor do you want?");
// flavor = flavor.toLowerCase();
// if (flavor === "chocolate") {
//     alert ("One chocolate coming right up!");
// } else if (flavor === "vanilla") {
//     alert ("One vanilla coming right up!");
// } else {
//     alert ("We do not have that flavor. Sorry! :(");
// }
// switch (flavor) {
//     case "chocolate":
//         alert ("One chocolate coming right up!");
//         break;
//     case "vanilla":
//         alert ("One vanilla coming right up!");
//         break;
//     case "strawberry":
//         alert ("One strawberry coming right up!");
//         break;
//     default:
//         alert ("We don not have that flavor. Sorry! :(");
// }

let decision = confirm("Are you sure you want to close this page?");
// alert(decision);
//
// if (decision) {
//     alert ("OK, closing the page.");
// } else {
//     alert ("OK, keeping the page open.");
// }

decision? alert ("Closing the page."): alert ("Keeping page open.");
//if condition? if output: else output;

// let number = prompt("Enter a number");

// function divisibleByFive (number) {
//     if (number % 5 === 0) {
//         alert ("That number is divisible by 5.");
//     } else {
// //         alert ("That number is not divisible by 5.");
// //     }
// // }
// /* test if a prompt INSIDE THE  PARAMETER could work */
//
// // (number % 5 === 0)? alert ("That number is divisible by 5."): alert ("That number is not divisible by 5.");
// function divisibleByFive (number) {
//     alert ((number % 5 === 0)? "That number is divisible by 5.": "That number is not divisible by 5.");
// }
// divisibleByFive(prompt("Enter a number."));
//

// function alertMVPCustomer (purchaseTotal) {
//     if (purchaseTotal > 1000) {
//         alert ("MVP!");
//     }
// }
function isMVP(purchaseTotal) {
    purchaseTotal > 1000? alert ("MVP!")
}
