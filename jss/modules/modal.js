export default class Modal {
    constructor() {
      this.modal = document.getElementById("myModal");
      this.openModalBtn = document.querySelector(".container-cart button");
      this.closeModalBtn = this.modal.querySelector(".close");
      this.confirmBtn = this.modal.querySelector(".confirm-btn");
      this.colors = this.modal.querySelectorAll(".div-circles > div");
      this.sizes = this.modal.querySelector(".sizes");
  
      this.openModalBtn.addEventListener("click", this.openModal.bind(this));
      this.closeModalBtn.addEventListener("click", this.closeModal.bind(this));
      this.confirmBtn.addEventListener("click", this.addToCart.bind(this));
      this.colors.forEach(color => {
        color.addEventListener("click", this.toggleColor.bind(this, color));
      });
  
      this.renderSizes();
    }
  
    openModal() {
      this.modal.style.display = "block";
    }
  
    closeModal() {
      this.modal.style.display = "none";
    }
  
    renderSizes() {
      ["PP", "P", "M", "G", "GG"].forEach(size => {
        const button = document.createElement("button");
        button.textContent = size;
        button.classList.add("size-button");
        button.addEventListener("click", () => {
          this.sizes.querySelectorAll(".size-button").forEach(btn => {
            btn.classList.remove("clicked");
          });
          button.classList.add("clicked");
        });
        this.sizes.appendChild(button);
      });
    }
  
    toggleColor(selectedColor) {
      this.colors.forEach(color => {
        color.classList.remove("selected");
      });
      selectedColor.classList.add("selected");
    }
  
    addToCart() {
      const selectedColor = this.modal.querySelector(".div-circles .selected");
      const selectedSize = this.modal.querySelector(".sizes .clicked");
      if (!selectedColor || !selectedSize) {
        alert("Por favor, selecione cor e tamanho antes de adicionar ao carrinho.");
      } else {
        this.closeModal();
        alert("Item adicionado ao carrinho!");
      }
    }
  }
  