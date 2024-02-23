
const flexSlides = document.querySelectorAll(".flex-slide");

for (const flexSlide of flexSlides) {
  flexSlide.addEventListener("mouseenter", () => {
    flexSlide.querySelector(".flex-title").style.transform = "rotate(0deg)";
    flexSlide.querySelector(".flex-title").style.top = "10%";
    flexSlide.querySelector(".flex-about").style.opacity = "1";
  });

  flexSlide.addEventListener("mouseleave", () => {
    flexSlide.querySelector(".flex-title").style.transform = "rotate(90deg)";
    flexSlide.querySelector(".flex-title").style.top = "15%";
    flexSlide.querySelector(".flex-about").style.opacity = "0";
  });
}
