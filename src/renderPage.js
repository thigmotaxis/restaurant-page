import {createElement} from "./createComponents.js";
import Img from "./affoAvo.jpg"

const body = document.querySelector("body");

export function renderPage() {
  const sections = ["title", "tabs", "content"];
  for (let i = 0; i < sections.length; i++) {
    const element = createElement("div", sections[i], body);
    if (i === 0) element.innerHTML = "Abe's Avocados and Affogato"
  };

  const tabContainer = document.querySelector(".tabs");
  const tabs = ["menu", "about", "contact"];
  for (let i = 0; i < tabs.length; i++) {
    const element = createElement("div", tabs[i], tabContainer);
    element.innerHTML = tabs[i].slice(0, 1).toUpperCase() + tabs[i].slice(1);
    element.addEventListener("click", () => {
      console.log("this is a placeholder that will eventually swap tabs")
    })
  };

};
