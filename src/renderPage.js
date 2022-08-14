import {createElement} from "./createComponents.js";
import {renderMenu} from "./renderMenu.js";
import {renderAbout} from "./renderAbout.js";

const body = document.querySelector("body");

export function renderPage() {
  const sections = ["title", "tabs", "content"];
  for (let i = 0; i < sections.length; i++) {
    const element = createElement("div", sections[i], body);
    if (i === 0) element.innerHTML = "Abe's Avocados and Affogato"
  };
// REPLACE PLACEHOLDERS IN TABFUNCTIONS ARRAY WITH RENDER FUNCTION REFERENCES
  const tabContainer = document.querySelector(".tabs");
  const tabs = ["menu", "about", "contact"];
  const tabFunctions = [renderMenu, renderAbout, "renderContact placeholder"];
  for (let i = 0; i < tabs.length; i++) {
    const element = createElement("div", "tab", tabContainer);
    element.innerHTML = tabs[i].slice(0, 1).toUpperCase() + tabs[i].slice(1);
    element.setAttribute("id", tabs[i])
    element.addEventListener("click", () => tabFunctions[i]())
  };
};
