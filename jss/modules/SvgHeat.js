export default class SvgHeart {
    constructor() {
      this.svgHeart = document.querySelector(".svg-heart");
      if (!this.svgHeart) return;
  
      if (!this.svgHeart.hasAttribute("data-clicked")) {
        this.svgHeart.setAttribute("data-clicked", true);
        this.svgHeart.addEventListener("click", () => {
          this.toggleHeart();
        });
      }
    }
  
    toggleHeart() {
      this.svgHeart.classList.toggle("svg-clicked");
    }
  }
  