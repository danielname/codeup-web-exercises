const dnUtils = {
    number: {
        // the following checks if the argument is a number
        isNumber(arg) {
            return !(isNaN(arg) || typeof arg === `boolean` || arg === null)
        },
        // the following is a random number generator that defaults from 1 to the number of options
        rng(numberOfOptions, startingValue = 1) {
            return Math.floor(Math.random() * numberOfOptions) + startingValue;
        },
        // the following function accepts an array of numbers and returns the average of those numbers.
        average(array) {
            return (array.reduce(function (a, b) {
                return a + b;
            }, 0)) / array.length;
        },
        // the following checks if the argument is an odd number
        isOdd (number) {
            return Math.abs(number) % 2 === 1;
        },
        // the following checks if the argument is an even number
        isEven (number) {
            return number % 2 === 0;
        }
    },
    geometry: {
        // the following returns the circumference of a circle given a radius
        circumference (radius) {
            const pi = Math.PI;
            return 2 * pi * radius;
        }
    },
    conversions: {
        // the following takes miles and returns kilometers
        miToKm (miles) {
            return miles * 1.609
        },
        galToLiter (gallons) {
            // the following takes gallons and returns liters
            return gallons * 3.78541
        },
        celsiusToFahrenheit (celsius) {
            // the following takes celsius and returns fahrenheit
            return (celsius * (9 / 5)) + 32
        }
    },
    string: {
        // the following function takes a string and capitalizes the first letter of each word
        capitalizeName(string) {
            let stringArray = string.toLowerCase().split('');
            for (let i = 0; i < stringArray.length; i++) {
                if (i === 0 || stringArray[i - 1] === ' ') {
                    stringArray[i] = stringArray[i].toUpperCase();
                }
            }
            return stringArray.join('');
        }
    },
    array: {
        // the following function finds the most frequently appearing item in an array
        mostFrequent(array) {
            const arrayElementsCount = array.reduce(function (total, element) {
                if (!total[element]) {
                    total[element] = 1;
                } else {
                    total[element] = total[element] + 1;
                }
                return total;
            }, {});
            const arraySorted = Object.entries(arrayElementsCount).sort(function (a, b) {
                return b[1] - a[1];
            });
            return arraySorted[0][0];
        }
    }
}