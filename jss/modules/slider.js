export default class Slider {
    constructor() {
        this.slideWrapper = document.querySelector(".slide-wrapper");
        this.isDragging = false;
        this.startX = 0;
        this.startScrollLeft = 0;
    
        this.attachEvents();
        this.loadProducts();
        this.attachHeartClickEvent();
        this.attachSlideButtonEvents(); 
      }

  attachEvents() {
    this.slideWrapper.addEventListener("mousedown", this.startDrag.bind(this));
    this.slideWrapper.addEventListener("mousemove", this.drag.bind(this));
    this.slideWrapper.addEventListener("mouseup", this.endDrag.bind(this));
    this.slideWrapper.addEventListener("mouseleave", this.endDrag.bind(this));

    this.slideWrapper.addEventListener("touchstart", this.startDrag.bind(this));
    this.slideWrapper.addEventListener("touchmove", this.drag.bind(this));
    this.slideWrapper.addEventListener("touchend", this.endDrag.bind(this));
  }

 
  loadProducts() {
    fetch("../../slideapi.json")
      .then((response) => response.json())
      .then((data) => {
        const productList = document.getElementById("product-list");

        data.forEach((product) => {
          const li = document.createElement("li");
          li.classList.add("product-item");

          const discountDiv = document.createElement("div");
          discountDiv.classList.add("discount");

          const discountP = document.createElement("p");
          discountP.textContent = product.obs;
          discountP.classList.add("discount-text");

          if (product.obs.trim().toLowerCase() === "novo") {
            discountP.classList.add("new-item");
          }

          const svgHeart = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          svgHeart.setAttribute("class", "svg-heart");
          svgHeart.setAttribute("width", "30");
          svgHeart.setAttribute("height", "30");
          svgHeart.setAttribute("viewBox", "0 0 30 30");
          svgHeart.setAttribute("fill", "none");
          const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );
          path.setAttribute(
            "d",
            "M26.25 16.1082L15 27.2502L3.75006 16.1082C3.00802 15.3861 2.42353 14.5182 2.03339 13.5592C1.64325 12.6001 1.45591 11.5707 1.48318 10.5356C1.51044 9.50062 1.75171 8.48245 2.1918 7.54525C2.63189 6.60806 3.26127 5.77214 4.04029 5.09013C4.81931 4.40812 5.73111 3.8948 6.71827 3.58249C7.70542 3.27017 8.74655 3.16564 9.77609 3.27547C10.8056 3.38529 11.8013 3.7071 12.7003 4.22062C13.5994 4.73414 14.3824 5.42826 15 6.25925C15.6203 5.43429 16.4042 4.74624 17.3027 4.23817C18.2011 3.7301 19.1947 3.41294 20.2214 3.30654C21.2481 3.20015 22.2856 3.30681 23.2692 3.61985C24.2527 3.93289 25.161 4.44557 25.9373 5.1258C26.7136 5.80604 27.3411 6.63918 27.7806 7.57309C28.2201 8.507 28.4621 9.52157 28.4914 10.5533C28.5208 11.585 28.3369 12.6117 27.9512 13.5691C27.5655 14.5265 26.9863 15.394 26.25 16.1172"
          );
          path.setAttribute("stroke", "#D2D2D2");
          path.setAttribute("stroke-width", "2");
          path.setAttribute("stroke-linecap", "round");
          path.setAttribute("stroke-linejoin", "round");
          svgHeart.appendChild(path);

          discountDiv.appendChild(discountP);
          discountDiv.appendChild(svgHeart);

          const img = document.createElement("img");
          img.src = product.image;
          img.alt = "Imagem do produto";

          const productName = document.createElement("p");
          productName.classList.add("product-name");
          productName.textContent = product.name;

          const productPrice = document.createElement("p");
          productPrice.classList.add("product-price");
          const originalPriceSpan = document.createElement("span");
          originalPriceSpan.classList.add("original-price");
          originalPriceSpan.textContent = product.original_price;
          productPrice.innerHTML = `<span class="original-price">${product.original_price}</span>${product.current_price}`;

          li.appendChild(discountDiv);
          li.appendChild(img);
          li.appendChild(productName);
          li.appendChild(productPrice);
          productList.appendChild(li);

          const overlayDiv = document.createElement("div");
          overlayDiv.classList.add("image-overlay");
          overlayDiv.style.height = `${img.offsetHeight - 78}px`;

          overlayDiv.classList.add("slide-in"); 
          const blueDiv = document.createElement("div");
          blueDiv.classList.add("blue-background");

          const button1 = document.createElement("button");
          button1.textContent = "Adicionar ao carrinho";
          button1.classList.add("custom-button-car"); 
          const button2 = document.createElement("button");
          button2.textContent = "Ver produto";
          button2.classList.add("custom-button-look");
          blueDiv.appendChild(button1);
          blueDiv.appendChild(button2);

          overlayDiv.appendChild(blueDiv);

          li.addEventListener("mouseenter", () => {
            li.appendChild(overlayDiv);
          });

          li.addEventListener("mouseleave", () => {
            overlayDiv.remove();
          });

          overlayDiv.addEventListener("mouseenter", (event) => {
            event.stopPropagation();
          });

          overlayDiv.addEventListener("mouseleave", () => {
            overlayDiv.remove();
          });
        });
      });
}




  attachHeartClickEvent() {
    this.slideWrapper.addEventListener("click", (event) => {
      const svgHeart = event.target.closest(".svg-heart");
      if (svgHeart) {
        svgHeart.classList.toggle("svg-clicked");
      }
    });
  }

  attachSlideButtonEvents() {
    const prevButton = document.querySelector(".slide-button.prev");
    const nextButton = document.querySelector(".slide-button.next");

    prevButton.addEventListener("click", () => this.scrollToPrev());
    nextButton.addEventListener("click", () => this.scrollToNext());
  }

  startDrag(event) {
    event.preventDefault();
    this.isDragging = true;
    this.startX =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    this.startScrollLeft = this.slideWrapper.scrollLeft;
  }

  drag(event) {
    if (!this.isDragging) return;
    const currentX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const distance = currentX - this.startX;
    this.slideWrapper.scrollLeft = this.startScrollLeft - distance;
  }

  endDrag() {
    this.isDragging = false;
  }

  scrollToPrev() {
    const scrollAmount = -this.slideWrapper.offsetWidth;
    this.slideWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  scrollToNext() {
    const scrollAmount = this.slideWrapper.offsetWidth;
    this.slideWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth" 
    });
  }
}