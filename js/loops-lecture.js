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