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


//Arrays of objects
let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

//to access hourlyWeather[index].property

//Looping over arrays of objects
for (let i = 0; i < hourlyWeather.length; i++) {
    console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}.`)
}

hourlyWeather.forEach(function(forecast) {
        console.log(`At ${forecast.time} the temperature will be ${forecast.temperature}, and feel like ${forecast.feels_like}.`);
    }
)

//objects with object properties
let texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
];

//texasInfo[0].currentWeather.temp would return the current temperature in san antonio

// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8
// }
//"this" references the object that you are currently in

// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6
// }
//YOU CANNOT USE ARROW FUNCTIONS IN METHOD DEFINITIONS BECAUSE THEY CANNOT BIND "THIS" TO THE OBJECT!!!!!!!


// controller object
//controller will take user input and calculate its effect on the game.
//
// let controller = {
//     attack: function (attacker, defender) {
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         view.displayAttackResults(attacker,defender,damage);
//         defender.hitPoints -= damage;
//     }
// }
//
//
//
// let view = {
//     displayAttackResults: function(attacker,defender,damage) {
//         console.log(`${defender.name} has ${defender.hitPoints} hit points.`);
//         console.log(`${attacker.name} attacks!`);
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         defender.hitPoints -= damage;
//         console.log(`${defender.name} now has ${defender.hitPoints - damage} hit points.`);
//         console.log(`---------------`);
//     }
// }

// controller.attack(fighter,monster);
// controller.attack(monster,fighter);

let controller = {
    attack: function (attacker, defender) {
        let defenderHPBeforeDamage = defender.hitPoints;
        let damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker,defender,defenderHPBeforeDamage,damage);
    }
}

let view = {
    displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage){
        console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
        console.log(attacker.name + " attacks!");
        console.log(`${attacker.name} does ${damage} hit points of damage!`);
        console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
        console.log("-----------------");
    }
}

let model = {
    fighter: {
        name: "Arata",
        hitPoints: 18,
        maxDamage: 8
    },
    monster: {
        name: "Goblin",
        hitPoints: 8,
        maxDamage: 6
    }
}

//creating objects
//define an empty object and dynamically create properties
let goblin = {};
goblin.name = "Goblin";

// create a function that returns objects
function makeMonster (name, hitPoints, maxDamage) {
    return {
        name: name,
        hitPoints: hitPoints,
        maxDamage: maxDamage
    }
}

model.hobgoblin = makeMonster("Hobgoblin", 11, 11);


//use object constructer

function Monster (name, hitPoints, maxDamage) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.maxDamage = maxDamage;
}

model.hobgoblinCaptain = new Monster (`Hobgoblin Captain`, 39, 14);