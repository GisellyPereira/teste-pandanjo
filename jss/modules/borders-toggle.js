export default class BordersToggle {
    constructor() {
      this.circles = document.querySelectorAll(".div-circles > div");
      this.selectedCircle = this.circles[0];
      this.selectedCircle.classList.add("selected", "shrunk"); // Adiciona a classe "shrunk"
      this.circles.forEach((circle) => {
        circle.addEventListener("click", () => this.toggleBorder(circle));
      });
    }
  
    toggleBorder(circle) {
      this.selectedCircle.classList.remove("selected", "shrunk");
      circle.classList.add("selected", "shrunk");
      this.selectedCircle = circle;
    }
    
    init() {
      console.log("Init function called");
    }
  }
  