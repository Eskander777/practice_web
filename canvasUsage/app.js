const canvas = document.getElementById("first-canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}

const canvasWithPath = document.getElementById("path");

if (canvasWithPath.getContext) {
  const ctx = canvasWithPath.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(150, 20);
  ctx.lineTo(200, 65);
  ctx.lineTo(150, 110);
  ctx.lineTo(100, 65);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(150, 65, 20, 0, Math.PI * 2);
  ctx.fill();
}

const canvasWithRound = document.getElementById("circle");

if (canvasWithRound.getContext) {
  const ctx = canvasWithRound.getContext("2d");

  ctx.beginPath();
  // ctx.moveTo(60, 120);
  ctx.arc(80, 80, 60, 0, Math.PI, true);
  // ctx.closePath();
  ctx.stroke();
}

const berzierCanvas = document.getElementById("berzier");

if (berzierCanvas.getContext) {
  const ctx = berzierCanvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.quadraticCurveTo(100, 25, 125, 50);
  ctx.quadraticCurveTo(100, 100, 75, 50);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 70);
  ctx.quadraticCurveTo(175, 50, 200, 70);
  ctx.lineTo(200, 100);
  ctx.closePath();
  ctx.fill();
}

const curveCanvas = document.getElementById("berzier-curve");

if (curveCanvas.getContext) {
  const ctx = curveCanvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

  ctx.stroke();
}

const canvasStar = document.getElementById("red-star");

if (canvasStar.getContext) {
  const ctx = canvasStar.getContext("2d");

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(150, 10);
  ctx.lineTo(170, 60);
  ctx.lineTo(220, 60);
  ctx.lineTo(180, 80);
  ctx.lineTo(195, 120);
  ctx.lineTo(150, 90);
  ctx.lineTo(110, 120);
  ctx.lineTo(125, 85);
  ctx.lineTo(80, 60);
  ctx.lineTo(130, 60);
  ctx.closePath();

  ctx.fill();
}
