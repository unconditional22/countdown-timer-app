// JavaScript Document

/*const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date("Jan 1, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);*/

const countdown = () => {
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// Update the count down every 1 second

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element...
  document.querySelector(".day").innerText = days > 0 ? days : 0;
  document.querySelector(".hour").innerText = hours > 0 ? hours : 0;
  document.querySelector(".minute").innerText = minutes > 0 ? minutes : 0;
  document.querySelector(".second").innerText = seconds > 0 ? seconds : 0;
}

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);

  