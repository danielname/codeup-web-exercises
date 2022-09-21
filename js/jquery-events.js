$(function(){
   $(`#clickme`).on(`click`, function(){
       alert(`yo`);
   });

   $(`#create-an-element`).on(`click`, function(){
       $(this).after('<button class="will-this-work">Click Me</button>');
   });

   $('#dynamic-content').on('click', '.will-this-work',function(){
       alert('bingo!');
   });
});