

/*
Ici on gere le changement de page en général
*/
var currentPage = 0;
var lastScrollTop = 0;
var isAnimating = false;


var pages = $('.page');
var pagesTop = pages.map(function(i,page){
    return $(page).position().top
})
var goToPage = function(num){
  isAnimating = true;
  currentPage = num;
  $('html, body').animate({
    scrollTop: $(pages[num]).position().top
  }, 'slow',function(){
    setTimeout(function() {
      isAnimating = false;
    },100)
  });
}


/*
Quand on scroll, on va la page suivante (ou précedente)
*/

$(window).scroll(function(event){
  var current = $(this).scrollTop()
  if(!isAnimating){

         if (current > lastScrollTop){
             // downscroll code
             goToPage(currentPage+1)
         } else {
            // upscroll code
            goToPage(currentPage-1)
         }
   }
   lastScrollTop = current;
});



/*
quand on click sur le bouton,
on descend jusqu'au illu
*/

var Btn_go_to_illu = $('#goToIllu');
Btn_go_to_illu.on('click',function(event){
  event.preventDefault();
  goToPage(1);

})
