export default class AutomaticScroll {
    constructor() {
      this.titles = [
        "Entrega rápida",
        "Parcelamento",
        "Atendimento",
        "Compra segura"
      ];
      this.subtitles = [
        "Enviamos para todo o Brasil",
        "Divida em até 12x no cartão",
        "Rápido e fácil, via whatsapp",
        "Loja oficial, totalmente confiável"
      ];
  
      this.container = document.querySelector('.automatic-scroll');
      this.currentIndex = 0;
      this.renderDiv(this.currentIndex);
      this.interval = setInterval(() => this.showNextDiv(), 3000);
    }
  
    renderDiv(index) {
      const previousDiv = this.container.querySelector('.div-automatic');
      if (previousDiv) {
        previousDiv.style.transition = 'transform 0.6s ease-in-out';
        previousDiv.style.transform = 'translateX(-100%)'; 
        setTimeout(() => {
          previousDiv.remove();
        }, 600); 
      }
  
      const div = document.createElement('div');
      div.classList.add('div-automatic');
      div.style.transform = 'translateX(100%)';
      div.innerHTML = `
        <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5764 29.238C13.757 29.238 15.5248 27.4703 15.5248 25.2897C15.5248 23.1091 13.757 21.3413 11.5764 21.3413C9.39579 21.3413 7.62805 23.1091 7.62805 25.2897C7.62805 27.4703 9.39579 29.238 11.5764 29.238Z" stroke="#7A306C" stroke-width="1.9677" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.3182 29.238C33.4988 29.238 35.2665 27.4703 35.2665 25.2897C35.2665 23.1091 33.4988 21.3413 31.3182 21.3413C29.1376 21.3413 27.3698 23.1091 27.3698 25.2897C27.3698 27.4703 29.1376 29.238 31.3182 29.238Z" stroke="#7A306C" stroke-width="1.9677" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.62787 25.2897H3.6795V17.3929M1.70532 1.59949H23.4213V25.2897M15.5246 25.2897H27.3697M35.2664 25.2897H39.2148V13.4446M39.2148 13.4446H23.4213M39.2148 13.4446L33.2922 3.57367H23.4213" stroke="#7A306C" stroke-width="1.9677" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.67969 9.49628H11.5764" stroke="#7A306C" stroke-width="1.9677" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
          <div>
            <p class="div-automatic-title">${this.titles[index]}</p>
            <p class="div-automatic-subtitle">${this.subtitles[index]}</p>
          </div>
        `;
      this.container.appendChild(div);
      setTimeout(() => {
        div.style.transform = 'translateX(0)';
      }, 0);
    }
  
    showNextDiv() {
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      this.renderDiv(this.currentIndex);
    }
  }
