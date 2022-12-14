    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Daniel",
        lastName: "Name",
        sayHello: function() {
            return "hello " + this.firstName + this.lastName;
        }
    }
    console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function() {
    //     return "hello " + person.firstName;
    // }


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    for (let i = 0; i < shoppers.length; i++) {
        if (shoppers[i].amount > 200){
            console.log(`Hello ${shoppers[i].name}, your subtotal of $${(shoppers[i].amount).toFixed(2)} will be discounted by $${(shoppers[i].amount * 0.12).toFixed(2)}, making your final total $${(shoppers[i].amount * 0.88).toFixed(2)}. Thank you for shopping at HEB!`);
        } else {
            console.log(`Hello ${shoppers[i].name}, your final total is $${(shoppers[i].amount).toFixed(2)}. Thank you for shopping at HEB!`);
        }
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
// let books = [
//         {author: {
//             firstName: `Thomas`,
//             lastName: `Garrity`
//             },
//         title: `All The Math You Missed`},
//         {author: {
//                 firstName: `Homer`,
//                 lastName: ``
//             },
//             title: `The Iliad And The Odyssey`},
//         {author: {
//                 firstName: `Brian`,
//                 lastName: `Cooney`
//             },
//             title: `Posthumanity`},
//         {author: {
//                 firstName: `Fritjof`,
//                 lastName: `Capra`
//             },
//             title: `The Turning Point`},
//         {author: {
//                 firstName: `Jordan`,
//                 lastName: `Peterson`
//             },
//             title: `12 Rules For Life`},
//     ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// for (let i = 0; i < books.length; i++) {
    // console.log(`Book #${parseFloat(i)+1} \nTitle: ${books[i].title} \nAuthor: ${books[i].author.firstName} ${books[i].author.lastName} \n---\n...`);
// }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author name and returns a book object with the properties described previously. Refactor your code that creates the books array to instead use your function.*/
    let books = [];
    function createBook (title,authorFirstName,authorLastName){
        books.push({
            author: {firstName: authorFirstName,
                lastName: authorLastName
            },
            title: title})
        return {
            author: {firstName: authorFirstName,
                lastName: authorLastName
            },
            title: title}
    }


     /* - Create a function named `showBookInfo` that accepts a book object and outputs the information described above. Refactor your loop to use your`showBookInfo` function.
     */


function showBookInfo(bookObject){
    console.log(`Title: ${bookObject.title} \nAuthor: ${bookObject.author.firstName} ${bookObject.author.lastName}`);
}
for (let i = 0; i < books.length; i++) {
    console.log(`Book # ${i+1}`);
    showBookInfo(books[i]);
}