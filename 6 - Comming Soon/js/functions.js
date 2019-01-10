"use strict";

var countDownDate = new Date("Feb 15, 2019 12:00:00").getTime();
var countDownDate1 = new Date("Feb 15, 2019 12:00:00")

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("timer").innerHTML = days + " days  " + hours + " hours  "
  + minutes + " minutes  " + seconds + " seconds  ";

  
var dateUntilToString = countDownDate1.toUTCString();
    
document.getElementById("until").innerHTML = "Until the website launch on  " + dateUntilToString; 
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }


}, 1000);

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


