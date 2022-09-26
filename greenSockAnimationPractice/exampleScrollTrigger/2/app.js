gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".c",
//     toggleActions: "restart pause reverse pause", // may be: "play", "pause", "resume", "restart", "reverse", "complete", "none"
//     markers: true,
//     scrub: 1,
//     start: "top center",
//     end: "top 100px",
//     pin: true,
//   },
// });

const moveBox = gsap.to(".c", {
  //   scrollTrigger: {
  //     trigger: ".c",
  //     toggleActions: "restart pause reverse pause", // may be: "play", "pause", "resume", "restart", "reverse", "complete", "none"
  //     markers: true,
  //     scrub: 1,
  //     start: "top center",
  //     end: "top 100px",
  //     pin: true,
  //   },
  x: 400,
  rotation: 360,
  ease: "none",
  duration: 3,
});

ScrollTrigger.create({
  animation: moveBox,
  trigger: ".c",
  toggleActions: "restart pause reverse pause", // may be: "play", "pause", "resume", "restart", "reverse", "complete", "none"
  markers: true,
  scrub: 1,
  start: "top center",
  end: "top 100px",
  pin: true,
});
