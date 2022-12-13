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

 // Prevents menu from closing when clicked inside
//  document.getElementById("dropdown-response-filter").addEventListener('click', function (event) {
      

//   event.stopPropagation();
// });

$('.float').on('click',function(){
  $(this).toggleClass('open');
});