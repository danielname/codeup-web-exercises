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