$ ("h1").click( function (){
  $ ("h1").css("color", "#3E497A");
});

$ ("i").click( function (){
  $ ("i").css("color", "#21325E");
});

//onmouseover
function mOver(obj) {
  obj.innerHTML = "Or concentration"
}

function mOut(obj) {
  obj.innerHTML = "Meditation"
}
//sound buttons
document.getElementById("sound").addEventListener("click", function(){
  var audio = new Audio('Sunset-Landscape.mp3');
audio.play();
});

//image change
function setImage(){
    document.getElementById("img1").src="https://i.pinimg.com/originals/12/d6/39/12d6394d57a5598054781fd136d3ea2b.jpg";
    document.getElementById("img2").src="new.jpg";
  }
  function setDifImage(){
    document.getElementById("img1").src="new.jpg";
    document.getElementById("img2").src="https://i.pinimg.com/originals/12/d6/39/12d6394d57a5598054781fd136d3ea2b.jpg";
  }


// display for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//animation with fadeToggle
$(document).ready(function(){
  $("button").click(function(){
    $("#animation").animate({
      height: 'toggle'
    });
  });
});
