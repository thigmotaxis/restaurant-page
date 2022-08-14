import {createElement} from "./createComponents.js";
import founder from "./images/founder.jpg";

export function renderAbout() {
  const content = document.querySelector(".content");
// REMOVE ANY EXISTING CONTENT BEFORE RENDERING TAB CONTENTS
  while(content.firstElementChild) {
    content.removeChild(content.firstElementChild)
  };

  const about = createElement("div", ["about"], content)
  const header = createElement("h3", ["about"], about)
  header.innerHTML = "Our Story"
  const pOne = createElement("p", ["paragraph"], about)
  pOne.innerHTML =
  `The story of A's AaA begins in 1982 when its founder and self-described "Master of the Seas" Mackenzie Fuller inherited an industrial grade fruit pulper
  and thirty four tons of rock salt from her strangest uncle. The following decades brought great fame and enormous success, but with material wealth came
  eccentricity, decadence, and paranoia. In 2021, following a well-publicized and widely misunderstood relationship with the fruit pulper, MOTS was forced
  to sell her forest green megayacht, "The Floating Ahuacatl" and resign in disgrace. News of MOTS' ouster triggered nationwide pandemonium as frenzied
  citizens looted farmer's markets and Breville outlets across the country.  Order was only restored after it was announced that Abe, a longtime MOTS insider
  and former Olympic child juggler had stepped in to continue The Work. With Abe's preternaturally handsome leadership to guide us, the future is bright.`
  const pTwo = createElement("p", ["paragraph"], about);
  pTwo.innerHTML = `All hail Abe! All hail The Work!`;

  const founders = new Image();
  founders.src = founder;
  about.appendChild(founders);

  const caption = createElement("p", ["caption"], about);
  caption.innerHTML = "Our formerly fearless former leader in her former element"
};


// Contact

// If you would like to be a part of A's AaA glorious rise to power, why not sign up for our newsletter?
