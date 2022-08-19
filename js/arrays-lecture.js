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

// warmup
let studyGroup = [`Daniel`, `Danny`, `Mason`, `Exabiier`];
for (let i = 0; i < studyGroup.length; i++) {
    if (i % 2 === 1) {
        console.log(studyGroup[i] + " will be in the study group, and is bringing snacks.");
    } else {
        console.log(studyGroup[i] + " will be in the study group, but is not bringing snacks.");
    }
}

//as a function
function outputArray(array) {
    for (let i = 0; i < array.length; i++){
        console.log((array[i]));
    }
}