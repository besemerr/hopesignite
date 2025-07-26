document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const white = document.getElementById("white");
  const video = document.getElementById("openingVideo");

  // sequence: fade out white screen -> let video play longer -> fade video -> reveal site
  setTimeout(() => {
    white.style.opacity = 0;
  }, 800);

  setTimeout(() => {
    video.style.opacity = 0;
  }, 7500); // extend video play time to 13 seconds

  setTimeout(() => {
    intro.remove();
    document.body.classList.add("intro-finished");
  }, 8500); // delay removing the intro
});
