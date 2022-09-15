// let accessTheDOM = document.getElementById(`dc`);
// let showMe = accessTheDOM.innerHTML;
// console.log(showMe);
//
// let like = document.getElementById(`like`);
// let dontLike = document.getElementById(`dontLike`);
// let output = `${dontLike.innerHTML} ${accessTheDOM} movies`;
// console.log(output);
//
// accessTheDOM.innerHTML += `Animated Universe`;
//
// marvel.setAttribute(`class`, `hotpink`);


let submitButton = document.getElementById(`colorSubmission`);
submitButton.onclick = function (){
    let colorInput = document.getElementById(`colorPreference`);
    let paragraphs = document.getElementsByTagName(`p`);
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
}

let theHulk = document.getElementById(`hulk`);
let hulkState = theHulk.getAttribute(`data-state`);
theHulk.innerText += ` is in ${hulkState} state`;

let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state, his strength is ${hulkStrength}, and his intelligence is ${hulkIntelligence}.`;
theHulk.innerText = hulkSummary;

let transformButton = document.getElementById(`transformHulk`);
transformButton.onclick = function() {
    hulkState =theHulk.dataset.state;
    if (hulkState === `hulk`) {
        theHulk.dataset.state = `Bruce Banner`;
    } else {
        theHulk.dataset.state = `hulk`;
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}