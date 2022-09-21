const square = document.getElementById("square");

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const halfWindowWidth = windowWidth / 2;
const halfWindowHeight = windowHeight / 2;

function updateCard(e) {
  const cursorX = e.pageX;
  const cursorY = e.pageY;

  const moveX = (cursorX - halfWindowWidth) * -0.2;
  const moveY = (cursorY - halfWindowHeight) * -0.2;
  const rotateY = moveX * -0.09;

  gsap.to("#square", {
    x: moveX * 2,
    y: moveY * 2,
    rotationY: rotateY * 2,
  });
}

square.addEventListener("mousemove", updateCard);
