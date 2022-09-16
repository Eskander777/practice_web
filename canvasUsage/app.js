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

  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(20, 70);
  ctx.lineTo(150, 70);
  ctx.lineTo(150, 20);
  ctx.fill();
}

