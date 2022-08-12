export function createElement(tag, classes, parent) {
  const el = document.createElement(tag)
  for(let i = 0; i < classes.length; i++) {
    el.classList.add(classes)
  }
  parent.appendChild(element)
  return element
}
