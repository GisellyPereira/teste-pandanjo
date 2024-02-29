export default class Assessment {
    constructor() {
      this.container = document.getElementById('star-container');
      this.stars = [];
      const starSize = 17;
      for (let i = 0; i < 5; i++) {
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        star.setAttribute('class', 'svg-star');
        star.setAttribute('width', starSize);
        star.setAttribute('height', starSize);
        star.setAttribute('viewBox', '0 0 16 15'); 
        star.innerHTML = `
          <path d="M7.85692 0L9.68511 5.62658H15.6012L10.815 9.10399L12.6432 14.7306L7.85692 11.2532L3.07067 14.7306L4.89886 9.10399L0.112606 5.62658H6.02874Z" fill="#9C9C9C" />
        `;
        star.addEventListener('click', () => this.toggleStar(i));
        star.addEventListener('mouseover', () => this.hoverStar(i));
        star.addEventListener('mouseout', () => this.unhoverStar(i));
        this.container.appendChild(star);
        this.stars.push(star);
      }
    }
  
    toggleStar(index) {
      this.stars.forEach((star, i) => {
        if (i <= index) {
          star.querySelector('path').setAttribute('fill', '#7A306C'); 
        } else {
          star.querySelector('path').setAttribute('fill', '#9C9C9C');
        }
      });
    }
  
    hoverStar(index) {
      this.stars.forEach((star, i) => {
        if (i <= index) {
          star.querySelector('path').setAttribute('fill', '#7A306C');
        }
      });
    }
  
    unhoverStar(index) {
      this.stars.forEach((star, i) => {
        if (i > index) {
          star.querySelector('path').setAttribute('fill', '#9C9C9C'); 
        }
      });
    }
  
    init() {
      console.log("Init function called"); 
    }
  }
  