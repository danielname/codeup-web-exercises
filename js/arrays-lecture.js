//declaring an array literal
//each item in an array is called an element

let groceryList = [`bread`, `eggs`, `butter`, `milk`];

// looping through arrays
for (let i = 0; i < groceryList.length; i++){
    if (i === groceryList.length - 1){
        console.log(`I have to buy ` + groceryList[i] + `.`);
    } else {
        console.log(`I have to buy ` + groceryList[i] + `, and`);
    }
}
