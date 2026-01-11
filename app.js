function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours === 0) {
    hours = 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("AMPM").innerText = ampm;
}
setInterval(updateTime, 1000);
updateTime();