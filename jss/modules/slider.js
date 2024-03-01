export default class Slider {
    constructor() {
        this.slide = document.querySelector(".product-list");
        this.wrapper = document.querySelector(".slide-wrapper");

      
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    onStart(event) {
        event.preventDefault();
        console.log('mouseDown');
        this.wrapper.addEventListener('mousemove', this.onMove);
    }

    onMove(event) {
        console.log('moveu');
    }

    onEnd(event) {
        console.log('acabou');
        this.wrapper.removeEventListener('mousemove', this.onMove);
    }

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd);
    }

    init() {
        this.addSlideEvents();
        return this;
    }
}

const slider = new Slider();
slider.init();
