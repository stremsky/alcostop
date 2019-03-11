// Click function for show the Modal

$(".menu-button").on("click", function(){
  $(".services").toggleClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".services").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".cross").on("click", function(){
  closeModal();
});



$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});


