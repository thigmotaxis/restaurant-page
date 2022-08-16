import {createElement} from "./createComponents.js";

export function renderContact() {
  const content = document.querySelector(".content");
  // REMOVE ANY EXISTING CONTENT BEFORE RENDERING TAB CONTENTS
  while(content.firstElementChild) {
    content.removeChild(content.firstElementChild)
  };

  // RENDER TAB CONTENT
  const contact = createElement("div", ["contact"], content)
  const header = createElement("h3", ["header"], contact)
  header.innerHTML = "Contact Us"
  const contactContent = ["Phone:", "number", "Address:", "address", "Email:", "email address",
  "Want us to keep you in the avocad-know? Sign up for our newsletter!"]

  for(let i = 0; i < contactContent.length; i++) {
    const element = createElement("div", ["contactContent"], contact);
    element.innerHTML = contactContent[i];
  };

  // Elements: Contact us header h3, table element to contain the following or just a container with grid display?
  // phone number div, address div (with address linking to gmaps), email div, newsletter signup button
}
