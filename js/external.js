// console.log("Hello from external JavaScript");
// alert("Welcome to my Website!");
// let favColor = prompt("What is your favorite color?");
// alert ("Wow, " + favColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let movie1Days = prompt("How many days are your renting the little mermaid?");
let movie2Days = prompt("How many days are your renting brother bear?");
let movie3Days = prompt("How many days are your renting hercules?");
// either of the following two lines will give the same alert; the second option automatically parses because of multiplication.
//alert ("$" + ((parseFloat(movie1Days) + parseFloat(movie2Days) + parseFloat(movie3Days)) * 3 " will be your total rental cost."));
alert ("$" + (movie1Days * 3 + movie2Days * 3 + movie3Days * 3) + " will be your total rental cost.");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// function payCalculation(hoursGoogle, hoursAmazon, hoursFacebook) {
//     return "$" + ((hoursGoogle * 400) + (hoursAmazon * 380) + (hoursFacebook * 350));
// }
let gHours = prompt("How many hours did you work at Google?");
let gPay = prompt("What is your pay rate at Google?");
let aHours = prompt("How many hours did you work at Amazon?");
let aPay = prompt("What is your pay rate at Amazon?");
let fHours = prompt("How many hours did you work at Facebook?");
let fPay = prompt("What is your pay rate at Facebook?");
alert ("Your total pay for this week will be $" + ((gHours * gPay) + (aHours * aPay) + (fHours * fPay)) + ".");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// function enroll(ifNotFull, ifNoConflict) {
//     return ifNoConflict && ifNotFull;
let notFull = confirm ("Are there open seats in the course?");
let noConflict = confirm("Can this class be fit into your schedule?");
if (notFull && noConflict) {
    alert ("You can enroll in this course.");
} else {
    alert ("You cannot enroll in this course.");
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// function offer(ifBuyMoreThanTwo, ifOfferNotExpired, ifPremium) {
//     if (ifPremium && ifOfferNotExpired) {
//         return true;
//     } else if (ifBuyMoreThanTwo && ifOfferNotExpired) {
//         return true;
//     } else {
//         return false;
//     }
// }
let numberOfItems = prompt ("How many items are you buying?");
let offerNotExpired = confirm ("Is the offer still active?");
let premium = confirm ("Are you a premium member?")
if (premium && offerNotExpired) {
    alert ("Great! You can use this offer!");
} else if (numberOfItems > 2 && offerNotExpired) {
    alert ("Great! You can use this offer!");
} else {
    alert ("Sorry, you cannot use this offer at this time.");
}