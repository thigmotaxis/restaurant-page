import {createElement} from "./createComponents.js";
import founder from "./images/founder.jpg";

export function renderAbout() {
  const content = document.querySelector(".content");
// REMOVE ANY EXISTING CONTENT BEFORE RENDERING TAB CONTENTS
  while(content.firstElementChild) {
    content.removeChild(content.firstElementChild)
  };
// RENDER TAB CONTENT
  const about = createElement("div", ["about"], content)
  const header = createElement("h3", ["aboutUs"], about)
  header.innerHTML = "Our Story"
  const pOne = createElement("p", ["paragraph"], about)
  pOne.innerHTML =
  `&#8195 &#8195 The story of AAA begins in 1982 when its founder and self-described "Master of the Seas" Mackenzie Burgess inherited an industrial grade
  fruit pulper and thirty four tons of rock salt from her strangest uncle. The following decades brought great fame and enormous success, but with material
  wealth came eccentricity, decadence, and paranoia. In 2021, following a well-publicized and widely misunderstood relationship with the fruit pulper, MOTS
  was forced to sell her forest green megayacht, "The Floating Ahuacatl" and resign in disgrace. News of MOTS' departure triggered widespread panic; frenzied
  citizens looted farmer's markets and Breville outlets across the country in an orgy of undercaffeinated violence.  Order was restored only after it was
  announced that Abe, a longtime MOTS confidant and former carnival strongman had stepped in to continue The Work. With Abe's preternaturally handsome
  leadership to guide us, the future is surely bright.
  <br></br>
  All hail Abe! All hail The Work!`

  const founders = new Image();
  founders.src = founder;
  about.appendChild(founders);

  const caption = createElement("p", ["caption"], about);
  caption.innerHTML = "Our formerly fearless former leader in her former element"
};


// Contact

// If you would like to be a part of A's AaA glorious rise to power, why not sign up for our newsletter?
