const newYearDate = new Date("2024-01-01T00:00:00").getTime();

setInterval(function() {
  const today = new Date().getTime();
  const remainingTime = newYearDate - today;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("output").innerHTML = 'Time till New Year: ' + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);