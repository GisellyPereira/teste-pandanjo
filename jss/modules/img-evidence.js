import SvgHeart from './SvgHeat';

export default class ImgEvidence {
  constructor() {
    this.enlargedImageContainer = document.querySelector(".enlarged-image-container");
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

   
    this.svgHeart = new SvgHeart();
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
