$(document).ready(function(){
  // Add smooth scrolling to all Links
  $("a").on('click', function(event)
{

  //make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    //Store hash
    var hash = this.hash;
    $('html, body').animate({
      scrollTop:
      $(hash).offset().top
    }, 500, function(){
      //Add hash to URL after scrolling
      window.location.hash = hash;
    });
  } // End If
 });
});
