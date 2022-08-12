// The parts of a function
// 1. the function keyword
// 2. the name of the function. Call your function something that helps you remember what the function does.
// 3. parentheses which contain 0 or more parameters.
// 4. if there is more than one parameter, the list is comma separated.
// 5. curly brackets contain the function body.
// 6. the function body contains the code that runs when the function is invoked.
// 7. [optional but common] return statement.
// function sayHello (greeting, name) {
//     console.log(greeting + name);
// }

//scope
// here number has global scope
// let number = 20;
// function localOrGlobal () {
//     console.log(number);
//}

// here number has local scope. console.log will result in an error.
// function localOrGlobal () {
//     let number = 20;
// }
// console.log(number);

// the local scope shadows the global scope (if there is a locally defined variable, it obscures the globally defined one until the function is done running.
// let number = 20;
// function localOrGlobal() {
//     let number = 10;
//     console.log(number);
// }
// localOrGlobal();
// console.log(number);

// function expression (will not get hoisted)
//
// const bark = function() {
//     console.log("woof!");
// }
// // function declaration. the browser will go over your code first to put declared functions into memory, so basically they're always at the top.
// yap()
// function yap() {
//     console.log("yip yip!");
// }

