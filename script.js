//homeButton
let inactivityTime = function () {
  let time;
  const homeButton = document.getElementById("homeButton");

  function resetTimer() {
    clearTimeout(time);
    homeButton.classList.add("show");
    time = setTimeout(hideButton, 5000);
  }

  function hideButton() {
    homeButton.classList.remove("show");
  }

  function checkScroll() {
    if (window.scrollY > window.innerHeight) {
      homeButton.classList.add("show");
    } else {
      homeButton.classList.remove("show");
    }
  }

  window.onload = () => {
    resetTimer();
    checkScroll();
  };

  document.onclick = resetTimer;
  document.onkeypress = resetTimer;
  document.ontouchstart = resetTimer;
  window.onscroll = () => {
    resetTimer();
    checkScroll();
  };
};

inactivityTime();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//language selection
async function loadTranslations(language) {
  const response = await fetch(`translation.json/${language}.json`);
  if (!response.ok) {
    throw new Error("Could not load translations");
  }
  return await response.json();
}

async function setLanguage(language) {
  try {
    const translations = await loadTranslations(language);

    if (translations) {
      document.querySelectorAll("[data-translate]").forEach((el) => {
        const key = el.getAttribute("data-translate");
        console.log(`Translating element with key: ${key}`);

        if (translations[key]) {
          el.textContent = translations[key];
          console.log(`Translated text: ${translations[key]}`);
        } else {
          console.warn(`No translation found for key: ${key}`);
        }
      });

      if (document.getElementById("über_mich")) {
        document.getElementById(
          "über_mich"
        ).innerHTML = `<a href="#über-mich">${translations.über_mich}</a>`;
      }
      if (document.getElementById("skills")) {
        document.getElementById(
          "skills"
        ).innerHTML = `<a href="#competence">${translations.skills}</a>`;
      }
      if (document.getElementById("kontakt")) {
        document.getElementById(
          "kontakt"
        ).innerHTML = `<a href="#contact">${translations.contact}</a>`;
      }
    }
  } catch (error) {
    console.error("Error setting language:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedLang = link.getAttribute("data-lang");
      setLanguage(selectedLang);

      const dropbtnImg = document.querySelector(".dropbtn img");
      const selectedImg = link.querySelector("img").src;
      dropbtnImg.src = selectedImg;
    });
  });

  setLanguage("de");
});

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

//gear animation

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".skills-gear",
    rotate: "360deg",
    duration: "8000",
    easing: "linear",
    loop: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".skills-gear2",
    rotate: "-360deg",
    duration: "8000",
    easing: "linear",
    loop: true,
  });
});
