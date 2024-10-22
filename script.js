window.onload = function() {
 taisnsturis();
}
function taisnsturis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.lineWidth = 15;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
}
function aplis() {
  var c = document.getElementById("zimejums"); 
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 3 * Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#d9b8e0";
  ctx.fillStyle = "white";
  ctx.stroke();
  ctx.fill();
}

function teksts() {
var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.font = "30px Sofia";
  ctx.fillStyle = "#d957e0";
  ctx.fillText("Hello World!", 100, 50);
}

function linija()  {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  var img = document.getElementById("leaf");
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(400, 400);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#d8686f";
  ctx.drawImage(img, 0, 200, 300, 300);
}

function attels() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  var img = document.getElementById("leaf");
  ctx.drawImage(img, 0, 200, 300, 300);
  ctx.lineWidth = 5;
  ctx.srokeStyle = "#f868f9";
  ctx.strokeRect(10, 10, 150,50)
}