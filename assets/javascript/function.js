//functionality for materialize
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
});

//functionality for portfolio (in-progress)
var frontend = $(".front-end")
var backend = $(".back-end")

backend.hide();
frontend.hide();

$(".front-button").on("click", frontEndProjects)
$(".back-button").on("click", backEndProjects)

function frontEndProjects() {
    frontend.show();
    backend.hide();
    $(".front").hide();
    $(".back").hide();
}

function backEndProjects() {
    frontend.hide();
    backend.show();
    $(".front").hide();
    $(".back").hide();
}

function slideShowProj() {
//Slideshow for project preivew
var images = ["assets/images/Giftastic.JPG", "assets/images/musicalityLogo.JPG", "assets/images/TrainScheduler.JPG", "assets/images/psychicgame.JPG"];
var count = 0;
var showImage;

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px' height='150'>");
}
function nextImage() {
  count++;
  $("#image-holder").html("<img src='assets/images/loading.gif' width='200px' height='150px'/>");
  setTimeout(displayImage, 1000);
  if (count === images.length) {
    count = 0;
  }
}
function startSlideshow() {
  showImage = setInterval(nextImage, 3000);
}
displayImage();
startSlideshow()
}
function slideShowBackend(){
    //Slideshow for project preivew
var images = ["assets/images/movie-this2.JPG", "assets/images/deployed-homepage.JPG", "assets/images/bamazonManagerOpt2.JPG"];
var count = 0;
var showImage;

function displayImage() {
  $("#image-holder2").html("<img src=" + images[count] + " width='400px' height='150'>");
}
function nextImage() {
  count++;
  $("#image-holder2").html("<img src='assets/images/loading.gif' width='200px' height='150px'/>");
  setTimeout(displayImage, 1000);
  if (count === images.length) {
    count = 0;
  }
}
function startSlideshow() {
  showImage = setInterval(nextImage, 3000);
}
displayImage();
startSlideshow()
}

slideShowProj();
slideShowBackend();