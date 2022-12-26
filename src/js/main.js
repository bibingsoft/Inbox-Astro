import * as bootstrap from "bootstrap";
import cash from "cash-dom";

// NOTE:
//   Avoid using jQuery.
//   "cash" is a lightweight jQuery alternative for modern browsers.
//   See: https://github.com/fabiospampinato/cash

window.bootstrap = bootstrap;
window.cash = window.$ = cash;

cash(function() {
    // TODO: Write your JS code here.
    console.log('Hello JS!');
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
});


//collapse functionality


  $("#collapse-right").on('click',function(){
  $('#right-section').addClass('d-none');
  $('#collapsed-sidebar').removeClass('d-none');
  $('#chat-expand').addClass('animation-expand');        
  $('#chat-expand').toggleClass('col-lg-8 col-lg-11');


});

$("#expand-left").on('click',function(){
  $('#right-section').removeClass('d-none');
  $('#right-section').addClass('animation-expand');
  $('#chat-expand').removeClass('animation-expand'); 
 
  $('#collapsed-sidebar').addClass('d-none');
  $('#chat-expand').toggleClass('col-lg-11 col-lg-8');
  $('.gs-infowindow').addClass('animation');

});
//switcher icon toggle
  $(".switcher").on('click','li',function(){
    // remove classname 'active' from all li who already has classname 'active'
    $(".switcher li.active").removeClass("active"); 
    // adding classname 'active' to current click li 
    $(this).addClass("active"); 
});

//header search 
$('.global-search').on({
    focus: function () {
        $('.search-global-icon').addClass('search-global-icon-bg');
    },
  
    blur: function () {
      $('.search-global-icon').removeClass('search-global-icon-bg');
      $('.search-suggestion').addClass('d-none');
    }
  });

  //side bar filter toggle
    $("#filter-button").on('click',function(){
    $('#filter-button').toggleClass('filter-round filter-round-active');
  });
  //filter active toggle

    $("document").on('click',function(){
       
      
    if (!$("#dropdown-response-filter").hasClass("show")) {
      $("#filter-button").addClass("filter-round").removeClass("filter-round-active");
    }
  });


  //custom filter show and hide
  $('#custom-filter').on('click',function(){
    $(".custom-filter-box").toggleClass("d-none d-block");
  });
 // Prevents menu from closing when clicked inside
//  document.getElementById("dropdown-response-filter").addEventListener('click', function (event) {
      

//   event.stopPropagation();
// });

// toggleFab();

//Fab click
$('#prime').on('click',function(){
  toggleFab();
});

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('is-active');
  $('#prime').toggleClass('is-float');
  $('.fab').toggleClass('is-visible');
  
}

// Ripple effect
var target, ink, d, x, y;
$(".fab").on('click',function(e){
  target = $(this);
  //create .ink element if it doesn't exist
  if (target.find(".ink").length == 0)
    target.prepend("<span class='ink'></span>");

  ink = target.find(".ink");
  //incase of quick double clicks stop the previous animation
  ink.removeClass("animate");

  //set size of .ink
  if (!ink.height() && !ink.width()) {
    //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(target.outerWidth(), target.outerHeight());
    ink.css({
      height: d,
      width: d
    });
  }

  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - target.offset().left - ink.width() / 2;
  y = e.pageY - target.offset().top - ink.height() / 2;

  //set the position and add class .animate
  ink.css({
    top: y + 'px',
    left: x + 'px'
  }).addClass("animate");
});
