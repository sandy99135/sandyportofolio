$(document).ready(function(){

	$(document).scroll(function(){
var scrool = $(document).scrollTop();
var sliba = $('#skill').offset().top - 300;
if(scrool >= sliba ) {

      $("#language img").fadeIn(1200)
    
    }
});
$('.laptop img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src') 
        , 'data-other-src': $(this).attr('src') 
    })
});

$('.laptop img').on('click' , function(){
	
	var slika = $(this).attr('value');
	$('.popup').fadeIn(200);
	$('.' + slika).fadeIn(200);
	$('.close').on('click',function(){
	$('.popup').slideUp(200);
	$('.' + slika).slideUp(200);
})

})
});
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.background = "rgba(19, 18, 18)";
//   } else {
//     document.getElementById("navbar").style.background = "rgba(19, 18, 18, 0.5)";
//   }
// }