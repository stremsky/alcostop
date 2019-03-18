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


// Callback

$(document).ready(
    function () {
        $(".log-in").click(
            function () {
                $(".panel_call").animate({width:'toggle'}, 350)
                return false;
            }
        )
    }
);