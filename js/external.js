console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
alert ("Wow, " + favColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
function movieCost(movie1Days, movie2Days, movie3Days) {
    return "$" + ((parseFloat(movie1Days) + parseFloat(movie2Days) + parseFloat(movie3Days)) * 3);
}
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
function payCalculation(hoursGoogle, hoursAmazon, hoursFacebook) {
    return "$" + ((hoursGoogle * 400) + (hoursAmazon * 380) + (hoursFacebook * 350));
}
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
function enroll(ifNotFull, ifNoConflict) {
    return ifNoConflict && ifNotFull;
}
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
function offer(ifBuyMoreThanTwo, ifOfferNotExpired, ifPremium) {
    if (ifPremium) {
        return true;
    } else if (ifBuyMoreThanTwo && ifOfferNotExpired) {
        return true;
    } else {
        return false;
    }
}