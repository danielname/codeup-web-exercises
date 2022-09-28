
// Numbers
// the following function checks if the argument is a number
// isNumber(arg){
//     return !(isNaN(arg) || typeof arg === `boolean` || arg === null);
// }

// the following function accepts an array of numbers and returns the average of those numbers.
function average(array){
    return (array.reduce(function(a,b){
        return a+b;
    },0)) / array.length;
}


/* -------------------------------------------------------------------------------------------------*/
//strings
// the following function takes a string and capitalizes the first letter of each word
function capitalizeName (string) {
    let stringArray = string.toLowerCase().split('');
    for (let i = 0; i < stringArray.length; i++){
        if (i === 0 || stringArray[i - 1] === ' '){
            stringArray[i] = stringArray[i].toUpperCase();
        }
    }
    return stringArray.join('');
}

/* -------------------------------------------------------------------------------------------------*/
// array parsing
// the following function finds the most frequently appearing item in an array
function mostFrequent(array){
    const arrayElementsCount = array.reduce(function(total, element){
        if (!total[element]) {
            total[element] = 1;
        } else {
            total[element] = total[element] + 1;
        }
        return total;
    }, {});
    const arraySorted = Object.entries(arrayElementsCount).sort(function(a, b){
        return b[1] - a[1];
    });
    return arraySorted[0][0];
}