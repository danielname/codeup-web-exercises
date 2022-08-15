let flavor = prompt("Welcome to Codeup ice cream. What flavor do you want?");
flavor = flavor.toLowerCase();
// if (flavor === "chocolate") {
//     alert ("One chocolate coming right up!");
// } else if (flavor === "vanilla") {
//     alert ("One vanilla coming right up!");
// } else {
//     alert ("We do not have that flavor. Sorry! :(");
// }
switch (flavor) {
    case "chocolate":
        alert ("One chocolate coming right up!");
        break;
    case "vanilla":
        alert ("One vanilla coming right up!");
        break;
    case "strawberry":
        alert ("One strawberry coming right up!");
        break;
    default:
        alert ("We don not have that flavor. Sorry! :(");
}