$(function showTime() {
  startTime();
})

function startTime() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var MM = today.getMonth() + 1;
  var dd = today.getDate();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();
  MM = checkTime(MM);
  dd = checkTime(dd);
  mm = checkTime(mm);
  ss = checkTime(ss);
  var day;
  if (today.getDay() == 0) day = "日曜日 "
  if (today.getDay() == 1) day = "月曜日 "
  if (today.getDay() == 2) day = "火曜日 "
  if (today.getDay() == 3) day = "水曜日 "
  if (today.getDay() == 4) day = "木曜日"
  if (today.getDay() == 5) day = "金曜日"
  if (today.getDay() == 6) day = "土曜日"
  document.getElementById('nowDateTimeSpan').innerHTML = yyyy + "-" + MM + "-" + dd + " ";
  document.getElementById('nowDateTimeSpan2').innerHTML = hh + ":" + mm + ":" + ss + " ";
  document.getElementById('nowDateTimeSpan3').innerHTML = day;
  setTimeout('startTime()', 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}