isNumber(arg){
    return !(isNaN(arg) || typeof arg === `boolean` || arg === null);
}