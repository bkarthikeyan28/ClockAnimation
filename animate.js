var canvas;
var ctx;
var date;
var angle;
var secHandLength;
function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  date = new Date;
  secHandLength = 200;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function showClock() {
    init();
    drawOuterDial1();
    drawOuterDial2();
    drawCenterDial();
    markHours();
    markSeconds();
    showSeconds();
    showMinutes();
    showHours();
    var x = "Hours: " + date.getHours();
    x += " Minutes: " + date.getMinutes();
    x += " Seconds: " + date.getSeconds();
    x += "." + date.getMilliseconds();
    document.getElementById("time").innerHTML = x;
}
function drawOuterDial1() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 10, 0, Math.PI * 2);
    ctx.strokeStyle = '#92949C';
    ctx.stroke();
}
function drawOuterDial2() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 7, 0, Math.PI * 2);
    ctx.strokeStyle = '#929BAC';
    ctx.stroke();
}
function drawCenterDial() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.fillStyle = '#353535';
    ctx.strokeStyle = '#0C3D4A';
    ctx.stroke();
}

function markHours() {

    for (var i = 0; i < 12; i++) {
        angle = (i - 3) * (Math.PI * 2) / 12;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
        var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
        var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 7));
        var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 7));
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#466B76';
        ctx.stroke();
    }
}

function markSeconds() {
    for (var i = 0; i < 60; i++) {
        angle = i * (Math.PI * 2) / 60;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
        var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
        var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 30));
        var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 30));
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#C4D1D5';
        ctx.stroke();
    }
}

function showSeconds() {
    var sec = date.getSeconds();
    sec += (date.getMilliseconds()) / 1000;
    angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength),
        canvas.height / 2 + Math.sin(angle) * secHandLength);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo((canvas.width / 2 - Math.cos(angle) * 20),
        canvas.height / 2 - Math.sin(angle) * 20);
    ctx.strokeStyle = '#586A73';
    ctx.stroke();
}

function showMinutes() {
    var min = date.getMinutes();
    min += (date.getSeconds() / 60);
    angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.1),
        canvas.height / 2 + Math.sin(angle) * secHandLength / 1.1);
    ctx.strokeStyle = '#999';
    ctx.stroke();
}

function showHours() {
    var hour = date.getHours();
    var min = date.getMinutes();
    min += (date.getSeconds() / 60);
    angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.5),
        canvas.height / 2 + Math.sin(angle) * secHandLength / 1.5);
    ctx.strokeStyle = '#000';
    ctx.stroke();
}
