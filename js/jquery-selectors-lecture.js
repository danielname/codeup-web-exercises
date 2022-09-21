//reference to the selector
const $refToLibrary = $(`#library`);

//id selector to alter content
$refToLibrary.text(`jQuery makes life easier`);

//get reference to content
console.log($refToLibrary.text());

// let li3Text = $refToLibrary.text();
// $refToLibrary.text(li3Text + ` makes life easier`);
//
//
//css
// $(`.framework`).css(`border`, `1px solid black`);
$(`.framework`).css({
    'border': '1px solid black',
    'width': 'fit-content'
});

$('p, li').text(`I've taken over.`).css('color','hotpink');