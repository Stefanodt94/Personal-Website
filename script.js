//Title animations
document.addEventListener("DOMContentLoaded", function () {
  const border = document.querySelector(".border");
  const titles = document.querySelectorAll(".title");

  function startTitleAnimations() {
    titles.forEach((title, index) => {
      setTimeout(() => {
        title.classList.add("visible");
      }, index * 1100);
    });
  }

  setTimeout(() => {
    border.classList.add("animation");
    setTimeout(startTitleAnimations, 1500);
  }, 1500);
});

//photo animation
document.addEventListener("DOMContentLoaded", function () {
  const photo = document.querySelector(".photo");

  setTimeout(() => {
    photo.classList.add("visible");
  }, 500);
});

//hidden text
document.addEventListener("DOMContentLoaded", function () {
  const circleItems = document.querySelectorAll(".circle");
  const textContainer = document.getElementById("text-container");
  const hiddenTexts = document.querySelectorAll(".hidden-text");

  circleItems.forEach((item) => {
    item.addEventListener("click", function () {
      const textId = item.getAttribute("data-text");
      const arrowIcon = item.querySelector(".arrow-icon");
      let isTextVisible = false;

      hiddenTexts.forEach((text) => {
        if (text.id === textId) {
          if (text.classList.contains("visible")) {
            text.classList.remove("visible");
            arrowIcon.classList.remove("arrow-up");
          } else {
            text.classList.add("visible");
            arrowIcon.classList.add("arrow-up");
            isTextVisible = true;
          }
        } else {
          text.classList.remove("visible");
          const otherArrowIcon = document.querySelector(
            `.circle[data-text="${text.id}"] .arrow-icon`
          );
          if (otherArrowIcon) otherArrowIcon.classList.remove("arrow-up");
        }
      });

      if (isTextVisible) {
        textContainer.classList.add("visible");
      } else {
        textContainer.classList.remove("visible");
      }
    });
  });
});
