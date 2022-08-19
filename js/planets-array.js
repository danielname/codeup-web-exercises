(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets = planets.unshift(`The Sun`)


    console.log('Adding "Pluto" to the end of the planets array.');
    planets = planets.push(`Pluto`);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets = planets.shift();

    console.log('Removing "Pluto" from the end of the planets array.');
    planets = planets.pop();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf(`Earth`));

    console.log("Reversing the order of the planets array.");
    planets = planets.reverse();

    console.log("Sorting the planets array.");
    planets = planets.sort();
})();


//bonus
function zatanna(string){
    let zArray = string.toLowerCase().split(" ");
    for (let i = 0; i < zArray.length; i++){
        zArray[i] = zArray[i].split("").reverse().join("");
    }
    return zArray.join(" ");
}