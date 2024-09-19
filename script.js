document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  const helloText = document.getElementById('hello-text');
  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Hallo", "Namaskaram", "Vanakkam"];
  let index = 0;

  function typeWord(word, callback) {
      let i = 0;
      const interval = setInterval(() => {
          helloText.textContent += word[i];
          i++;
          if (i === word.length) {
              clearInterval(interval);
              setTimeout(callback, 300); // Reduced delay after typing the word
          }
      }, 30); // Reduced interval time for faster typing
  }

  function cycleWords() {
      if (index < words.length) {
          typeWord(words[index], () => {
              helloText.textContent = '';
              index++;
              cycleWords();
          });
      } else {
          setTimeout(() => {
              preloader.style.opacity = '0';
              setTimeout(() => {
                  preloader.style.display = 'none';
              }, 500); // Reduced fade-out duration
          }, 500); // Reduced time before fade-out
      }
  }

  cycleWords();

  // Menu toggle function
  function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
  }

  const btn = document.getElementById("modeToggle");
  const btn2 = document.getElementById("modeToggle2");
  const themeIcons = document.querySelectorAll(".icon");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
      setDarkMode();
  }

  btn.addEventListener("click", function () {
      setTheme();
  });

  btn2.addEventListener("click", function () {
      setTheme();
  });

  function setTheme() {
      let currentTheme = document.body.getAttribute("theme");

      if (currentTheme === "dark") {
          setLightMode();
      } else {
          setDarkMode();
      }
  }

  function setDarkMode() {
      document.body.setAttribute("theme", "dark");
      localStorage.setItem("theme", "dark");

      themeIcons.forEach((icon) => {
          icon.src = icon.getAttribute("src-dark");
      });
  }

  function setLightMode() {
      document.body.removeAttribute("theme");
      localStorage.setItem("theme", "light");

      themeIcons.forEach((icon) => {
          icon.src = icon.getAttribute("src-light");
      });
  }

  // Attach the toggleMenu function to the hamburger icon click event
  const icon = document.querySelector(".hamburger-icon");
  if (icon) {
      icon.addEventListener("click", toggleMenu);
  }
});
