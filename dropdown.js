export const dropdown = function (btn, menu) {
  let type = btn.getAttribute("data-action") || "click"
  console.log(type)
  menu.style.display = "none"
  if (type == "click") {
    document.addEventListener("click", function (e) {
      if (e.target == btn) {
        if (menu.style.display != "block") {
          menu.style.display = "block"
        } else {
          menu.style.display = "none"
        }
      } else if (
        e.target.classList[0] !=
        document.querySelectorAll(`.${menu.className} > *`)[0].classList[0]
      ) {
        menu.style.display = "none"
      }
    })
  } else if (type == "hover") {

    if (!btn.getAttribute('tabindex')) btn.setAttribute('tabindex', 0)

    btn.addEventListener("focus", function () {
      menu.style.display = "block"
    })
    btn.addEventListener("blur", function () {
      menu.style.display = "none"
    })
    btn.addEventListener("mouseover", function () {
      menu.style.display = "block"
    })
    btn.addEventListener("mouseleave", function () {
      menu.style.display = "none"
    })
  }
}
