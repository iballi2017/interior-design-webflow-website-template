export class App {
  toggler: any = document.querySelector(".mobile-nav-toggle");
  primaryNavigation: any = document.querySelector(".primary-navigation");

  constructor() {}

  toggle() {
    this.toggler?.addEventListener("click", () => {
      this.primaryNavigation?.hasAttribute("data-visible")
        ? this.toggler?.setAttribute("aria-expanded", true)
        : this.toggler?.setAttribute("aria-expanded", false);
      this.primaryNavigation?.toggleAttribute("data-visible");
    });
  }
}

const app = new App();
app.toggle();
