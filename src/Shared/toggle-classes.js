export default function toggleClasses (toggleClass, classList) {
  const level = classList.indexOf(toggleClass)
  const removeClassList = classList.slice(0, level)
  removeClassList.map((className) => document.body.classList.remove(className))
  if (document.body.classList.contains(toggleClass)) {
    document.body.classList.remove(toggleClass);
  } else {
    document.body.classList.add(toggleClass);
  }
}
