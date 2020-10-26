/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
let timerId;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  clearTimeout(timerId);
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    startTimerId();
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

// Hide Navbar of click of each element
$(".navbar a").click(function (event) {
  document.getElementById("navbar").style.top = "-150px";
  // check if window is small enough so dropdown is created
  collapseNavbarToggler();
});

function collapseNavbarToggler() {
  var toggle = $(".navbar-toggler").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
}

function hideNavbar() {
  document.getElementById("navbar").style.top = "-150px";
  collapseNavbarToggler()
}

function stopTimerId() {
  clearTimeout(timerId);
}

function startTimerId() {
  (timerId = setTimeout(hideNavbar, 2000));
}

$("#certificate").click(function (event) {
  $("#certificates").toggleClass("d-flex").slideToggle('1000', 'linear');
  // If it is visible, then change the icon of the gallary to upwards arrow
  $("#upDownIcon").toggleClass('fa-angle-double-up fa-angle-double-down');
});

// Certificate Carousel Setting
$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});

// show pdf reports on click

function showPDFOnClick(toggler, show){  
  $("#"+toggler).slideToggle('200', 'linear');
  if(show){
    setTimeout(function(){
       window.location = "#"+toggler; 
      }, 350);
  } else {
    setTimeout(function(){
      window.location = "#section-achievement"; 
     }, 100);
  }
};

// LAST:  Code to hide the Navbar after few seconds on complete load 
startTimerId();