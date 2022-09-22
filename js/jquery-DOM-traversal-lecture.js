$(function (){
    //.each version allows is to pass an index that the commented out version below does not
    $('li').each(function (index){
        if(index % 2 !==0) {
            $(this).css('font-style', 'italic');
        }
    });

    // $('li').css('font-style', 'italic');
})