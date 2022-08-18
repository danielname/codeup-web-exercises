// for (let i = 1; i < 50; i += 2){
//     while (true) {
//         skip = prompt("Pick an odd number from 1 to 50.");
//         if (skip % 2 === 0 || skip < 1 || skip > 50) {
//             alert (`You failed a very simple task, try again`);
//         }
//         else {
//             break;
//         }
//     }
//     if (i === parseInt(skip)) {
//         console.log("Yikes! Skipping number: " + i);
//     } else {
//         console.log(`Here is an odd number: ` + i);
//     }
// }
let skip;
while (true) {
    skip = prompt("Pick an odd number from 1 to 50.");
    if (skip % 2 === 0 || skip < 1 || skip > 50) {
        alert (`You failed a very simple task, try again`);
    }
    else {
        break;
    }
}
for (let i = 1; i < 50; i += 2){
if (i === parseInt(skip)) {
    console.log("Yikes! Skipping number: " + i);
} else {
    console.log(`Here is an odd number: ` + i);
}
}