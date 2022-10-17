"use strict";var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),radioButtons=document.querySelectorAll(".toggle__wrapper input"),setDarkMode=function(){document.querySelector("body").classList="dark",localStorage.setItem("colorMode","dark")},setLightMode=function(){document.querySelector("body").classList="light",localStorage.setItem("colorMode","light")};radioButtons.forEach((function(e){e.addEventListener("click",(function(e){darkButton.checked?setDarkMode():setLightMode()}))}));var colorModeFromPreferences=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},loadAndUpdateColor=function(){"dark"==colorModeFromPreferences()?darkButton.click():lightButton.click()};loadAndUpdateColor();
//# sourceMappingURL=script.js.map