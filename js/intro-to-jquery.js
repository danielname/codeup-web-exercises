$(`h3`).click(function(){
   $(this).next().slideToggle(500);
});
//$(this) refers to the element that triggeteg the event
//.next refers to the next sibling