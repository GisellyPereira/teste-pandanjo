export default class SelectSizes {
    constructor() {
  
      this.tamanhos = ["PP", "P", "M", "G", "GG"];
 
      this.sizesContainer = document.querySelector(".sizes");

      this.renderSizes();
    }
  
    renderSizes() {
      this.sizesContainer.innerHTML = "";

      this.tamanhos.forEach(tamanho => {
        const button = document.createElement("button");
        button.textContent = tamanho;
        button.classList.add("size-button");
  
   
        button.addEventListener("click", () => {
      
          document.querySelectorAll(".size-button").forEach(btn => {
            btn.classList.remove("clicked");
          });
  
          button.classList.add("clicked");
        });
        this.sizesContainer.appendChild(button);
      });
    }
  }
  