export default class CarrosselSlide {
    constructor() {
      this.imageList = document.querySelector(".image-list");
      this.isDragging = false;
      this.prevX = 0;
      this.prevY = 0;
  
      this.imageList.addEventListener("mousedown", this.startDrag.bind(this));
      this.imageList.addEventListener("mouseup", this.endDrag.bind(this));
      this.imageList.addEventListener("mouseleave", this.endDrag.bind(this));
      this.imageList.addEventListener("mousemove", this.drag.bind(this));
      this.imageList.addEventListener("wheel", this.mouseWheel.bind(this));
    }
  
    startDrag(event) {
      this.isDragging = true;
      this.prevX = event.clientX;
      this.prevY = event.clientY;
    }
  
    endDrag() {
      this.isDragging = false;
    }
  
    drag(event) {
      if (this.isDragging) {
        const deltaX = event.clientX - this.prevX;
        const deltaY = event.clientY - this.prevY;
        this.prevX = event.clientX;
        this.prevY = event.clientY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          this.imageList.scrollLeft -= deltaX;
        } else {
          this.imageList.scrollTop -= deltaY;
        }
        
        event.preventDefault();
      }
    }
  
    mouseWheel(event) {
      if (window.innerWidth <= 700) {
        this.imageList.scrollLeft += event.deltaY;
      } else {
        this.imageList.scrollTop += event.deltaY;
      }
      event.preventDefault();
    }
  }
  