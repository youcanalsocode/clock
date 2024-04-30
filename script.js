// coent);nsole.log(curr

setInterval(time, 1000);

function time() {
  var current = new Date();
  var h = current.getHours();
  var m = current.getMinutes();
  var s = current.getSeconds();
  document.getElementsByTagName("input")[0].value = h;
  document.getElementsByTagName("input")[1].value = m;
  document.getElementsByTagName("input")[2].value = s;
}
time();
