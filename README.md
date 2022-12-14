# main.css
website that was made containing only front-end coding in 1 year course
/* background */
.div2{
  height: 100vh;
  background-image: url('sumner.png');
  width:100%;
  background-color: #D0CAB2;
  background-position: center;
  background-size: cover;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  position: relative;
  color: #1A5F7A;
}


/* images */
.div1{
  float:right;
  margin-right: 50px;
  margin-bottom: 10px;
  margin-top:20px;
  width: 33.33%;
  padding: 5px;
  width: 33.3%;
}
.div3{

  margin-right: 50px;
  margin-bottom: 10px;
  margin-top:20px;
  width: 33.33%;
  padding: 5px;
  width: 33.3%;
}

.smaller-image{
    width:200px;
    text-align:center;
    display:block;
    border: 1px solid transparent;
    margin-right: 50px;
    margin-bottom: 10px;
    margin-top:20px;
    float:left;
    width: 33.33%;
    padding: 5px;
}
.border{
  borde-color: #A68DAD;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
}
.next-image{
    width:200px;
    text-align:center;
    display:block;
    border: 1px solid transparent;
    margin-right: 50px;
    margin-bottom: 5px;
    margin-top:90px;
    float:center;
    width: 33.33%;
    padding: 5px;
}

.box{
  margin-left: 210px;
}
.box2{
  margin-left: 40px;
  margin-bottom: 15px;
}


<link href="https://fonts.google.com/specimen/Anton" rel="stylesheet" type="text/css">

/* fonts */
h1{
 font-size: 60px;
 font-weight: 100;
 margin-top: 24px;
 margin-bottom: 15px;
 color: #086E7D;
}
h3{
  font-family: Bebas Neue;
 font-weight: bold;
}
p{
  font-size: 20px;
}
.color{
  color: #A68DAD;
}
.newtext{
  font-family: Bebas Neue;
}
.text-font{
  font-family: Bodoni MT, serif;
}
.colors{
  color:#086E7D;
}
.color-2{
  color:#21325E;
}
.text-location{
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
.white-color{
  color:white;
}
fieldset {
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 2px groove (internal value);
}
/* Navbar navigation */
.navbar{
  padding-bottom: 1.25rem;
}
.navbar-brand{
  font-size:1.5rem;
}
.nav-item{
  padding: 0 17px;
}
.nav-link{
  font-size: 1.4rem;
}
/* buttons */
.btn {
  background: #A68DAD;
  background-image: -webkit-linear-gradient(top, #A68DAD, #);
  background-image: -moz-linear-gradient(top, #A68DAD, #);
  background-image: -ms-linear-gradient(top, #A68DAD, #);
  background-image: -o-linear-gradient(top, #A68DAD, #);
  background-image: linear-gradient(to bottom, #A68DAD, #);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  text-shadow: 1px 1px 3px #a68dad;
  -webkit-box-shadow: 0px 1px 3px #A68DAD;
  -moz-box-shadow: 0px 1px 3px #A68DAD;
  box-shadow: 0px 1px 3px #A68DAD;
  font-family: Georgia;
  color: #f5f2f5;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: solid #A68DAD 2px;
  text-decoration: none;
  background-position: center;
  }

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
/* features */
#features{
  padding: 17% 15%;
  text-align: center;
}
.features-box{
  padding: 5%;
}
.icon{
  margin-bottom: 1rem;
  margin-left: 3rem;
  text-align: center;
  color: #787A91;
}
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active1, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
