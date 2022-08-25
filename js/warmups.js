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