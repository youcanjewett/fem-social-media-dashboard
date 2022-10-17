const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

const setDarkMode = () => {
  document.querySelector("body").classList = "dark";
  localStorage.setItem("colorMode", "dark");
};

const setLightMode = () => {
  document.querySelector("body").classList = "light";
  localStorage.setItem("colorMode", "light");
};

radioButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    darkButton.checked ? setDarkMode() : setLightMode();
  });
});

const colorModeFromPreferences = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"; // If preference is set or does not match anything (light is default)
};

const loadAndUpdateColor = () => {
  // setting the theme toggle to default preference
  const color = colorModeFromPreferences();
  color == "dark" ? darkButton.click() : lightButton.click();
};

loadAndUpdateColor();
