// //declaring an array literal
// //each item in an array is called an element
//
// let groceryList = [`bread`, `eggs`, `butter`, `milk`];
//
// // looping through arrays
// for (let i = 0; i < groceryList.length; i++){
//     if (i === groceryList.length - 1){
//         console.log(`I have to buy ` + groceryList[i] + `.`);
//     } else {
//         console.log(`I have to buy ` + groceryList[i] + `, and`);
//     }
// }
//
// // warmup
// let studyGroup = [`Daniel`, `Danny`, `Mason`, `Exabiier`];
// for (let i = 0; i < studyGroup.length; i++) {
//     if (i % 2 === 1) {
//         console.log(studyGroup[i] + " will be in the study group, and is bringing snacks.");
//     } else {
//         console.log(studyGroup[i] + " will be in the study group, but is not bringing snacks.");
//     }
// }
//
// //as a function
// function outputArray(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log((array[i]));
//     }
// }
//
// // outputArray(studyGroup);
//
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// // forEach takes an anonymous function
// // the function has up to three parameters: the element, the index, and the array.
// // the second and third parameters are optional
//
// // prices.forEach(function(preice, index){
// //     console.log("item number " + index + " costs " + price)
// // });
//
// prices.forEach(price => {
//     console.log(price);
// })
//
// // adding to arrays
// groceryList.push(`potatoes`); /*add to the end. can add multiple separated with commas*/
// groceryList.pop(); /*remove from the end*/
// groceryList.unshift(`sliced cheddar`); /*add to beginning*/
// groceryList.shift(); /*remove from beginning*/
//
// let indexOfButter = groceryList.indexOf(`butter`);
// groceryList[indexOfButter] = `peanut butter`; /*reassigns this index*/
//
//
// //slicing to add something to the middle
// let firstHalfOfMyGroceryList = groceryList.slice(0,2); /*if two indeces goes from first to, but not including, second*/
// let secondHalfOfMyGroceryList = groceryList.slice(2); /*if only one index goes from index to end*/
//
// firstHalfOfMyGroceryList.push(`butter`);
// groceryList = firstHalfOfMyGroceryList.concat(secondHalfOfMyGroceryList);
//
// //reversing and sorting
// groceryList.reverse();
// groceryList.sort();
// groceryList[3] = `Blueberries`;
// prices.sort(function(a,b){
//     return a-b;
// })
//
// console.log(groceryList.join(",").toLowerCase().split(",").sort());

function zatanna(string){
    let zArray = string.split(" ");
    for (let i = 0; i < zArray.length; i++){
        zArray[i] = zArray[i].split("");
        zArray[i] = zArray[i].reverse();
        zArray[i] = zArray[i].join("");
    }
    return zArray.join(" ");
}