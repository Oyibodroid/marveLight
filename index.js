const slideRight = document.querySelectorAll(".slide-right");
const slideLeft = document.querySelectorAll(".slide-left");

console.log(slideRight);

observerRightSlide = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.02) {
      entry.target.style.animation = `slideUpRight 1.5s ease`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});

slideRight.forEach((slide) => {
  observerRightSlide.observe(slide);
});


observerLeftSlide = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.02) {
      entry.target.style.animation = `slideUpLeft 1s ease`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});

slideLeft.forEach((slid) => {
  observerLeftSlide.observe(slid);
});
