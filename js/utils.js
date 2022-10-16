const dnUtils = {
    number: {
        // the following function checks if the argument is a number
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