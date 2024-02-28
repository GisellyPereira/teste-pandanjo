export default class ImgEvidence {
  constructor() {
    // Verifica se já existe uma instância de enlargedImageContainer
    this.enlargedImageContainer = document.querySelector(".enlarged-image-container");
    // Se não existir, cria uma nova div
    if (!this.enlargedImageContainer) {
      this.enlargedImageContainer = document.createElement("div");
      this.enlargedImageContainer.classList.add("enlarged-image-container");
      const imageSection = document.querySelector(".image-section");
      imageSection.appendChild(this.enlargedImageContainer);
    }

    this.enlargedImage = document.createElement("img");
    this.enlargedImage.classList.add("enlarged-image");
    this.enlargedImageContainer.appendChild(this.enlargedImage);
    this.imageList = document.querySelectorAll(".img-head");
    this.init();

    const firstImage = this.imageList[0];
    firstImage.classList.add("selected-image", "shrunk");
    this.showImage(firstImage);
  }

  init() {
    this.imageList.forEach((img) => {
      img.addEventListener("click", () => {
        this.showImage(img);
        this.imageList.forEach((image) => {
          image.classList.remove("selected-image", "shrunk");
        });
        img.classList.add("selected-image", "shrunk");
      });
    });

    const svgHeart = document.querySelector(".svg-heart");
    if (!svgHeart.hasAttribute("data-clicked")) {
      svgHeart.setAttribute("data-clicked", true);
      svgHeart.addEventListener("click", () => {
        svgHeart.classList.toggle("svg-clicked");
      });
    }

    this.enlargedImageContainer.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  showImage(img) {
    this.enlargedImage.src = img.src;
    this.enlargedImageContainer.style.display = "block";
  }

  hideEnlargedImage() {
    this.enlargedImageContainer.style.display = "none";
  }
}
