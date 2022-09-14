let accessTheDOM = document.getElementById(`dc`);
let showMe = accessTheDOM.innerHTML;
console.log(showMe);

let like = document.getElementById(`like`);
let dontLike = document.getElementById(`dontLike`);
let output = `${dontLike.innerHTML} ${accessTheDOM} movies`;
console.log(output);

accessTheDOM.innerHTML += `Animated Universe`;