// alert("he")
const toggler = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

function toggle() {
  toggler?.addEventListener("click", () => {
    primaryNavigation?.hasAttribute("data-visible")
      ? toggler?.setAttribute("aria-expanded", true)
      : toggler?.setAttribute("aria-expanded", false);
    primaryNavigation?.toggleAttribute("data-visible");
  });
}
toggle();
