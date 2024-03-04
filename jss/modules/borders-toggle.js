export default class BordersToggle {
  constructor() {
    this.circles = document.querySelectorAll(".div-circles > div");
    this.selectedCircle = this.circles[0];
    this.selectedCircle.classList.remove("selected", "shrunk");
    this.circles.forEach((circle) => {
      circle.addEventListener("click", () => this.toggleBorder(circle));
    });
  }

  toggleBorder(circle) {
    this.selectedCircle.classList.remove("selected", "shrunk");
    circle.classList.add("selected", "shrunk");
    this.selectedCircle = circle;
  }
}
