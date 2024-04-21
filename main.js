let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
  seconds++;
  if(seconds == 60) {
    seconds = 0;
    minutes++;
    if(minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10  ? "0" + hours : hours;
  let m = minutes < 10  ? "0" + minutes : minutes;
  let s = seconds < 10  ? "0" + seconds : seconds;

  displayTime.innerHTML = h +":"+ m +":"+ s;
}


var imgStart = document.getElementById("playImg");
  imgStart.addEventListener("click", function watchStart() {
  if (timer !== null){
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
})


var imgStop = document.getElementById("stopImg");
  imgStop.addEventListener("click", function watchStop() {
  clearInterval(timer)
})


var imgReset = document.getElementById("resetImg")
  imgReset.addEventListener("click", function watchStop() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0,0,0];
  displayTime.innerHTML = "00:00:00"
})