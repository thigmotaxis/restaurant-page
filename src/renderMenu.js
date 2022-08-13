import {createElement} from "./createComponents.js";


export function renderMenu() {

  const content = document.querySelector(".content");
// REMOVE ANY EXISTING CONTENT BEFORE RENDERING TAB CONTENTS
  while(content.firstElementChild) {
    content.removeChild(content.firstElementChild)
  }
// RENDER TAB CONTENT
  const menuList = createElement("ul", ["menu"], content);
  const menuItems = ["hass", "reed", "pinkerton", "espresso", "bowl"];
  const menuItemDescriptions =
  [`Our hass specialty! Ok, but we actually just made the ice cream from a basic avocado like you could get at any grocery store. We poured some espresso on it for you, but you probably could have made this yourself.`,
  `Look at this round boy! He is a majestic beast, but we have tamed him and rendered him into a creamy beverage for you. Surrender to decadence!`,
  `For the discerning weirdo. Warning: ordering this long fellow may get you added to a federal watchlist.`,
  `For those who prefer a quick jolt of stimulant to the long-term cardiovascular health benefits provided by omega 3 fatty acids`,
  `A bowl of avocados. Corkage fees apply`];
  const menuPrices = [6, 8, 10, 5, 25];
  for(let i = 0; i < menuItems.length; i++) {
    const menuItem = createElement("li", ["menuItem"], menuList);
    menuItem.setAttribute("id", menuItems[i]);
    menuItem.innerHTML = `${menuPrices[i]} ${menuItems[i].slice(0, 1).toUpperCase() + menuItems[i].slice(1)}`;
    const description = createElement("p", ["description"], menuList)
    description.innerHTML = menuItemDescriptions[i]
  }

}
