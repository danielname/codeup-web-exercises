// objects example

let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"
}

// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// console.log(currentWeather["humidity"]); //bracket notation allows us to use variables
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);


//you can do anything to an object property that you can do to variables
// console.log(`The current weather is ` + currentWeather.temp);
// if (currentWeather.temp > 95) {
//     console.log(`It's kind of hot.`);
// } else  {
//     console.log(`It's cool today for texas`);
// }

//dynamically defining properties
currentWeather.uvIndex = 9.79;

//for in loops
for (let property /*called it x on w3schools*/ in currentWeather) {
    console.log(property + ": " + currentWeather[property]);
}

//methods and properties represent strings, numbers, etc as objects and identify the property

// currentWeather is a reference to the object, which is not the same as the name of a variable.
// in variables the bits represented by the var are stored in the var, but in objects they are not stored in the same place
// each pair in an object is a property that has key: variable

// an object that has a function as a variable is the foundations for a method.
