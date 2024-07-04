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
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  var currentDayAndTime = `${days[d].substr(0, 3)} ${h}:${m}`;
  return currentDayAndTime;
}

export function getFullDateAndTime() {
  var date = new Date();
  var d = date.getDay();
  var h = date.getHours();
  var dayMon = date.getDate();
  var mon = date.getMonth();
  var m = date.getMinutes();
  m = checkTime(m);
  var days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  var month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  var date = `${days[d]}, ${dayMon} ${month[mon]}`;
  var hour = `${h}:${m}`;
  return [date, hour];
}
