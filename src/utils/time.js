export function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

export function getDayAndTime() {
  var date = new Date();
  var d = date.getDay();
  var h = date.getHours();
  var m = date.getMinutes();
  m = checkTime(m);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var currentDayAndTime = `${days[d].substr(0, 3)} ${h}:${m}`;
  return currentDayAndTime;
}
