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

// Funzione per impostare la lingua della pagina
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
// Gestisce il cambio della lingua tramite le bandiere nel menu a tendina
document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedLang = link.getAttribute("data-lang");
      setLanguage(selectedLang);

      // Aggiorna l'icona della bandiera nel pulsante
      const dropbtnImg = document.querySelector(".dropbtn img");
      const selectedImg = link.querySelector("img").src;
      dropbtnImg.src = selectedImg;
    });
  });

  // Imposta la lingua predefinita
  setLanguage("de"); // Cambia 'en' con la lingua predefinita desiderata
});

//Title animations
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".title");

  function startTitleAnimations() {
    titles.forEach((title, index) => {
      setTimeout(() => {
        title.classList.add("visible");
      }, index * 1100);
    });
  }

  setTimeout(() => {
    setTimeout(startTitleAnimations, 2500);
  }, 1500);
});

//photo animation
document.addEventListener("DOMContentLoaded", function () {
  const photo = document.querySelector(".photo");

  setTimeout(() => {
    photo.classList.add("visible");
  }, 1000);
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
