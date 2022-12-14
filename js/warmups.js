function average (array) {
    let x = 0;
    let i = 0;
    for (; i < array.length; i++) {
        if (typeof array[i] !== `number`) {
            return false;
        } else {
            x += array[i];
        }
    }
    return x / i;
}

function longestString (array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== `string`) {
            return false;
        } else {
            array = array.sort(function(a,b){
                return b.length-a.length;
            })
            console.log(array);
        }
    }
    return array[0];
}


//// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];
function calculateTotalStudents (array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        x += array[i].students;
    }
    return x;
}

//// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
//
// //convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
//
function convertToObject(string, number){
    return {class: string, students: number};
}
//
//
// var neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// var neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// var neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }
//
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
//
function desirableNeighborhood(neighborhoodObject){
    var totalRating = 0;
    for (var i = 0; i < neighborhoodObject.schools.length; i++){
        totalRating += neighborhoodObject.schools[i].rating;
    }
    return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
}

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

function beeramid (bonus,price){
    let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
    let x = 0; //accumulator variable
    for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
        x = i; //match the acumulator to the number of levels
    }
    return x;
}

// function beeramid (bonus,price) {
//     let totalcost = 0;
//     let levels = 0;
//     while (totalcost <= bonus) {
//         levels++
//         totalcost += levels * levels * price;
//     }
//     return levels;
// }



//// Given the attendance object, write a function that returns the total attendance across all teams.
const attendance = {
    miami: 32789,
    buffalo: 45687,
    portland: 24567
}

const ppl = Object.values(attendance).reduce((total,people)=>{
    return total + people;
},0)

// Given the attendance object, write a function that returns the average attendance
const avg = () => ppl / Object.entries(attendance).length;

// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values

const newObject = () => object = {totalAttendance: ppl,
    averageAttendance: avg()};


// Convert to Number
//  * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
//  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
//  *
//  * Examples
//  *
//  * convertToNumber({ piano: "200" }) ??? { piano: 200 }
//  * convertToNumber({ piano: "200", tv: "300" }) ??? { piano: 200, tv: 300 }
//  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ??? { piano: 200, tv: 300, stereo: 400 }
//  */
function convertToNumber (object){
    for(x in object){

    }
}

/*
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ??? {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ??? {streetNumber: '5408', streetName: 'Villa Nueva'}
 */

function convertAddressToObject (string) {
    let stringArray = string.split(` `);
    for (let i = 1; i < stringArray.length - 1; i++){

            stringArray[i] += ` ${stringArray[i + 1]}`;
            stringArray.splice(i + 1,1);
            i--;
    }
    return objec = {streetNumber: stringArray[0], streetName: stringArray[1]};
}

/*
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ??? 11
 */

function totalPets (arrayOfObjects) {
    let number = arrayOfObjects.reduce((total, person)=>{
        return total + person.pets;
    }, 0)
    return number;
}

/*
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ??? [1, 5]
 * >> minMax([2334454, 5]) ??? [5, 2334454]
 * >> minMax([1]) ??? [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

function minMax(array){
    array.sort(function(a,b){
        return a- b;
    })
    return [array[0], array[array.length - 1]];
}

/*----------------------------------DOM Warmups----------------------------------*/
//When the user clicks the button that has the text "change heading," the text of the <h1> element changes to read "I pwn the DOM"

$('#change').on('click',function(){
    $('#warmup').text('I pwn the DOM')
})

// Every time the user enters a character in the input with id "source", that character appears in the <p> element with the id "output"

$('#source').on('keyup',function(){
    let targetText = $('#source').val(); // it is more efficient to put this in the text parens
    $('#target').text(targetText);
})


// When the mouse enters the h2 with the text "Lorem Generator", a paragraph contain lorem appears in the div with the id of loremParagraphs
let loremArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum, error odit omnis perferendis quas quo voluptatum. Dolores dolorum neque nesciunt nihil porro quia sequi soluta veniam, veritatis. Dolore, eius.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem inventore iste, iure labore mollitia possimus quod rem sapiente! A asperiores dolor expedita, id libero perspiciatis sequi suscipit ut.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis dolorem id incidunt ipsam iste laboriosam maxime, natus nihil nobis, nulla numquam officia omnis quam reprehenderit sit suscipit voluptas voluptatibus!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores consectetur consequatur cumque et exercitationem fugiat iste labore magnam magni nam nihil non optio praesentium quas quisquam, quos reiciendis repudiandae!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolor dolores eius error incidunt iste magnam maiores nemo numquam obcaecati, perferendis quasi sapiente soluta! Cupiditate dolor exercitationem incidunt molestias quas!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae commodi dignissimos doloremque esse explicabo iure, laborum, molestias natus officiis omnis optio quibusdam quisquam similique velit voluptas voluptate! Aut, qui.'];

const loremRandom = () => Math.floor(Math.random() * loremArray.length);
$('h2').on('mouseenter',function (){
    $('#loremParagraphs').append(`<p>${loremArray[loremRandom()]}</p>`);
})

// When the user clicks on the "Hot Pink It" button, all the text in the div with the id of loremParagraphs becomes hotpink if it's black, or black if it's hotpink.
$('#hotPinkIt').on('click',function(){
    $('#loremParagraphs').toggleClass('hotpink');
})

// Bonus challenge: when the user clicks on the "Pink Blinky" button, all the text in the div with the id of loremParagraphs alternates between black and hotpink once every three seconds.
$('#blinkPink').on('click',function(){
    let pinkTimeout = setInterval(function(){
        $('#loremParagraphs').toggleClass('hotpink');
    }, 3000);
})