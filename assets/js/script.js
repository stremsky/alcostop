// Click function for show the Modal

$(".menu-button").on("click", function(){
  $(".services").toggleClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".services").removeClass("active");
}


$(".cross").on("click", function(){
  closeModal();
});

// Call the closeModal function on the clicks/keyboard

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});




// Кнопка вверх

// $(function() {
 
// 	$(window).scroll(function() {
	 
// 		if($(this).scrollTop() != 0) {
		 
// 		$('.up').fadeIn();
		 
// 		} else {
		 
// 		$('.up').fadeOut();
		 
// 		}
		 
// 		});
	 
// 		$('.up').click(function() {
	 
// 		$('body,html').animate({scrollTop:0},0);
	 
// 	});
 
// });


